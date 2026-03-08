import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigationLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Results', href: '#results' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? 'border-white/70 bg-white/88 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl'
            : 'border-white/15 bg-slate-950/30 backdrop-blur-md'
        }`}
        aria-label="Primary"
      >
        <a href="#home" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-cyan-300 text-base font-bold text-white shadow-[0_12px_30px_rgba(14,165,233,0.38)]">
            Tx
          </span>
          <span>
            <span className={`block text-sm font-semibold ${isScrolled ? 'text-slate-950' : 'text-white'}`}>
              Techionyx
            </span>
            <span className={`block text-xs ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Software Studio
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`focus-ring text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-sky-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="mailto:hello@techionyx.com"
            className={`focus-ring text-sm font-medium transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-slate-950' : 'text-slate-200 hover:text-white'
            }`}
          >
            hello@techionyx.com
          </a>
          <Button
            asChild
            className="rounded-full bg-slate-950 px-5 text-white shadow-[0_16px_40px_rgba(15,23,42,0.24)] hover:-translate-y-0.5 hover:bg-slate-900"
          >
            <a href="#contact">Book a discovery call</a>
          </Button>
        </div>

        <button
          type="button"
          className={`focus-ring inline-flex size-11 items-center justify-center rounded-full border lg:hidden ${
            isScrolled ? 'border-slate-200 bg-white text-slate-950' : 'border-white/20 bg-white/10 text-white'
          }`}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 lg:hidden ${
          isMobileMenuOpen ? 'mt-3 max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-7xl rounded-[28px] border border-white/10 bg-slate-950/94 p-5 text-white shadow-[0_30px_100px_rgba(2,6,23,0.38)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="focus-ring rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-sky-400/40 hover:bg-white/5 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="mailto:hello@techionyx.com"
              className="focus-ring rounded-2xl border border-white/10 px-4 py-3 text-sm text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              hello@techionyx.com
            </a>
            <Button asChild className="h-12 rounded-2xl bg-sky-500 text-white hover:bg-sky-400">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book a discovery call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
