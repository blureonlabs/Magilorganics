import {Money} from '@shopify/hydrogen';
import type {MappedProductOptions} from '@shopify/hydrogen';
import {BrandBadge} from '~/features/product-catalog';
import {
  TruckIcon,
  LockIcon,
  FarmerIcon,
  CoinIcon,
  LeafIcon,
  ShieldIcon,
} from '~/shared/icons';
import {ProductVariantSelector} from './VariantSelector';
import {AddToCartButton} from './AddToCartButton';

interface ProductInfoProps {
  product: {
    title: string;
    vendor: string;
    description: string;
    descriptionHtml: string;
    tags: string[];
  };
  selectedVariant: {
    id: string;
    availableForSale: boolean;
    price: {amount: string; currencyCode: string};
    compareAtPrice?: {amount: string; currencyCode: string} | null;
    selectedOptions: Array<{name: string; value: string}>;
  };
  productOptions: MappedProductOptions[];
}

/** Benefit icon helper */
function BenefitIcon({kind}: {kind: string}) {
  const props = {size: 32, strokeWidth: 1.6, stroke: 'currentColor'};
  switch (kind) {
    case 'leaf':
      return <LeafIcon {...props} />;
    case 'shield':
      return <ShieldIcon {...props} />;
    case 'lung':
      return (
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
        >
          <path d="M16 6V20" />
          <path d="M14 20Q8 22 8 26Q8 28 10 28Q14 28 14 22" />
          <path d="M18 20Q24 22 24 26Q24 28 22 28Q18 28 18 22" />
        </svg>
      );
    case 'fire':
      return (
        <svg
          width={32}
          height={32}
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.6}
        >
          <path d="M16 4C12 10 10 14 10 18C10 24 14 28 16 28C18 28 22 24 22 18C22 14 20 12 16 4Z" />
          <path d="M16 16C14 18 14 22 16 24C18 22 18 18 16 16Z" />
        </svg>
      );
    default:
      return <LeafIcon {...props} />;
  }
}

const BENEFITS = [
  {icon: 'leaf', title: '15 Siddha Herbs', subtitle: 'Authentic ratio'},
  {icon: 'shield', title: 'Immunity Boost', subtitle: 'Daily strength'},
  {icon: 'lung', title: 'Respiratory', subtitle: 'Clears phlegm'},
  {icon: 'fire', title: 'Anti-fever', subtitle: 'Cooling action'},
];

const TRUST_ITEMS = [
  {Icon: TruckIcon, line1: 'Free shipping', line2: 'above \u20B9999'},
  {Icon: LockIcon, line1: 'Secure', line2: 'payments'},
  {Icon: FarmerIcon, line1: 'Farmer', line2: 'empowerment'},
  {Icon: CoinIcon, line1: 'COD', line2: 'available'},
];

export function ProductInfo({
  product,
  selectedVariant,
  productOptions,
}: ProductInfoProps) {
  const hasComparePrice =
    selectedVariant.compareAtPrice &&
    parseFloat(selectedVariant.compareAtPrice.amount) >
      parseFloat(selectedVariant.price.amount);

  return (
    <div>
      {/* Brand badge */}
      <BrandBadge vendor={product.vendor} size="lg" />

      {/* Title */}
      <h1
        className="serif-bold"
        style={{
          fontSize: 44,
          lineHeight: 1,
          margin: '10px 0 0',
          color: 'var(--magil-ink)',
          letterSpacing: '-0.01em',
        }}
      >
        {product.title}
      </h1>

      {/* Subtitle */}
      <div
        style={{
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
        }}
      >
        <span style={{fontSize: 13, color: 'var(--magil-ink-soft)'}}>
          {product.vendor}
        </span>
      </div>

      {/* Rating (static display) */}
      <div
        style={{
          marginTop: 14,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 13,
        }}
      >
        <span style={{color: 'var(--magil-gold)'}}>
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
        <span style={{fontWeight: 700}}>4.9</span>
        <span style={{color: 'var(--magil-ink-soft)'}}>
          &middot; Reviews
        </span>
      </div>

      {/* Price */}
      <div
        style={{
          marginTop: 22,
          display: 'flex',
          alignItems: 'baseline',
          gap: 12,
        }}
      >
        <span
          className="serif-bold"
          style={{fontSize: 32, color: 'var(--magil-red-deep)'}}
        >
          <Money data={selectedVariant.price} />
        </span>
        {hasComparePrice && selectedVariant.compareAtPrice && (
          <span
            style={{
              fontSize: 18,
              color: 'var(--magil-ink-soft)',
              textDecoration: 'line-through',
            }}
          >
            <Money data={selectedVariant.compareAtPrice} />
          </span>
        )}
      </div>

      {/* Description */}
      <p
        style={{
          marginTop: 22,
          fontSize: 16,
          lineHeight: 1.65,
          color: 'var(--magil-ink-soft)',
        }}
      >
        {product.description}
      </p>

      {/* Benefits grid */}
      <div style={styles.benefitsGrid}>
        {BENEFITS.map((b) => (
          <div key={b.title} style={{textAlign: 'center'}}>
            <div style={styles.benefitCircle}>
              <BenefitIcon kind={b.icon} />
            </div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: 'var(--magil-ink)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              {b.title}
            </div>
            <div
              style={{
                fontSize: 10,
                color: 'var(--magil-ink-soft)',
                marginTop: 2,
              }}
            >
              {b.subtitle}
            </div>
          </div>
        ))}
      </div>

      {/* Variant selector */}
      <ProductVariantSelector productOptions={productOptions} />

      {/* Add to cart */}
      <div style={{marginTop: 24}}>
        <AddToCartButton
          variantId={selectedVariant.id}
          availableForSale={selectedVariant.availableForSale}
        />
      </div>

      {/* Trust strip */}
      <div style={styles.trustGrid}>
        {TRUST_ITEMS.map(({Icon, line1, line2}) => (
          <div key={line1} style={{textAlign: 'center'}}>
            <div style={styles.trustCircle}>
              <Icon size={22} />
            </div>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                color: 'var(--magil-ink)',
              }}
            >
              {line1}
            </div>
            <div style={{fontSize: 10, color: 'var(--magil-ink-soft)'}}>
              {line2}
            </div>
          </div>
        ))}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: infoResponsiveStyles,
        }}
      />
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  benefitsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 14,
    marginTop: 26,
  },
  benefitCircle: {
    width: 78,
    height: 78,
    borderRadius: '50%',
    border: '1.5px solid var(--magil-red-deep)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 10px',
    background: 'var(--magil-cream)',
    color: 'var(--magil-red-deep)',
  },
  trustGrid: {
    marginTop: 26,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 16,
    textAlign: 'center',
  },
  trustCircle: {
    width: 48,
    height: 48,
    margin: '0 auto 8px',
    borderRadius: '50%',
    background: 'var(--magil-cream-warm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--magil-ink)',
  },
};

const infoResponsiveStyles = /* css */ `
  @media (max-width: 767px) {
    .pdp-info h1 {
      font-size: 32px !important;
    }
  }
`;
