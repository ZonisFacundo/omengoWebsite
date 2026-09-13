import Icon from './Icon'

export default function Features({ content }) {
  const { eyebrow, title, intro, items } = content
  return (
    <section id="beneficios" className="section features" aria-labelledby="beneficios-titulo">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">{eyebrow}</span>
          <h2 id="beneficios-titulo">{title}</h2>
          <p>{intro}</p>
        </div>
        <ul className="features__grid">
          {items.map((feature) => (
            <li key={feature.id} className="features__card">
              <div className="features__icon">
                <Icon name={feature.icon} size={26} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
