import { useWhatsAppLink } from '../hooks/useWhatsAppLink'
import { WHATSAPP_DEFAULT_MESSAGE } from '../config/site'

/**
 * CTA principal del sitio: siempre abre WhatsApp. Al ser un sitio estático
 * sin backend, todo formulario de contacto termina siendo, en definitiva,
 * este link — es intencional, no un atajo.
 */
export default function WhatsAppButton({
  label = 'Hablar por WhatsApp',
  message = WHATSAPP_DEFAULT_MESSAGE,
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
}) {
  const href = useWhatsAppLink(message)
  const sizeClass = size === 'sm' ? 'btn-sm' : ''
  const iconSize = size === 'sm' ? 16 : 22
  return (
    <a
      href={href}
      className={`btn btn-${variant} ${sizeClass} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {showIcon && (
        <img src="/whatsapp-icon.png" width={iconSize} height={iconSize} alt="" />
      )}
      {label}
    </a>
  )
}
