export type Language = "es" | "en";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  gitHub: string;
  youTube: string;
  className: string;
  demo?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

export type Translations = {
  hero: {
    subtitle: string;
    paragraphPrefix: string;
    highlight1: string;
    paragraphMiddle: string;
    highlight2: string;
    paragraphSuffix: string;
    btnProjects: string;
    btnContact: string;
  };
  sections: {
    projectsTitle: string;
    experienceTitle: string;
    skillsTitle: string;
    skillsSubtitle: string;
    contactTitle: string;
    contactLabel: string;
    contactHeading: string;
    contactIntro: string;
    contactHighlight: string;
    contactOutro: string;
    downloadCV: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendMessage: string;
    sending: string;
    messageSent: string;
    errorConnection: string;
    emailFieldLabel: string;
    linkedIn: string;
    gitHub: string;
    footerAvailable: string;
    footerMadeWith: string;
    footerTech: string;
  };
  languageSwitcher: {
    ariaLabel: string;
  };
  validation: {
    nameMin: string;
    nameMax: string;
    namePattern: string;
    emailInvalid: string;
    messageMin: string;
    messageMax: string;
  };
  notFound: {
    description: string;
    backButton: string;
  };
};

const translations: Record<Language, Translations> = {
  es: {
    hero: {
      subtitle: "Problem Solver | Full Stack Developer",
      paragraphPrefix: "Más de 4 años optimizando procesos de",
      highlight1: "administración y logística",
      paragraphMiddle:
        ", ahora aplicados al desarrollo de software. Experto en transformar necesidades de negocio en",
      highlight2: "soluciones técnicas robustas",
      paragraphSuffix:
        " con un enfoque absoluto en la experiencia del cliente.",
      btnProjects: "Ver Proyectos",
      btnContact: "Hablemos",
    },
    sections: {
      projectsTitle: "Proyectos /01",
      experienceTitle: "Trayectoria Profesional /02",
      skillsTitle: "Tech Stack",
      skillsSubtitle: "Herramientas y Tecnologías /03",
      contactTitle: "Hablemos",
      contactLabel: "Contacto / 04",
      contactHeading: "¿Tenés un proyecto en mente?",
      contactIntro:
        "Disponible para nuevos desafíos. Si buscás un desarrollador que priorice la",
      contactHighlight: "performance y la experiencia de usuario",
      contactOutro: ", hablemos.",
      downloadCV: "Descargar CV",
      formName: "Nombre",
      formEmail: "Email",
      formMessage: "Mensaje",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "email@ejemplo.com",
      messagePlaceholder: "¿En qué puedo ayudarte?",
      sendMessage: "Enviar Mensaje",
      sending: "Enviando...",
      messageSent: "¡Mensaje Enviado!",
      errorConnection: "Error de conexión. Reintenta.",
      emailFieldLabel: "Email",
      linkedIn: "LinkedIn",
      gitHub: "GitHub",
      footerAvailable: "Disponible para nuevos proyectos",
      footerMadeWith: "Diseñado y desarrollado con",
      footerTech: "Next.js • Tailwind • Framer Motion",
    },
    languageSwitcher: {
      ariaLabel: "Cambiar idioma",
    },
    validation: {
      nameMin: "El nombre debe tener al menos 2 caracteres",
      nameMax: "El nombre es demasiado largo",
      namePattern: "El nombre solo puede contener letras y espacios",
      emailInvalid: "Por favor, ingresá un email válido",
      messageMin: "El mensaje debe ser más descriptivo (mín. 10 caracteres)",
      messageMax: "El mensaje no puede exceder los 1000 caracteres",
    },
    notFound: {
      description: "Eeh, a dónde ibas jejeje 👀",
      backButton: "Volver al inicio",
    },
  },
  en: {
    hero: {
      subtitle: "Problem Solver | Full Stack Developer",
      paragraphPrefix: "More than 4 years optimizing",
      highlight1: "administration and logistics",
      paragraphMiddle:
        ", now applied to software development. Expert in turning business needs into",
      highlight2: "robust technical solutions",
      paragraphSuffix: " with a strong focus on customer experience.",
      btnProjects: "View Projects",
      btnContact: "Let’s Talk",
    },
    sections: {
      projectsTitle: "Projects /01",
      experienceTitle: "Professional Experience /02",
      skillsTitle: "Tech Stack",
      skillsSubtitle: "Tools & Technologies /03",
      contactTitle: "Let’s Talk",
      contactLabel: "Contact / 04",
      contactHeading: "Have a project in mind?",
      contactIntro:
        "Available for new challenges. If you’re looking for a developer who prioritizes",
      contactHighlight: "performance and user experience",
      contactOutro: ", let’s connect.",
      downloadCV: "Download CV",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "email@example.com",
      messagePlaceholder: "How can I help you?",
      sendMessage: "Send Message",
      sending: "Sending...",
      messageSent: "Message Sent!",
      errorConnection: "Connection error. Please try again.",
      emailFieldLabel: "Email",
      linkedIn: "LinkedIn",
      gitHub: "GitHub",
      footerAvailable: "Available for new projects",
      footerMadeWith: "Designed and built with",
      footerTech: "Next.js • Tailwind • Framer Motion",
    },
    languageSwitcher: {
      ariaLabel: "Switch language",
    },
    validation: {
      nameMin: "Name must be at least 2 characters",
      nameMax: "Name is too long",
      namePattern: "Name can only contain letters and spaces",
      emailInvalid: "Please enter a valid email",
      messageMin: "Message must be more descriptive (min. 10 characters)",
      messageMax: "Message cannot exceed 1000 characters",
    },
    notFound: {
      description: "Oops, where were you going hehe 👀",
      backButton: "Back to home",
    },
  },
};

