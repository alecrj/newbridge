import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false, // We're using our own base styles in global.css
    })
  ],
  output: 'static',
  adapter: netlify(),
  site: 'https://newbridgeliving.netlify.app',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Add any SCSS options if needed
        }
      }
    }
  }
});