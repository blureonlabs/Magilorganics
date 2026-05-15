import {useState, useEffect, useRef} from 'react';
import {Money} from '@shopify/hydrogen';
import {AddToCartButton} from './AddToCartButton';

interface StickyATCProps {
  product: {
    title: string;
    featuredImage?: {url: string; altText?: string | null} | null;
  };
  selectedVariant: {
    id: string;
    availableForSale: boolean;
    price: {amount: string; currencyCode: string};
  };
  /** Ref to the main Add-to-Cart button to observe */
  atcRef?: React.RefObject<HTMLDivElement | null>;
}

export function StickyATC({product, selectedVariant, atcRef}: StickyATCProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // If no ref provided, fall back to scroll-based detection
    if (!atcRef?.current) {
      const handleScroll = () => {
        setVisible(window.scrollY > 600);
      };
      window.addEventListener('scroll', handleScroll, {passive: true});
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when main ATC is NOT visible
        setVisible(!entry.isIntersecting);
      },
      {threshold: 0},
    );

    observer.observe(atcRef.current);
    return () => observer.disconnect();
  }, [atcRef]);

  if (!visible) return null;

  return (
    <div style={styles.bar} className="pdp-sticky-atc">
      <div style={styles.inner}>
        <div style={styles.productInfo}>
          {product.featuredImage && (
            <div style={styles.thumb}>
              <img
                src={product.featuredImage.url}
                alt={product.featuredImage.altText || product.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
          )}
          <div>
            <div
              className="serif-bold"
              style={{fontSize: 16, color: 'var(--magil-ink)'}}
            >
              {product.title}
            </div>
            <div
              className="serif-bold"
              style={{fontSize: 18, color: 'var(--magil-red-deep)'}}
            >
              <Money data={selectedVariant.price} />
            </div>
          </div>
        </div>

        <div style={{width: 180}}>
          <AddToCartButton
            variantId={selectedVariant.id}
            availableForSale={selectedVariant.availableForSale}
            className="btn btn-vibrant-gold"
            style={{minHeight: 44, fontSize: 13}}
          />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: stickyResponsiveStyles,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  bar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'var(--magil-paper)',
    borderTop: '1px solid var(--magil-line)',
    zIndex: 40,
    boxShadow: '0 -8px 24px rgba(0,0,0,0.06)',
  },
  inner: {
    maxWidth: 1440,
    margin: '0 auto',
    padding: '14px 48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 24,
  },
  productInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },
  thumb: {
    width: 56,
    height: 56,
    background: 'var(--magil-cream-warm)',
    borderRadius: 10,
    overflow: 'hidden',
    flexShrink: 0,
  },
};

const stickyResponsiveStyles = /* css */ `
  @media (max-width: 767px) {
    .pdp-sticky-atc > div {
      padding: 10px 16px !important;
    }
  }
`;
