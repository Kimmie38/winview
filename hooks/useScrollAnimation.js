import { useEffect, useRef } from 'react';

export default function useScrollAnimation(ref, options = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px 0px -100px 0px',
    once = true,
  } = options;

  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (once) observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold, rootMargin, once]);
}
