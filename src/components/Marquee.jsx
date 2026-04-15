const items = ['Web Design','UI / UX','Development','Branding','SEO','Mobile Apps'];
const doubled = [...items, ...items, ...items, ...items];

export default function Marquee() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {doubled.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 40 }}>
              <span>{item}</span>
              <span className="separator">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
