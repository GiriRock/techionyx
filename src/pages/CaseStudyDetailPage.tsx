import CTASection from '@/components/site/CTASection';
import BrandProofAsset from '@/components/site/BrandProofAsset';
import PageHero from '@/components/site/PageHero';
import PageSection from '@/components/site/PageSection';
import Reveal from '@/components/site/Reveal';
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
          <div className="panel-dark p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">Engagement snapshot</p>
            <div className="mt-6 grid gap-4">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{metric.value}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <PageSection>
        <div className="shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro eyebrow="Challenge" title={study.client} description={study.challenge} />
          <Reveal delay={120}>
            <div className="panel p-6 sm:p-8">
              <BrandProofAsset {...study.brand} />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-xl font-semibold text-slate-950">Solution delivered</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {study.solution.map((item) => (
                      <li key={item} className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-xl font-semibold text-slate-950">Business impact</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {study.impact.map((item) => (
                      <li key={item} className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </PageSection>

      <PageSection className="bg-white/50">
        <div className="shell">
          <SectionIntro
            eyebrow="More Proof"
            title="Explore related delivery examples."
            description="Additional case studies that show how Techionyx works across operational, product, and enterprise solution contexts."
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {relatedStudies.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <article className="panel h-full p-6 sm:p-7">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.summary}</p>
                  <Link to={`/case-studies/${item.slug}`} className="focus-ring mt-6 inline-flex text-sm font-semibold text-sky-600 transition hover:text-sky-700">
                    Read case study
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
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
