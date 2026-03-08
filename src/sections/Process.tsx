import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';

const phases = [
  {
    step: '01',
    title: 'Discover and align',
    description: 'Clarify goals, constraints, integration realities, and the delivery path that creates the fastest confidence.',
  },
  {
    step: '02',
    title: 'Design the right system',
    description: 'Shape user flows, architecture, and implementation scope around quality, speed, and maintainability.',
  },
  {
    step: '03',
    title: 'Ship in focused increments',
    description: 'Move through weekly progress with transparent checkpoints, testable outcomes, and crisp communication.',
  },
  {
    step: '04',
    title: 'Stabilize and evolve',
    description: 'Support rollout, harden the platform, and create the operational runway for the next stage of growth.',
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding">
      <div className="shell">
        <SectionIntro
          eyebrow="Process"
          title="A disciplined delivery model that keeps momentum high and surprises low."
          description="Our engagement structure is intentionally simple: align quickly, make strong product and technical decisions, ship in controlled increments, and keep stakeholders informed without slowing delivery down."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-4">
          {phases.map((phase, index) => (
            <Reveal key={phase.step} delay={index * 90}>
              <article className="panel relative h-full p-6 sm:p-7">
                <span className="absolute right-6 top-6 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                  {phase.step}
                </span>
                <div className="mt-10 flex size-12 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
                  {phase.step}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{phase.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
