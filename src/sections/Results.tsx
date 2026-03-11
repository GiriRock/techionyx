import { BadgeCheck } from 'lucide-react';

import Reveal from '@/components/site/Reveal';
import SectionHeading from '@/components/site/home/SectionHeading';
import { proofPoints, trustMetrics } from '@/content/home';

const Results = () => {
  return (
    <section id="trust" className="section-padding">
      <div className="shell">
        <SectionHeading
          eyebrow="Trust and Proof"
          title="Credible outcomes backed by mature delivery operations."
          description="Our client engagements focus on measurable improvements in cycle time, reliability, operational visibility, and long-term platform quality."
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-7 shadow-[0_22px_72px_rgba(15,23,42,0.08)]">
              <h3 className="text-xl font-semibold text-slate-950">Execution quality signals</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {trustMetrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-3xl font-semibold tracking-[-0.03em] text-slate-950">{metric.value}</p>
                    <p className="mt-1 text-sm text-slate-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-cyan-100 bg-gradient-to-b from-cyan-50 to-slate-50 p-7 shadow-[0_20px_64px_rgba(8,145,178,0.12)]">
              <h3 className="text-xl font-semibold text-slate-950">Why enterprise teams stay with us</h3>
              <ul className="mt-5 space-y-4">
                {proofPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-700 sm:text-base">
                    <BadgeCheck className="mt-1 size-4 text-cyan-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Results;
