import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import { productCards } from '@/content/home';

const ProductsPreview = () => {
  return (
    <section id="products" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-corporate-200 to-transparent" />

      <div className="shell relative z-10">
        <SectionHeading
          eyebrow="Products and Platforms"
          title="Purpose-built product assets that accelerate enterprise system delivery."
          description="Our platform capabilities reduce reinvention and shorten time to value for organizations launching or modernizing digital operations."
        />

        <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-3" staggerDelay={0.15}>
          {productCards.map((card) => (
            <StaggerItem key={card.title} className="h-full">
              <EnterpriseCard {...card} className="h-full" />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex items-center">
            <Link to="/products" className="focus-ring group inline-flex items-center gap-2 text-base font-semibold text-brand-600 transition-colors hover:text-brand-700">
              View full product portfolio
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsPreview;
