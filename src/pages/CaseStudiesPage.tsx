import CTASection from '@/components/site/CTASection';
import BrandProofAsset from '@/components/site/BrandProofAsset';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import SectionIntro from '@/components/site/SectionIntro';
import { caseStudies } from '@/content/site';
import { Link } from 'react-router-dom';

const CaseStudiesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected examples of product, platform, and enterprise solution delivery."
        description="A sample of how Techionyx approaches operational modernization, stakeholder platforms, and connected enterprise systems with a product-minded engineering lens."
        tone="dark"
      />

      <PageSection className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionIntro
            eyebrow="Proof"
            title="Work shaped around real business complexity, not generic showcase stories."
            description="These examples illustrate how we align product thinking, system integration, and delivery discipline in environments where credibility and execution quality matter."
            align="center"
          />

          <StaggerContainer className="mt-16 grid gap-8 lg:grid-cols-2" staggerDelay={0.1}>
            {caseStudies.map((study) => (
              <StaggerItem key={study.slug} className="h-full">
                <article className="premium-card h-full p-8 sm:p-10 flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{study.eyebrow}</span>
                  <div className="mt-8">
                    <BrandProofAsset {...study.brand} compact />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-corporate-950">{study.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-corporate-600 flex-1">{study.summary}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-corporate-100 bg-corporate-50/50 p-5 text-sm text-corporate-600">
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-corporate-400">Client</span>
                      <span className="mt-2 block font-medium text-corporate-900">{study.client}</span>
                    </div>
                    <div className="rounded-2xl border border-corporate-100 bg-corporate-50/50 p-5 text-sm text-corporate-600">
                      <span className="block text-xs font-bold uppercase tracking-[0.18em] text-corporate-400">Sector</span>
                      <span className="mt-2 block font-medium text-corporate-900">{study.sector}</span>
                    </div>
                  </div>

                  <Link to={`/case-studies/${study.slug}`} className="focus-ring mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                    Read case study
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <CTASection
        title="Want your next initiative to become a stronger proof point for the business?"
        description="We can help structure the engagement around outcomes, visibility, and delivery quality from day one."
        primaryTo="/contact"
        secondaryTo="/solutions"
      />
    </>
  );
};

export default CaseStudiesPage;
