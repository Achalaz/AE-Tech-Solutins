import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-left reveal-left">
            <span className="section-tag">Get In Touch</span>
            <h2 className="section-title">Let's Build <span className="gradient-text">Together</span></h2>
            <p className="contact-desc">
              Have a project in mind? We'd love to hear about it. Reach out to AE Tech Solutions
              and we'll get back to you within 24 hours.
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@aetechsolutions.in">hello@aetechsolutions.in</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.06 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <div>
                  <span>Phone</span>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <span>Location</span>
                  <a href="#">India</a>
                </div>
              </div>
            </div>

            <div className="social-links">
              {[
                { label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z' },
                { label: 'GitHub', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
              ].map(({ label, path }) => (
                <a key={label} href="#" className="social-link" aria-label={label}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d={path}/></svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right reveal-right">
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" name="firstName" type="text" placeholder="John" value={form.firstName} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" name="lastName" type="text" placeholder="Doe" value={form.lastName} onChange={onChange} required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="john@example.com" value={form.email} onChange={onChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject" value={form.subject} onChange={onChange}>
                  <option value="" disabled>Select a service</option>
                  {['Web Design','Web Development','UI / UX Design','SEO & Growth','Digital Strategy','Other'].map(o => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." value={form.message} onChange={onChange} required />
              </div>
              <button type="submit" className="btn-primary full-width">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22,2 15,22 11,13 2,9"/>
                </svg>
              </button>
              {submitted && (
                <div className="form-success show">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                  Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
