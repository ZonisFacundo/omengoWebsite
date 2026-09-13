/**
 * Set de íconos de línea, minimalista y liviano (sin librería externa).
 * Son decorativos: se usan siempre junto a un texto visible, por eso
 * llevan aria-hidden y el texto que los acompaña es lo que describe
 * la acción o el concepto (WCAG 1.1.1).
 */
const PATHS = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  order: (
    <>
      <path d="M4 8h16l-1.4 10.1a2 2 0 0 1-2 1.9H7.4a2 2 0 0 1-2-1.9L4 8Z" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </>
  ),
  menu: (
    <>
      <path d="M6 3v6a2 2 0 0 0 4 0V3" />
      <path d="M8 3v18" />
      <path d="M17 3c2 0 3 2.5 3 5.5S19 14 17 14" />
      <path d="M17 3v18" />
    </>
  ),
  handoff: (
    <>
      <path d="M3 12h5l2-2 3 3 2-2h6" />
      <path d="M14 8l3-3 3 3" />
      <path d="M21 16l-3 3-3-3" />
    </>
  ),
  tailored: (
    <>
      <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4L21 6l-3-3-3.3 3.3Z" />
    </>
  ),
  share: (
    <>
      <circle cx="18" cy="5" r="2.4" />
      <circle cx="6" cy="12" r="2.4" />
      <circle cx="18" cy="19" r="2.4" />
      <path d="M8.1 10.8 15.9 6.2M8.1 13.2l7.8 4.6" />
    </>
  ),
  chevron: <path d="m6 9 6 6 6-6" />,
  check: <path d="m5 12 5 5 9-9" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v5" />
      <path d="M12 16.2v.1" />
    </>
  ),
  team: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M21 20c0-2.5-1.6-4.6-4-5.5" />
    </>
  ),
  'chat-multi': (
    <>
      <rect x="4" y="3" width="13" height="8" rx="2.2" />
      <rect x="7" y="9.5" width="13" height="8" rx="2.2" />
    </>
  ),
  spark: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />,
  coin: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5v9M14.5 9.7c0-1-1.1-1.7-2.5-1.7s-2.5.7-2.5 1.7c0 2.3 5 1.3 5 3.6 0 1-1.1 1.7-2.5 1.7s-2.5-.7-2.5-1.7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.2 19 6v5.5c0 4.4-3 7.4-7 8.8-4-1.4-7-4.4-7-8.8V6l7-2.8Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4M16 3v4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5.5" y="4.5" width="13" height="16" rx="2" />
      <path d="M9 4.5V4a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 4v.5" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
}

export default function Icon({ name, size = 24, strokeWidth = 1.8, className }) {
  const content = PATHS[name]
  if (!content) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {content}
    </svg>
  )
}
