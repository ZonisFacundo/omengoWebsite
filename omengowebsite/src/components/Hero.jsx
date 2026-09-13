import ChatMockup from './ChatMockup'
import WhatsAppButton from './WhatsAppButton'

export default function Hero({ content }) {
  const { eyebrow, h1, paragraph, ctaLabel, ctaMessage, secondaryLabel, secondaryHref, note, chat } =
    content

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{h1}</h1>
          <p>{paragraph}</p>
          <div className="cta-row">
            <WhatsAppButton label={ctaLabel} message={ctaMessage} />
            <a href={secondaryHref} className="btn btn-secondary">
              {secondaryLabel}
            </a>
          </div>
          <p className="hero__note">{note}</p>
        </div>
        <div className="hero__visual">
          <ChatMockup
            headerName={chat.headerName}
            headerAvatar={chat.headerAvatar}
            ariaLabel={chat.ariaLabel}
            messages={chat.messages}
          />
        </div>
      </div>
    </section>
  )
}
