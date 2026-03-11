import DetailPageShell from '@/components/site/DetailPageShell';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
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
        <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.1}>
          {relatedSolutions.map((item) => (
            <StaggerItem key={item.slug} className="h-full flex flex-col">
              <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="flex-1" />
              <Link to={`/solutions/${item.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                View solution detail
                <ArrowUpRight className="size-4" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      }
      ctaTitle="Exploring a similar enterprise solution in your environment?"
      ctaDescription="We can translate the solution model into a practical roadmap built around your systems, teams, and business priorities."
    />
  );
};

export default SolutionDetailPage;
