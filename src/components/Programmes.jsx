import { programmes } from '../content.js'

function Programmes() {
  return (
    <section id="programmes" className="section">
      <div className="section-head">
        <div>
          <p className="eyebrow">{programmes.eyebrow}</p>
          <h2>{programmes.title}</h2>
        </div>
        <p>
          {programmes.description.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <div className="shows">
        {programmes.shows.map((show) => (
          <article key={show.number}>
            <span className="number">{show.number}</span>
            <p className="eyebrow">{show.eyebrow}</p>
            <h3>
              {show.title.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h3>
            <p>{show.body}</p>
            <div className="show-meta">
              {show.meta.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Programmes