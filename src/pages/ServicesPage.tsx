import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { serviceDetails } from '@/content/site';

const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Software Engineering Services"
        title="Enterprise-grade engineering services for build, modernization, and scale."
        description="From architecture to managed evolution, our service lines are designed for organizations that need maturity, execution quality, and measurable program outcomes."
        tone="dark"
      />

      <PageSection className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionHeading
            eyebrow="Service Lines"
            title="Consultative engineering delivery across product, platform, and operations."
            description="Our service model supports teams that need reliable delivery while maintaining architecture quality, security posture, and long-term maintainability."
            align="center"
          />

          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.1}>
            {serviceDetails.map((service) => (
              <StaggerItem key={service.slug} className="h-full flex flex-col">
                <EnterpriseCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  bullets={service.highlights}
                  className="flex-1"
                />
                <Link to={`/services/${service.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                  View service detail
                  <ArrowUpRight className="size-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <CTASection
        title="Need a delivery partner for an integration-heavy or modernization-led engineering program?"
        description="We shape engagement models around your operating context, team maturity, and the outcomes your leadership expects."
        primaryTo="/contact"
        secondaryTo="/company"
      />
    </>
  );
};

export default ServicesPage;
