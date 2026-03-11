import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
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

      <PageSection>
        <div className="shell">
          <SectionHeading
            eyebrow="Service Lines"
            title="Consultative engineering delivery across product, platform, and operations."
            description="Our service model supports teams that need reliable delivery while maintaining architecture quality, security posture, and long-term maintainability."
            align="center"
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceDetails.map((service, index) => (
              <Reveal key={service.slug} delay={index * 80}>
                <EnterpriseCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  bullets={service.highlights}
                  className="h-full"
                />
                <Link to={`/services/${service.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                  View service detail
                  <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
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
