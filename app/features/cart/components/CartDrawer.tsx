import {useOptimisticCart, Money} from '@shopify/hydrogen';
import {Link} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {CloseIcon} from '~/shared/icons';
import {useScrollLock} from '~/shared/hooks/useScrollLock';
import {CartLineItem} from './CartLineItem';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartApiQueryFragment | null;
}

/**
 * Slide-out cart drawer from the right side.
 * Overlay backdrop, compact line items, subtotal + checkout button.
 */
export function CartDrawer({isOpen, onClose, cart: originalCart}: CartDrawerProps) {
  useScrollLock(isOpen);

  const cart = useOptimisticCart(originalCart);
  const lines = cart?.lines?.nodes ?? [];
  const totalQuantity = cart?.totalQuantity ?? 0;
  const totalAmount = cart?.cost?.totalAmount;

  return (
    <>
      {/* Overlay backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.45)',
            zIndex: 999,
            cursor: 'pointer',
          }}
        />
      )}

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal={isOpen}
        aria-label="Shopping cart"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(420px, 90vw)',
          background: '#fff',
          zIndex: 1000,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isOpen ? '-4px 0 24px rgba(0, 0, 0, 0.15)' : 'none',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid var(--magil-line)',
          }}
        >
          <h2
            className="serif-bold"
            style={{fontSize: 22, margin: 0, color: 'var(--magil-ink)'}}
          >
            Your kudukai
            {totalQuantity > 0 && (
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 400,
                  color: 'var(--magil-ink-soft)',
                  marginLeft: 8,
                }}
              >
                ({totalQuantity})
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--magil-ink)',
              minWidth: 44,
              minHeight: 44,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CloseIcon size={24} />
          </button>
        </div>

        {/* Line items */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '0 24px',
          }}
        >
          {totalQuantity === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '60px 20px',
                color: 'var(--magil-ink-soft)',
              }}
            >
              <p style={{fontSize: 16, marginBottom: 16}}>
                Your cart is empty
              </p>
              <Link
                to="/collections"
                onClick={onClose}
                className="btn btn-primary"
                style={{fontSize: 14}}
              >
                Start shopping
              </Link>
            </div>
          ) : (
            lines.map((line) => {
              if (
                'parentRelationship' in line &&
                line.parentRelationship?.parent
              ) {
                return null;
              }
              return (
                <CartLineItem key={line.id} line={line} compact />
              );
            })
          )}
        </div>

        {/* Footer: subtotal + checkout */}
        {totalQuantity > 0 && (
          <div
            style={{
              borderTop: '1px solid var(--magil-line)',
              padding: '20px 24px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 16,
              }}
            >
              <span
                className="serif-bold"
                style={{fontSize: 16, color: 'var(--magil-ink)'}}
              >
                Subtotal
              </span>
              <span
                className="serif-bold"
                style={{fontSize: 24, color: 'var(--magil-red-deep)'}}
              >
                {totalAmount && <Money data={totalAmount} />}
              </span>
            </div>

            <div
              style={{
                fontSize: 12,
                color: 'var(--magil-ink-soft)',
                marginBottom: 14,
              }}
            >
              Shipping & taxes calculated at checkout
            </div>

            {cart?.checkoutUrl && (
              <a
                href={cart.checkoutUrl}
                className="btn btn-primary"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  boxSizing: 'border-box',
                  marginBottom: 10,
                }}
              >
                Checkout
              </a>
            )}

            <Link
              to="/cart"
              onClick={onClose}
              style={{
                display: 'block',
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--magil-red-deep)',
              }}
            >
              View full cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
