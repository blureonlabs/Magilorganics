import {TruckIcon} from '~/shared/icons';
import {FREE_SHIPPING_THRESHOLD} from '~/shared/lib/constants';

interface FreeShippingBarProps {
  /** Cart subtotal in INR (number) */
  subtotal: number;
}

/**
 * Progress bar showing how much more the customer needs to spend
 * to qualify for free shipping.
 * Renders nothing when the threshold is already met.
 */
export function FreeShippingBar({subtotal}: FreeShippingBarProps) {
  if (subtotal >= FREE_SHIPPING_THRESHOLD) return null;

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  const progress = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);

  return (
    <div
      className="magil-free-shipping-bar"
      style={{
        background: 'var(--magil-gold-soft)',
        border: '1px dashed var(--magil-gold)',
        borderRadius: 14,
        padding: '16px 22px',
        marginBottom: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 14,
      }}
    >
      <TruckIcon size={22} style={{flexShrink: 0, color: 'var(--magil-ink)'}} />
      <div style={{flex: 1}}>
        <div style={{fontSize: 14, fontWeight: 700, color: 'var(--magil-ink)'}}>
          Add{' '}
          <span style={{color: 'var(--magil-red-deep)'}}>
            &#8377;{remaining}
          </span>{' '}
          more for FREE shipping
        </div>
        <div
          style={{
            height: 6,
            background: 'var(--magil-cream)',
            borderRadius: 999,
            marginTop: 8,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'var(--magil-red-deep)',
              borderRadius: 999,
              transition: 'width 0.3s',
            }}
          />
        </div>
      </div>
    </div>
  );
}
