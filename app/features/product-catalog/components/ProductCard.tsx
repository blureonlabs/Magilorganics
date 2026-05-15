import {Link} from 'react-router';
import {Image, Money, CartForm} from '@shopify/hydrogen';
import type {FetcherWithComponents} from 'react-router';
import {BrandBadge} from './BrandBadge';
import {Tulsi} from '~/shared/motifs/HerbIllustrations';

/**
 * Product node shape from the Storefront API collection query.
 * Kept intentionally loose to work with the generated types.
 */
interface ProductCardProduct {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  availableForSale: boolean;
  tags: string[];
  featuredImage?: {
    url: string;
    altText?: string | null;
    width?: number;
    height?: number;
  } | null;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  compareAtPriceRange?: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  } | null;
  variants: {
    nodes: Array<{
      id: string;
      title: string;
      availableForSale: boolean;
      price: {amount: string; currencyCode: string};
      compareAtPrice?: {amount: string; currencyCode: string} | null;
      selectedOptions: Array<{name: string; value: string}>;
    }>;
  };
}

interface ProductCardProps {
  product: ProductCardProduct;
  loading?: 'eager' | 'lazy';
}

// Map product tags to badge display info
const BADGE_MAP: Record<string, {label: string; color: string}> = {
  bestseller: {label: 'Bestseller', color: 'var(--magil-red)'},
  trending: {label: 'Trending', color: 'var(--magil-gold)'},
  limited: {label: 'Limited', color: 'var(--magil-red-deep)'},
  'best-value': {label: 'Best Value', color: 'var(--magil-leaf)'},
  new: {label: 'New', color: 'var(--magil-leaf)'},
};

function getProductBadge(tags: string[]) {
  for (const tag of tags) {
    const key = tag.toLowerCase().replace(/\s+/g, '-');
    if (BADGE_MAP[key]) return BADGE_MAP[key];
  }
  return null;
}

export function ProductCard({product, loading}: ProductCardProps) {
  const {
    title,
    handle,
    vendor,
    availableForSale,
    tags,
    featuredImage,
    priceRange,
    compareAtPriceRange,
    variants,
  } = product;

  const badge = getProductBadge(tags);
  const isVillagePharma = vendor === 'Village Pharma';
  const hasComparePrice =
    compareAtPriceRange?.minVariantPrice &&
    parseFloat(compareAtPriceRange.minVariantPrice.amount) >
      parseFloat(priceRange.minVariantPrice.amount);

  const firstAvailableVariant =
    variants.nodes.find((v) => v.availableForSale) || variants.nodes[0];

  const hasMultipleVariants = variants.nodes.length > 1;

  return (
    <div className="magil-product-card">
      <Link
        to={`/products/${handle}`}
        prefetch="intent"
        className="magil-product-card__link"
      >
        {/* Brand badge -- top left */}
        {isVillagePharma && (
          <div className="magil-product-card__brand-badge">
            <BrandBadge vendor={vendor} size="sm" />
          </div>
        )}

        {/* Status badge */}
        {badge && (
          <div
            className="magil-product-card__status-badge"
            style={{
              background: badge.color,
              top: isVillagePharma ? 38 : 12,
            }}
          >
            {badge.label}
          </div>
        )}

        {/* Image */}
        <div className="magil-product-card__image-wrap">
          {featuredImage ? (
            <Image
              alt={featuredImage.altText || title}
              aspectRatio="1/1"
              data={featuredImage}
              loading={loading}
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            />
          ) : (
            <div className="magil-product-card__image-placeholder">
              <Tulsi size={50} opacity={0.2} />
            </div>
          )}
        </div>

        {/* Details */}
        <div className="magil-product-card__details">
          <h3 className="magil-product-card__title serif-bold">{title}</h3>

          {/* Price */}
          <div className="magil-product-card__price-row">
            {hasMultipleVariants && (
              <span className="magil-product-card__price-from">From</span>
            )}
            <span className="magil-product-card__price">
              <Money data={priceRange.minVariantPrice} />
            </span>
            {hasComparePrice && (
              <span className="magil-product-card__compare-price">
                <Money data={compareAtPriceRange!.minVariantPrice} />
              </span>
            )}
          </div>
        </div>
      </Link>

      {/* Add to Cart -- uses first available variant, no dropdown */}
      {firstAvailableVariant && (
        <div className="magil-product-card__cart-action">
          <CartForm
            route="/cart"
            inputs={{
              lines: [
                {
                  merchandiseId: firstAvailableVariant.id,
                  quantity: 1,
                },
              ],
            }}
            action={CartForm.ACTIONS.LinesAdd}
          >
            {(fetcher: FetcherWithComponents<any>) => (
              <button
                type="submit"
                className="btn btn-vibrant-red magil-product-card__add-btn"
                disabled={!availableForSale || fetcher.state !== 'idle'}
              >
                {!availableForSale
                  ? 'Sold out'
                  : fetcher.state !== 'idle'
                    ? 'Adding...'
                    : 'Add to cart'}
              </button>
            )}
          </CartForm>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: productCardStyles,
        }}
      />
    </div>
  );
}

