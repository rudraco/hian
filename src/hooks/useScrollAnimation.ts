import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.style.opacity = '1';
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    });

    const elements = document.querySelectorAll('.glass, [class*="hover-lift"]');
    elements.forEach((el) => {
      if (el instanceof HTMLElement && !el.style.opacity) {
        el.style.opacity = '0';
      }
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
