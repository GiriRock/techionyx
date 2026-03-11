import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
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
          <div className="premium-card-dark p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500">Core intent</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-corporate-200 sm:text-base">
              <li>Align technology investment to measurable business outcomes.</li>
              <li>Build resilient systems that scale with operational complexity.</li>
              <li>Support multi-year transformation with senior technical leadership.</li>
            </ul>
          </div>
        }
      />

      <PageSection className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionHeading
            eyebrow="Operating Model"
            title="Our company model combines strategy, design, engineering, and enterprise governance."
            description="We partner with CIO, CTO, and transformation teams to move from fragmented digital initiatives to connected execution across products, platforms, and operations."
          />
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4" staggerDelay={0.1}>
            {companyPillars.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <PageSection className="bg-corporate-50 relative border-y border-corporate-200/50">
        <div className="absolute inset-0 grid-bg-light opacity-40 mix-blend-overlay" aria-hidden="true" />
        <div className="shell relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionHeading
            eyebrow="Why Organizations Select Us"
            title="Built for high-stakes initiatives where delivery discipline is non-negotiable."
            description="Our teams bring structured execution, transparent governance, and practical technical leadership across enterprise programs."
          />
          <StaggerContainer className="grid gap-8 sm:grid-cols-2" staggerDelay={0.1}>
            {whyChooseUsCards.map((item) => (
              <StaggerItem key={item.title} className="h-full">
                <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <PageSection className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionHeading
            eyebrow="Execution Lifecycle"
            title="A repeatable process engineered for enterprise alignment and momentum."
            description="Each phase is designed to reduce delivery risk while improving decision velocity and stakeholder confidence."
            align="center"
          />
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.1}>
            {processSteps.map((step) => (
              <StaggerItem key={step.step}>
                <article className="premium-card p-8 sm:p-10">
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">Phase {step.step}</span>
                  <h3 className="mt-4 text-2xl font-bold text-corporate-950">{step.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-corporate-600">{step.description}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