export const projectsData: Record<Language, Project[]> = {
  es: [
    {
      title: "Habitzz",
      description:
        "Esta plataforma full-stack transforma la gestión de hábitos y metas semanales en una experiencia fluida e intuitiva gracias a su UI reactiva. Sin embargo, el verdadero valor está bajo el capó: cuenta con una arquitectura robusta apoyada en Next.js, Express y MongoDB, con un estado de servidor optimizado y un motor de cálculo de fechas blindado contra inconsistencias de zonas horarias (Timezone-proof). Un proyecto diseñado no solo para verse bien, sino para funcionar sin fallas en entornos de producción.",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "TanStack Query",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      gitHub: "https://github.com/AdrianOrtizz/habits-saas",
      youTube: "https://www.youtube.com/watch?v=OGnYNRL4dvk",
      demo: "https://habitzz-track.vercel.app/",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "TizzTube Downloader",
      description:
        "Aplicación de procesamiento de medios audiovisuales que permite la extracción y descarga de flujos de video/audio en tiempo real. Implementé un sistema de historial basado en persistencia en el lado del cliente (LocalStorage) y optimicé el renderizado de reproductores dinámicos mediante el consumo de APIs de terceros.",
      tags: ["React", "Next.js", "Redux Toolkit", "Tailwind"],
      youTube: "https://www.youtube.com/watch?v=wh5SKy4wWaU",
      gitHub: "https://github.com/AdrianOrtizz/TizzTube-downloader",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Pokedex",
      description:
        "Aplicación de visualización de datos de alto rendimiento que consume la PokeAPI. Implementé un motor de búsqueda y filtrado algorítmico, optimizando el renderizado de estados complejos para ofrecer una navegación fluida entre perfiles detallados de personajes.",
      tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize"],
      youTube: "https://www.youtube.com/watch?v=T-SNhqNqT18",
      gitHub: "https://github.com/AdrianOrtizz/PI-Pokemon-main",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "UUID Store",
      description:
        "Plataforma E-commerce de alto rendimiento. Lideré el desarrollo del Frontend, implementando metodologías ágiles para la delegación de tareas y el cumplimiento de entregables bajo plazos estrictos. Diseñé la experiencia de usuario (UX/UI) íntegramente en Figma y sistematicé la integración de autenticación OAuth (Google) y pasarelas de pago (Mercado Pago), garantizando un flujo de checkout seguro y eficiente.",
      tags: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Tailwind",
        "Mercado Pago",
      ],
      gitHub: "https://github.com/Agus-Albarracin/uuid-store",
      youTube: "https://www.youtube.com/watch?v=wOM3vOVKjNI",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Rick And Morty App",
      description:
        "Aplicación orientada a la gestión de favoritos y perfiles de usuario. Se destaca por la implementación de una arquitectura de estado global para el manejo de colecciones dinámicas, permitiendo filtrados complejos sobre estructuras de datos anidadas y un sistema de acceso controlado.",
      tags: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Tailwind",
      ],
      youTube: "https://www.youtube.com/watch?v=AZ5fdddHnS4",
      gitHub: "https://github.com/AdrianOrtizz/PI_Rick_And_Morty",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Instagram Stalker App",
      description:
        "Herramienta de análisis de perfiles públicos de Instagram basada en la arquitectura de consumo de APIs externas (Scraper API). Desarrollé una lógica de comparación de grafos sociales para identificar discrepancias entre seguidores y seguidos, ofreciendo una interfaz intuitiva con búsqueda indexada y redireccionamiento dinámico.",
      tags: ["React", "Next.js", "Tailwind"],
      youTube: "https://www.youtube.com/watch?v=1YiMWxrVo2o",
      gitHub: "https://github.com/AdrianOrtizz/instagram_stalker_app",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Gifzz",
      description:
        "Plataforma interactiva orientada al consumo de contenido multimedia a través de la API de Giphy. Desarrollé una experiencia de usuario inmersiva mediante la implementación de Infinite Scroll y sistemas de carga perezosa (lazy loading), minimizando el tiempo de respuesta inicial.",
      tags: ["React", "Zustand", "Node.js", "Express", "Tailwind"],
      youTube: "https://www.youtube.com/watch?v=CRHZ77sA-Xo",
      gitHub: "https://github.com/AdrianOrtizz/Gifs-gallery",
      className: "md:col-span-2 lg:col-span-1 md:row-span-1",
    },
  ],
  en: [
    {
      title: "Habitzz",
      description:
        "This full-stack platform transforms habit and weekly goal management into a smooth, intuitive experience through a reactive UI. The real strength is under the hood: it uses a robust architecture powered by Next.js, Express, and MongoDB, with optimized server state and a timezone-proof date engine. Designed not only to look good, but to run reliably in production.",
      tags: [
        "React",
        "Next.js",
        "Tailwind",
        "TanStack Query",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      gitHub: "https://github.com/AdrianOrtizz/habits-saas",
      youTube: "https://www.youtube.com/watch?v=OGnYNRL4dvk",
      demo: "https://habitzz-track.vercel.app/",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "TizzTube Downloader",
      description:
        "A media processing app that extracts and downloads video/audio streams in real time. I implemented client-side history persistence with LocalStorage and optimized dynamic player rendering through third-party API consumption.",
      tags: ["React", "Next.js", "Redux Toolkit", "Tailwind"],
      youTube: "https://www.youtube.com/watch?v=wh5SKy4wWaU",
      gitHub: "https://github.com/AdrianOrtizz/TizzTube-downloader",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Pokedex",
      description:
        "A high-performance data visualization app that consumes the PokeAPI. I implemented a search and filter engine, optimizing rendering for complex states to deliver smooth navigation through detailed character profiles.",
      tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize"],
      youTube: "https://www.youtube.com/watch?v=T-SNhqNqT18",
      gitHub: "https://github.com/AdrianOrtizz/PI-Pokemon-main",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "UUID Store",
      description:
        "A high-performance e-commerce platform. I led frontend development using agile methodologies to deliver tasks on tight deadlines. I designed the UX/UI in Figma and systematized OAuth (Google) authentication and Mercado Pago payment integration for a secure checkout flow.",
      tags: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Tailwind",
        "Mercado Pago",
      ],
      gitHub: "https://github.com/Agus-Albarracin/uuid-store",
      youTube: "https://www.youtube.com/watch?v=wOM3vOVKjNI",
      className: "md:col-span-2 md:row-span-1",
    },
    {
      title: "Rick And Morty App",
      description:
        "An app focused on favorites and user profile management. It stands out for a global state architecture that handles dynamic collections, enables complex filters over nested data, and adds controlled access systems.",
      tags: [
        "React",
        "Redux",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Sequelize",
        "Tailwind",
      ],
      youTube: "https://www.youtube.com/watch?v=AZ5fdddHnS4",
      gitHub: "https://github.com/AdrianOrtizz/PI_Rick_And_Morty",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Instagram Stalker App",
      description:
        "A profile analysis tool for public Instagram accounts built on external API consumption (Scraper API). I developed graph comparison logic to detect discrepancies between followers and following lists, offering an intuitive interface with indexed search and dynamic redirection.",
      tags: ["React", "Next.js", "Tailwind"],
      youTube: "https://www.youtube.com/watch?v=1YiMWxrVo2o",
      gitHub: "https://github.com/AdrianOrtizz/instagram_stalker_app",
      className: "md:col-span-1 md:row-span-1",
    },
    {
      title: "Gifzz",
      description:
        "Interactive platform focused on multimedia content consumption through the Giphy API. I developed an immersive user experience by implementing Infinite Scroll and lazy loading systems, minimizing the initial response time.",
      tags: ["React", "Zustand", "Node.js", "Express", "Tailwind"],
      youTube: "https://www.youtube.com/watch?v=CRHZ77sA-Xo",
      gitHub: "https://github.com/AdrianOrtizz/Gifs-gallery",
      className: "md:col-span-2 lg:col-span-1 md:row-span-1",
    },
  ],
};

