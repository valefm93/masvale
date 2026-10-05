// Datos generales del sitio: nombre, links de contacto, skills y software.
// Edita este archivo para cambiar textos que aparecen en varias páginas.

import { cdn } from './assets';

export const site = {
  name: 'Vale Ferreira',
  role: 'Product Designer',
  greeting: 'Hello! I am Vale Ferreira',
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
  photos: {
    hero: [cdn('676470c301ab84a6c874a8c2_iphone%201.png'), cdn('677d7c0171fe562126d0c4b6_iphone2.png')],
    portrait: cdn('67a5e65d5a1decd7dd64125f_foto%20carnet.jpg'),
    resume: cdn('675466beaa70708b805777bf_foto%20resume.jpg'),
  },
};

export const contact = {
  email: 'valefm93@gmail.com',
  phone: '+33744410156',
  linkedin: 'https://www.linkedin.com/in/valefm93/',
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
  'UX/UI Designer 🛠️',
  'Prototyping 📱',
  'User Testing 🧪',
  'Design Sprints 🔍',
  'Visual Design 🎨',
  'Branding 🔮',
  'Design QA 🕹️',
  'Basic HTML&CSS 🤏🏼',
  'Team work 🤝🏼',
  'Motion graphics 📹',
  'Illustration 🖍️',
];

export const software = [
  { name: 'Figma', icon: cdn('675475df83063c4b66d9f323_Figma.svg') },
  { name: 'Photoshop', icon: cdn('675475dffaf430c1f7cc7b46_Photoshop.svg') },
  { name: 'Illustrator', icon: cdn('675475df8a22b714fb133371_Illustrator.svg') },
  { name: 'Procreate', icon: cdn('675475dfa912f28b7e66f82f_logo-procreate-icon.svg') },
  { name: 'After Effects', icon: cdn('675475df5620869d2236b256_After%20Effects.svg') },
  { name: 'InDesign', icon: cdn('675475e308e6811fbc3d81d4_InDesign.svg') },
];
