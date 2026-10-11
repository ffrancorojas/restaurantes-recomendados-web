import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@screens': fileURLToPath(new URL('./src/screens', import.meta.url)),
      '@contracts': fileURLToPath(new URL('./src/contracts.ts', import.meta.url)),
      '@api': fileURLToPath(new URL('./src/api.ts', import.meta.url)),
      '@api.types': fileURLToPath(new URL('./src/api.types.ts', import.meta.url)),
      '@auth': fileURLToPath(new URL('./src/firebase.ts', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles/index.scss', import.meta.url)),
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'Restaurantes recomendados',
        short_name: 'Restaurantes',
        description: 'Tu mapa gastronómico personal',
        theme_color: '#E85D3F',
        background_color: '#FFF9F4',
        display: 'standalone',
        start_url: '/',
        icons: [
          { src: 'favicon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' },
        ],
      },
    }),
  ],
  server: { port: 5173 },
});
