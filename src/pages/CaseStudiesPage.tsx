import CTASection from '@/components/site/CTASection';
import BrandProofAsset from '@/components/site/BrandProofAsset';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
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
        tone="light"
      />

      <PageSection>
        <div className="shell">
          <SectionIntro
            eyebrow="Proof"
            title="Work shaped around real business complexity, not generic showcase stories."
            description="These examples illustrate how we align product thinking, system integration, and delivery discipline in environments where credibility and execution quality matter."
            align="center"
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 80}>
                <article className="panel h-full p-6 sm:p-8">
                  <span className="section-eyebrow-light">{study.eyebrow}</span>
                  <div className="mt-6">
                    <BrandProofAsset {...study.brand} compact />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-slate-950">{study.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{study.summary}</p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 text-sm text-slate-600">
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Client</span>
                      <span className="mt-2 block">{study.client}</span>
                    </div>
                    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-4 text-sm text-slate-600">
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Sector</span>
                      <span className="mt-2 block">{study.sector}</span>
                    </div>
                  </div>
                  <Link to={`/case-studies/${study.slug}`} className="focus-ring mt-6 inline-flex text-sm font-semibold text-sky-600 transition hover:text-sky-700">
                    Read case study
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
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
