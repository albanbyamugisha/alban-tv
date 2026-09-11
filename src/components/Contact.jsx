const socials = [
  { label: 'YouTube', handle: '@albantv2 ↗', href: 'https://www.youtube.com/@albantv2' },
  { label: 'TikTok', handle: '@albantv2 ↗', href: 'https://www.tiktok.com/@albantv2' },
  { label: 'Instagram', handle: '@albantv_2 ↗', href: 'https://www.instagram.com/albantv_2' },
  { label: 'X', handle: '@albantv_2 ↗', href: 'https://x.com/albantv_2' },
]

function Contact() {
  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">LET'S CONNECT</p>
      <h2>
        Your story could
        <br />
        start a conversation.
      </h2>
      <p>Programme enquiries, collaborations or a story to share:</p>
      <a className="email" href="mailto:alban.tv.2@gmail.com">
        alban.tv.2@gmail.com
      </a>
      <div className="phones">
        <a href="tel:+256748611252">0748 611 252</a>
        <span>/</span>
        <a href="tel:+256765858515">0765 858 515</a>
      </div>
      <p>Kampala, Uganda</p>
      <div className="socials">
        {socials.map((social) => (
          <a key={social.label} href={social.href}>
            {social.label} <span>{social.handle}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact