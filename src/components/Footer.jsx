import { footer } from '../content.js'

function Footer() {
  return (
    <footer>
      <span>{footer.name}</span>
      <a href="#">{footer.backToTop}</a>
      <span>{footer.location}</span>
    </footer>
  )
}

export default Footer