function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">FROM KAMPALA, UGANDA</p>
        <h1>
          Just
          <br />
          <em>Level.</em>
        </h1>
        <p className="lede">
          Practical ideas. Local stories.
          <br />
          Conversations worth joining.
        </p>
        <div className="actions">
          <a className="button" href="#watch">
            Watch the trailer <span aria-hidden="true">▶</span>
          </a>
          <a className="text-link" href="#programmes">
            Explore what's coming
          </a>
        </div>
      </div>
      <div className="portrait">
        <div className="orbit" aria-hidden="true"></div>
        <img src="/images/alban.png" alt="Alban Byamugisha, founder of ALBAN TV" />
        <div className="portrait-caption">
          <strong>ALBAN BYAMUGISHA</strong>
          <span>CEO &amp; Founder</span>
        </div>
      </div>
    </section>
  )
}

export default Hero