import Reveal from '@/components/site/Reveal';
import SectionIntro from '@/components/site/SectionIntro';
import { AppWindow, Blocks, Cpu, DatabaseZap, Radar, Smartphone } from 'lucide-react';

const services = [
  {
    icon: AppWindow,
    title: 'Product design and frontend engineering',
    description: 'Conversion-focused, enterprise-ready interfaces shaped around real workflows, performance, and usability.',
    highlights: ['Design systems', 'React applications', 'Accessible UI architecture'],
  },
  {
    icon: DatabaseZap,
    title: 'Cloud-native backend systems',
    description: 'Reliable services, APIs, and data models engineered for maintainability, observability, and scale.',
    highlights: ['Service architecture', 'Data platforms', 'Operational resilience'],
  },
  {
    icon: Blocks,
    title: 'Platform modernization',
    description: 'Incremental re-platforming strategies that reduce delivery risk while improving speed and developer experience.',
    highlights: ['Legacy modernization', 'Migration planning', 'Workflow redesign'],
  },
  {
    icon: Smartphone,
    title: 'Mobile and cross-platform delivery',
    description: 'Native-feeling mobile products for teams that need fast execution without compromising on polish.',
    highlights: ['Cross-platform apps', 'Customer journeys', 'Operational field tools'],
  },
  {
    icon: Radar,
    title: 'Integrations and internal tooling',
    description: 'Bridge fragmented systems with automation, orchestration, and interfaces that reduce manual effort.',
    highlights: ['ERP / CRM sync', 'Dashboards', 'Internal platforms'],
  },
  {
    icon: Cpu,
    title: 'Delivery strategy and technical leadership',
    description: 'Bring structure to roadmap decisions, architecture direction, and execution planning with senior guidance.',
    highlights: ['Discovery workshops', 'Solution architecture', 'Execution advisory'],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="shell">
        <SectionIntro
          eyebrow="Services"
          title="Capabilities built for complex digital delivery."
          description="Whether you need a high-trust delivery partner for a customer-facing product or a technical team to modernize internal operations, Techionyx brings strategy, design, engineering, and integration execution together in one streamlined engagement."
          align="center"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 70}>
              <article className="panel group h-full p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-slate-950 text-sky-300 shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="size-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{service.description}</p>
                <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm text-slate-700">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center justify-between gap-4">
                      <span>{highlight}</span>
                      <span className="h-px flex-1 bg-slate-200" />
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
