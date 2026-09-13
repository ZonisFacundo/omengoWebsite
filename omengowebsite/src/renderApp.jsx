import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'

/** Contraparte de mount.jsx para el lado del servidor (build time only). */
export function renderApp(AppComponent) {
  return renderToString(
    <StrictMode>
      <AppComponent />
    </StrictMode>,
  )
}
