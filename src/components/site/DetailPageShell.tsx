import type { ReactNode } from 'react';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
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
          <div className="premium-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Highlights</p>
            <StaggerContainer className="mt-6 grid gap-3 sm:grid-cols-2" staggerDelay={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat} className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm leading-6 text-corporate-200">
                  {stat}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        }
      />

      <PageSection className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading eyebrow="Overview" title={summaryTitle} description={summaryBody} />

          <ScrollReveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-corporate-200/50 bg-white/80 p-6 shadow-premium backdrop-blur-xl sm:p-10">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-corporate-950">{leftTitle}</h3>
                  <StaggerContainer className="mt-5 space-y-3 text-sm leading-7 text-corporate-600 sm:text-base">
                    {leftItems.map((item) => (
                      <StaggerItem key={item} className="rounded-2xl border border-corporate-100 bg-corporate-50/50 px-5 py-3.5 shadow-sm">
                        {item}
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-corporate-950">{rightTitle}</h3>
                  <StaggerContainer className="mt-5 space-y-3 text-sm leading-7 text-corporate-600 sm:text-base">
                    {rightItems.map((item) => (
                      <StaggerItem key={item} className="rounded-2xl border border-corporate-100 bg-corporate-50/50 px-5 py-3.5 shadow-sm">
                        {item}
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </PageSection>

      <PageSection className="bg-corporate-50 relative border-t border-corporate-200/50">
        <div className="absolute inset-0 grid-bg-light opacity-40 mix-blend-overlay" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionHeading
            eyebrow="Related Capabilities"
            title="Explore adjacent offers in our enterprise portfolio."
            description="Each capability is designed to integrate into a broader products + services + solutions transformation model."
            align="center"
          />
          <div className="mt-16">{related}</div>
        </div>
      </PageSection>

      <CTASection title={ctaTitle} description={ctaDescription} primaryTo="/contact" secondaryTo="/services" />
    </>
  );
};

export default DetailPageShell;
