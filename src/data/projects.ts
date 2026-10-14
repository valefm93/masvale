// Proyectos / case studies. Cada proyecto genera su propia página en /projects/<slug>
// y aparece en la galería /portfolio (en el orden de esta lista).
// Un proyecto está hecho de "bloques" que se muestran en orden:
//   text    → título + párrafos (usa **negrita** para resaltar)
//   list    → título + lista de puntos
//   pills   → título + etiquetas
//   image   → una imagen grande
//   gallery → varias imágenes en carrusel horizontal

import { cdn } from './assets';

export type Block =
  | { type: 'text'; title?: string; body: string[] }
  | { type: 'list'; title?: string; items: string[] }
  | { type: 'pills'; title?: string; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'gallery'; title?: string; images: { src: string; alt: string }[] };

// Tipos de trabajo: son los filtros de /portfolio, en este orden.
export const categories = ['UX/UI', 'Branding', 'Web', 'Mobile app', 'Design system'] as const;
export type Category = (typeof categories)[number];

export type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  cover: string;
  /** Tipo de trabajo, para el filtro de /portfolio */
  categories: Category[];
  /** Etiquetas detalladas: se muestran dentro de la página del proyecto */
  tags: string[];
  /** true = aparece también en "Featured projects" de la home. Todos salen en /portfolio */
  featured?: boolean;
  /** true = tiene su propia página hecha a mano en src/pages/projects/<slug>.astro (no usa la plantilla) */
  custom?: boolean;
  /** true = es un case study completo: la card de la home muestra "View case study" */
  caseStudy?: boolean;
  blocks: Block[];
};

