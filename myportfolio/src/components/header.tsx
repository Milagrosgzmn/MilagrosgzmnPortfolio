import type { Content, Locale } from '@/content/content';
import ThemeToggle from './themeToggle';

type Props = {
    c: Content;
    locale: Locale;
    /** Ruta equivalente en el otro idioma. */
    altHref: string;
};

export default function Header({ c, locale, altHref }: Props) {
    const otherLocale = locale === 'es' ? 'en' : 'es';
    return (
        <header className="flex items-center justify-between gap-4 py-6">
            <span />
            <div className="flex items-center gap-3">
                {/* <a> en vez de <Link>: fuerza una carga completa para que el script de tema vuelva a correr */}
                <a
                    href={altHref}
                    hrefLang={otherLocale}
                    aria-label={c.ui.switchLangLabel}
                    className="inline-flex h-10 items-center rounded-full border border-line px-4 font-medium hover:border-accent hover:text-accent"
                >
                    {c.ui.switchLang}
                </a>
                <ThemeToggle toDark={c.ui.themeToDark} toLight={c.ui.themeToLight} />
            </div>
        </header>
    );
}
