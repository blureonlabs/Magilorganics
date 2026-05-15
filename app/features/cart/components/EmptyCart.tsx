import {Link} from 'react-router';
import {VairamKolam} from '~/shared/motifs/VairamKolam';

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
        {/* Illustration — Vairam (diamond) kolam */}
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
          <VairamKolam size={80} />
        </div>

        <div className="eyebrow" style={{color: 'var(--magil-ink-soft)'}}>
          Nothing here yet
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
          Your wellness journey{' '}
          <em style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
            starts here
          </em>
          .
        </h1>

        <p
          style={{
            fontSize: 17,
            color: 'var(--magil-ink-soft)',
            lineHeight: 1.6,
            marginBottom: 30,
          }}
        >
          A Kudineer for immunity. A Thailam for sore joints. A cold-pressed
          oil for your kitchen. Pick what your body needs today.
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
            Discover Remedies
          </Link>
          <Link to="/concerns" className="btn btn-outline">
            Shop by Concern
          </Link>
        </div>
      </div>
    </section>
  );
}
