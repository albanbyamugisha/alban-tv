import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Strap from './components/Strap.jsx'
import Watch from './components/Watch.jsx'
import Programmes from './components/Programmes.jsx'
import Founder from './components/Founder.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Strap />
        <Watch />
        <Programmes />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App