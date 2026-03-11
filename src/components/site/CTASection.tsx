import Reveal from '@/components/site/Reveal';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="section-padding pt-0">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-100 bg-[linear-gradient(135deg,#0a2940_0%,#10405f_55%,#15618a_100%)] p-8 text-white shadow-[0_30px_95px_rgba(3,36,57,0.34)] sm:p-10 lg:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(103,232,249,0.24),transparent_28%),radial-gradient(circle_at_100%_100%,rgba(14,165,233,0.2),transparent_30%)]" aria-hidden="true" />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="relative">
                <span className="section-eyebrow-dark">Start a conversation</span>
                <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold text-white md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-cyan-50 md:text-lg">{description}</p>
              </div>
              <div className="relative flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link to={primaryTo} className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5">
                  {primaryLabel}
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  to={secondaryTo}
                  className="focus-ring inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white transition hover:bg-white/18"
                >
                  {secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CTASection;
