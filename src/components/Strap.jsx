import { strap } from '../content.js'

function Strap() {
  return (
    <div className="strap">
      {strap.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  )
}

export default Strap