import App from './App.jsx'
import { renderApp } from './renderApp.jsx'

// Usado solo en build time por scripts/prerender.mjs. No corre en ningún
// servidor en producción: el resultado se escribe una sola vez dentro de
// dist/index.html, que sigue siendo un archivo estático.
export function render() {
  return renderApp(App)
}
