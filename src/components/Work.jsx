const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const projects = [
  {
    tag: 'E-Commerce', title: 'ShopNova — E-Commerce Platform', flag: '🇮🇳',
    mockupClass: 'mockup-1',
    navClass: 'nav-cyan', heroClass: '', headingClass: 'h-dark', subClass: 's-dark', btnClass: 'btn-cyan',
  },
  {
    tag: 'SaaS', title: 'DataSync — SaaS Dashboard', flag: '🇺🇸',
    mockupClass: 'mockup-2',
    navClass: 'nav-dark', heroClass: 'dark', headingClass: 'h-light', subClass: 's-light', btnClass: 'btn-blue',
  },
  {
    tag: 'Portfolio', title: 'Lumina — Creative Agency Site', flag: '🇬🇧',
    mockupClass: 'mockup-3',
    navClass: 'nav-purple', heroClass: 'purple', headingClass: 'h-light', subClass: 's-light', btnClass: 'btn-purple',
  },
  {
    tag: 'FinTech', title: 'GreenPay — Payments Platform', flag: '🇦🇺',
    mockupClass: 'mockup-4',
    navClass: 'nav-green', heroClass: 'green', headingClass: 'h-light', subClass: 's-light', btnClass: 'btn-green',
  },
];

function WorkCard({ project, delay }) {
  return (
    <div className="work-card reveal-up" style={{ transitionDelay: `${delay}ms` }}>
      <div className="work-card-img">
        <div className={`work-mockup ${project.mockupClass}`}>
          <div className="mockup-screen">
            <div className="mockup-header">
              <span /><span /><span />
            </div>
            <div className="mockup-body">
              <div className={`site-nav-bar ${project.navClass}`} />
              <div className={`site-hero-mock ${project.heroClass}`}>
                <div className={`site-heading ${project.headingClass}`} />
                <div className={`site-sub ${project.subClass}`} />
                <div className={`site-btn ${project.btnClass}`} />
              </div>
            </div>
          </div>
        </div>
        <div className="work-overlay">
          <a href="#" className="work-view-btn">
            View Project <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="work-card-info">
        <div>
          <span className="work-tag">{project.tag}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="work-flag">{project.flag}</span>
      </div>
    </div>
  );
}

export default function Work() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="work" id="work">
      <div className="container">
        <div className="section-header reveal-up">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Recent <span className="gradient-text">Work</span></h2>
          <p className="section-desc">Handpicked projects that showcase my craft and impact</p>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <WorkCard key={i} project={p} delay={i * 100} />
          ))}
        </div>
        <div className="work-cta reveal-up">
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            <span>Start Your Project</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
