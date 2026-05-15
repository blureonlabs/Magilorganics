import {Link} from 'react-router';
import {Image, Money, CartForm} from '@shopify/hydrogen';
import type {FetcherWithComponents} from 'react-router';
import {BrandBadge} from './BrandBadge';

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
  /** Tamil name metafield — optional, from metafield query */
  tamilName?: {value: string} | null;
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

/** Check if a size/variant selector is relevant */
function hasSizeVariants(
  variants: ProductCardProduct['variants'],
): boolean {
  if (variants.nodes.length <= 1) return false;
  // Only show selector if there's a "Size" or "Weight" option
  return variants.nodes.some((v) =>
    v.selectedOptions.some(
      (o) =>
        o.name.toLowerCase() === 'size' ||
        o.name.toLowerCase() === 'weight',
    ),
  );
}

export function ProductCard({product, loading}: ProductCardProps) {
  const {
    id,
    title,
    handle,
    vendor,
    availableForSale,
    tags,
    featuredImage,
    priceRange,
    compareAtPriceRange,
    variants,
    tamilName,
  } = product;

  const badge = getProductBadge(tags);
  const isVillagePharma = vendor === 'Village Pharma';
  const hasComparePrice =
    compareAtPriceRange?.minVariantPrice &&
    parseFloat(compareAtPriceRange.minVariantPrice.amount) >
      parseFloat(priceRange.minVariantPrice.amount);

  const firstAvailableVariant =
    variants.nodes.find((v) => v.availableForSale) || variants.nodes[0];
  const showSizeSelector = hasSizeVariants(variants);

  return (
    <div className="magil-product-card">
      <Link
        to={`/products/${handle}`}
        prefetch="intent"
        className="magil-product-card__link"
      >
        {/* Brand badge — top left */}
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
              <span className="serif" style={{color: 'var(--magil-ink-soft)'}}>
                {title.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="magil-product-card__details">
          <h3 className="magil-product-card__title serif-bold">{title}</h3>

          {tamilName?.value && (
            <div className="magil-product-card__tamil tamil">
              {tamilName.value}
            </div>
          )}

          {/* Rating stars (static) */}
          <div className="magil-product-card__rating">
            <span className="magil-product-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <span className="magil-product-card__rating-text">4.8</span>
          </div>

          {/* Price */}
          <div className="magil-product-card__price-row">
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

      {/* Size variant selector */}
      {showSizeSelector && (
        <div className="magil-product-card__variant-selector">
          <select
            className="magil-product-card__size-select"
            defaultValue={firstAvailableVariant?.id}
            aria-label="Select size"
          >
            {variants.nodes.map((variant) => (
              <option
                key={variant.id}
                value={variant.id}
                disabled={!variant.availableForSale}
              >
                {variant.title}
                {!variant.availableForSale ? ' (Sold out)' : ''}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Add to Cart */}
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
                className="btn btn-primary magil-product-card__add-btn"
                disabled={!availableForSale || fetcher.state !== 'idle'}
              >
                {!availableForSale
                  ? 'Sold out'
                  : fetcher.state !== 'idle'
                    ? 'Adding...'
                    : 'Add to cart \u2192'}
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

const productCardStyles = /* css */ `
  .magil-product-card {
    position: relative;
    background: #fff;
    border: 1px solid var(--magil-line-soft);
    border-radius: 18px;
    overflow: hidden;
    box-shadow: var(--magil-shadow);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .magil-product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(139, 14, 32, 0.12);
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
    top: 12px;
    left: 12px;
    z-index: 3;
  }

  .magil-product-card__status-badge {
    position: absolute;
    left: 12px;
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
    background: var(--magil-cream-warm);
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .magil-product-card__image-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
  }

  .magil-product-card__image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: var(--magil-ink-soft);
  }

  .magil-product-card__details {
    padding: 16px 16px 12px;
    flex: 1;
  }

  .magil-product-card__title {
    margin: 0;
    font-size: 18px;
    color: var(--magil-ink);
    line-height: 1.2;
  }

  .magil-product-card__tamil {
    font-size: 13px;
    color: var(--magil-red-deep);
    margin-top: 2px;
    font-weight: 500;
  }

  .magil-product-card__rating {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
    font-size: 12px;
  }

  .magil-product-card__stars {
    color: var(--magil-gold);
    letter-spacing: 1px;
  }

  .magil-product-card__rating-text {
    color: var(--magil-ink-soft);
    font-weight: 600;
  }

  .magil-product-card__price-row {
    display: flex;
    align-items: baseline;
    gap: 8px;
    margin-top: 10px;
  }

  .magil-product-card__price {
    font-size: 20px;
    font-weight: 700;
    color: var(--magil-red-deep);
  }

  .magil-product-card__compare-price {
    font-size: 14px;
    color: var(--magil-ink-soft);
    text-decoration: line-through;
  }

  .magil-product-card__variant-selector {
    padding: 0 16px;
  }

  .magil-product-card__size-select {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid var(--magil-line);
    border-radius: 8px;
    background: var(--magil-cream);
    font-family: inherit;
    font-size: 13px;
    color: var(--magil-ink);
    cursor: pointer;
  }

  .magil-product-card__cart-action {
    padding: 12px 16px 16px;
  }

  .magil-product-card__add-btn {
    width: 100%;
    padding: 12px 16px;
    font-size: 12px;
  }

  /* Mobile: smaller text and spacing */
  @media (max-width: 767px) {
    .magil-product-card__title {
      font-size: 15px;
    }
    .magil-product-card__details {
      padding: 12px 12px 8px;
    }
    .magil-product-card__price {
      font-size: 17px;
    }
    .magil-product-card__cart-action {
      padding: 8px 12px 12px;
    }
    .magil-product-card__add-btn {
      padding: 10px 12px;
      font-size: 11px;
    }
    .magil-product-card__variant-selector {
      padding: 0 12px;
    }
  }
`;
