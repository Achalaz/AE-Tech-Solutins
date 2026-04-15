import { useEffect, useRef, useState } from 'react';

function Counter({ target }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 60);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 20);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}</span>;
}

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${p.opacity})`;
        ctx.fill();
      });

      // draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(0,212,255,${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <canvas ref={canvasRef} id="heroCanvas" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="noise-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Available for new projects
        </div>

        <h1 className="hero-title">
          Transformative<br />
          <span className="gradient-text">Digital Solutions</span><br />
          by AE Tech Solutions
        </h1>

        <p className="hero-subtitle">
          We are a full-stack web design &amp; development agency building premium digital
          experiences that drive business growth and lasting impact.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('work')}>
            <span>Explore Work</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </button>
          <button className="btn-ghost" onClick={() => scrollTo('contact')}>Start a Project</button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">
              <Counter target={50} /><span>+</span>
            </div>
            <p>Projects Done</p>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-number">
              <Counter target={30} /><span>+</span>
            </div>
            <p>Clients Served</p>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <div className="stat-number">
              <Counter target={4} /><span>+</span>
            </div>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>

      <div className="rotating-cta" onClick={() => scrollTo('contact')}>
        <svg className="rotating-text" viewBox="0 0 200 200">
          <defs>
            <path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
          </defs>
          <text>
            <textPath href="#circlePath" startOffset="0%">HIRE ME • HIRE ME • HIRE ME • HIRE ME •&nbsp;</textPath>
          </text>
        </svg>
        <div className="rotating-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </section>
  );
}
