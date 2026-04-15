import { useState, useEffect } from 'react';

const navItems = ['Home', 'Services', 'Work', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'services', 'work', 'about', 'contact'];
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) setActive(id);
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-container">
          <a className="nav-logo" href="#home" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
            AE<span className="accent">.</span>
          </a>
          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}>
                <button
                  className={`nav-link${active === item.toLowerCase() ? ' active' : ''}`}
                  onClick={() => scrollTo(item.toLowerCase())}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <button className="nav-cta" onClick={() => scrollTo('contact')}>Let's Talk</button>
          <button
            className={`hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button className="mobile-close" onClick={() => setMenuOpen(false)}>✕</button>
        <ul>
          {navItems.map(item => (
            <li key={item}>
              <button className="mobile-link" onClick={() => scrollTo(item.toLowerCase())}>{item}</button>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`mobile-overlay${menuOpen ? ' visible' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </>
  );
}
