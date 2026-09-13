import AppClinicas from './AppClinicas.jsx'
import { renderApp } from './renderApp.jsx'

// Usado solo en build time por scripts/prerender.mjs. Ver entry-server.jsx.
export function render() {
  return renderApp(AppClinicas)
}
