import { Fragment, useState } from 'react'
import { contact } from '../content.js'

function Contact() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Website enquiry from ${values.name}`)
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  const update = (field) => (event) =>
    setValues((prev) => ({ ...prev, [field]: event.target.value }))

  return (
    <section id="contact" className="section contact">
      <p className="eyebrow">{contact.eyebrow}</p>
      <h2>
        {contact.title[0]}
        <br />
        {contact.title[1]}
      </h2>
      <p>{contact.intro}</p>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="contact-name">{contact.form.nameLabel}</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={update('name')}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="contact-email">{contact.form.emailLabel}</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={update('email')}
              required
            />
          </div>
          <div className="field full">
            <label htmlFor="contact-message">{contact.form.messageLabel}</label>
            <textarea
              id="contact-message"
              name="message"
              rows="4"
              value={values.message}
              onChange={update('message')}
              required
            ></textarea>
          </div>
          <button type="submit" className="button">
            {contact.form.submitLabel}
          </button>
        </form>
        <p className="form-note">{contact.form.note}</p>
      </div>

      <a className="email" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <div className="phones">
        {contact.phones.map((phone, index) => (
          <Fragment key={phone.number}>
            {index > 0 && <span>/</span>}
            <a href={phone.href}>{phone.number}</a>
          </Fragment>
        ))}
      </div>
      <p>{contact.location}</p>
      <div className="socials">
        {contact.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            title={`${social.label} ${social.handle}`}
          >
            <svg
              className="social-icon"
              viewBox="0 0 24 24"
              style={{ color: social.color }}
              aria-hidden="true"
              focusable="false"
            >
              <path fill="currentColor" d={social.icon} />
            </svg>
            <span>{social.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact