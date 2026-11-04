import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const SERVICE_ID = 'service_forCv';
const TEMPLATE_ID = 'template_2qcy0qc';
const EMAILJS_URL = 'https://api.emailjs.com/api/v1.0/email/send';

const MAX_BODY_BYTES = 20_000;
const LIMITS = { name: 100, email: 254, message: 5000 } as const;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Límite de envíos por IP. Vive en la memoria de cada instancia del servidor, así que
// frena el abuso básico pero no es un contador global entre instancias.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (hits.get(ip) ?? []).filter(t => now - t < WINDOW_MS);
    const limited = recent.length >= MAX_PER_WINDOW;
    if (!limited) recent.push(now);
    hits.set(ip, recent);

    if (hits.size > 1000) {
        hits.forEach((times, key) => {
            if (times.every(t => now - t >= WINDOW_MS)) hits.delete(key);
        });
    }
    return limited;
}

function field(value: unknown, max: number): string | null {
    if (typeof value !== 'string') return null;
    const trimmed = value.trim();
    return trimmed.length > 0 && trimmed.length <= max ? trimmed : null;
}

const json = (body: Record<string, unknown>, status: number) => NextResponse.json(body, { status });

export async function POST(req: NextRequest) {
    const declaredSize = Number(req.headers.get('content-length') ?? 0);
    if (declaredSize > MAX_BODY_BYTES) return json({ error: 'too_large' }, 413);

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 'unknown';
    if (isRateLimited(ip)) return json({ error: 'rate_limited' }, 429);

    let data: Record<string, unknown>;
    try {
        const parsed = await req.json();
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) throw new Error();
        data = parsed as Record<string, unknown>;
    } catch {
        return json({ error: 'invalid_body' }, 400);
    }

    // Honeypot: un campo oculto que una persona nunca completa. Respondemos como si
    // hubiera funcionado para que el bot no sepa que lo detectamos.
    if (typeof data.website === 'string' && data.website.trim() !== '') {
        return json({ ok: true }, 200);
    }

    const name = field(data.from_name, LIMITS.name);
    const email = field(data.email_id, LIMITS.email);
    const message = field(data.message, LIMITS.message);
    if (!name || !email || !message) return json({ error: 'invalid_fields' }, 400);
    if (/[\r\n]/.test(name) || /[\r\n]/.test(email) || !EMAIL_PATTERN.test(email)) {
        return json({ error: 'invalid_fields' }, 400);
    }

    const publicKey = process.env.NEXT_PUBLIC_KEY;
    if (!publicKey) {
        console.error('contact: falta NEXT_PUBLIC_KEY');
        return json({ error: 'not_configured' }, 500);
    }

    try {
        const res = await fetch(EMAILJS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: SERVICE_ID,
                template_id: TEMPLATE_ID,
                user_id: publicKey,
                accessToken: process.env.EMAILJS_PRIVATE_KEY,
                template_params: { from_name: name, email_id: email, message },
            }),
            signal: AbortSignal.timeout(10_000),
        });
        if (!res.ok) {
            console.error('contact: EmailJS respondió', res.status, await res.text());
            return json({ error: 'send_failed' }, 502);
        }
    } catch (err) {
        console.error('contact: no se pudo llamar a EmailJS', err instanceof Error ? err.message : err);
        return json({ error: 'send_failed' }, 502);
    }

    return json({ ok: true }, 200);
}
