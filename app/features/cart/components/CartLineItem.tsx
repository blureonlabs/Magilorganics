import {CartForm, Image, Money, type OptimisticCartLine} from '@shopify/hydrogen';
import {Link} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {BrandBadge} from '~/features/product-catalog';
import {TrashIcon} from '~/shared/icons';
import {QuantitySelector} from './QuantitySelector';

export type CartLine = OptimisticCartLine<CartApiQueryFragment>;

interface CartLineItemProps {
  line: CartLine;
  /** Compact layout for the drawer variant */
  compact?: boolean;
}

/**
 * A single cart line item.
 * Renders product image, brand badge (Village Pharma), title, variant,
 * price, quantity selector, and remove button.
 */
export function CartLineItem({line, compact = false}: CartLineItemProps) {
  const {id, quantity, merchandise, cost} = line;
  const {product, title: variantTitle, image} = merchandise;

  const lineUrl = `/products/${product.handle}`;

  return (
    <div
      className="magil-cart-line"
      style={{
        display: 'grid',
        gridTemplateColumns: compact ? '80px 1fr' : '120px 1fr auto auto',
        gap: compact ? 14 : 24,
        alignItems: 'center',
        padding: compact ? '16px 0' : '22px 0',
        borderBottom: '1px solid var(--magil-line)',
      }}
    >
      {/* Product image */}
      {image && (
        <Link
          to={lineUrl}
          style={{
            borderRadius: 12,
            overflow: 'hidden',
            aspectRatio: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--magil-cream)',
          }}
        >
          <Image
            data={image}
            width={compact ? 80 : 120}
            height={compact ? 80 : 120}
            alt={product.title}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
          />
        </Link>
      )}

      {/* Info column */}
      <div style={{minWidth: 0}}>
        <BrandBadge vendor={product.vendor} size="sm" />
        <h3
          className="serif-bold"
          style={{
            fontSize: compact ? 16 : 22,
            margin:
              product.vendor === 'Village Pharma' ? '6px 0 2px' : '0 0 2px',
            color: 'var(--magil-ink)',
            lineHeight: 1.15,
          }}
        >
          <Link
            to={lineUrl}
            style={{color: 'inherit', textDecoration: 'none'}}
          >
            {product.title}
          </Link>
        </h3>

        {/* Variant title (e.g. size) */}
        {variantTitle && variantTitle !== 'Default Title' && (
          <div
            style={{
              fontSize: 13,
              color: 'var(--magil-ink-soft)',
              marginTop: 4,
            }}
          >
            {variantTitle}
          </div>
        )}

        {/* Price (compact only — shown inline) */}
        {compact && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 8,
            }}
          >
            <QuantitySelector lineId={id} quantity={quantity} />
            <span
              className="serif-bold"
              style={{fontSize: 16, color: 'var(--magil-red-deep)'}}
            >
              <Money data={cost.totalAmount} />
            </span>
          </div>
        )}

        {/* Remove button */}
        <CartForm
          route="/cart"
          action={CartForm.ACTIONS.LinesRemove}
          inputs={{lineIds: [id]}}
        >
          <button
            type="submit"
            aria-label={`Remove ${product.title} from cart`}
            style={{
              fontSize: 12,
              color: 'var(--magil-red-deep)',
              marginTop: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontWeight: 600,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              minHeight: 44,
              padding: '4px 0',
            }}
          >
            <TrashIcon size={14} />
            Remove
          </button>
        </CartForm>
      </div>

      {/* Quantity (full layout only) */}
      {!compact && (
        <QuantitySelector lineId={id} quantity={quantity} />
      )}

      {/* Price (full layout only) */}
      {!compact && (
        <div style={{textAlign: 'right', minWidth: 100}}>
          <div
            className="serif-bold"
            style={{fontSize: 24, color: 'var(--magil-red-deep)'}}
          >
            <Money data={cost.totalAmount} />
          </div>
          {quantity > 1 && (
            <div
              style={{
                fontSize: 12,
                color: 'var(--magil-ink-soft)',
                marginTop: 2,
              }}
            >
              <Money data={cost.amountPerQuantity} /> ea.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
