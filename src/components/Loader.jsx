import { useState, useEffect } from 'react';

export default function Loader({ onDone }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setHidden(true);
      onDone?.();
    }, 1600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`}>
      <div className="loader-inner">
        <div className="loader-logo">AE<span className="accent">.</span></div>
        <div className="loader-bar">
          <div className="loader-fill" />
        </div>
      </div>
    </div>
  );
}
