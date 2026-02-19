export interface Project {
  title: string;
  description: string;
  tags: string[];
  gitHub: string;
  youTube: string;
  className: string;
}

export const projectsData: Project[] = [
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
    title: "Pokedex",
    description:
      "Aplicación de visualización de datos de alto rendimiento que consume la PokeAPI. Implementé un motor de búsqueda y filtrado algorítmico, optimizando el renderizado de estados complejos para ofrecer una navegación fluida entre perfiles detallados de personajes.",
    tags: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize"],
    youTube: "https://www.youtube.com/watch?v=T-SNhqNqT18",
    gitHub: "https://github.com/AdrianOrtizz/PI-Pokemon-main",
    className: "md:col-span-1 md:row-span-1",
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
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "TizzTube Downloader",
    description:
      "Aplicación de procesamiento de medios audiovisuales que permite la extracción y descarga de flujos de video/audio en tiempo real. Implementé un sistema de historial basado en persistencia en el lado del cliente (LocalStorage) y optimicé el renderizado de reproductores dinámicos mediante el consumo de APIs de terceros.",
    tags: ["React", "Next.js", "Redux Toolkit", "Tailwind"],
    youTube: "https://www.youtube.com/watch?v=wh5SKy4wWaU",
    gitHub: "https://github.com/AdrianOrtizz/TizzTube-downloader",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Gifzz",
    description:
      "Plataforma interactiva orientada al consumo de contenido multimedia a través de la API de Giphy. Desarrollé una experiencia de usuario inmersiva mediante la implementación de Infinite Scroll y sistemas de carga perezosa (lazy loading), minimizando el tiempo de respuesta inicial.",

    tags: ["React", "Zustand", "Node.js", "Express", "Tailwind"],
    youTube: "https://www.youtube.com/watch?v=CRHZ77sA-Xo",
    gitHub: "https://github.com/AdrianOrtizz/Gifs-gallery",
    className: "md:col-span-1 md:row-span-1",
  },
];
