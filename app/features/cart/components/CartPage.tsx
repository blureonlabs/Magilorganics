import {useOptimisticCart, Money} from '@shopify/hydrogen';
import {Link} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {EmptyCart} from './EmptyCart';
import {FreeShippingBar} from './FreeShippingBar';
import {CartLineItem} from './CartLineItem';
import {OrderSummary} from './OrderSummary';

interface CartPageProps {
  cart: CartApiQueryFragment | null;
}

/**
 * Full cart page layout.
 * Hero strip with breadcrumb + title,
 * 2-column grid: line items on left, order summary on right.
 * Shows EmptyCart when cart is empty.
 */
export function CartPage({cart: originalCart}: CartPageProps) {
  const cart = useOptimisticCart(originalCart);

  const lines = cart?.lines?.nodes ?? [];
  const totalQuantity = cart?.totalQuantity ?? 0;
  const hasItems = totalQuantity > 0;

  if (!hasItems) {
    return <EmptyCart />;
  }

  const subtotalAmount = cart?.cost?.subtotalAmount;
  const subtotalNum = subtotalAmount ? parseFloat(subtotalAmount.amount) : 0;

  return (
    <>
      {/* Hero strip */}
      <section
        className="magil-cart-hero"
        style={{
          background:
            'linear-gradient(135deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%)',
          padding: '40px 48px 30px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{maxWidth: 1280, margin: '0 auto', position: 'relative'}}>
          {/* Breadcrumb */}
          <div
            style={{
              fontSize: 13,
              color: 'var(--magil-ink-soft)',
              marginBottom: 10,
            }}
          >
            <Link to="/" style={{color: 'inherit'}}>
              Home
            </Link>
            {' \u203A '}
            <span style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
              Your Cart
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <h1
              className="serif"
              style={{
                fontSize: 'clamp(40px, 6vw, 72px)',
                fontWeight: 500,
                lineHeight: 0.95,
                margin: 0,
                color: 'var(--magil-ink)',
                letterSpacing: '-0.02em',
              }}
            >
              Your{' '}
              <em style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
                remedies
              </em>
            </h1>
            <div style={{fontSize: 16, color: 'var(--magil-ink-soft)'}}>
              {totalQuantity} item{totalQuantity === 1 ? '' : 's'} &middot;
              subtotal{' '}
              <strong style={{color: 'var(--magil-ink)'}}>
                {subtotalAmount && <Money data={subtotalAmount} />}
              </strong>
            </div>
          </div>

        </div>
      </section>

      {/* Main 2-column layout */}
      <section
        className="magil-cart-main"
        style={{
          background: 'var(--magil-paper)',
          padding: '40px 48px 100px',
        }}
      >
        <div
          className="magil-cart-grid"
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.6fr 1fr',
            gap: 48,
            alignItems: 'flex-start',
          }}
        >
          {/* LEFT column: shipping bar + line items */}
          <div>
            <FreeShippingBar subtotal={subtotalNum} />

            <div
              className="magil-cart-items-wrap"
              style={{
                background: '#fff',
                borderRadius: 18,
                border: '1px solid var(--magil-line)',
                padding: '8px 28px',
              }}
            >
              {/* Column headers */}
              <div
                className="magil-cart-col-headers"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto auto',
                  gap: 24,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--magil-line)',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: 'var(--magil-ink-soft)',
                  textTransform: 'uppercase',
                }}
              >
                <div>Product</div>
                <div />
                <div style={{textAlign: 'center'}}>Quantity</div>
                <div style={{textAlign: 'right', minWidth: 100}}>Subtotal</div>
              </div>

              {/* Cart lines */}
              {lines.map((line) => {
                // Skip child lines (rendered by their parent)
                if (
                  'parentRelationship' in line &&
                  line.parentRelationship?.parent
                ) {
                  return null;
                }
                return <CartLineItem key={line.id} line={line} />;
              })}
            </div>

            {/* Frequently bought together placeholder */}
            <div style={{marginTop: 50}}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                }}
              >
                <div>
                  <div className="eyebrow">Frequently brewed together</div>
                  <h3
                    className="serif-bold"
                    style={{
                      fontSize: 28,
                      margin: '4px 0 0',
                      color: 'var(--magil-ink)',
                    }}
                  >
                    Pair it with &mdash;
                  </h3>
                </div>
                <Link
                  to="/collections"
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--magil-red-deep)',
                  }}
                >
                  See more &rarr;
                </Link>
              </div>
              {/* Product recommendations would be rendered here */}
            </div>
          </div>

          {/* RIGHT column: order summary */}
          {cart && <OrderSummary cart={cart} />}
        </div>
      </section>

      {/* Responsive overrides */}
      <style>
        {`
          @media (max-width: 900px) {
            .magil-cart-hero {
              padding: 28px 20px 22px !important;
            }
            .magil-cart-main {
              padding: 24px 16px 60px !important;
            }
            .magil-cart-grid {
              grid-template-columns: 1fr !important;
              gap: 28px !important;
            }
            .magil-order-summary {
              position: static !important;
            }
          }

          @media (max-width: 767px) {
            .magil-cart-hero {
              padding: 20px 16px 18px !important;
            }
            .magil-cart-main {
              padding: 20px 16px 60px !important;
            }
            .magil-cart-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            .magil-cart-col-headers {
              display: none !important;
            }
            .magil-cart-items-wrap {
              padding: 8px 14px !important;
            }
          }

          @media (max-width: 600px) {
            .magil-cart-line {
              grid-template-columns: 80px 1fr !important;
              gap: 14px !important;
            }
          }
        `}
      </style>
    </>
  );
}
