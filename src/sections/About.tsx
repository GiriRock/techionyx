import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { overviewCards } from '@/content/home';

const About = () => {
  return (
    <section id="company-overview" className="section-padding bg-corporate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Company Overview"
          title="A technology company structured around products, engineering, and strategic delivery."
          description="We help enterprises move beyond disconnected initiatives by combining software products, implementation capabilities, and consulting leadership in a single execution model."
        />

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3" staggerDelay={0.15}>
          {overviewCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <EnterpriseCard {...card} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default About;
