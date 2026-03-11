import { ArrowUpRight, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import SectionHeading from '@/components/site/home/SectionHeading';
import { productDetails } from '@/content/site';

const ProductsPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Products and Platforms"
        title="Reusable product foundations that strengthen enterprise solution delivery."
        description="Techionyx is not a single-product startup. Our products are engineered as strategic accelerators that combine with custom implementation and consulting programs."
        tone="dark"
        aside={
          <div className="premium-card p-6 sm:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-blue-600 text-white shadow-sm">
              <Layers3 className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-corporate-950">Reusable where useful. Custom where critical.</h3>
            <p className="mt-3 text-sm leading-7 text-corporate-600 sm:text-base">
              This approach helps organizations accelerate delivery while preserving the flexibility required for differentiated workflows and industry constraints.
            </p>
          </div>
        }
      />

      <PageSection className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionHeading
            eyebrow="Portfolio"
            title="Platform assets designed for governance, speed, and enterprise reliability."
            description="Each product capability is meant to reduce reinvention, improve consistency, and create a stronger base for transformation programs."
            align="center"
          />
          <StaggerContainer className="mt-16 grid gap-8 xl:grid-cols-3" staggerDelay={0.1}>
            {productDetails.map((product) => (
              <StaggerItem key={product.slug} className="h-full flex flex-col">
                <EnterpriseCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  bullets={product.highlights}
                  className="flex-1"
                />
                <Link to={`/products/${product.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                  View product detail
                  <ArrowUpRight className="size-4" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <CTASection
        title="Need the right mix of product accelerators and custom engineering?"
        description="We help define the architecture and delivery model that balances speed, governance, and business-specific differentiation."
        primaryTo="/contact"
        secondaryTo="/services"
      />
    </>
  );
};

export default ProductsPage;
