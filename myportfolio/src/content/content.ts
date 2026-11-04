export const locales = ['es', 'en'] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

export type Project = {
    client: string;
    title: string;
    period: string;
    summary: string;
    highlights: string[];
    stack: string[];
    image?: { src: string; width: number; height: number; alt: string };
};

const shared = {
    name: 'Milagros Guzmán',
    role: 'Full Stack Developer',
    links: {
        linkedin: 'https://www.linkedin.com/in/milagros-guzman-abarca-369bbb250/',
        github: 'https://github.com/Milagrosgzmn',
        whatsapp: 'https://wa.link/8qm2bd',
        cv: '/assets/milagros-guzman-cv.pdf',
    },
    siteUrl: 'https://milagrosgzmn-portfolio.vercel.app',
};

const stacks = {
    veccino: ['TypeScript', 'Node.js', 'PostgreSQL', 'Next.js', 'React', 'React Native', 'Expo', 'Tailwind', 'AWS', 'JWT'],
    firstSrl: ['TypeScript', 'PostgreSQL', 'Next.js', 'React', 'React Native', 'Expo', 'Tailwind'],
    byma: ['Java', 'Quarkus', 'Oracle DB'],
    cdv: ['PHP', 'Laravel', 'Tailwind'],
};

const es = {
    ...shared,
    meta: {
        title: 'Milagros Guzmán | Full Stack Developer',
        description: 'Full Stack Developer en la Ciudad Autónoma de Buenos Aires.',
    },
    tagline: 'Tengo experiencia en distintas etapas del desarrollo de software, desde la implementación de backends y aplicaciones móviles hasta la integración de sistemas externos',
    location: 'Ciudad Autónoma de Buenos Aires, Argentina',
    ui: {
        nav: { about: 'Sobre mí', experience: 'Experiencia', education: 'Formación', contact: 'Contacto' },
        navLabel: 'Secciones',
        downloadCv: 'Descargar CV',
        switchLang: 'English',
        switchLangLabel: 'Ver el sitio en inglés',
        themeToDark: 'Activar modo oscuro',
        themeToLight: 'Activar modo claro',
        featured: 'Proyectos destacados',
        whatIDid: 'Qué hice',
        showDetails: 'Ver detalles',
        hideDetails: 'Ocultar detalles',
        otherProjects: 'Otros proyectos',
        footer: 'Hecho con Next.js y Tailwind.',
    },
    about: {
        paragraphs: [
            'Durante mi paso por Pigmalión Software, una consultora de desarrollo, participé en proyectos para distintos clientes: un marketplace con backend y aplicación móvil, una migración de datos para BYMA y una plataforma de seguimiento de flota en tiempo real.',
            'Me interesa resolver problemas concretos, entender cómo funcionan los sistemas y seguir profundizando en desarrollo backend, arquitectura y diseño de software.',
        ],
        skills: [
            { category: 'Backend', items: ['TypeScript', 'Node.js', 'Java', 'Quarkus', 'JWT', 'PHP', 'Laravel', 'Go'] },
            { category: 'Frontend y mobile', items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind'] },
            { category: 'Bases de datos', items: ['PostgreSQL', 'Oracle DB', 'MySQL', 'SQL'] },
            { category: 'Infraestructura', items: ['Git', 'Docker'] },
        ],
    },
    projects: [
        {
            client: 'Veccino',
            title: 'Marketplace',
            period: 'Mayo – Septiembre 2026',
            summary: 'Marketplace para comercios locales, con app mobile para compradores y dashboard web para administrar cada comercio.',
            highlights: [
                'Implementé el sistema de notificaciones Web Push.',
                'Integré Google Maps/Places API mediante un proxy en el backend protegido con JWT.',
                'Implementé una arquitectura en capas para separar la lógica de negocio, las validaciones y la autenticación.',
                'Configuré el entorno de pruebas en AWS como preparación para el despliegue productivo.',
            ],
            stack: stacks.veccino,
            image: { src: '/assets/veccino-home.png', width: 270, height: 513, alt: 'Pantalla de inicio de la app de Veccino: buscador, banner de bienvenida y categorías de productos.' },
        },
        {
            client: 'BYMA',
            title: 'Migración de datos',
            period: 'Marzo – Mayo 2026',
            summary: 'Migración de datos del sistema de BYMA al nuevo BYMA Clearing, cuidando la integridad de los datos en un entorno de alta exigencia.',
            highlights: [
    'Analicé los modelos de datos de origen junto con distintos equipos de negocio.',
    'Verifiqué la correspondencia entre las reglas de transformación y los requerimientos de negocio.',
],
            stack: stacks.byma,
        },
        {
            client: 'First SRL',
            title: 'Sistema de transporte privado',
            period: 'Septiembre 2025 – Enero 2026',
            summary: 'Sistema de seguimiento de flota en tiempo real, con un portal administrativo web y una aplicación móvil. Desarrollo en equipo.',
            highlights: [
                'Participé en el desarrollo de la aplicación móvil, incluyendo el seguimiento de vehículos en vivo y el historial de viajes.',
                'Trabajé en la sincronización de datos entre el backend y las aplicaciones web y móvil.',
                'Colaboré en el desarrollo del backend y del portal administrativo.',
            ],
            stack: stacks.firstSrl,
        },
        {
            client: 'CDV',
            title: 'Gestión de capacitaciones',
            period: 'Octubre 2024 – Mayo 2025',
            summary: 'Módulo para gestionar las capacitaciones de la empresa, con vistas para empleados y administradores.',
            highlights: [
                'Vista de empleados con su progreso de aprendizaje y cumplimiento.',
                'Dashboard para administradores con gráficos del progreso general de la empresa.',
                'Gestión de asistencia a capacitaciones presenciales.',
            ],
            stack: stacks.cdv,
        },
    ] as Project[],
    education: {
        items: [
            { title: 'Ingeniería Informática', place: 'Universidad de Palermo', period: '2024 – actualidad' },
            { title: 'Full Stack Web Developer', place: 'Henry Bootcamp', period: '2023' },
        ],
        languagesTitle: 'Idiomas',
        languages: ['Español nativo', 'Inglés B2, intermedio avanzado'],
    },
    contact: {
        intro: '¿Tenés un proyecto o una búsqueda abierta? Escribime y te respondo a la brevedad.',
        alt: 'También podés encontrarme en',
        form: {
            name: 'Nombre',
            namePlaceholder: 'Tu nombre',
            email: 'Email',
            emailPlaceholder: 'tu@email.com',
            message: 'Mensaje',
            messagePlaceholder: 'Contame en qué puedo ayudarte',
            submit: 'Enviar mensaje',
            sending: 'Enviando…',
            success: 'Mensaje enviado. Te respondo pronto.',
            error: 'No se pudo enviar el mensaje. Intentá de nuevo o escribime por LinkedIn.',
            rateLimited: 'Enviaste varios mensajes seguidos. Esperá unos minutos e intentá de nuevo.',
        },
    },
};

export type Content = typeof es;

const en: Content = {
    ...shared,
    meta: {
        title: 'Milagros Guzmán | Full Stack Developer',
        description: 'Full Stack Developer in Ciudad Autónoma de Buenos Aires. Layered backends, mobile apps and real-time integrations.',
    },
    tagline: 'I have experience across different stages of software development, from implementing backends and mobile applications to integrating external systems.',
    location: 'Ciudad Autónoma de Buenos Aires, Argentina',
    ui: {
        nav: { about: 'About', experience: 'Experience', education: 'Education', contact: 'Contact' },
        navLabel: 'Sections',
        downloadCv: 'Download CV',
        switchLang: 'Español',
        switchLangLabel: 'View the site in Spanish',
        themeToDark: 'Switch to dark mode',
        themeToLight: 'Switch to light mode',
        featured: 'Featured projects',
        whatIDid: 'What I did',
        showDetails: 'View details',
        hideDetails: 'Hide details',
        otherProjects: 'Other projects',
        footer: 'Built with Next.js and Tailwind.',
    },
    about: {
        paragraphs: [
    'During my time at Pigmalión Software, a software development consultancy, I contributed to projects for different clients: a marketplace with a backend and mobile app, a data migration for BYMA, and a real-time fleet tracking platform.',
    'I enjoy solving practical problems, understanding how systems work, and continuing to develop my skills in backend engineering, software architecture and system design.',
],
        skills: [
            { category: 'Backend', items: ['TypeScript', 'Node.js', 'Java', 'Quarkus', 'JWT', 'PHP', 'Laravel', 'Go'] },
            { category: 'Frontend and mobile', items: ['React', 'Next.js', 'React Native', 'Expo', 'Tailwind'] },
            { category: 'Databases', items: ['PostgreSQL', 'Oracle DB', 'MySQL', 'SQL'] },
            { category: 'Infrastructure', items: ['Git',  'Docker'] },
        ],
    },
    projects: [
        {
            client: 'Veccino',
            title: 'Marketplace',
            period: 'May – September 2026',
            summary: 'Marketplace for local shops, with a mobile app for buyers and a web dashboard for managing each shop.',
highlights: [
    'Implemented the Web Push notification system.',
    'Integrated the Google Maps/Places API through a JWT-protected backend proxy.',
    'Implemented a layered backend architecture separating business logic, validation and authentication.',
    'Set up the staging environment on AWS ahead of the production deployment.',
],
            stack: stacks.veccino,
            image: { src: '/assets/veccino-home.png', width: 270, height: 513, alt: 'Home screen of the Veccino app: search bar, welcome banner and product categories.' },
        },
        {
            client: 'BYMA',
            title: 'Data migration',
            period: 'March – May 2026',
            summary: 'Data migration from BYMA\'s system to the new BYMA Clearing, protecting data integrity in a demanding environment.',
           highlights: [
    'Analyzed source data models alongside different business teams.',
    'Checked that transformation rules were consistent with the defined business requirements.',
],
            stack: stacks.byma,
        },
        {
            client: 'First SRL',
            title: 'Private transport system',
            period: 'September 2025 – January 2026',
            summary: 'Real-time fleet tracking system with an administrative web portal and a mobile app. Developed as part of a team.',
highlights: [
    'Contributed to the mobile app, including live vehicle tracking and trip history.',
    'Worked on data synchronization between the backend and the web and mobile applications.',
    'Contributed to the backend and administrative portal.',
],
            stack: stacks.firstSrl,
        },
        {
            client: 'CDV',
            title: 'Training management',
            period: 'October 2024 – May 2025',
            summary: 'Module to manage company training, with views for employees and administrators.',
            highlights: [
                'Employee view with their learning progress and compliance.',
                'Admin dashboard with charts of the company\'s overall progress.',
                'Attendance tracking for in-person training.',
            ],
            stack: stacks.cdv,
        },
    ],
    education: {
        items: [
            { title: 'Computer Engineering', place: 'Universidad de Palermo', period: '2024 – present' },
            { title: 'Full Stack Web Developer', place: 'Henry Bootcamp', period: '2023' },
        ],
        languagesTitle: 'Languages',
        languages: ['Spanish, native', 'English, B2 upper intermediate'],
    },
    contact: {
        intro: 'Have a project or an open role? Write to me and I\'ll get back to you soon.',
        alt: 'You can also find me on',
        form: {
            name: 'Name',
            namePlaceholder: 'Your name',
            email: 'Email',
            emailPlaceholder: 'you@email.com',
            message: 'Message',
            messagePlaceholder: 'Tell me how I can help',
            submit: 'Send message',
            sending: 'Sending…',
            success: 'Message sent. I\'ll get back to you soon.',
            error: 'The message could not be sent. Try again or reach me on LinkedIn.',
            rateLimited: 'You sent several messages in a row. Please wait a few minutes and try again.',
        },
    },
};

const dictionaries: Record<Locale, Content> = { es, en };

export function getContent(locale: Locale): Content {
    return dictionaries[locale];
}

