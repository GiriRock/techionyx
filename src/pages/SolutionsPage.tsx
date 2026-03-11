import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { industries, solutionDetails } from '@/content/site';

const SolutionsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Enterprise Solutions"
        title="Industry-aware solution delivery for complex transformation programs."
        description="We shape solutions around operational reality: users, systems, governance requirements, and measurable commercial outcomes."
        tone="dark"
      />

      <PageSection className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionHeading
            eyebrow="Solution Areas"
            title="Strategic solution models grounded in real business operations."
            description="Rather than generic templates, we deliver solution programs tailored to process maturity, system landscape, and enterprise constraints."
            align="center"
          />

          <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3" staggerDelay={0.1}>
            {solutionDetails.map((solution) => (
              <StaggerItem key={solution.slug} className="h-full flex flex-col">
                <EnterpriseCard
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  bullets={solution.highlights}
                  className="flex-1"
                />
                <Link to={`/solutions/${solution.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                  View solution detail
                  <ArrowUpRight className="size-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <PageSection className="bg-corporate-50 relative border-y border-corporate-200/50">
        <div className="absolute inset-0 grid-bg-light opacity-40 mix-blend-overlay" aria-hidden="true" />
        <div id="industries" className="shell relative z-10">
          <SectionHeading
            eyebrow="Industries"
            title="Delivery expertise across sectors where process trust and scale are essential."
            description="Our teams operate in environments with multiple stakeholders, compliance needs, and high expectations for reliability."
            align="center"
          />

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4" staggerDelay={0.1}>
            {industries.map((industry) => (
              <StaggerItem key={industry.title} className="h-full">
                <EnterpriseCard icon={industry.icon} title={industry.title} description={industry.description} className="h-full" />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <CTASection
        title="Planning a solution that must connect workflows, users, and enterprise systems?"
        description="We can define the architecture, program structure, and phased rollout strategy for your environment."
        primaryTo="/contact"
        secondaryTo="/products"
      />
    </>
  );
};

export default SolutionsPage;
