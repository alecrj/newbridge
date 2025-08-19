// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind(),
    react() // For interactive components if needed
  ],
  output: 'static',
  adapter: netlify({
    imageCDN: true, // Enable Netlify image optimization
  }),
  site: 'https://newbridgeliving.netlify.app',
  
  // Environment variables for CMS and integrations
  vite: {
    define: {
      'process.env.NETLIFY_CMS_CONFIG': JSON.stringify({
        backend: {
          name: 'git-gateway',
          branch: 'main'
        },
        media_folder: 'public/images',
        public_folder: '/images'
      })
    }
  },

  // Enhanced build configuration for CRM
  build: {
    assets: '_astro',
    format: 'directory',
    inlineStylesheets: 'auto'
  },

  // Markdown configuration for blog/pages
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark'
    }
  },

  // Image optimization
  image: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cloudinary.com'
      }
    ]
  },

  // Security headers for HIPAA compliance
  server: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  },

  // Content collections
  experimental: {
    contentCollections: true
  }
});