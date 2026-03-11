import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { solutionsCards } from '@/content/home';

const SolutionsPreview = () => {
  return (
    <section id="solutions" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-corporate-200 to-transparent" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Enterprise Solutions and Industries"
          title="Industry-aware solutions for complex transformation environments."
          description="We shape enterprise solutions around operational realities, compliance constraints, and measurable outcome frameworks across industries."
        />

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4" staggerDelay={0.15}>
          {solutionsCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <EnterpriseCard {...card} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex items-center">
            <Link to="/solutions" className="focus-ring group inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700">
              View industry and solution capabilities
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SolutionsPreview;
