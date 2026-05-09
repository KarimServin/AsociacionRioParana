import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig(({mode}) => {
  return {
    // Si el sitio se sube a la raíz del dominio (ej: www.dominio.com), usar '/'
    // Si se sube a una subcarpeta (ej: www.dominio.com/app), usar '/app/'
    base: '/',
    plugins: [
      react(), 
      tailwindcss(),
      ViteImageOptimizer({
        png: { quality: 80 },
        jpeg: { quality: 80 },
        jpg: { quality: 80 },
        webp: { lossless: true },
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: true,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'motion': ['framer-motion', 'motion/react'],
            'icons': ['lucide-react']
          }
        }
      }
    }
  };
});

