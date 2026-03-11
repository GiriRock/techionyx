import { BadgeCheck } from 'lucide-react';

import { ScrollReveal } from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/site/home/SectionHeading';
import { proofPoints, trustMetrics } from '@/content/home';

const Results = () => {
  return (
    <section id="trust" className="section-padding bg-white relative">
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Trust and Proof"
          title="Credible outcomes backed by mature delivery operations."
          description="Our client engagements focus on measurable improvements in cycle time, reliability, operational visibility, and long-term platform quality."
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal>
            <div className="premium-card p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-corporate-950">Execution quality signals</h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-corporate-100 bg-corporate-50 p-5">
                    <p className="text-4xl font-bold tracking-tight text-corporate-950">{metric.value}</p>
                    <p className="mt-2 text-sm font-medium text-corporate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="premium-card p-8 sm:p-10 bg-gradient-to-br from-corporate-50 to-white">
              <h3 className="text-2xl font-bold text-corporate-950">Why enterprise teams stay with us</h3>
              <ul className="mt-8 space-y-5">
                {proofPoints.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-base leading-7 text-corporate-700">
                    <BadgeCheck className="mt-0.5 size-6 shrink-0 text-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Results;
