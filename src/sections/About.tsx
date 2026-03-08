import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';
import CountUp from '@/components/site/CountUp';
import { Globe2, Layers3, LockKeyhole, Workflow } from 'lucide-react';

const principles = [
  {
    icon: LockKeyhole,
    title: 'Secure by design',
    description: 'Threat-aware architecture, access control, and delivery guardrails are part of the baseline, not an afterthought.',
  },
  {
    icon: Layers3,
    title: 'Scalable systems thinking',
    description: 'We shape platforms that can evolve across product, data, and operations without adding unnecessary complexity.',
  },
  {
    icon: Workflow,
    title: 'Integration fluency',
    description: 'From internal tools to customer-facing journeys, we connect the systems that keep your business moving.',
  },
  {
    icon: Globe2,
    title: 'Outcome-led partnership',
    description: 'We work with stakeholders closely, report clearly, and focus on shipping measurable business progress.',
  },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-8">
            <SectionIntro
              eyebrow="About Techionyx"
              title="A software studio for companies that need engineering maturity, not just extra hands."
              description="We design and build secure web platforms, mobile experiences, cloud-native backends, and the integrations that make modern operations work. Every engagement is structured to reduce risk, accelerate delivery, and create a product foundation your team can trust."
            />

            <Reveal delay={120}>
              <div className="panel overflow-hidden p-6 sm:p-8">
                <div className="grid gap-8 sm:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-slate-500">Products launched</p>
                    <p className="mt-3 text-4xl font-semibold text-slate-950">
                      <CountUp end={40} suffix="+" />
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Average NPS</p>
                    <p className="mt-3 text-4xl font-semibold text-slate-950">
                      <CountUp end={72} />
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Core regions served</p>
                    <p className="mt-3 text-4xl font-semibold text-slate-950">
                      <CountUp end={3} />
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 90 + 80}>
                <article className="panel h-full p-6 sm:p-7">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-[0_14px_40px_rgba(14,165,233,0.14)]">
                    <item.icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
