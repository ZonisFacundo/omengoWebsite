import Icon from './Icon'

// El FAQPage schema se arma a partir del mismo array que renderiza las
// preguntas visibles, para que nunca queden desincronizados.
function buildFaqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export default function FAQ({ content }) {
  const { title, items } = content
  return (
    <section
      id="preguntas-frecuentes"
      className="section faq"
      aria-labelledby="faq-titulo"
    >
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 id="faq-titulo">{title}</h2>
        </div>
        <div className="faq__list">
          {items.map((item) => (
            <details key={item.id} className="faq__item">
              <summary className="faq__question">
                <h3>{item.question}</h3>
                <Icon name="chevron" className="faq__chevron" />
              </summary>
              <p className="faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(items)) }}
      />
    </section>
  )
}
