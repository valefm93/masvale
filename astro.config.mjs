// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.vale-ferreira.com',
  // Páginas que existían en el sitio anterior (Webflow) y ya no están publicadas
  redirects: {
    '/projects/10-grounds-website': '/portfolio',
    '/projects/ai-news-app': '/portfolio',
  },
  integrations: [sitemap()],
});