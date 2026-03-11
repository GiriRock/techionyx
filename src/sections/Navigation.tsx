import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import { headerNav } from '@/content/home';

const quickLinks = [
  { label: 'Why us', to: '/#why-us' },
  { label: 'Process', to: '/#process' },
  { label: 'Expertise', to: '/#expertise' },
];

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const lastScrollY = useRef(0);
  const [isHidden, setIsHidden] = useState(false);

  // Since all pages conform to the Dark Hero -> Light Content flow,
  // we only need the frosted theme on scroll.
  const useFrostedTheme = isScrolled;

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 20);

      if (current < 80) {
        setIsHidden(false);
      } else if (current > lastScrollY.current && current > 180 && !isMobileMenuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = current;
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveHash('');
      return;
    }

    const sectionIds = quickLinks.map((item) => item.to.split('#')[1]).filter(Boolean) as string[];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) {
      setActiveHash(location.hash || '');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: '-42% 0px -45% 0px', threshold: [0.2, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.hash, location.pathname]);

  const isQuickLinkActive = (to: string) => {
    const hash = to.includes('#') ? `#${to.split('#')[1]}` : '';

    if (location.pathname !== '/') {
      return location.pathname + location.hash === to;
    }

    if (hash) {
      return activeHash === hash || (!activeHash && location.hash === hash);
    }

    return false;
  };

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={cn('fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8', isHidden ? '-translate-y-[130%]' : '')}>
      <nav
        className={cn(
          'mx-auto flex max-w-[1400px] items-center justify-between rounded-[2rem] px-5 py-4 transition-all duration-500 sm:px-8',
          useFrostedTheme ? 'border border-white/10 bg-corporate-950/80 shadow-premium-lg backdrop-blur-xl' : 'border border-transparent bg-transparent'
        )}
        aria-label="Primary"
      >
        <Link to="/" className="focus-ring flex items-center gap-4 rounded-xl">
          <span className={cn(
            "flex size-11 items-center justify-center rounded-xl font-bold shadow-premium transition-all duration-300",
            useFrostedTheme ? "bg-brand-500 text-corporate-950" : "bg-white/10 text-white backdrop-blur-md border border-white/20"
          )}>
            Tx
          </span>
          <span className="hidden sm:block">
            <span className="block text-base font-bold tracking-tight text-white">Techionyx</span>
            <span className="block text-xs font-medium text-corporate-400">Enterprise Solutions</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {headerNav.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
                  isActive
                    ? 'bg-white/10 text-white shadow-sm border border-white/10'
                    : 'text-corporate-300 hover:bg-white/5 hover:text-white'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="ml-3 flex items-center gap-1 border-l border-white/10 pl-3">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  'focus-ring rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
                  isQuickLinkActive(item.to)
                    ? 'bg-brand-500/20 text-brand-500 border border-brand-500/30'
                    : 'text-corporate-300 hover:bg-white/5 hover:text-white'
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <a href="mailto:hello@techionyx.com" className="focus-ring text-sm font-semibold text-corporate-300 transition-colors duration-300 hover:text-white">
            hello@techionyx.com
          </a>
          <Link to="/contact" className={cn(
            "focus-ring rounded-xl px-6 py-2.5 text-sm font-bold transition-all duration-300 shadow-premium",
            useFrostedTheme
              ? "bg-corporate-200 text-corporate-950 hover:bg-white hover:shadow-premium-glow hover:border-brand-500 border border-transparent"
              : "bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-md"
          )}>
            Let's Talk
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/10 xl:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMobileMenuOpen((state) => !state)}
        >
          {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <div className={cn('overflow-hidden transition-[max-height,opacity,margin] duration-500 xl:hidden', isMobileMenuOpen ? 'mt-4 max-h-[800px] opacity-100' : 'max-h-0 opacity-0')}>
        <div
          id="mobile-navigation"
          className="mx-auto max-w-7xl rounded-3xl border border-corporate-800 bg-corporate-950/95 p-6 text-white shadow-premium-lg backdrop-blur-2xl"
        >
          <div className="grid gap-3">
            {[...headerNav, ...quickLinks].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="focus-ring rounded-xl border border-white/5 bg-white/5 px-5 py-4 text-base font-semibold text-corporate-200 transition-all hover:border-brand-500/30 hover:bg-white/10 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="focus-ring mt-4 rounded-xl bg-brand-500 px-5 py-4 text-center text-base font-bold text-white transition-all hover:bg-brand-600 shadow-premium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Speak with our team
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
