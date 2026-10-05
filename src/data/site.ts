// Datos generales del sitio: nombre, links de contacto, skills y software.
// Edita este archivo para cambiar textos que aparecen en varias páginas.

import { cdn } from './assets';

export const site = {
  name: 'Vale Ferreira',
  role: 'Product Designer',
  intro: {
    lead: 'My passion for UX/UI design stems from the perfect combination of',
    highlight: 'critical thinking and creativity',
    rest: '. I love how these two skills allow me to approach problems from different angles, resulting in solutions that are both functional and innovative. It’s this balance that keeps me passionate about what I do.',
  },
  about: [
    'Drawing from my graphic design background, I quickly embraced UX/UI methodologies like **Design Thinking** and **User-Centered Design**, focusing on creating intuitive solutions that enhance user experiences.',
    'Through iterative prototyping and testing, I refine my designs to **meet real-world requirements**, while constantly optimizing for seamless interactions and accessibility.',
  ],
  resumeIntro:
    'The balance between creativity and strategic decision-making is what excites me most and keeps me passionate about creating meaningful user experiences.',
  // Hero de la home. Las posiciones de los stickers son [horizontal, vertical] en % de la pantalla:
  // `from` es dónde arrancan (junto a la foto) y `to` dónde quedan al terminar el scroll.
  hero: {
    name: 'I am Valeria Ferreira',
    tagline: 'Hello! I am looking for new challenges',
    updateLabel: 'Last update',
    scrollHint: 'Scroll down',
    image: '/images/hero/landscape.svg',
    stickers: [
      { src: '/images/hero/sticker-hello.svg', width: '8.5vw', from: ['40.5%', '34%'], to: ['27%', '2%'] },
      { src: '/images/hero/sticker-flame.svg', width: '4.6vw', from: ['64%', '59%'], to: ['99.5%', '25%'] },
      { src: '/images/hero/sticker-flower.svg', width: '5.6vw', from: ['31.5%', '65.5%'], to: ['0.5%', '89%'] },
    ],
  },
  photos: {
    portrait: cdn('67a5e65d5a1decd7dd64125f_foto%20carnet.jpg'),
    resume: cdn('675466beaa70708b805777bf_foto%20resume.jpg'),
  },
};

// Mensaje que aparece al pasar el mouse por el teléfono (que se muestra borroso)
export const phoneNote = 'Oops! Let’s start by email. Happy to share my number after!';

// Mensaje al pie del footer
export const footerNote =
  'Site designed by me, combining tools like Figma, Claude and GitHub.';

// Navegación principal: la usan el header y los botones del hero
// Mensaje que se escribe solo al pasar el mouse por el título de la página Portfolio
export const portfolioNote =
  'These are visual summaries of my work. Want the full story? Let’s set up an interview!';

export const nav = [
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About me', href: '/resume' },
  // #contact es el footer, que está en todas las páginas
  { label: 'Hire me', href: '#contact' },
];

export const contact = {
  email: 'valefm93@gmail.com',
  phone: '+33744410156',
  linkedin: 'https://www.linkedin.com/in/valefm93/',
  location: 'Paris, France',
};

export const links = [
  {
    label: 'Behance.net/valefm93',
    href: 'https://www.behance.net/valefm93',
    description: 'Explore more about my design and art direction past experience.',
  },
  {
    label: 'Instagram.com/masvale.py',
    href: 'https://www.instagram.com/masvale.py',
    description: 'This is where I express myself through drawings.',
  },
];

export const skills = [
  'UX/UI Designer',
  'Prototyping',
  'User Testing',
  'Design Sprints',
  'Visual Design',
  'Branding',
  'Design QA',
  'Basic HTML&CSS',
  'Team work',
  'Motion graphics',
  'Illustration',
];

export const software: { name: string; icon?: string }[] = [
  { name: 'Figma', icon: cdn('675475df83063c4b66d9f323_Figma.svg') },
  { name: 'Photoshop', icon: cdn('675475dffaf430c1f7cc7b46_Photoshop.svg') },
  { name: 'Illustrator', icon: cdn('675475df8a22b714fb133371_Illustrator.svg') },
  { name: 'Procreate', icon: cdn('675475dfa912f28b7e66f82f_logo-procreate-icon.svg') },
  { name: 'After Effects', icon: cdn('675475df5620869d2236b256_After%20Effects.svg') },
  { name: 'InDesign', icon: cdn('675475e308e6811fbc3d81d4_InDesign.svg') },
  // Sin `icon` se muestra la inicial del nombre
  { name: 'Codex' },
  { name: 'Claude', icon: 'https://cdn.simpleicons.org/claude' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/131414' },
];
