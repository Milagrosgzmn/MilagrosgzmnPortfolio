import type { ReactNode } from 'react';
import { getContent, isLocale, type Content, type Locale, type Project } from '@/content/content';
import Header from '@/components/header';
import ContactForm from '@/components/contactForm';
import { FleetScene, VeccinoScene } from '@/components/mockups';

const linkClass = 'font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent';

/** Proyecto destacado: mockup de dispositivos a un lado y el texto al otro. */
function FeaturedProject({ project, scene, collapsible = false, reverse = false, c }: {
    project: Project; scene: ReactNode; collapsible?: boolean; reverse?: boolean; c: Content;
}) {
    const highlights = (
        <>
            <h4 className="font-display text-lg font-semibold">{c.ui.whatIDid}</h4>
            <ul className="mt-3 flex flex-col gap-2 pl-5 marker:text-accent list-disc">
                {project.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
        </>
    );

    return (
        <article className="grid items-center gap-10 border-t border-line py-14 lg:grid-cols-2 lg:gap-16">
            <div className={reverse ? 'lg:order-2' : ''}>{scene}</div>
            <div>
                <p className="text-sm text-muted">{project.period}</p>
                <h3 className="mt-2 font-display text-4xl font-bold tracking-tight">{project.client}</h3>
                <p className="mt-2 text-lg text-muted">{project.title}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                        <li key={tech} className="rounded border border-line bg-surface px-2.5 py-0.5 text-sm text-muted">{tech}</li>
                    ))}
                </ul>
                <p className="mt-6 max-w-prose text-lg">{project.summary}</p>
                {collapsible ? (
                    <details className="group mt-6 max-w-prose">
                        <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-medium text-accent [&::-webkit-details-marker]:hidden">
                            <span className="group-open:hidden">{c.ui.showDetails}</span>
                            <span className="hidden group-open:inline">{c.ui.hideDetails}</span>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-open:rotate-180">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </summary>
                        <div className="mt-4">{highlights}</div>
                    </details>
                ) : (
                    <div className="mt-6 max-w-prose">{highlights}</div>
                )}
            </div>
        </article>
    );
}

/** Otro proyecto: tarjeta con lo que dice el CV. */
function ProjectTile({ project }: { project: Project }) {
    return (
        <article className="tile flex flex-col">
            <p className="text-sm text-muted">{project.period}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                {project.client}<span className="font-normal text-muted">, {project.title}</span>
            </h3>
            <p className="mt-3">{project.summary}</p>
            <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 marker:text-accent">
                {project.highlights.map(h => <li key={h}>{h}</li>)}
            </ul>
            <p className="mt-auto pt-5 text-sm text-muted">{project.stack.join(', ')}</p>
        </article>
    );
}

export default async function Home(props: { params: Promise<{ lang: string }> }) {
    const params = await props.params;
    if (!isLocale(params.lang)) return null;
    const locale: Locale = params.lang;
    const c = getContent(locale);
    const other = locale === 'es' ? 'en' : 'es';
    const byClient = (name: string) => c.projects.find(p => p.client === name)!;

    const veccino = byClient('Veccino');
    const first = byClient('First SRL');
    const others = ['CDV', 'BYMA'].map(byClient);
    const footerLinks = [
        { label: 'LinkedIn', href: c.links.linkedin },
        { label: 'GitHub', href: c.links.github },
        { label: 'WhatsApp', href: c.links.whatsapp },
    ];

    return (
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Header c={c} locale={locale} altHref={`/${other}`} />

            <main>
                {/* 1. Hero editorial */}
                <section className="pb-20 pt-10 lg:pb-28 lg:pt-20">
                    <p className="font-display text-2xl font-medium text-accent">{c.role}</p>
                    <h1 className="mt-4 font-display text-6xl font-bold leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">{c.name}</h1>
                    <p className="mt-8 max-w-2xl text-xl sm:text-2xl">{c.tagline}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                        <a
                            href={c.links.cv}
                            download
                            className="inline-flex h-11 items-center rounded-full bg-accent px-6 font-medium text-accent-ink hover:opacity-90"
                        >
                            {c.ui.downloadCv}
                        </a>
                        <a className={linkClass} href={c.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                        <a className={linkClass} href={c.links.github} target="_blank" rel="noreferrer">GitHub</a>
                        <span className="text-muted">{c.location}</span>
                    </div>
                </section>

                {/* 2. Sobre mí, tecnologías y formación (bento) */}
                <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div id="about" className="tile scroll-mt-6 md:col-span-2 lg:row-span-2">
                        <h2 className="tile-title">{c.ui.nav.about}</h2>
                        <div className="mt-3 flex flex-col gap-3">
                            {c.about.paragraphs.map(p => <p key={p}>{p}</p>)}
                        </div>
                    </div>
                    {c.about.skills.map(group => (
                        <div key={group.category} className="tile !p-5">
                            <h3 className="tile-title">{group.category}</h3>
                            <p className="mt-2 text-muted">{group.items.join(', ')}</p>
                        </div>
                    ))}
                    <div id="education" className="tile scroll-mt-6 md:col-span-2">
                        <h2 className="tile-title">{c.ui.nav.education}</h2>
                        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                            {c.education.items.map(item => (
                                <li key={item.title}>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-sm text-muted">{item.place}, {item.period}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="tile md:col-span-2 lg:col-span-2">
                        <h2 className="tile-title">{c.education.languagesTitle}</h2>
                        <ul className="mt-3 text-muted">
                            {c.education.languages.map(lang => <li key={lang}>{lang}</li>)}
                        </ul>
                    </div>
                </section>

                {/* 3. Proyectos destacados */}
                <section id="experience" className="mt-20 scroll-mt-6">
                    <h2 className="font-display text-3xl font-bold tracking-tight">{c.ui.featured}</h2>
                    <div className="mt-8">
                        <FeaturedProject
                            project={veccino}
                            collapsible
                            c={c}
                            scene={veccino.image && <VeccinoScene image={veccino.image} />}
                        />
                        <FeaturedProject project={first} reverse c={c} scene={<FleetScene reverse />} />
                    </div>
                </section>

                {/* 4. Otros proyectos */}
                <section className="border-t border-line pt-12">
                    <h2 className="font-display text-3xl font-bold tracking-tight">{c.ui.otherProjects}</h2>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                        {others.map(project => <ProjectTile key={project.client} project={project} />)}
                    </div>
                </section>
            </main>

            {/* 5. Contacto */}
            <footer id="contact" className="mt-20 scroll-mt-6 border-t border-line pt-12">
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="font-display text-3xl font-bold tracking-tight">{c.ui.nav.contact}</h2>
                        <p className="mt-4 max-w-prose text-lg">{c.contact.intro}</p>
                        <ul className="mt-6 flex flex-col gap-2">
                            {footerLinks.map(l => (
                                <li key={l.label}>
                                    <a className={linkClass} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                                </li>
                            ))}
                            <li><a className={linkClass} href={c.links.cv} download>{c.ui.downloadCv}</a></li>
                        </ul>
                    </div>
                    <ContactForm labels={c.contact.form} />
                </div>
                <p className="mt-16 border-t border-line py-6 text-sm text-muted">
                    © {new Date().getFullYear()} {c.name}. {c.ui.footer}
                </p>
            </footer>
        </div>
    );
}
