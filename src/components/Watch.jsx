import { watch } from '../content.js'

function Watch() {
  return (
    <section id="watch" className="section watch">
      <div className="section-head">
        <div>
          <p className="eyebrow">{watch.eyebrow}</p>
          <h2>{watch.title}</h2>
        </div>
        <p>
          {watch.description.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </p>
      </div>
      <video
        controls
        playsInline
        preload="metadata"
        poster={watch.video.poster}
        aria-label={watch.video.ariaLabel}
        src={watch.video.src}
      >
        <track kind="captions" srcLang="en" label="English" src={watch.video.captions} />
      </video>
      <p className="video-note">{watch.note}</p>
    </section>
  )
}

export default Watch