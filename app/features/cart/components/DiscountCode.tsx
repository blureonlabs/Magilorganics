import {CartForm} from '@shopify/hydrogen';
import {useState} from 'react';
import type {CartApiQueryFragment} from 'storefrontapi.generated';

interface DiscountCodeProps {
  discountCodes?: CartApiQueryFragment['discountCodes'];
}

/**
 * Discount/coupon code input with apply button.
 * Shows applied discount codes with a remove (x) button.
 */
export function DiscountCode({discountCodes}: DiscountCodeProps) {
  const [code, setCode] = useState('');

  const appliedCodes =
    discountCodes?.filter((c) => c.applicable) ?? [];

  return (
    <div className="magil-discount" style={{marginTop: 16}}>
      <div
        className="eyebrow"
        style={{fontSize: 10, marginBottom: 8, color: 'var(--magil-ink-soft)'}}
      >
        Have a discount code?
      </div>

      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.DiscountCodesUpdate}
        inputs={{
          discountCode: code,
          discountCodes: appliedCodes.map((c) => c.code),
        }}
      >
        <div style={{display: 'flex', gap: 8}}>
          <input
            name="discountCode"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="MAGIL500, KUDUMBAM12..."
            style={{
              flex: 1,
              padding: '10px 14px',
              border: '1.5px solid var(--magil-line)',
              borderRadius: 8,
              fontSize: 13,
              fontFamily: 'inherit',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          />
          <button
            type="submit"
            className="btn btn-dark"
            style={{padding: '10px 18px', fontSize: 11, minHeight: 44}}
          >
            Apply
          </button>
        </div>
      </CartForm>

      {/* Applied codes */}
      {appliedCodes.length > 0 && (
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          {appliedCodes.map((discount) => (
            <CartForm
              key={discount.code}
              route="/cart"
              action={CartForm.ACTIONS.DiscountCodesUpdate}
              inputs={{
                // Send remaining codes (exclude the one being removed)
                discountCodes: appliedCodes
                  .filter((c) => c.code !== discount.code)
                  .map((c) => c.code),
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'var(--magil-leaf)',
                  color: '#fff',
                  padding: '4px 10px',
                  borderRadius: 6,
                  fontSize: 11,
                  fontWeight: 700,
                }}
              >
                {discount.code}
                <button
                  type="submit"
                  aria-label={`Remove discount ${discount.code}`}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: 13,
                    lineHeight: 1,
                    padding: 0,
                    minWidth: 20,
                    minHeight: 20,
                  }}
                >
                  &#10005;
                </button>
              </span>
            </CartForm>
          ))}
        </div>
      )}

      {/* Hint when no codes applied */}
      {appliedCodes.length === 0 && (
        <div
          style={{
            fontSize: 11,
            color: 'var(--magil-ink-soft)',
            marginTop: 8,
          }}
        >
          Try <strong>KUDUMBAM12</strong> for 12% off (member code)
        </div>
      )}
    </div>
  );
}
