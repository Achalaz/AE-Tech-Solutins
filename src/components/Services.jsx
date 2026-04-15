import { useState } from 'react';

const services = [
  {
    num: '01', label: 'Web Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Web Design',
    desc: 'Crafting visually stunning, pixel-perfect websites that leave lasting impressions. From wireframes to final designs, every pixel is intentional and purposeful.',
    features: ['Responsive Design','Custom Animations','Brand-aligned Aesthetics','Conversion Optimization'],
  },
  {
    num: '02', label: 'Development',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    desc: 'Building robust, scalable applications with modern tech stacks. Performance-first development that ensures your digital product works flawlessly at any scale.',
    features: ['React / Next.js','Node.js Backend','Database Architecture','API Integration'],
  },
  {
    num: '03', label: 'UI / UX',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'UI / UX Design',
    desc: 'Creating intuitive user experiences backed by research and testing. Designing interfaces that are not just beautiful, but genuinely easy and delightful to use.',
    features: ['User Research','Wireframing & Prototyping','Usability Testing','Design Systems'],
  },
  {
    num: '04', label: 'Digital Strategy',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    title: 'Digital Strategy',
    desc: 'Developing comprehensive digital roadmaps that align technology with business goals. Strategic planning that ensures every digital investment drives real results.',
    features: ['Competitive Analysis','Growth Roadmaps','Technology Consulting','Performance KPIs'],
  },
  {
    num: '05', label: 'SEO & Growth',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
        <polyline points="16,7 22,7 22,13"/>
      </svg>
    ),
    title: 'SEO & Growth',
    desc: 'Driving organic traffic and sustainable growth through technical SEO and content strategies. Getting your business found by the people who matter most.',
    features: ['Technical SEO Audit','Keyword Strategy','Performance Optimization','Analytics & Reporting'],
  },
];

export default function Services() {
  const [active, setActive] = useState(0);

  const panel = services[active];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">What I Do</span>
          <h2 className="section-title">Expertise &amp; <span className="gradient-text">Services</span></h2>
        </div>
        <div className="services-layout">
          <div className="services-switcher reveal-left">
            {services.map((s, i) => (
              <div
                key={i}
                className={`switcher-item${active === i ? ' active' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="switcher-num">{s.num}</span>
                <span className="switcher-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="services-content reveal-right">
            <div key={active} className="service-panel active">
              <div className="service-icon">{panel.icon}</div>
              <h3>{panel.title}</h3>
              <p>{panel.desc}</p>
              <ul className="service-features">
                {panel.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
