import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { ScrollReveal } from '@/components/ui/ScrollReveal';

type CTASectionProps = {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
};

const CTASection = ({
  title,
  description,
  primaryLabel = 'Book a discovery call',
  primaryTo = '/contact',
  secondaryLabel = 'Explore our services',
  secondaryTo = '/services',
}: CTASectionProps) => {
  return (
    <section className="section-padding bg-corporate-50 relative">
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />

      <div className="shell relative z-10">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-corporate-900 px-6 py-16 sm:px-16 sm:py-20 lg:p-24 shadow-brand-500/10 shadow-2xl">
            <div className="absolute inset-0 b2b-gradient-dark mix-blend-multiply" aria-hidden="true" />
            <div className="absolute inset-0 grid-bg-dark opacity-40 mix-blend-overlay" aria-hidden="true" />

            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="section-eyebrow-dark">Start a conversation</span>
                <h2 className="mt-6 max-w-3xl text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {title}
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-corporate-300 md:text-xl">{description}</p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link to={primaryTo} className="focus-ring btn-primary px-8 py-4 text-base shadow-brand-500/25 justify-center">
                  {primaryLabel}
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
                <Link
                  to={secondaryTo}
                  className="focus-ring btn-secondary-dark px-8 py-4 text-base justify-center"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
