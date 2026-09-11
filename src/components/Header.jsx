function Header() {
  return (
    <header>
      <a href="#" aria-label="ALBAN TV home">
        <img className="logo" src="/images/logo.png" alt="ALBAN TV — Just Level" />
      </a>
      <nav aria-label="Main navigation">
        <a href="#watch">Watch</a>
        <a href="#programmes">Programmes</a>
        <a href="#founder">Founder</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="button compact" href="https://www.youtube.com/@albantv2">
        YouTube ↗
      </a>
    </header>
  )
}

export default Header