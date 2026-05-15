import {Suspense} from 'react';
import {Await} from 'react-router';
import {ProductCard} from '~/features/product-catalog';

interface RelatedProductsProps {
  products: Promise<any[] | null> | any[] | null;
}

function RelatedProductsGrid({products}: {products: any[]}) {
  if (!products || products.length === 0) return null;

  return (
    <section style={styles.section}>
      <div style={{maxWidth: 1440, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 36}}>
          <div className="eyebrow">Goes well together</div>
          <h2
            className="serif"
            style={{
              fontSize: 44,
              margin: '8px 0 0',
              color: 'var(--magil-ink)',
            }}
          >
            You might also{' '}
            <em style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
              love
            </em>
          </h2>
        </div>

        <div style={styles.grid} className="pdp-related-grid">
          {products.slice(0, 4).map((product: any) => (
            <ProductCard key={product.id} product={product} loading="lazy" />
          ))}
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: relatedResponsiveStyles,
        }}
      />
    </section>
  );
}

export function RelatedProducts({products}: RelatedProductsProps) {
  if (!products) return null;

  // If it's a promise, use Suspense + Await
  if (products instanceof Promise) {
    return (
      <Suspense fallback={null}>
        <Await resolve={products}>
          {(resolvedProducts) =>
            resolvedProducts ? (
              <RelatedProductsGrid products={resolvedProducts} />
            ) : null
          }
        </Await>
      </Suspense>
    );
  }

  return <RelatedProductsGrid products={products} />;
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: 'var(--magil-paper)',
    padding: '80px 48px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24,
  },
};

const relatedResponsiveStyles = /* css */ `
  @media (max-width: 1023px) {
    .pdp-related-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
  @media (max-width: 767px) {
    .pdp-related-grid {
      display: flex !important;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 16px !important;
      padding-bottom: 8px;
    }
    .pdp-related-grid > * {
      flex-shrink: 0;
      width: 260px;
      scroll-snap-align: start;
    }
  }
`;
