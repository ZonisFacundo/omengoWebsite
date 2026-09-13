import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'
import ShareButton from './ShareButton'
import { BRAND_NAME } from '../config/site'

const YEAR = new Date().getFullYear()

const VERTICALS = {
  restaurantes: { otherLabel: 'Clínicas', otherHref: '/clinicas/' },
  clinicas: { otherLabel: 'Restaurantes', otherHref: '/' },
}

export default function Footer({ vertical, tagline, ctaMessage }) {
  const { otherLabel, otherHref } = VERTICALS[vertical]

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Logo size={34} />
          <p>{tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Navegación del pie de página">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#preguntas-frecuentes">Preguntas frecuentes</a>
          <a href={otherHref}>Omengo para {otherLabel.toLowerCase()}</a>
        </nav>

        <div className="footer__actions">
          <WhatsAppButton label="Escribinos" message={ctaMessage} variant="ghost" />
          <ShareButton text={tagline} />
        </div>
      </div>
      <div className="container footer__bottom">
        <p>
          © {YEAR} {BRAND_NAME}. Hecho en Argentina.
        </p>
      </div>
    </footer>
  )
}
