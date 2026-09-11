import { founder, site } from '../content.js'

function Founder() {
  return (
    <section id="founder" className="section founder">
      <div>
        <p className="eyebrow">{founder.eyebrow}</p>
        <h2>
          {founder.title[0]}
          <br />
          {founder.title[1]}
        </h2>
      </div>
      <div>
        <h3>{founder.name}</h3>
        <p className="role">{founder.role}</p>
        {founder.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a className="text-link" href={site.youtube}>
          {founder.cta}
        </a>
      </div>
    </section>
  )
}

export default Founder