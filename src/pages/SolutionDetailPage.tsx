import DetailPageShell from '@/components/site/DetailPageShell';
import Reveal from '@/components/site/Reveal';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import { getSolutionBySlug, solutionDetails } from '@/content/site';
import { ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

const SolutionDetailPage = () => {
  const { slug } = useParams();
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const relatedSolutions = solutionDetails.filter((item) => item.slug !== solution.slug).slice(0, 2);

  return (
    <DetailPageShell
      eyebrow={solution.eyebrow}
      title={solution.title}
      description={solution.description}
      summaryTitle={solution.summary}
      summaryBody={solution.challenge}
      stats={solution.highlights ?? []}
      leftTitle="Approach"
      leftItems={solution.approach}
      rightTitle="Expected outcomes"
      rightItems={solution.outcomes}
      related={
        <div className="grid gap-6 md:grid-cols-2">
          {relatedSolutions.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              <Link to={`/solutions/${item.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                  View solution detail
                  <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      }
      ctaTitle="Exploring a similar enterprise solution in your environment?"
      ctaDescription="We can translate the solution model into a practical roadmap built around your systems, teams, and business priorities."
    />
  );
};

export default SolutionDetailPage;