export const experienceData: Record<Language, Experience[]> = {
  es: [
    {
      company: "QikStartsAI",
      role: "Frontend Developer",
      period: "Nov 2025 — Presente",
      description:
        "Desarrollo de interfaces de usuario para aplicaciones web utilizando React y Vite.js, enfocándome en la experiencia del usuario y la eficiencia del código.",
      achievements: [
        "Desarrollo de UI: Creación y optimización de interfaces de usuario utilizando React y TypeScript para mejorar la interactividad del producto",
        "Componentización: Implementación de diseños responsivos y componentes modulares basados en Ant Design y ShadCN.",
        "Colaboración técnica: Integración de funcionalidades del lado del cliente colaborando en equipos multidisciplinarios bajo metodologías ágiles, utilizando Slack para comunicación interna y Git/GitHub para el control de versiones.",
      ],
    },
    {
      company: "SoyHenry",
      role: "Full Stack Teaching Assistant",
      period: "Ene 2024 — Jul 2024",
      description:
        "Mentoría técnica y liderazgo de grupos en formación para el desarrollo web Full Stack.",
      achievements: [
        "Acompañamiento de estudiantes: Soporte continuo a un grupo de estudiantes durante su cursada en el bootcamp de desarrollo web.",
        "Reuniones semanales: Organización y liderazgo de videollamadas semanales para escuchar inquietudes y brindar apoyo.",
        "Asistencia teórica: Resolución de dudas y preguntas relacionadas con conceptos teóricos de desarrollo web.",
        "Capacitaciones técnicas: Impartición ocasional de capacitaciones sobre diversas tecnologías.",
      ],
    },
    {
      company: "Chula Home Deco",
      role: "Administración, Logística y atención al cliente",
      period: "Sep 2024 — Feb 2026",
      description:
        "Gestión de operaciones comerciales, logística de última milla y administración.",
      achievements: [
        "Atención al cliente: Resolución de consultas y solicitudes a través de WhatsApp y llamadas, ocasionalmente también haciendo atención al público en el local.",
        "Gestión de logística: Coordinación de entregas a domicilio y retiros en el local.",
        "Manejo de caja: Pago de sueldos a empleados.",
      ],
    },
    {
      company: "Bauletto SRL",
      role: "Administración, Logística y atención al cliente",
      period: "Mar 2022 — Sep 2024",
      description:
        "Optimización operativa del flujo de pedidos y gestión logística integral.",
      achievements: [
        "Gestión del flujo de pedidos: Coordinación de todo el proceso, desde la recepción hasta la entrega.",
        "Control de pedidos y documentación: Responsable de la verificación de pedidos, generación de remitos y facturas.",
        "Mantenimiento de registros: Actualización y seguimiento de los clientes a través de planillas en Excel.",
        "Atención al cliente: Resolución de consultas y solicitudes a través de WhatsApp, redes sociales y llamadas.",
      ],
    },
  ],
  en: [
    {
      company: "QikStartsAI",
      role: "Frontend Developer",
      period: "Nov 2025 — Present",
      description:
        "User interface development for web applications using React and Vite.js, focusing on user experience and code efficiency.",
      achievements: [
        "UI Development: Built and optimized user interfaces with React and TypeScript to enhance product interactivity.",
        "Componentization: Delivered responsive, modular components using Ant Design and ShadCN.",
        "Technical collaboration: Integrated client-side features across multidisciplinary agile teams using Slack for communication and Git/GitHub for version control.",
      ],
    },
    {
      company: "SoyHenry",
      role: "Full Stack Teaching Assistant",
      period: "Jan 2024 — Jul 2024",
      description:
        "Technical mentorship and leadership of student teams building full stack web applications.",
      achievements: [
        "Student support: Provided ongoing help to students throughout the web development bootcamp.",
        "Weekly meetings: Organized and led weekly video calls to address questions and offer guidance.",
        "Theoretical assistance: Solved questions related to web development concepts.",
        "Technical sessions: Delivered occasional trainings on several technologies.",
      ],
    },
    {
      company: "Chula Home Deco",
      role: "Administration, Logistics and Customer Service",
      period: "Sep 2024 — Feb 2026",
      description:
        "Commercial operations management, last-mile logistics and administration.",
      achievements: [
        "Customer service: Resolved inquiries and requests via WhatsApp and phone, sometimes assisting in-store.",
        "Logistics management: Coordinated deliveries and store pickups.",
        "Cash handling: Managed payroll for employees.",
      ],
    },
    {
      company: "Bauletto SRL",
      role: "Administration, Logistics and Customer Service",
      period: "Mar 2022 — Sep 2024",
      description:
        "Operational optimization of order flow and end-to-end logistics management.",
      achievements: [
        "Order management: Coordinated the full process from receipt to delivery.",
        "Documentation control: Verified orders and generated shipping slips and invoices.",
        "Record keeping: Updated and tracked customer records through Excel spreadsheets.",
        "Customer support: Resolved inquiries via WhatsApp, social media and phone.",
      ],
    },
  ],
};

export const getTranslations = (lang: Language) => translations[lang];
export const getProjectsData = (lang: Language) => projectsData[lang];
export const getExperienceData = (lang: Language) => experienceData[lang];
