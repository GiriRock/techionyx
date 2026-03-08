import CountUp from '@/components/site/CountUp';
import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';

const testimonials = [
  {
    quote: 'Techionyx brought structure to a very messy modernization effort. The team shipped with calm confidence and gave leadership a much stronger sense of control.',
    name: 'VP of Product',
    company: 'B2B SaaS platform',
  },
  {
    quote: 'What stood out most was the balance of design quality and engineering rigor. We were able to move faster without creating downstream platform debt.',
    name: 'Operations Director',
    company: 'Regional logistics company',
  },
];

const Results = () => {
  return (
    <section id="results" className="section-padding">
      <div className="shell">
        <SectionIntro
          eyebrow="Results"
          title="A delivery experience designed to build confidence from the first conversation."
          description="The strongest trust signal is consistent execution. We combine transparent communication, elegant implementation, and dependable release quality so your stakeholders can move forward with confidence."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="panel h-full p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[24px] bg-slate-950 p-6 text-white">
                  <p className="text-sm text-slate-300">Client satisfaction</p>
                  <p className="mt-3 text-5xl font-semibold">
                    <CountUp end={98} suffix="%" />
                  </p>
                </div>
                <div className="rounded-[24px] bg-sky-50 p-6">
                  <p className="text-sm text-slate-500">Stakeholder reporting cadence</p>
                  <p className="mt-3 text-5xl font-semibold text-slate-950">
                    <CountUp end={1} suffix=" wk" />
                  </p>
                </div>
                <div className="rounded-[24px] bg-slate-50 p-6">
                  <p className="text-sm text-slate-500">Average kickoff lead time</p>
                  <p className="mt-3 text-5xl font-semibold text-slate-950">
                    <CountUp end={10} suffix=" days" />
                  </p>
                </div>
                <div className="rounded-[24px] bg-sky-500 p-6 text-white shadow-[0_18px_45px_rgba(14,165,233,0.24)]">
                  <p className="text-sm text-sky-100">Operational visibility</p>
                  <p className="mt-3 text-lg leading-7">Structured updates, practical risk flags, and clean handoff documentation as standard.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {testimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 90}>
                <article className="panel h-full p-6 sm:p-8">
                  <p className="text-lg leading-8 text-slate-700 sm:text-xl">“{testimonial.quote}”</p>
                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
                    <div>
                      <p className="font-semibold text-slate-950">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Client perspective
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
