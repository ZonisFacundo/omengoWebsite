import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'

/**
 * Punto de montaje compartido por todas las páginas del sitio (hoy
 * restaurantes y clínicas). En producción, dist/<página>/index.html ya
 * viene con #root renderizado por scripts/prerender.mjs — ahí hidrata en
 * vez de renderizar desde cero. En `npm run dev`, #root arranca vacío
 * (el prerenderizado solo corre en `npm run build`), así que ahí
 * renderiza normal.
 */
export function mount(AppComponent) {
  const container = document.getElementById('root')
  const app = (
    <StrictMode>
      <AppComponent />
    </StrictMode>
  )

  if (container.children.length > 0) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
}
