import { useEffect, useRef } from 'react';

const skills = [
  { name: 'React / Next.js', width: 92 },
  { name: 'UI / UX Design', width: 88 },
  { name: 'Node.js / PHP', width: 85 },
  { name: 'Digital Marketing', width: 78 },
];

function SkillBar({ name, width }) {
  const fillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && fillRef.current) {
        fillRef.current.style.width = width + '%';
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    if (fillRef.current) observer.observe(fillRef.current.parentElement);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div className="skill-item">
      <span className="skill-name">{name}</span>
      <div className="skill-bar">
        <div className="skill-fill" ref={fillRef} />
      </div>
    </div>
  );
}

export default function About() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left reveal-left">
            <div className="about-img-wrapper">
              <div className="about-img-placeholder">
                <div className="img-glow" />
                <div className="img-content">
                  <div className="avatar-initials">AE</div>
                  <div className="avatar-role">Tech Solutions</div>
                </div>
                <div className="img-badge">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                  </svg>
                  Top Rated
                </div>
              </div>
              <div className="about-card card-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22,7 13.5,15.5 8.5,10.5 2,17"/>
                </svg>
                <div>
                  <strong>+120%</strong>
                  <span>Avg. Traffic Growth</span>
                </div>
              </div>
              <div className="about-card card-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <div>
                  <strong>100%</strong>
                  <span>Client Satisfaction</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right reveal-right">
            <span className="section-tag">About Me</span>
            <h2 className="section-title">
              Crafting Digital<br />
              <span className="gradient-text">Experiences</span> That Drive Growth
            </h2>
            <p className="about-desc">
              AE Tech Solutions is a passionate digital agency based in India. With 4+ years
              of experience, we blend technical expertise with creative vision to build digital
              products that not only look stunning but perform exceptionally.
            </p>
            <p className="about-desc">
              Our approach is simple: understand your goals, craft thoughtful solutions, and
              deliver results that exceed expectations.
            </p>

            <div className="skills-grid">
              {skills.map(s => <SkillBar key={s.name} {...s} />)}
            </div>

            <div className="about-actions">
              <button className="btn-primary" onClick={() => scrollTo('contact')}>
                <span>Hire Me</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </button>
              <a className="btn-ghost" href="#">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
