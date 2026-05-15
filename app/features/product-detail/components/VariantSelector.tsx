import {Link} from 'react-router';
import type {MappedProductOptions} from '@shopify/hydrogen';

interface VariantSelectorProps {
  productOptions: MappedProductOptions[];
}

export function ProductVariantSelector({productOptions}: VariantSelectorProps) {
  return (
    <div style={{marginTop: 30}}>
      {productOptions.map((option) => {
        // Skip options with only one value
        if (option.optionValues.length <= 1) return null;

        return (
          <div key={option.name} style={{marginBottom: 20}}>
            <div style={styles.optionLabel}>Choose {option.name}</div>

            <div
              style={{
                ...styles.optionGrid,
                gridTemplateColumns: `repeat(${Math.min(option.optionValues.length, 3)}, 1fr)`,
              }}
            >
              {option.optionValues.map((value, idx) => {
                const isActive = value.isActive;
                const isAvailable = value.isAvailable;
                const variantPrice = value.variant?.price;

                return (
                  <Link
                    key={value.name}
                    to={value.to}
                    preventScrollReset
                    prefetch="intent"
                    replace
                    style={{
                      ...styles.optionBtn,
                      background: isActive
                        ? 'var(--magil-cream-warm)'
                        : '#fff',
                      border: isActive
                        ? '2px solid var(--magil-red-deep)'
                        : '1.5px solid var(--magil-line)',
                      opacity: isAvailable ? 1 : 0.4,
                      pointerEvents: isAvailable ? 'auto' : 'none',
                    }}
                    aria-disabled={!isAvailable}
                  >
                    {/* Bestseller badge on the second option (heuristic) */}
                    {option.optionValues.length >= 3 && idx === 1 && (
                      <div style={styles.bestsellerBadge}>BESTSELLER</div>
                    )}

                    <div
                      className="serif-bold"
                      style={{
                        fontSize: 22,
                        color: 'var(--magil-ink)',
                        lineHeight: 1,
                      }}
                    >
                      {value.name}
                    </div>

                    {/* Show variant price */}
                    {variantPrice && (
                      <div
                        style={{
                          fontSize: 16,
                          fontWeight: 700,
                          color: 'var(--magil-red-deep)',
                          marginTop: 6,
                        }}
                      >
                        {variantPrice.currencyCode === 'INR' ? '\u20B9' : ''}{' '}
                        {parseFloat(variantPrice.amount ?? '0').toFixed(0)}
                      </div>
                    )}

                    {!isAvailable && (
                      <div
                        style={{
                          fontSize: 11,
                          color: 'var(--magil-ink-soft)',
                          marginTop: 2,
                        }}
                      >
                        Sold out
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}

      <style
        dangerouslySetInnerHTML={{
          __html: variantResponsiveStyles,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  optionLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: 'var(--magil-ink)',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: 10,
  },
  optionGrid: {
    display: 'grid',
    gap: 10,
  },
  optionBtn: {
    position: 'relative',
    padding: '16px 12px',
    borderRadius: 12,
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.15s ease',
    textDecoration: 'none',
    display: 'block',
    minHeight: 44,
  },
  bestsellerBadge: {
    position: 'absolute',
    top: -10,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'var(--magil-red-deep)',
    color: 'var(--magil-cream)',
    fontSize: 9,
    fontWeight: 700,
    padding: '3px 10px',
    borderRadius: 999,
    letterSpacing: '0.08em',
    whiteSpace: 'nowrap',
  },
};

const variantResponsiveStyles = /* css */ `
  @media (max-width: 480px) {
    .pdp-variant-grid {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;
