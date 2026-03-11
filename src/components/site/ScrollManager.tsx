import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SCROLL_OFFSET = 112;

const ScrollManager = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));

      if (element) {
        window.requestAnimationFrame(() => {
          const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

          window.scrollTo({
            top: Math.max(top, 0),
            left: 0,
            behavior: 'smooth',
          });
        });
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.hash, location.pathname]);

  return null;
};

export default ScrollManager;