/** Subtle product silhouette placeholder when no image is available */
function PlaceholderIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      aria-hidden="true"
      className="magil-product-card__placeholder-svg"
    >
      {/* Pouch / bottle silhouette */}
      <path
        d="M30 18 Q 30 12, 34 12 H 46 Q 50 12, 50 18 V 22 H 30 Z"
        fill="currentColor"
        opacity="0.18"
      />
      <path
        d="M26 22 H 54 Q 56 22, 56 26 V 64 Q 56 68, 52 68 H 28 Q 24 68, 24 64 V 26 Q 24 22, 26 22 Z"
        fill="currentColor"
        opacity="0.13"
      />
      {/* Small leaf accent */}
      <path
        d="M40 38 Q 36 44, 40 50 Q 44 44, 40 38 Z"
        fill="currentColor"
        opacity="0.22"
      />
      <line
        x1="40"
        y1="50"
        x2="40"
        y2="56"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.18"
      />
    </svg>
  );
}

const productCardStyles = /* css */ `
  .magil-product-card {
    position: relative;
    background: #fff;
    border: 1px solid rgba(229, 213, 183, 0.5);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .magil-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(139, 14, 32, 0.1);
  }

  .magil-product-card__link {
    text-decoration: none;
    color: inherit;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .magil-product-card__brand-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 3;
  }

  .magil-product-card__status-badge {
    position: absolute;
    left: 10px;
    z-index: 2;
    color: #fff;
    font-size: 10px;
    font-weight: 700;
    padding: 5px 12px;
    border-radius: 999px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .magil-product-card__image-wrap {
    background: var(--magil-cream);
    aspect-ratio: 1 / 1;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid rgba(229, 213, 183, 0.3);
  }

  .magil-product-card__image-wrap img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .magil-product-card:hover .magil-product-card__image-wrap img {
    transform: scale(1.04);
  }

  .magil-product-card__image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--magil-cream-deep);
  }

  .magil-product-card__placeholder-svg {
    opacity: 0.7;
  }

  .magil-product-card__details {
    padding: 14px 14px 10px;
    flex: 1;
  }

  .magil-product-card__title {
    margin: 0;
    font-size: 17px;
    font-weight: 700;
    color: var(--magil-ink);
    line-height: 1.25;
  }

  .magil-product-card__price-row {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-top: 10px;
  }

  .magil-product-card__price-from {
    font-size: 13px;
    font-weight: 500;
    color: var(--magil-ink-soft);
  }

  .magil-product-card__price {
    font-size: 22px;
    font-weight: 700;
    color: var(--magil-ink);
    font-family: var(--font-display);
  }

  .magil-product-card__compare-price {
    font-size: 14px;
    color: var(--magil-ink-soft);
    text-decoration: line-through;
    opacity: 0.7;
  }

  .magil-product-card__cart-action {
    padding: 10px 14px 14px;
    margin-top: auto;
  }

  .magil-product-card__add-btn {
    width: 100%;
    padding: 12px 16px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.06em;
    border-radius: 12px;
    min-height: 46px;
  }

  /* Mobile adjustments */
  @media (max-width: 767px) {
    .magil-product-card__title {
      font-size: 15px;
      font-weight: 700;
    }
    .magil-product-card__details {
      padding: 12px 12px 8px;
    }
    .magil-product-card__price {
      font-size: 19px;
    }
    .magil-product-card__price-from {
      font-size: 12px;
    }
    .magil-product-card__cart-action {
      padding: 8px 12px 12px;
    }
    .magil-product-card__add-btn {
      width: 100%;
      min-height: 44px;
      padding: 12px 14px;
      font-size: 12px;
      border-radius: 12px;
    }
    .magil-product-card__compare-price {
      font-size: 12px;
    }
  }
`;
