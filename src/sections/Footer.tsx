import { ArrowUpRight, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

import { footerLinks } from '@/content/home';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-corporate-950 text-corporate-300">
      <div className="absolute inset-0 grid-bg-dark opacity-30" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="shell relative py-16 sm:py-24">
        <ScrollReveal once>
          <div className="grid gap-12 border-b border-white/10 pb-12 xl:grid-cols-[1.5fr_0.8fr_0.8fr_0.8fr]">
            <div className="max-w-md">
              <Link to="/" className="focus-ring inline-flex items-center gap-4 rounded-xl">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-600 text-lg font-bold text-white shadow-premium">
                  Tx
                </span>
                <span>
                  <span className="block text-xl font-bold tracking-tight text-white">Techionyx</span>
                  <span className="block text-sm font-medium text-corporate-400">Enterprise Technology Partner</span>
                </span>
              </Link>

              <p className="mt-6 text-base leading-relaxed text-corporate-400">
                We design and deliver enterprise technology across products, software engineering services, industry solutions, and digital transformation consulting.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="mailto:hello@techionyx.com" className="focus-ring inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-corporate-200 transition-all hover:bg-white/10 hover:text-white">
                  <Mail className="size-4 text-brand-400" />
                  hello@techionyx.com
                </a>
                <a href="tel:+14155550142" className="focus-ring inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-corporate-200 transition-all hover:bg-white/10 hover:text-white">
                  <Phone className="size-4 text-brand-400" />
                  +1 (415) 555-0142
                </a>
              </div>
            </div>

            {Object.entries(footerLinks).map(([group, links]) => (
              <div key={group}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">{group}</h3>
                <ul className="mt-6 space-y-4">
                  {links.map((item) => (
                    <li key={item.label}>
                      {item.to.startsWith('http') ? (
                        <a className="focus-ring group inline-flex items-center gap-2 text-sm text-corporate-400 transition-colors hover:text-brand-400" href={item.to}>
                          {item.label}
                          <ArrowUpRight className="size-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </a>
                      ) : item.to.startsWith('mailto:') || item.to.startsWith('tel:') ? (
                        <a className="focus-ring text-sm text-corporate-400 transition-colors hover:text-brand-400" href={item.to}>
                          {item.label}
                        </a>
                      ) : (
                        <Link className="focus-ring text-sm text-corporate-400 transition-colors hover:text-brand-400" to={item.to}>
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} once>
          <div className="flex flex-col gap-6 pt-8 text-sm text-corporate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Techionyx. Built for measurable enterprise outcomes.</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <a href="https://www.linkedin.com" className="focus-ring inline-flex items-center gap-2 transition hover:text-brand-400">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
