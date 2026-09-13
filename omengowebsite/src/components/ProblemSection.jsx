import Icon from './Icon'

export default function ProblemSection({ content }) {
  const { title, intro, items } = content
  return (
    <section className="section problem" aria-labelledby="problema-titulo">
      <div className="container">
        <div className="section-header">
          <h2 id="problema-titulo">{title}</h2>
          <p>{intro}</p>
        </div>
        <ul className="problem__list">
          {items.map((point) => (
            <li key={point.id} className="problem__item">
              <Icon name={point.icon} className="problem__icon" />
              <p>{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
