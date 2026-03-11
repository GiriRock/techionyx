import DetailPageShell from '@/components/site/DetailPageShell';
import Reveal from '@/components/site/Reveal';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import { getServiceBySlug, serviceDetails } from '@/content/site';
import { ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = serviceDetails.filter((item) => item.slug !== service.slug).slice(0, 2);

  return (
    <DetailPageShell
      eyebrow={service.eyebrow}
      title={service.title}
      description={service.description}
      summaryTitle={service.summary}
      summaryBody="This service is designed for organizations that need mature engineering execution paired with consultative guidance, clear stakeholder communication, and enterprise-quality delivery discipline."
      stats={service.highlights ?? []}
      leftTitle="Engagement focus"
      leftItems={service.engagementFocus}
      rightTitle="Typical deliverables"
      rightItems={service.deliverables}
      related={
        <div className="grid gap-6 md:grid-cols-2">
          {relatedServices.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              <Link to={`/services/${item.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                  View service detail
                  <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      }
      ctaTitle="Need this capability inside a broader product, platform, or transformation engagement?"
      ctaDescription="We can scope the right service model around your systems, stakeholders, and delivery timeline."
    />
  );
};

export default ServiceDetailPage;
