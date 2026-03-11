import DetailPageShell from '@/components/site/DetailPageShell';
import { StaggerContainer, StaggerItem } from '@/components/ui/StaggerContainer';
import EnterpriseCard from '@/components/site/home/EnterpriseCard';
import { getProductBySlug, productDetails } from '@/content/site';
import { ArrowUpRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = productDetails.filter((item) => item.slug !== product.slug).slice(0, 2);

  return (
    <DetailPageShell
      eyebrow={product.eyebrow}
      title={product.title}
      description={product.description}
      summaryTitle={product.summary}
      summaryBody="These product foundations are designed to strengthen the broader enterprise delivery model, reduce unnecessary reinvention, and give teams a more stable base for modernization and growth."
      stats={product.highlights ?? []}
      leftTitle="Core capabilities"
      leftItems={product.capabilities}
      rightTitle="Business outcomes"
      rightItems={product.outcomes}
      related={
        <StaggerContainer className="grid gap-8 md:grid-cols-2" staggerDelay={0.1}>
          {relatedProducts.map((item) => (
            <StaggerItem key={item.slug} className="h-full flex flex-col">
              <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="flex-1" />
              <Link to={`/products/${item.slug}`} className="focus-ring mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors hover:text-brand-700">
                View product detail
                <ArrowUpRight className="size-4" />
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      }
      ctaTitle="Want to apply this product foundation inside a broader enterprise delivery program?"
      ctaDescription="We can help shape the right product, integration, and engineering plan around your workflows, stakeholders, and system environment."
    />
  );
};

export default ProductDetailPage;
