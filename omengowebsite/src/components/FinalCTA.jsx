import WhatsAppButton from './WhatsAppButton'

export default function FinalCTA({ content }) {
  const { title, paragraph, ctaLabel, ctaMessage } = content
  return (
    <section className="section section--dark final-cta" aria-labelledby="cta-final-titulo">
      <div className="container final-cta__inner">
        <h2 id="cta-final-titulo">{title}</h2>
        <p>{paragraph}</p>
        <WhatsAppButton label={ctaLabel} message={ctaMessage} />
      </div>
    </section>
  )
}
