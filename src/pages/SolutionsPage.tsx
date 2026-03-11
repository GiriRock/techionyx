import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
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
      />

      <PageSection>
        <div className="shell">
          <SectionHeading
            eyebrow="Solution Areas"
            title="Strategic solution models grounded in real business operations."
            description="Rather than generic templates, we deliver solution programs tailored to process maturity, system landscape, and enterprise constraints."
            align="center"
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {solutionDetails.map((solution, index) => (
              <Reveal key={solution.slug} delay={index * 85}>
                <EnterpriseCard
                  icon={solution.icon}
                  title={solution.title}
                  description={solution.description}
                  bullets={solution.highlights}
                  className="h-full"
                />
                <Link to={`/solutions/${solution.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                  View solution detail
                  <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-white/50">
        <div id="industries" className="shell">
          <SectionHeading
            eyebrow="Industries"
            title="Delivery expertise across sectors where process trust and scale are essential."
            description="Our teams operate in environments with multiple stakeholders, compliance needs, and high expectations for reliability."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal key={industry.title} delay={index * 80}>
                <EnterpriseCard icon={industry.icon} title={industry.title} description={industry.description} className="h-full" />
              </Reveal>
            ))}
          </div>
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
