import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
  ],
  expertise: [
    { name: 'Frontend systems', href: '#expertise' },
    { name: 'Cloud backends', href: '#expertise' },
    { name: 'Integrations', href: '#expertise' },
  ],
  contact: [
    { name: 'hello@techionyx.com', href: 'mailto:hello@techionyx.com' },
    { name: 'Book a discovery call', href: '#contact' },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#040b16] text-slate-300">
      <div className="shell py-12 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.6fr_0.6fr_0.7fr]">
          <div>
            <a href="#home" className="focus-ring inline-flex items-center gap-3 rounded-full">
              <span className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 via-sky-500 to-cyan-300 text-base font-bold text-white shadow-[0_12px_30px_rgba(14,165,233,0.38)]">
                Tx
              </span>
              <span>
                <span className="block text-lg font-semibold text-white">Techionyx</span>
                <span className="block text-sm text-slate-400">Enterprise software studio</span>
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Secure, scalable product engineering for organizations building customer experiences, internal systems, and the integrations that connect them.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:hello@techionyx.com"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
              >
                <Mail className="size-4" />
                hello@techionyx.com
              </a>
              <a
                href="#contact"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm text-sky-200 transition hover:bg-sky-400/20"
              >
                Start a conversation
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{group}</h3>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a className="focus-ring text-sm text-slate-300 transition hover:text-white" href={link.href}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Techionyx. Crafted for serious digital delivery.</p>
          <div className="flex items-center gap-5">
            <a href="#results" className="focus-ring transition hover:text-white">
              Client outcomes
            </a>
            <a href="https://www.linkedin.com" className="focus-ring inline-flex items-center gap-2 transition hover:text-white">
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
