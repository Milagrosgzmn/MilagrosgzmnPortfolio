import { NextRequest, NextResponse } from 'next/server';

const locales = ['es', 'en'];
const defaultLocale = 'es';

/** Rutas del portfolio anterior, redirigidas a su sección en la página única. */
const legacySections: Record<string, string> = {
    '/about': 'about',
    '/experience': 'experience',
    '/projects': 'experience',
    '/contact': 'contact',
};

function preferredLocale(req: NextRequest): string {
    const header = req.headers.get('accept-language') ?? '';
    const ranked = header
        .split(',')
        .map(part => {
            const [tag, q] = part.trim().split(';q=');
            return { lang: tag.toLowerCase().split('-')[0], q: q ? parseFloat(q) : 1 };
        })
        .sort((a, b) => b.q - a.q);
    return ranked.find(r => locales.includes(r.lang))?.lang ?? defaultLocale;
}

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    if (locales.some(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return;

    const url = req.nextUrl.clone();
    const locale = preferredLocale(req);
    const legacy = legacySections[pathname];
    if (legacy) {
        url.pathname = `/${locale}`;
        url.hash = legacy;
    } else {
        url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
    }
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!api|_next|assets|favicon.ico|.*\\..*).*)'],
};
