import { useState } from 'react'
import Logo from './Logo'
import WhatsAppButton from './WhatsAppButton'
import Icon from './Icon'

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#preguntas-frecuentes', label: 'Preguntas frecuentes' },
]

// Un solo lugar para agregar la próxima vertical el día de mañana.
const VERTICALS = {
  restaurantes: {
    label: 'Restaurantes',
    otherLabel: 'Clínicas',
    otherHref: '/clinicas/',
    otherIcon: 'clipboard',
  },
  clinicas: {
    label: 'Clínicas',
    otherLabel: 'Restaurantes',
    otherHref: '/',
    otherIcon: 'menu',
  },
}

export default function Header({ vertical, ctaMessage }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { label, otherLabel, otherHref, otherIcon } = VERTICALS[vertical]

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#contenido" className="header__brand" aria-label="Omengo, ir al inicio">
          <Logo size={38} />
          <span className="header__vertical-badge">{label}</span>
        </a>

        <nav className="header__nav" aria-label="Navegación principal">
          <ul id="header-nav-list" className={`header__nav-list ${menuOpen ? 'is-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="header__other-vertical-item">
              <a href={otherHref} className="header__other-vertical">
                <Icon name={otherIcon} size={17} />
                Para {otherLabel.toLowerCase()}
              </a>
            </li>
            <li className="header__nav-cta">
              <WhatsAppButton label="Quiero mi bot" message={ctaMessage} size="sm" />
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="header-nav-list"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          </span>
          <span aria-hidden="true" className={`header__burger ${menuOpen ? 'is-open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
