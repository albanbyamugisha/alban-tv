import { nav, sectionIds, site } from '../content.js'
import useScrollSpy from '../hooks/useScrollSpy.js'

function Header() {
  const activeId = useScrollSpy(sectionIds)

  return (
    <header>
      <a href="#" aria-label="ALBAN TV home">
        <picture>
          <source srcSet="/images/logo.webp" type="image/webp" />
          <img className="logo" src="/images/logo.png" alt="ALBAN TV — Just Level" decoding="async" />
        </picture>
      </a>
      <nav aria-label="Main navigation">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            aria-current={activeId === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="button compact" href={site.youtube}>
        YouTube ↗
      </a>
    </header>
  )
}

export default Header