import CTASection from '@/components/site/CTASection';
import BrandProofAsset from '@/components/site/BrandProofAsset';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import SectionIntro from '@/components/site/SectionIntro';
import { caseStudies, getCaseStudyBySlug } from '@/content/site';
import { Link, Navigate, useParams } from 'react-router-dom';

const CaseStudyDetailPage = () => {
  const { slug } = useParams();
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  const relatedStudies = caseStudies.filter((item) => item.slug !== study.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={study.eyebrow}
        title={study.title}
        description={study.summary}
        tone="dark"
        aside={
          <div className="premium-card p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Engagement snapshot</p>
            <StaggerContainer className="mt-6 grid gap-4" staggerDelay={0.1}>
              {study.metrics.map((metric) => (
                <StaggerItem key={metric.label} className="rounded-2xl border border-white/5 bg-white/5 px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-corporate-400">{metric.label}</p>
                  <p className="mt-2 text-xl font-bold text-white">{metric.value}</p>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        }
      />

      <PageSection className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
        <div className="shell relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro eyebrow="Challenge" title={study.client} description={study.challenge} />

          <ScrollReveal delay={0.1}>
            <div className="rounded-[2.5rem] border border-corporate-200/50 bg-white/80 p-6 shadow-premium backdrop-blur-xl sm:p-10">
              <BrandProofAsset {...study.brand} />
              <div className="grid gap-8 sm:grid-cols-2 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-corporate-950">Solution delivered</h3>
                  <StaggerContainer className="mt-5 space-y-3 text-sm leading-7 text-corporate-600 sm:text-base">
                    {study.solution.map((item) => (
                      <StaggerItem key={item} className="rounded-2xl border border-corporate-100 bg-corporate-50/50 px-5 py-3.5 shadow-sm">
                        {item}
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-corporate-950">Business impact</h3>
                  <StaggerContainer className="mt-5 space-y-3 text-sm leading-7 text-corporate-600 sm:text-base">
                    {study.impact.map((item) => (
                      <StaggerItem key={item} className="rounded-2xl border border-brand-100/50 bg-brand-50/30 px-5 py-3.5 shadow-sm text-corporate-700">
                        {item}
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </PageSection>

      <PageSection className="bg-corporate-50 relative border-t border-corporate-200/50">
        <div className="absolute inset-0 grid-bg-light opacity-40 mix-blend-overlay" aria-hidden="true" />
        <div className="shell relative z-10">
          <SectionIntro
            eyebrow="More Proof"
            title="Explore related delivery examples."
            description="Additional case studies that show how Techionyx works across operational, product, and enterprise solution contexts."
            align="center"
          />
          <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2" staggerDelay={0.1}>
            {relatedStudies.map((item) => (
              <StaggerItem key={item.slug} className="h-full">
                <article className="premium-card h-full p-8 flex flex-col">
                  <h3 className="text-xl font-bold text-corporate-950">{item.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-corporate-600 flex-1">{item.summary}</p>
                  <Link to={`/case-studies/${item.slug}`} className="focus-ring mt-8 inline-flex font-bold text-sm text-brand-600 transition-colors hover:text-brand-700">
                    Read case study
                  </Link>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </PageSection>

      <CTASection
        title="Need a delivery partner that can produce business outcomes like these in your own context?"
        description="We can shape a practical engagement around your workflows, enterprise systems, and transformation priorities."
        primaryTo="/contact"
        secondaryTo="/solutions"
      />
    </>
  );
};

export default CaseStudyDetailPage;
