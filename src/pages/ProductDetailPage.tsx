import DetailPageShell from '@/components/site/DetailPageShell';
import Reveal from '@/components/site/Reveal';
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
        <div className="grid gap-6 md:grid-cols-2">
          {relatedProducts.map((item, index) => (
            <Reveal key={item.slug} delay={index * 80}>
              <EnterpriseCard icon={item.icon} title={item.title} description={item.description} className="h-full" />
              <Link to={`/products/${item.slug}`} className="focus-ring mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700 transition hover:text-cyan-900">
                  View product detail
                  <ArrowUpRight className="size-4" />
              </Link>
            </Reveal>
          ))}
        </div>
      }
      ctaTitle="Want to apply this product foundation inside a broader enterprise delivery program?"
      ctaDescription="We can help shape the right product, integration, and engineering plan around your workflows, stakeholders, and system environment."
    />
  );
};

export default ProductDetailPage;
