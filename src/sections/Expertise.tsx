import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';
import { BadgeCheck, Binary, CloudCog, Layers2, Lock, SmartphoneCharging } from 'lucide-react';

const capabilityGroups = [
  {
    icon: Layers2,
    title: 'Frontend systems',
    items: ['React / TypeScript', 'Design systems', 'Responsive UX architecture'],
  },
  {
    icon: CloudCog,
    title: 'Cloud and backend',
    items: ['API platforms', 'Serverless and container workflows', 'Observability and deployment pipelines'],
  },
  {
    icon: SmartphoneCharging,
    title: 'Mobile delivery',
    items: ['Cross-platform apps', 'Field and operations tooling', 'Performance-led product flows'],
  },
  {
    icon: Binary,
    title: 'Integration engineering',
    items: ['ERP / CRM integrations', 'Automation pipelines', 'Data exchange and orchestration'],
  },
];

const standards = [
  'Semantic, accessible UI foundations',
  'Performance-aware implementation decisions',
  'Maintainable component architecture',
  'Security-conscious release workflows',
];

const Expertise = () => {
  return (
    <section id="expertise" className="section-padding bg-white/50">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
          <SectionIntro
            eyebrow="Tech Expertise"
            title="Technology choices shaped around longevity, performance, and business fit."
            description="We are comfortable across product surfaces and backend systems, but our real value is selecting the right level of complexity for the stage you are in. The goal is clean execution now and a sane platform later."
          />

          <Reveal delay={120}>
            <div className="panel overflow-hidden p-6 sm:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {capabilityGroups.map((group, index) => (
                  <div key={group.title} className="rounded-[24px] border border-slate-100 bg-slate-50/70 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-sky-600 shadow-[0_12px_30px_rgba(14,165,233,0.12)]">
                        <group.icon className="size-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-950">{group.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <BadgeCheck className="size-4 text-sky-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {index === 1 ? <div className="mt-4 h-px bg-gradient-to-r from-sky-400/60 to-transparent" /> : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] bg-slate-950 p-6 text-white sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <Lock className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Engineering standards that support enterprise-grade trust.</h3>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {standards.map((item) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
