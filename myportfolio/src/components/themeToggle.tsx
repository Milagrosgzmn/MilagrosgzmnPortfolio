"use client"

import { useSyncExternalStore } from 'react';

type Props = { toDark: string; toLight: string };

/** Script que corre antes del primer pintado para evitar el parpadeo de tema. */
export const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.classList.toggle('dark',t==='dark')}catch(e){}})()`;

/** El tema vive en la clase `dark` de <html>; React se suscribe a ese cambio. */
function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
}

export default function ThemeToggle({ toDark, toLight }: Props) {
    const dark = useSyncExternalStore(
        subscribe,
        () => document.documentElement.classList.contains('dark'),
        () => false,
    );

    function toggle() {
        const next = !dark;
        const apply = () => document.documentElement.classList.toggle('dark', next);
        try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch {}

        // Un único fundido de toda la página: todos los elementos cambian a la vez.
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const doc = document as Document & { startViewTransition?: (cb: () => void) => unknown };
        if (doc.startViewTransition && !reduceMotion) {
            doc.startViewTransition(apply);
        } else {
            apply();
        }
    }

    const label = dark ? toLight : toDark;

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label={label}
            title={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-accent hover:text-accent"
        >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {dark ? (
                    <>
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </>
                ) : (
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                )}
            </svg>
        </button>
    );
}
