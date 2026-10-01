import { defineConfig } from 'astro/config'

// Sitio 100% estático: cada archivo de src/pages/ genera su propio
// index.html en dist/ (/ y /clinicas/), con el contenido ya en el HTML y
// sin mandar ningún framework al navegador. Ver README.
export default defineConfig({
  site: 'https://omengo.com.ar',
  vite: {
    build: {
      // Mismos navegadores que soportaba el build anterior (Vite
      // "baseline-widely-available"). Sin esto se pierden prefijos como
      // -webkit-backdrop-filter del header, necesarios en Safari < 18.
      cssTarget: ['chrome107', 'edge107', 'firefox104', 'safari16'],
    },
  },
})
