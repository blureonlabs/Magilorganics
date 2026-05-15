import {Link} from 'react-router';

/**
 * Empty-cart state with illustration, heading, and CTA buttons.
 */
export function EmptyCart() {
  return (
    <section
      className="magil-empty-cart"
      style={{padding: '100px 48px 120px'}}
    >
      <div style={{maxWidth: 700, margin: '0 auto', textAlign: 'center'}}>
        {/* Illustration circle */}
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: '50%',
            background:
              'linear-gradient(135deg, var(--magil-cream-warm) 0%, var(--magil-gold-soft) 100%)',
            margin: '0 auto 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px solid var(--magil-gold)',
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--magil-red-deep)"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M5 7h14l-1.5 13a2 2 0 0 1-2 1.8h-7a2 2 0 0 1-2-1.8L5 7z" />
            <path d="M9 7V5a3 3 0 0 1 6 0v2" />
          </svg>
        </div>

        <div className="eyebrow" style={{color: 'var(--magil-ink-soft)'}}>
          Empty kudukai
        </div>

        <h1
          className="serif"
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 500,
            lineHeight: 1,
            margin: '12px 0 16px',
            color: 'var(--magil-ink)',
          }}
        >
          Your basket is{' '}
          <em style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
            waiting
          </em>
          .
        </h1>

        <p
          className="tamil"
          style={{
            fontSize: 18,
            color: 'var(--magil-red-deep)',
            marginBottom: 8,
          }}
        >
          {'\u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0B95\u0BC2\u0B9F\u0BC8 \u0B95\u0BBE\u0BB2\u0BBF\u0BAF\u0BBE\u0B95 \u0B89\u0BB3\u0BCD\u0BB3\u0BA4\u0BC1'}
        </p>

        <p
          style={{
            fontSize: 17,
            color: 'var(--magil-ink-soft)',
            lineHeight: 1.6,
            marginBottom: 30,
          }}
        >
          Begin with a Kudineer, a Thailam, or a cold-pressed oil — your
          grandmother would approve of any of them.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/collections" className="btn btn-primary">
            Explore all remedies
          </Link>
          <Link to="/collections" className="btn btn-outline">
            Shop by category
          </Link>
        </div>
      </div>
    </section>
  );
}
