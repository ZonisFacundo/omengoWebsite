export default function HowItWorks({ content }) {
  const { eyebrow, title, intro, steps, note } = content
  return (
    <section id="como-funciona" className="section section--alt how-it-works" aria-labelledby="como-funciona-titulo">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="como-funciona-titulo">{title}</h2>
          <p>{intro}</p>
        </div>
        <ol className="how-it-works__list">
          {steps.map((step) => (
            <li key={step.id} className="how-it-works__item">
              <span className="how-it-works__number" aria-hidden="true">
                {step.id}
              </span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="how-it-works__note">{note}</p>
      </div>
    </section>
  )
}
