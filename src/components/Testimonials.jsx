import { useState } from 'react';

const testimonials = [
  {
    initials: 'SM', name: 'Sarah Mitchell', role: 'CEO, TechStart Inc.',
    avatarStyle: {},
    text: '"Absolutely blown away by the quality of work. Our website conversion rate increased by 180% within the first month. Professional, responsive, and truly understands business needs."',
    date: '2 months ago',
  },
  {
    initials: 'RK', name: 'Rahul Kumar', role: 'Founder, GrowthHub',
    avatarStyle: { background: 'linear-gradient(135deg, #6c63ff, #3d34a5)' },
    text: '"The best investment I made for my business. The design is stunning and the website loads incredibly fast. My clients always compliment how professional it looks."',
    date: '1 month ago',
  },
  {
    initials: 'EW', name: 'Emma Watson', role: 'Creative Director, Studio W',
    avatarStyle: { background: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    text: '"Working together was a dream. He captured our brand vision perfectly and delivered ahead of schedule. The attention to detail is remarkable — every animation feels intentional."',
    date: '3 weeks ago',
  },
  {
    initials: 'JL', name: 'James Liu', role: 'Product Manager, DataFlow',
    avatarStyle: { background: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    text: '"Exceptional technical skills combined with great design sensibility. Delivered a complex SaaS dashboard that our team loves using every day. Highly recommend!"',
    date: '1 week ago',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">Clients Share Their <span className="gradient-text">Experience</span></h2>
        </div>

        <div className="testimonials-carousel reveal-up">
          <div style={{ overflow: 'hidden', borderRadius: '24px' }}>
            <div
              className="testimonials-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div key={i} className="testimonial-card">
                  <div className="testi-header">
                    <div className="testi-avatar" style={item.avatarStyle}>{item.initials}</div>
                    <div className="testi-meta">
                      <strong>{item.name}</strong>
                      <span>{item.role}</span>
                    </div>
                    <div className="testi-stars">★★★★★</div>
                  </div>
                  <p>{item.text}</p>
                  <div className="testi-date">{item.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prev}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>
            <div className="carousel-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${current === i ? ' active' : ''}`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={next}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
