// Experiencia y educación. El orden del array es el orden en pantalla.

import { cdn } from './assets';

export type Experience = {
  company: string;
  period: string;
  location: string;
  role: string;
  description: string;
  logo?: string;
};

export const experience: Experience[] = [
  {
    company: 'Autograph',
    period: '2025 / Present',
    location: 'Remote/USA',
    role: 'Product Designer',
    description:
      "As a Product Designer within Autograph's new AI + Product team, I design solutions that streamline internal workflows and improve the platform experience. I iterate on features driven by usability testing and user interviews, turning research insights into design decisions, and stay close to implementation through bug reporting and pull requests to ensure the final product matches the design intent.",
    logo: cdn('6ac1332ea9993b2e6085e00d_Google%20profile.jpg'),
  },
  {
    company: 'Electis',
    period: '2023 / 2024',
    location: 'FR',
    role: 'Product Designer',
    description:
      'I define and prioritize product requirements to deliver secure and intuitive digital voting experiences. I collaborate closely with cross-functional teams to shape the product roadmap, guide the development of user interfaces, and ensure seamless user experiences. Responsible for designing all aspects of the brand and product, including visual identity, design system, and overall look and feel, creating a cohesive and scalable design ecosystem from the ground up.',
    logo: cdn('67545d5be5c867c4160fa812_Frame%202.jpg'),
  },
  {
    company: '10 Grounds',
    period: '2021 / 2023',
    location: 'PY/USA',
    role: 'UX/UI Product Designer',
    description:
      'I worked as a UX/UI Designer at a software development company, crafting tailored solutions to meet diverse client needs. My role encompassed designing intuitive user interfaces, from branding and visual identity to high-fidelity wireframes, delivering seamless and engaging user experiences across a variety of digital products.',
    logo: cdn('67545d5b87acf92381030765_Frame%202-1.jpg'),
  },
  {
    company: 'Simplified',
    period: '2020 / 2021',
    location: 'INDIA/USA',
    role: 'Senior Graphic Designer / QA team member',
    description:
      'Worked remotely as part of the publishing team, where I animated instructional tutorial videos, designed templates in various formats, and created illustration bundles. Additionally, I contributed as a QA team member by testing, reporting errors, and providing recommendations to improve the user experience, ensuring engaging and high-quality content delivery.',
    logo: cdn('67545d5bcfae9843548cb750_Frame%202-2.jpg'),
  },
  {
    company: 'Garabato Mullen Lowe',
    period: '2019 / 2020',
    location: 'PY',
    role: 'Art Director',
    description:
      'Specialized in branding and logo development at a Paraguayan advertising agency, where I worked not only on the brand concept and visual identity but also the full ecosystem: logo design, visual style, photographic direction, graphic line, advertising spot scripts, and social media content.',
    logo: cdn('67545d5bcfae9843548cb73e_Frame%202-3.jpg'),
  },
  {
    company: 'Teixidó',
    period: '2016 / 2019',
    location: 'PY',
    role: 'Art Director',
    description:
      'Worked at one of the leading digital marketing companies in Paraguay, where I developed marketing campaigns key visuals, crafted branding strategies, and designed engaging landing pages to support client growth and online presence.',
    logo: cdn('67545d5b6d6e897e896e86d9_Frame%202-4.jpg'),
  },
];

export type Education = {
  place: string;
  year: string;
  title: string;
  description: string;
};

export const education: Education[] = [
  {
    place: 'Paraguay',
    year: '2019',
    title: 'Universidad Nacional de Asuncion',
    description:
      'Bachelor of Industrial Design with emphasis in graphic design from the National University of Asunción. Since 2019.',
  },
  {
    place: 'Online',
    year: '2021',
    title: 'UX/UI Designer',
    description: 'Finished UX/UI courses at CODERHOUSE.',
  },
  {
    place: 'Online',
    year: '2021',
    title: 'Interaction design foundation',
    description: 'Learned in many courses taken in the INTERACTION DESIGN FOUNDATION.',
  },
];
