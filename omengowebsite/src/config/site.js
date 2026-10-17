// ─────────────────────────────────────────────────────────────────────────
// Configuración central del sitio.
// Todo lo que cambie por negocio (dominio, WhatsApp, textos de contacto)
// vive acá para no tener que buscarlo componente por componente.
// ─────────────────────────────────────────────────────────────────────────

// Dominio de producción. Se usa en <link rel="canonical">, Open Graph y
// el schema.org (src/layouts/Layout.astro). Si el dominio cambia, se
// actualiza acá y en public/sitemap.xml, robots.txt y llms.txt.
export const SITE_URL = 'https://omengo.com.ar'

export const BRAND_NAME = 'Omengo'

// Título y descripción de la landing de restaurantes ("/"). Los de
// clínicas viven en src/content/clinicas.js. Límites: título ≤ 60
// caracteres y descripción ≤ 160 — más largo, Google lo corta en los
// resultados.
export const SITE_TITLE = 'Atención por WhatsApp con IA para restaurantes | Omengo'

export const SITE_DESCRIPTION =
  'Asistente con IA que atiende a tus clientes por WhatsApp las 24 horas: toma pedidos, muestra el menú y precios, y deriva a una persona cuando hace falta.'

// Número de WhatsApp Business en formato internacional, sin "+" ni espacios
// (así lo pide la API de wa.me).
export const WHATSAPP_NUMBER = '5491178281132'

// Mensaje precargado que ve el dueño del restaurante al abrir el chat.
export const WHATSAPP_DEFAULT_MESSAGE =
  '¡Hola! Quiero saber más sobre Omengo para mi restaurante.'

export function buildWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}

// Google Analytics 4 (propiedad "omengo.com.ar"). Activa el tracking en
// todas las páginas, incluido el evento click_whatsapp (ver
// src/layouts/Layout.astro). Vacío = sin tracking.
export const GA4_MEASUREMENT_ID = 'G-9HTW4VHS2L'
