import {Money} from '@shopify/hydrogen';
import {Link} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {TruckIcon, LockIcon, CoinIcon} from '~/shared/icons';
import {FREE_SHIPPING_THRESHOLD} from '~/shared/lib/constants';
import {DiscountCode} from './DiscountCode';

interface OrderSummaryProps {
  cart: CartApiQueryFragment;
}

/**
 * Order summary sidebar: subtotal, shipping, discounts, total,
 * coupon input, checkout CTA, and trust strip.
 */
export function OrderSummary({cart}: OrderSummaryProps) {
  const subtotalAmount = cart.cost?.subtotalAmount;
  const totalAmount = cart.cost?.totalAmount;
  const totalQuantity = cart.totalQuantity ?? 0;

  const subtotalNum = subtotalAmount ? parseFloat(subtotalAmount.amount) : 0;
  const isFreeShipping = subtotalNum >= FREE_SHIPPING_THRESHOLD;

  const applicableDiscounts =
    cart.discountCodes?.filter((c) => c.applicable) ?? [];

  return (
    <aside
      className="magil-order-summary"
      style={{position: 'sticky', top: 110}}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: 18,
          border: '1px solid var(--magil-line)',
          padding: '26px 28px',
          boxShadow: 'var(--magil-shadow)',
        }}
      >
        <h3
          className="serif-bold"
          style={{fontSize: 22, margin: '0 0 18px', color: 'var(--magil-ink)'}}
        >
          Order Summary
        </h3>

        {/* Line items */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            fontSize: 14,
            color: 'var(--magil-ink)',
          }}
        >
          {/* Subtotal */}
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>
              Subtotal{' '}
              <span style={{color: 'var(--magil-ink-soft)'}}>
                ({totalQuantity} item{totalQuantity === 1 ? '' : 's'})
              </span>
            </span>
            <span style={{fontWeight: 600}}>
              {subtotalAmount && <Money data={subtotalAmount} />}
            </span>
          </div>

          {/* Shipping */}
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Shipping</span>
            <span
              style={{
                fontWeight: 600,
                color: isFreeShipping
                  ? 'var(--magil-leaf)'
                  : 'var(--magil-ink)',
              }}
            >
              {isFreeShipping ? 'FREE' : '\u20B999'}
            </span>
          </div>

          {/* Applied discounts */}
          {applicableDiscounts.map((discount) => (
            <div
              key={discount.code}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                color: 'var(--magil-leaf)',
              }}
            >
              <span
                style={{display: 'flex', alignItems: 'center', gap: 6}}
              >
                Coupon{' '}
                <span
                  style={{
                    background: 'var(--magil-leaf)',
                    color: '#fff',
                    padding: '1px 6px',
                    borderRadius: 4,
                    fontSize: 10,
                    fontWeight: 700,
                  }}
                >
                  {discount.code}
                </span>
              </span>
              <span style={{fontWeight: 600}}>Applied</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          style={{
            marginTop: 18,
            paddingTop: 18,
            borderTop: '1px dashed var(--magil-line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <span
            className="serif-bold"
            style={{fontSize: 18, color: 'var(--magil-ink)'}}
          >
            Total
          </span>
          <span
            className="serif-bold"
            style={{fontSize: 32, color: 'var(--magil-red-deep)'}}
          >
            {totalAmount && <Money data={totalAmount} />}
          </span>
        </div>

        {/* Discount code input */}
        <DiscountCode discountCodes={cart.discountCodes} />

        {/* Checkout button */}
        {cart.checkoutUrl && (
          <a
            href={cart.checkoutUrl}
            className="btn btn-vibrant-red"
            style={{
              display: 'block',
              width: '100%',
              padding: '16px',
              marginTop: 20,
              textAlign: 'center',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            Proceed to Checkout
          </a>
        )}

        {/* Continue shopping */}
        <Link
          to="/collections"
          style={{
            display: 'block',
            textAlign: 'center',
            marginTop: 12,
            fontSize: 13,
            fontWeight: 600,
            color: 'var(--magil-red-deep)',
          }}
        >
          &larr; Continue shopping
        </Link>

        {/* Trust strip */}
        <div
          style={{
            marginTop: 22,
            paddingTop: 22,
            borderTop: '1px dashed var(--magil-line)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
          }}
        >
          <TrustItem
            icon={<CoinIcon size={18} />}
            title="COD accepted"
            subtitle="Pay at your door"
          />
          <TrustItem
            icon={<LockIcon size={18} />}
            title="Secure checkout"
            subtitle="Razorpay / UPI / Cards"
          />
          <TrustItem
            icon={<TruckIcon size={18} />}
            title="Ships in 2-4 days"
            subtitle="All India delivery"
          />
          <TrustItem
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            }
            title="Hassle-free returns"
            subtitle="7-day window"
          />
        </div>
      </div>
    </aside>
  );
}

function TrustItem({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{display: 'flex', gap: 10, color: 'var(--magil-ink)'}}>
      <span style={{flexShrink: 0, color: 'var(--magil-ink-soft)'}}>
        {icon}
      </span>
      <div>
        <div style={{fontSize: 12, fontWeight: 700}}>{title}</div>
        <div style={{fontSize: 11, color: 'var(--magil-ink-soft)'}}>
          {subtitle}
        </div>
      </div>
    </div>
  );
}
