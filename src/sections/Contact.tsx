import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-corporate-50 relative">
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />

      <div className="shell relative z-10">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-corporate-900 px-6 py-16 sm:px-16 sm:py-20 lg:p-24 shadow-brand-500/10 shadow-2xl">
            {/* Architectural Background */}
            <div className="absolute inset-0 b2b-gradient-dark mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-0 grid-bg-dark opacity-40 mix-blend-overlay" aria-hidden="true" />

            {/* Glow overlays */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-4xl mx-auto text-center">
              <span className="section-eyebrow-dark justify-center mb-8">Strategic Partnership</span>

              <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ready to accelerate your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">enterprise transformation?</span>
              </h2>

              <p className="mt-8 text-lg leading-relaxed text-corporate-300 sm:text-xl max-w-2xl mx-auto">
                Connect with our strategic leadership team to review your roadmap, define your core execution model, and identify the fastest path to measurable outcomes.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link to="/contact" className="w-full sm:w-auto focus-ring btn-primary px-8 py-4 text-base shadow-brand-500/25 justify-center">
                  Start a strategic conversation
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
                <a
                  href="mailto:hello@techionyx.com"
                  className="w-full sm:w-auto focus-ring btn-secondary-dark px-8 py-4 text-base justify-center"
                >
                  Email strategy team
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;
