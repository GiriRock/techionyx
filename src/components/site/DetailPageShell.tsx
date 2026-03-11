import type { ReactNode } from 'react';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
import SectionHeading from '@/components/site/home/SectionHeading';

type DetailPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  summaryTitle: string;
  summaryBody: string;
  stats: string[];
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  related: ReactNode;
  ctaTitle: string;
  ctaDescription: string;
};

const DetailPageShell = ({
  eyebrow,
  title,
  description,
  summaryTitle,
  summaryBody,
  stats,
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  related,
  ctaTitle,
  ctaDescription,
}: DetailPageShellProps) => {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        tone="dark"
        aside={
          <div className="panel-dark p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Highlights</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <PageSection>
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="Overview" title={summaryTitle} description={summaryBody} />
          <Reveal delay={120}>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_58px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{leftTitle}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                    {leftItems.map((item) => (
                      <li key={item} className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-950">{rightTitle}</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                    {rightItems.map((item) => (
                      <li key={item} className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection className="bg-white/50">
        <div className="shell">
          <SectionHeading
            eyebrow="Related Capabilities"
            title="Explore adjacent offers in our enterprise portfolio."
            description="Each capability is designed to integrate into a broader products + services + solutions transformation model."
            align="center"
          />
          <div className="mt-12">{related}</div>
        </div>
      </PageSection>

      <CTASection title={ctaTitle} description={ctaDescription} primaryTo="/contact" secondaryTo="/services" />
    </>
  );
};

export default DetailPageShell;
