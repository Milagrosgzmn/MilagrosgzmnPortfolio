"use client"

import { FormEvent, useRef, useState } from 'react';
import type { Content } from '@/content/content';

type Labels = Content['contact']['form'];
type Status = 'idle' | 'sending' | 'success' | 'error' | 'rateLimited';

const fieldClass = 'mt-2 w-full rounded-md border border-line bg-bg px-3 py-2.5 text-ink placeholder:text-muted';

export default function ContactForm({ labels }: { labels: Labels }) {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<Status>('idle');

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!formRef.current) return;
        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Object.fromEntries(new FormData(formRef.current))),
            });
            if (res.ok) {
                formRef.current.reset();
                setStatus('success');
            } else {
                setStatus(res.status === 429 ? 'rateLimited' : 'error');
            }
        } catch {
            setStatus('error');
        }
    }

    const message = status === 'success' ? labels.success : status === 'error' ? labels.error : status === 'rateLimited' ? labels.rateLimited : '';

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="font-medium">
                {labels.name}
                <input className={fieldClass} type="text" name="from_name" autoComplete="name" maxLength={100} placeholder={labels.namePlaceholder} required />
            </label>
            <label className="font-medium">
                {labels.email}
                <input className={fieldClass} type="email" name="email_id" autoComplete="email" maxLength={254} placeholder={labels.emailPlaceholder} required />
            </label>
            <label className="font-medium">
                {labels.message}
                <textarea className={`${fieldClass} min-h-[9rem] resize-y`} name="message" maxLength={5000} placeholder={labels.messagePlaceholder} required />
            </label>
            {/* Honeypot: oculto para personas y lectores de pantalla, los bots lo completan. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                    Website
                    <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
            </div>
            <div className="flex flex-wrap items-center gap-4">
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex h-11 items-center rounded-full bg-accent px-6 font-medium text-accent-ink hover:opacity-90 disabled:opacity-60"
                >
                    {status === 'sending' ? labels.sending : labels.submit}
                </button>
                <p role="status" aria-live="polite" className={`text-sm ${status === 'error' || status === 'rateLimited' ? 'text-red-700 dark:text-red-400' : 'text-muted'}`}>
                    {message}
                </p>
            </div>
        </form>
    );
}
