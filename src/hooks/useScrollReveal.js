import { useEffect } from 'react';

// Global scroll reveal — runs once on mount to observe all .reveal-* elements
export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
        observer.observe(el);
      });
    };

    // Run after initial paint
    const t = setTimeout(observe, 100);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);
}
