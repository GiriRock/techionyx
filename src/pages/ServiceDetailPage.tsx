import DetailPageShell from '@/components/site/DetailPageShell';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
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
        <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.1}>
          {relatedServices.map((item) => (
            <StaggerItem key={item.slug} className="h-full flex flex-col">
              <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="flex-1" />
              <Link to={`/services/${item.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                View service detail
                <ArrowUpRight className="size-4" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      }
      ctaTitle="Need this capability inside a broader product, platform, or transformation engagement?"
      ctaDescription="We can scope the right service model around your systems, stakeholders, and delivery timeline."
    />
  );
};

export default ServiceDetailPage;
