import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Bricolage_Grotesque, IBM_Plex_Sans } from 'next/font/google';
import { getContent, isLocale, locales } from '@/content/content';
import ThemeScript from '@/components/themeScript';
import '../globals.css';

const display = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-display',
    axes: ['opsz', 'wdth'],
});

const sans = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-sans',
});

export const dynamicParams = false;

export function generateStaticParams() {
    return locales.map(lang => ({ lang }));
}

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const params = await props.params;
    if (!isLocale(params.lang)) return {};
    const c = getContent(params.lang);
    return {
        metadataBase: new URL(c.siteUrl),
        title: c.meta.title,
        description: c.meta.description,
        alternates: {
            canonical: `/${params.lang}`,
            languages: { es: '/es', en: '/en' },
        },
        openGraph: {
            title: c.meta.title,
            description: c.meta.description,
            url: `/${params.lang}`,
            locale: params.lang === 'es' ? 'es_AR' : 'en_US',
            type: 'website',
        },
    };
}

export default async function RootLayout(props: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
    const params = await props.params;

    const {
        children
    } = props;

    if (!isLocale(params.lang)) notFound();

    return (
        <html lang={params.lang} className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
            <body className="font-sans antialiased">
                <ThemeScript />
                {children}
            </body>
        </html>
    );
}
