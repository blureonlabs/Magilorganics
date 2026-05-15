import {CartForm} from '@shopify/hydrogen';
import type {FetcherWithComponents} from 'react-router';

interface AddToCartButtonProps {
  variantId: string;
  availableForSale: boolean;
  /** CSS class override */
  className?: string;
  /** Additional inline styles */
  style?: React.CSSProperties;
}

export function AddToCartButton({
  variantId,
  availableForSale,
  className,
  style,
}: AddToCartButtonProps) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.LinesAdd}
      inputs={{
        lines: [
          {
            merchandiseId: variantId,
            quantity: 1,
          },
        ],
      }}
    >
      {(fetcher: FetcherWithComponents<any>) => (
        <button
          type="submit"
          className={className ?? 'btn btn-primary'}
          disabled={!availableForSale || fetcher.state !== 'idle'}
          style={{
            width: '100%',
            minHeight: 48,
            fontSize: 15,
            opacity: !availableForSale ? 0.5 : 1,
            ...style,
          }}
        >
          {!availableForSale
            ? 'Sold out'
            : fetcher.state !== 'idle'
              ? 'Adding...'
              : 'Add to Cart \u2192'}
        </button>
      )}
    </CartForm>
  );
}
