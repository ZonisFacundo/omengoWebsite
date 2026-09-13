import WhatsAppButton from './WhatsAppButton'

/** Barra de CTA fija, visible solo en mobile (ver StickyMobileCTA.css). */
export default function StickyMobileCTA({ label = 'Hablar por WhatsApp', message }) {
  return (
    <div className="sticky-cta">
      <WhatsAppButton label={label} message={message} className="btn-block" />
    </div>
  )
}
