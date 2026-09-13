export default function ComparisonTable({ content }) {
  const { title, rows } = content
  return (
    <section className="section section--alt comparison" aria-labelledby="comparativa-titulo">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">La diferencia</span>
          <h2 id="comparativa-titulo">{title}</h2>
        </div>
        <div
          className="comparison__table-wrap"
          tabIndex={0}
          role="region"
          aria-labelledby="comparativa-titulo"
        >
          <table className="comparison__table">
            <caption className="visually-hidden">
              Comparación entre atender WhatsApp manualmente y hacerlo con Omengo
            </caption>
            <thead>
              <tr>
                <th scope="col">Situación</th>
                <th scope="col">Sin Omengo</th>
                <th scope="col">Con Omengo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.topic}>
                  <th scope="row">{row.topic}</th>
                  <td>{row.before}</td>
                  <td className="comparison__after">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