export const projects: Project[] = [
  // El orden del array es el orden en la página Projects (y el del "Next project")
  {
    slug: 'ai-cooking-app',
    categories: ['Mobile app', 'Branding', 'Design system'],
    title: 'Chefy, AI cooking app',
    client: '10 Grounds',
    summary:
      'An AI cooking assistant that suggests meals from what is already in your kitchen. UX/UI design, naming, branding and design system for the MVP.',
    cover: '/images/chefy/cover.jpg',
    tags: ['UX/UI design', 'Design Sprint', 'Naming', 'Branding', 'Design system'],
    featured: true,
    // La página está en src/pages/projects/ai-cooking-app.astro
    custom: true,
    blocks: [
      {
        type: 'text',
        body: [
          'This is a mobile application that recommends recipes based on the ingredients you already have at home.',
          'I Participated since its inception, in sprints, wireframing, naming, branding, MVP definition.',
        ],
      },
      {
        type: 'image',
        src: cdn('675eeac31745565ac3524abc_ai%20news%20app.jpg'),
        alt: 'Screens of Chefy, the AI cooking app',
      },
    ],
  },
  // Dashboard de clientes de Electis (primer proyecto hecho con IA).
  // La página está en src/pages/projects/electis-client-dashboard.astro
  {
    slug: 'electis-client-dashboard',
    categories: ['UX/UI', 'Web'],
    title: 'Electis, CSE election planning platform',
    client: 'Electis',
    summary:
      'A platform where HR teams plan and organize their CSE elections, step by step, from MVP to delivery.',
    cover: '/images/electis-dashboard/cover.jpg',
    tags: ['Product design', 'AI-assisted design', 'Automation', 'MVP to delivery'],
    featured: true,
    custom: true,
    blocks: [],
  },
  // Case study de producto. La página está en src/pages/projects/electis.astro
  // (el branding de Electis irá como un proyecto aparte)
  {
    slug: 'electis',
    categories: ['UX/UI', 'Web', 'Design system'],
    title: 'Electis, online CSE voting platform',
    client: 'Electis',
    summary:
      'Redesigning how an election is set up on an online voting platform: from one long technical page to guided steps, with a design system behind it.',
    cover: '/images/electis/cover.jpg',
    tags: ['Product design', 'Information architecture', 'Prototyping', 'User testing', 'Design system', 'Design QA'],
    caseStudy: true,
    custom: true,
    blocks: [],
  },
  // Branding de Electis, separado del case study de producto.
  // La página está en src/pages/projects/electis-branding.astro
  {
    slug: 'electis-branding',
    categories: ['Branding'],
    title: 'Electis, branding',
    client: 'Electis',
    summary:
      'The brand identity for an electronic voting platform: logo, colors, typography and brand applications, trustworthy and friendly.',
    cover: '/images/electis-brand/cover.jpg',
    tags: ['Branding', 'Logo', 'Color', 'Typography'],
    custom: true,
    blocks: [],
  },
  // --- Proyectos hechos en 10 Grounds: cada uno tiene su propia página ---
  // OCULTO por ahora: 10 Grounds website. Para volver a mostrarlo, quitar las // de este bloque.
  // {
  //   slug: '10-grounds-website',
  //   categories: ['Web', 'UX/UI'],
  //   title: '10 Grounds website',
  //   client: '10 Grounds',
  //   summary:
  //     'A software development and creative firm who develops user- friendly web, mobile and SaaS solutions.',
  //   cover: '/images/10grounds/cover.jpg',
  //   tags: ['Website redesign', 'UI design'],
  //   blocks: [
  //     {
  //       type: 'text',
  //       body: ['Updating the brand’s online presence with a modern, user-friendly design.'],
  //     },
  //     {
  //       type: 'image',
  //       src: cdn('675edd18072fd7f54b1e4b3c_10grounds%20cover.jpg'),
  //       alt: '10 Grounds website redesign',
  //     },
  //   ],
  // },
  // La página está en src/pages/projects/aar-web-app.astro
  {
    slug: 'aar-web-app',
    categories: ['Web', 'UX/UI', 'Design system'],
    title: 'AAR Papers',
    client: '10 Grounds',
    summary:
      'A redesign of the system scholars use to submit proposals to the American Academy of Religion: a simpler submission flow, a Bootstrap 5 design system and a mobile version, without touching the architecture.',
    cover: '/images/aar/cover.jpg',
    tags: ['UX/UI design', 'Redesign', 'Design system', 'Bootstrap 5', 'Responsive'],
    custom: true,
    blocks: [],
  },
  // OCULTO por ahora: AI News app. Para volver a mostrarlo, quitar las // de este bloque.
  // {
  //   slug: 'ai-news-app',
  //   categories: ['Mobile app', 'Branding'],
  //   title: 'AI News app',
  //   client: '10 Grounds',
  //   summary:
  //     'An AI-driven news aggregator and curator that delivers concise, one-liner updates on the latest and most significant news.',
  //   cover: cdn('675ee68bb49657a34bf2839d_ai%20news%20app%20cover.jpg'),
  //   tags: ['Wireframing', 'Branding', 'Design components'],
  //   blocks: [
  //     {
  //       type: 'text',
  //       body: [
  //         'An AI-driven news aggregator and curator that delivers concise, one-liner updates on the latest and most significant news across a range of topics. I contributed to the wireframing and branding process, including defining color palettes, typography, and design components, ensuring a clear and engaging user experience.',
  //       ],
  //     },
  //     {
  //       type: 'image',
  //       src: cdn('675ee68b1b6bcbf650918f9d_ai%20news%20app.jpg'),
  //       alt: 'Screens of the AI News app',
  //     },
  //   ],
  // },
  // Proyecto personal: la página está en src/pages/projects/hobbies-app.astro
  {
    slug: 'hobbies-app',
    categories: ['Mobile app', 'UX/UI', 'Design system'],
    title: 'Hobbies App',
    client: 'Personal project',
    summary:
      'A concept app to find activities for your free time and meet people nearby who share them. An experimental personal project with its own illustration set and a design system.',
    cover: '/images/hobbies/cover.jpg',
    tags: ['UI design', 'UX design', 'Design system', 'Illustration', 'Concept'],
    custom: true,
    blocks: [],
  },
];

// Proyectos que todavía no tienen página: en /portfolio salen como "Coming soon", sin enlace.
// Cuando estén listos, se pasan a la lista `projects` de arriba con su portada y su página.
export const upcoming: { client: string; title: string; cover: string }[] = [
  { client: 'Autograph', title: 'Autograph, collective memories', cover: '/images/autograph/cover.jpg' },
  { client: 'Onit', title: 'Onit, client dashboard', cover: '/images/onit/cover.jpg' },
];
