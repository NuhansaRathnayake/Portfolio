import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set `site` to your final domain (e.g. https://nuhansa.me) once it is connected.
export default defineConfig({
  site: 'https://portfolio-mu-six-0m6cibw0k0.vercel.app',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
