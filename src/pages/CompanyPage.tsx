import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { companyPillars, processSteps, whyChooseUsCards } from '@/content/site';

const CompanyPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="A corporate technology company built to deliver products, engineering programs, and enterprise transformation outcomes."
        description="Techionyx operates at the intersection of product innovation, software engineering services, and strategic consulting so organizations can modernize with execution certainty."
        tone="dark"
        aside={
          <div className="panel-dark p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">Core intent</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200 sm:text-base">
              <li>Align technology investment to measurable business outcomes.</li>
              <li>Build resilient systems that scale with operational complexity.</li>
              <li>Support multi-year transformation with senior technical leadership.</li>
            </ul>
          </div>
        }
      />

      <PageSection>
        <div className="shell">
          <SectionHeading
            eyebrow="Operating Model"
            title="Our company model combines strategy, design, engineering, and enterprise governance."
            description="We partner with CIO, CTO, and transformation teams to move from fragmented digital initiatives to connected execution across products, platforms, and operations."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {companyPillars.map((item, index) => (
              <Reveal key={item.title} delay={index * 70}>
                <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-white/50">
        <div className="shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Organizations Select Us"
            title="Built for high-stakes initiatives where delivery discipline is non-negotiable."
            description="Our teams bring structured execution, transparent governance, and practical technical leadership across enterprise programs."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUsCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="shell">
          <SectionHeading
            eyebrow="Execution Lifecycle"
            title="A repeatable process engineered for enterprise alignment and momentum."
            description="Each phase is designed to reduce delivery risk while improving decision velocity and stakeholder confidence."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 75}>
                <article className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_16px_50px_rgba(15,23,42,0.08)] sm:p-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">Phase {step.step}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <CTASection
        title="Looking for a long-term technology partner instead of a short-term delivery vendor?"
        description="We work with executive, product, and operations teams to build practical transformation roadmaps and deliver them with confidence."
        primaryTo="/contact"
        secondaryTo="/services"
      />
    </>
  );
};

export default CompanyPage;
