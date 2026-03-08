import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';
import { ArrowUpRight, BriefcaseBusiness, Gauge, MessagesSquare, Shield, Users2 } from 'lucide-react';

const differentiators = [
  {
    icon: Shield,
    title: 'Built for trust-heavy environments',
    description: 'We think through data handling, access, reliability, and future maintainability from the first sprint onward.',
  },
  {
    icon: Gauge,
    title: 'Fast, without chaotic delivery',
    description: 'Momentum comes from sharp scoping, smart sequencing, and experienced implementation, not from cutting corners.',
  },
  {
    icon: MessagesSquare,
    title: 'Clear communication with stakeholders',
    description: 'Leaders get concise visibility, teams get practical collaboration, and decisions stay grounded in business goals.',
  },
];

const engagementCards = [
  {
    icon: Users2,
    title: 'Embedded collaboration',
    copy: 'We operate like a focused extension of your team, with shared context and proactive delivery ownership.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Commercially aware execution',
    copy: 'Every recommendation balances technical quality with operational cost, speed, and long-term leverage.',
  },
  {
    icon: ArrowUpRight,
    title: 'Outcome-oriented thinking',
    copy: 'We optimize for launch readiness, stakeholder confidence, and systems your business can actually grow on.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-slate-950" aria-labelledby="why-choose-us-title">
      <div className="absolute inset-0 grid-overlay opacity-10" aria-hidden="true" />
      <div className="shell relative">
        <SectionIntro
          eyebrow="Why Techionyx"
          title="The quality bar of a premium consultancy, with the focus of a product-minded studio."
          description="Clients choose Techionyx when they want more than task execution. They need a partner who can shape the solution, engineer it to a high standard, and present the work with the discipline expected in serious B2B environments."
          invert
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-6">
            {differentiators.map((item, index) => (
              <Reveal key={item.title} delay={index * 90} direction="left">
                <article className="panel-dark flex h-full flex-col gap-5 p-6 sm:p-7">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                    <item.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120} direction="right">
            <aside className="panel-dark h-full overflow-hidden p-6 sm:p-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">How we show up</p>
                <h3 id="why-choose-us-title" className="text-3xl font-semibold text-white">
                  Senior thinking across discovery, design, engineering, and delivery governance.
                </h3>
                <p className="text-base leading-7 text-slate-300">
                  Our teams combine execution depth with systems thinking, so the work remains polished for end users and dependable for internal stakeholders.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {engagementCards.map((card, index) => (
                  <div key={card.title} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-300">
                        <card.icon className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{card.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-400">{card.copy}</p>
                      </div>
                    </div>
                    <div className="mt-4 h-px bg-gradient-to-r from-sky-400/50 via-white/20 to-transparent" />
                    <p className="mt-4 text-sm text-slate-300">0{index + 1}. A structured approach that feels calm, intentional, and predictable for your team.</p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
