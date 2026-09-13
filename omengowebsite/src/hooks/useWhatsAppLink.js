import { useMemo } from 'react'
import { buildWhatsAppLink, WHATSAPP_DEFAULT_MESSAGE } from '../config/site'

/** Devuelve la URL de wa.me lista para usar en un <a>, memoizada por mensaje. */
export function useWhatsAppLink(message = WHATSAPP_DEFAULT_MESSAGE) {
  return useMemo(() => buildWhatsAppLink(message), [message])
}
