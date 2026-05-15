import {useRef} from 'react';
import type {MappedProductOptions} from '@shopify/hydrogen';
import {ProductGallery} from './ProductGallery';
import {ProductInfo} from './ProductInfo';
import {ProductAccordion} from './ProductAccordion';
import {RelatedProducts} from './RelatedProducts';
import {StickyATC} from './StickyATC';

interface ProductPageProps {
  product: {
    id: string;
    title: string;
    handle: string;
    vendor: string;
    description: string;
    descriptionHtml: string;
    tags: string[];
    featuredImage?: {
      url: string;
      altText?: string | null;
      width?: number;
      height?: number;
    } | null;
    images: {
      nodes: Array<{
        url: string;
        altText?: string | null;
        width?: number;
        height?: number;
      }>;
    };
  };
  selectedVariant: {
    id: string;
    title: string;
    availableForSale: boolean;
    price: {amount: string; currencyCode: string};
    compareAtPrice?: {amount: string; currencyCode: string} | null;
    selectedOptions: Array<{name: string; value: string}>;
    image?: {
      url: string;
      altText?: string | null;
      width?: number;
      height?: number;
    } | null;
  };
  productOptions: MappedProductOptions[];
  recommendedProducts?: Promise<any[] | null> | any[] | null;
}

export function ProductPage({
  product,
  selectedVariant,
  productOptions,
  recommendedProducts,
}: ProductPageProps) {
  const atcRef = useRef<HTMLDivElement>(null);

  return (
    <div style={{paddingBottom: 84}}>
      {/* Hero: Gallery + Info */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>
          {/* Breadcrumb */}
          <div style={styles.breadcrumb}>
            <a href="/" style={{color: 'inherit'}}>
              Home
            </a>
            {' \u203A '}
            <a href="/collections" style={{color: 'inherit'}}>
              Shop
            </a>
            {' \u203A '}
            <span
              style={{
                color: 'var(--magil-red-deep)',
                fontWeight: 600,
              }}
            >
              {product.title}
            </span>
          </div>

          <div style={styles.heroGrid} className="pdp-hero-grid">
            {/* LEFT: Gallery */}
            <ProductGallery
              images={product.images.nodes}
              title={product.title}
            />

            {/* RIGHT: Product Info */}
            <div ref={atcRef}>
              <ProductInfo
                product={product}
                selectedVariant={selectedVariant}
                productOptions={productOptions}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <ProductAccordion descriptionHtml={product.descriptionHtml} />

      {/* Related Products */}
      {recommendedProducts && (
        <RelatedProducts products={recommendedProducts} />
      )}

      {/* Sticky ATC on mobile */}
      <StickyATC
        product={product}
        selectedVariant={selectedVariant}
        atcRef={atcRef}
      />

      <style
        dangerouslySetInnerHTML={{
          __html: pageResponsiveStyles,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  heroSection: {
    background: 'var(--magil-paper)',
    paddingTop: 24,
  },
  heroContainer: {
    maxWidth: 1440,
    margin: '0 auto',
    padding: '0 48px',
  },
  breadcrumb: {
    fontSize: 13,
    color: 'var(--magil-ink-soft)',
    marginBottom: 24,
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 60,
  },
};

const pageResponsiveStyles = /* css */ `
  .pdp-hero-grid {
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 60px;
  }

  @media (max-width: 1023px) {
    .pdp-hero-grid {
      grid-template-columns: 1fr !important;
      gap: 32px !important;
    }
  }

  @media (max-width: 767px) {
    .pdp-hero-grid {
      grid-template-columns: 1fr !important;
      gap: 24px !important;
    }
  }
`;
