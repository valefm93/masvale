// Proyectos / case studies. Cada proyecto genera su propia página en /projects/<slug>.
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

export type Project = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  cover: string;
  tags: string[];
  blocks: Block[];
};

export const projects: Project[] = [
  {
    slug: 'electis',
    title: 'Electronic voting Software',
    client: 'Electis',
    summary:
      'A turnkey online voting solution that is secure and fully verifiable, based on open-source code.',
    cover: cdn('675738bad8895951a61a973e_hero%20image%20electis.jpg'),
    tags: ['Prototyping 📱', 'User Testing 🧪', 'Design Sprints 🔍', 'Branding 🔮', 'Design QA 🕹️'],
    blocks: [
      {
        type: 'text',
        title: 'About the project',
        body: [
          'An electronic voting platform designed to ensure transparent and secure elections across various contexts, including companies, educational institutions, and beyond. The long-term vision for Electis is to become a trusted solution for national elections, offering secure and efficient electronic voting. Currently, three core products are under development: CSE voting, school voting, and governance voting.',
        ],
      },
      {
        type: 'pills',
        title: 'Team composition',
        items: ['1 Project manager', '1 Developer', '1 UX/UI Designer (moi)'],
      },
      {
        type: 'list',
        title: 'Responsibilities',
        items: [
          'Developing the branding, as the project has been operating without a visual identity so far.',
          'Redesigning and restructuring the existing platform from its architecture, simplifying the complex process of setting up an election and its parameters.',
          'Prototyping and testing with the team and users.',
          'Iterating, iterating, iterating.',
          'Proposing new features that can simplify the experience of this complex product.',
          'Conducting QA after each released version.',
        ],
      },
      {
        type: 'gallery',
        title: 'Before / after',
        images: [
          { src: cdn('67575176371fcf15e1af7010_BEF.jpg'), alt: 'Electis platform before the redesign' },
          { src: cdn('67574dce593a2313d43eaec2_AF.jpg'), alt: 'Electis platform after the redesign' },
        ],
      },
      {
        type: 'image',
        src: cdn('67574e6d49799be422ce4dc1_electis%20screenshots.jpg'),
        alt: 'Electis screens',
      },
      {
        type: 'text',
        title: 'Design system based on material design',
        body: [
          'Prepared a solid design system, a full library of components in order to have a scalable product and make a seamless hand-off process to the internal team.',
        ],
      },
      {
        type: 'image',
        src: cdn('67574e6df3074d72cabcc7c9_electis%20design%20system.jpg'),
        alt: 'Electis design system',
      },
      {
        type: 'gallery',
        images: [
          { src: cdn('675f24c4abe9eb049fa757f9_gallery.jpg'), alt: 'Electis screen' },
          { src: cdn('675f2510bee91b289f94419c_gallery%203.jpg'), alt: 'Electis screen' },
          { src: cdn('675f2495072fd7f54b5377c8_gallery%206.jpg'), alt: 'Electis screen' },
          { src: cdn('675f25101b6bcbf650c183da_gallery%204.jpg'), alt: 'Electis screen' },
          { src: cdn('675f251061501c7746a68830_gallery%201.jpg'), alt: 'Electis screen' },
          { src: cdn('675f251025ddb6b5ace024b6_gallery%202.jpg'), alt: 'Electis screen' },
        ],
      },
      {
        type: 'text',
        title: 'Userflow',
        body: [
          'While creating the user flow for CSE elections, we faced **key challenges** that significantly influenced our design approach: Ensuring **compliance with legal and procedural requirements** while Balancing security, **simplicity, and transparency**.',
        ],
      },
      {
        type: 'gallery',
        images: [
          { src: cdn('677d872425deacebef554413_userflow%201.jpg'), alt: 'CSE election user flow, part 1' },
          { src: cdn('677d8745754208aefd640c1e_userflow%202.jpg'), alt: 'CSE election user flow, part 2' },
        ],
      },
    ],
  },
  {
    slug: '10-grounds',
    title: "10Ground's projects",
    client: '10 Grounds',
    summary:
      'A software development and creative firm who develops user- friendly web, mobile and SaaS solutions.',
    cover: cdn('675732997557804b440a694c_featured%20image%2010g.jpg'),
    tags: ['Prototyping 📱', 'Design Sprints 🔍', 'Branding 🔮', 'Team work 🤝🏼', 'Motion graphics 📹'],
    blocks: [
      {
        type: 'text',
        body: [
          'A platform where I contributed to various exciting product development and design projects across websites, desktop apps, and mobile applications. During my time at 10Grounds, I participated in numerous projects, including:',
        ],
      },
      {
        type: 'list',
        items: [
          '**Website Redesign**: Updating the brand’s online presence with a modern, user-friendly design.',
          '**Desktop Application**: Designing intuitive, functional interface for managing digital content and tasks.',
          '**Mobile Apps**: Took part of the creation of seamless user experiences for mobile platforms, enhancing usability and accessibility.',
        ],
      },
      {
        type: 'image',
        src: cdn('675edd18072fd7f54b1e4b3c_10grounds%20cover.jpg'),
        alt: '10 Grounds projects',
      },
      {
        type: 'text',
        title: 'AI cooking App',
        body: [
          'This is a mobile application that recommends recipes based on the ingredients you already have at home.',
          'I Participated since its inception, in sprints, wireframing, naming, branding, MVP definition.',
        ],
      },
      {
        type: 'text',
        title: 'AAR web app',
        body: [
          'The goal of this project was to **enhance the user experience of their existing site, while maintaining the underlying architecture.** Given time constraints and limitations on design complexity, the focus was on simplifying the submission process and improving overall usability. After working on the redesign, I also handled the **mobile adaptation**, ensuring a seamless experience across devices.',
        ],
      },
      {
        type: 'image',
        src: cdn('675edfa1d9a570a89e2bea88_aar%20cover.jpg'),
        alt: 'AAR web app',
      },
      {
        type: 'text',
        title: 'Design system based on Boostrap 5',
        body: [
          'Below you can view the old version of the website and the subsequent improvements made. The focus was exclusively on enhancing the interface design, aiming to achieve significant visual and usability improvements within a short timeframe.',
        ],
      },
      {
        type: 'gallery',
        title: 'Before / after',
        images: [
          { src: cdn('675ee463321ce7c467acbe25_aar%20before.jpg'), alt: 'AAR website before the redesign' },
          { src: cdn('675ee463c62a73bcfe6ccd82_aar%20after.jpg'), alt: 'AAR website after the redesign' },
        ],
      },
      {
        type: 'text',
        title: 'AI News app',
        body: [
          'An AI-driven news aggregator and curator that delivers concise, one-liner updates on the latest and most significant news across a range of topics. I contributed to the wireframing and branding process, including defining color palettes, typography, and design components, ensuring a clear and engaging user experience.',
        ],
      },
      {
        type: 'image',
        src: cdn('675ee68bb49657a34bf2839d_ai%20news%20app%20cover.jpg'),
        alt: 'AI News app',
      },
    ],
  },
];
