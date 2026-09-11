function Watch() {
  return (
    <section id="watch" className="section watch">
      <div className="section-head">
        <div>
          <p className="eyebrow">WELCOME TO THE CHANNEL</p>
          <h2>This is ALBAN TV.</h2>
        </div>
        <p>
          Meet the vision behind the channel.
          <br />
          36 seconds. One introduction.
        </p>
      </div>
      <video
        controls
        playsInline
        preload="metadata"
        poster="/images/trailer-poster.png"
        aria-label="ALBAN TV channel trailer"
        src="/videos/trailer.mp4"
      ></video>
      <p className="video-note">
        Featuring Alban Byamugisha. Instrumental music with on-screen text.
      </p>
    </section>
  )
}

export default Watch