import {CartForm} from '@shopify/hydrogen';

interface QuantitySelectorProps {
  lineId: string;
  quantity: number;
}

/**
 * Pill-shaped +/- quantity control for a cart line item.
 * Decrementing to 0 removes the line.
 */
export function QuantitySelector({lineId, quantity}: QuantitySelectorProps) {
  const prevQuantity = Math.max(0, quantity - 1);
  const nextQuantity = quantity + 1;

  return (
    <div
      className="magil-qty"
      style={{
        display: 'flex',
        alignItems: 'center',
        border: '1.5px solid var(--magil-line)',
        borderRadius: 999,
        overflow: 'hidden',
        background: '#fff',
      }}
    >
      {/* Decrease / Remove */}
      <CartForm
        route="/cart"
        action={
          prevQuantity === 0
            ? CartForm.ACTIONS.LinesRemove
            : CartForm.ACTIONS.LinesUpdate
        }
        inputs={
          prevQuantity === 0
            ? {lineIds: [lineId]}
            : {lines: [{id: lineId, quantity: prevQuantity}]}
        }
      >
        <button
          type="submit"
          aria-label="Decrease quantity"
          style={{
            padding: '10px 16px',
            color: 'var(--magil-ink)',
            fontSize: 16,
            minWidth: 44,
            minHeight: 44,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
          }}
        >
          &#8722;
        </button>
      </CartForm>

      {/* Current qty */}
      <span
        style={{
          padding: '10px 18px',
          fontSize: 16,
          fontWeight: 700,
          minWidth: 40,
          textAlign: 'center',
          color: 'var(--magil-ink)',
        }}
      >
        {quantity}
      </span>

      {/* Increase */}
      <CartForm
        route="/cart"
        action={CartForm.ACTIONS.LinesUpdate}
        inputs={{lines: [{id: lineId, quantity: nextQuantity}]}}
      >
        <button
          type="submit"
          aria-label="Increase quantity"
          style={{
            padding: '10px 16px',
            color: 'var(--magil-ink)',
            fontSize: 16,
            minWidth: 44,
            minHeight: 44,
            cursor: 'pointer',
            background: 'none',
            border: 'none',
          }}
        >
          +
        </button>
      </CartForm>
    </div>
  );
}
