const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-banner reveal-up">
          <h2>
            Ready to Build Something<br />
            <span className="gradient-text">Extraordinary?</span>
          </h2>
          <button className="btn-primary" onClick={() => scrollTo('contact')}>
            Start a Conversation
          </button>
        </div>

        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">AE<span className="accent">.</span></div>
            <p>AE Tech Solutions — crafting digital experiences that captivate, convert, and endure.</p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {['Web Design', 'Development', 'UI / UX Design', 'SEO & Growth'].map(s => (
                <li key={s}><button style={{background:'none',border:'none',color:'inherit',cursor:'pointer',padding:0,font:'inherit'}} onClick={() => scrollTo('services')}>{s}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              {['Home', 'Work', 'About', 'Contact'].map(n => (
                <li key={n}><button style={{background:'none',border:'none',color:'inherit',cursor:'pointer',padding:0,font:'inherit'}} onClick={() => scrollTo(n.toLowerCase())}>{n}</button></li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              {['LinkedIn', 'GitHub', 'Twitter', 'Dribbble'].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AE Tech Solutions. All rights reserved.</p>
          <p>Made with <span className="accent">♥</span> &amp; Passion</p>
        </div>
      </div>
    </footer>
  );
}
