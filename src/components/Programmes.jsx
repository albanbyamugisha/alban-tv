const shows = [
  {
    number: '01',
    eyebrow: 'PRACTICAL LEARNING',
    title: (
      <>
        Level Up
        <br /> with Alban
      </>
    ),
    body: 'Take one idea and turn it into an action you can try. Clear examples, small steps and room to learn.',
    meta: 'Proposed: Tuesday · 19:00 EAT\n20 minutes',
  },
  {
    number: '02',
    eyebrow: 'LOCAL STORIES',
    title: (
      <>
        Kampala
        <br /> Voices
      </>
    ),
    body: 'Meet the people behind the work, creativity and everyday stories of Kampala.',
    meta: 'Proposed: Thursday · 19:00 EAT\n25 minutes',
  },
  {
    number: '03',
    eyebrow: 'THOUGHTFUL CONVERSATION',
    title: (
      <>
        The Just Level
        <br /> Conversation
      </>
    ),
    body: 'Explore beginnings, choices and lessons through a focused conversation with Alban.',
    meta: 'Proposed: Saturday · 19:00 EAT\n45 minutes',
  },
]

function Programmes() {
  return (
    <section id="programmes" className="section">
      <div className="section-head">
        <div>
          <p className="eyebrow">IN DEVELOPMENT</p>
          <h2>Three ways to level up.</h2>
        </div>
        <p>
          Our proposed programme lineup.
          <br />
          Launch dates will be announced on our channels.
        </p>
      </div>
      <div className="shows">
        {shows.map((show) => (
          <article key={show.number}>
            <span className="number">{show.number}</span>
            <p className="eyebrow">{show.eyebrow}</p>
            <h3>{show.title}</h3>
            <p>{show.body}</p>
            <div className="show-meta">{show.meta}</div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Programmes