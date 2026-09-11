import { hero } from '../content.js'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.title[0]}
          <br />
          <em>{hero.title[1]}</em>
        </h1>
        <p className="lede">
          {hero.lede.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="actions">
          <a className="button" href="#watch">
            {hero.watchLabel} <span aria-hidden="true">▶</span>
          </a>
          <a className="text-link" href="#programmes">
            {hero.exploreLabel}
          </a>
        </div>
      </div>
      <div className="portrait">
        <div className="orbit" aria-hidden="true"></div>
        <picture>
          <source srcSet={hero.portrait.srcWebp} type="image/webp" />
          <img src={hero.portrait.src} alt={hero.portrait.alt} fetchPriority="high" decoding="async" />
        </picture>
        <div className="portrait-caption">
          <strong>{hero.portrait.caption}</strong>
          <span>{hero.portrait.captionSub}</span>
        </div>
      </div>
    </section>
  )
}

export default Hero