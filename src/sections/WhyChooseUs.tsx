import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { whyChooseUs } from '@/content/home';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding bg-corporate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 b2b-gradient-dark" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg-dark opacity-30 mix-blend-overlay" aria-hidden="true" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Why Choose Techionyx"
          title="Built for organizations that need strategic clarity and execution certainty."
          description="Our model combines enterprise governance, product thinking, and engineering depth to de-risk transformation and accelerate business impact."
          light
        />

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" staggerDelay={0.15}>
          {whyChooseUs.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <EnterpriseCard {...item} tone="dark" className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyChooseUs;
