import { useState } from 'react';

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on complexity. A landing page typically takes 1–2 weeks, while a full web application can take 4–12 weeks. I\'ll provide a detailed timeline during our initial consultation.',
  },
  {
    q: 'What is your pricing structure?',
    a: 'I offer both fixed-price and hourly rate models. Fixed pricing works great for projects with clear scope, while hourly rates suit ongoing work and maintenance. All pricing is transparent with no hidden fees.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Absolutely! I offer 30 days of free post-launch support for bug fixes. Beyond that, I have flexible monthly maintenance packages to keep your site running smoothly.',
  },
  {
    q: 'Can you work with my existing design or brand guidelines?',
    a: 'Yes! I can work from your existing brand assets, Figma files, or any design guidelines you have. I can also help refine or create a brand identity if you need one.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'I specialize in React, Next.js, Node.js, PHP, MySQL, and modern CSS. For design, I use Figma. I also have experience with WordPress, Shopify, and various APIs and third-party integrations.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header reveal-up" style={{ textAlign: 'center' }}>
          <span className="section-tag">FAQs</span>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
        </div>
        <div className="faq-list reveal-up">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? ' active' : ''}`}>
              <div className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <div className="faq-icon">+</div>
              </div>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
