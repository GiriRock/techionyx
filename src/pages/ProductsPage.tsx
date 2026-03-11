import { ArrowUpRight, Layers3 } from 'lucide-react';
import { Link } from 'react-router-dom';

import CTASection from '@/components/site/CTASection';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
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
        aside={
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_62px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
              <Layers3 className="size-5" />
            </div>
            <h3 className="mt-5 text-2xl font-semibold text-slate-950">Reusable where useful. Custom where critical.</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              This approach helps organizations accelerate delivery while preserving the flexibility required for differentiated workflows and industry constraints.
            </p>
          </div>
        }
      />

      <PageSection>
        <div className="shell">
          <SectionHeading
            eyebrow="Portfolio"
            title="Platform assets designed for governance, speed, and enterprise reliability."
            description="Each product capability is meant to reduce reinvention, improve consistency, and create a stronger base for transformation programs."
            align="center"
          />
          <div className="mt-12 grid gap-5 xl:grid-cols-3">
            {productDetails.map((product, index) => (
              <Reveal key={product.slug} delay={index * 90}>
                <EnterpriseCard
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  bullets={product.highlights}
                  className="h-full"
                />
                <Link to={`/products/${product.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                  View product detail
                  <ArrowUpRight className="size-4" />
                </Link>
              </Reveal>
            ))}
          </div>
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
