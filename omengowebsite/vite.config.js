import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Sitio multi-página: cada landing (restaurantes, clínicas, la que se
// sume después) es su propio index.html real, no una ruta de React
// Router — así cada una tiene su propio HTML final con sus propios meta
// tags, mejor para SEO/IA. Ver README para el porqué del prerenderizado.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        clinicas: fileURLToPath(new URL('./clinicas/index.html', import.meta.url)),
      },
    },
  },
})
