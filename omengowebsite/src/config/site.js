// ─────────────────────────────────────────────────────────────────────────
// Configuración central del sitio.
// Todo lo que cambie por negocio (dominio, WhatsApp, textos de contacto)
// vive acá para no tener que buscarlo componente por componente.
// ─────────────────────────────────────────────────────────────────────────

// Dominio de producción. Se usa en <link rel="canonical">, Open Graph,
// el schema.org y el sitemap. Si el dominio cambia, se actualiza acá.
export const SITE_URL = 'https://omengo.com.ar'

export const BRAND_NAME = 'Omengo'

export const SITE_TITLE = 'Omengo — Atención al cliente por WhatsApp con IA para restaurantes'

export const SITE_DESCRIPTION =
  'Omengo es un asistente con inteligencia artificial que atiende a tus clientes por WhatsApp las 24 horas: toma pedidos, muestra el menú y precios, resuelve dudas y deriva a una persona cuando hace falta. A medida para tu restaurante.'

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

// Google Analytics 4 (formato "G-XXXXXXXXXX"). Se deja vacío a propósito:
// Omengo todavía no tiene una cuenta de GA4 creada. Cuando la tengan,
// completar este valor alcanza para activar el tracking (ver README).
export const GA4_MEASUREMENT_ID = ''
