import {Link} from 'react-router';
import {PeacockBackdrop} from '~/shared/motifs/PeacockBackdrop';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {LeafIcon} from '~/shared/icons';

export function Hero() {
  return (
    <section className="home-hero">
      <PeacockBackdrop />

      <div className="home-hero__grid">
        {/* Left — editorial copy */}
        <div className="home-hero__copy">
          <div className="home-hero__badge">
            <PeacockMark size={32} />
            <div className="eyebrow">Siddha Tradition &middot; Since the Cauvery</div>
          </div>

          <h1 className="home-hero__heading">
            A taste of
            <br />
            <em className="home-hero__heading-accent">
              tradition,
              <svg className="home-hero__underline" viewBox="0 0 280 12" preserveAspectRatio="none">
                <path
                  d="M2 8 Q 70 2, 140 6 T 278 8"
                  stroke="var(--magil-gold)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </em>{' '}
            <br />
            brewed at home.
          </h1>

          <div className="tamil home-hero__tamil">
            {'\u0BAA\u0BBE\u0BB0\u0BAE\u0BCD\u0BAA\u0BB0\u0BBF\u0BAF\u0BA4\u0BCD\u0BA4\u0BBF\u0BA9\u0BCD \u0B9A\u0BC1\u0BB5\u0BC8 \u2014 \u0B95\u0BBF\u0BB0\u0BBE\u0BAE\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BBF\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1 \u0B89\u0B99\u0BCD\u0B95\u0BB3\u0BCD \u0BB5\u0BC0\u0B9F\u0BC1 \u0BB5\u0BB0\u0BC8'}
          </div>

          <p className="home-hero__body">
            Kudineers steeped over woodfire. Thailams pressed in granite ural.
            Chooranams ground at sunrise. Every Magil jar carries the patience
            of a Tamil grandmother &mdash; and the wisdom of 3,000-year-old
            Siddha medicine.
          </p>

          <div className="home-hero__cta">
            <Link to="/products/kabasura-kudineer" className="btn btn-primary">
              Shop the Kabasura
            </Link>
            <Link to="/collections" className="btn btn-outline">
              Explore the catalog
            </Link>
          </div>

          {/* Trust strip */}
          <div className="home-hero__trust">
            {[
              {num: '60+', label: 'Heritage formulas'},
              {num: '12k+', label: 'Families served'},
              {num: '4.9\u2605', label: 'Across 8,000 reviews'},
            ].map((s) => (
              <div key={s.label} className="home-hero__trust-item">
                <div className="serif-bold home-hero__trust-num">{s.num}</div>
                <div className="home-hero__trust-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero product showcase */}
        <div className="home-hero__product">
          <div className="home-hero__product-disc" />

          {/* Floating tag - bestseller */}
          <div className="home-hero__floating-tag home-hero__floating-tag--top">
            <div className="eyebrow" style={{fontSize: 10}}>
              Hero of the season
            </div>
            <div className="serif-bold" style={{fontSize: 22, color: 'var(--magil-red-deep)', marginTop: 4}}>
              Kabasura
            </div>
            <div className="tamil" style={{fontSize: 14, color: 'var(--magil-ink-soft)'}}>
              {'\u0B95\u0BAA\u0B9A\u0BC1\u0BB0 \u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD'}
            </div>
          </div>

          {/* Floating ingredient tag */}
          <div className="home-hero__floating-tag home-hero__floating-tag--bottom-left">
            <LeafIcon size={16} style={{color: 'var(--magil-leaf)'}} />
            <span>15 Siddha herbs</span>
          </div>

          {/* Floating price tag */}
          <div className="home-hero__price-tag">
            <span style={{fontSize: 12, opacity: 0.8}}>From</span>
            <span className="serif-bold" style={{fontSize: 28}}>
              {'\u20B9240'}
            </span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: heroStyles}} />
    </section>
  );
}

const heroStyles = /* css */ `
  .home-hero {
    position: relative;
    background: linear-gradient(135deg, #FBF6EC 0%, #F5EBD7 100%);
    overflow: hidden;
    padding-top: 40px;
  }

  .home-hero__grid {
    max-width: 1440px;
    margin: 0 auto;
    padding: 40px 24px 60px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 1024px) {
    .home-hero__grid {
      padding: 60px 48px 80px;
      grid-template-columns: 1.05fr 0.95fr;
      gap: 60px;
    }
  }

  .home-hero__badge {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
  }

  .home-hero__heading {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(40px, 7vw, 92px);
    line-height: 0.95;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--magil-ink);
  }
  .home-hero__heading-accent {
    font-style: italic;
    color: var(--magil-red-deep);
    font-family: var(--font-display);
    position: relative;
    font-weight: 600;
  }
  .home-hero__underline {
    position: absolute;
    left: -8px;
    right: -8px;
    bottom: -10px;
    width: calc(100% + 16px);
    height: 12px;
  }

  .home-hero__tamil {
    margin-top: 24px;
    font-size: 22px;
    color: var(--magil-red-deep);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .home-hero__body {
    max-width: 480px;
    margin-top: 24px;
    font-size: 17px;
    line-height: 1.6;
    color: var(--magil-ink-soft);
  }

  .home-hero__cta {
    display: flex;
    gap: 14px;
    margin-top: 36px;
    flex-wrap: wrap;
  }

  .home-hero__trust {
    margin-top: 50px;
    display: flex;
    gap: 32px;
    padding-top: 28px;
    border-top: 1px solid var(--magil-line);
    flex-wrap: wrap;
  }
  .home-hero__trust-num {
    font-size: 32px;
    color: var(--magil-red-deep);
    line-height: 1;
  }
  .home-hero__trust-label {
    font-size: 12px;
    color: var(--magil-ink-soft);
    margin-top: 6px;
    letter-spacing: 0.04em;
  }

  /* Right side product showcase */
  .home-hero__product {
    position: relative;
    aspect-ratio: 1 / 1.1;
    max-width: 520px;
    margin-left: auto;
    display: none;
  }
  @media (min-width: 1024px) {
    .home-hero__product { display: block; }
  }

  .home-hero__product-disc {
    position: absolute;
    inset: 5% 5% 8%;
    background: radial-gradient(circle at 40% 30%, var(--magil-gold-light) 0%, var(--magil-gold) 50%, var(--magil-clay) 100%);
    border-radius: 50%;
    box-shadow: 0 30px 80px rgba(184,115,42,0.35), inset 0 -20px 60px rgba(139,14,32,0.25);
  }

  .home-hero__floating-tag {
    position: absolute;
    z-index: 3;
  }
  .home-hero__floating-tag--top {
    top: 8%;
    right: 0%;
    background: var(--magil-cream);
    padding: 14px 20px;
    border-radius: 16px;
    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
    transform: rotate(4deg);
  }
  .home-hero__floating-tag--bottom-left {
    bottom: 12%;
    left: -5%;
    background: var(--magil-paper);
    padding: 10px 14px;
    border-radius: 999px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
    transform: rotate(-3deg);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--magil-leaf);
  }

  .home-hero__price-tag {
    position: absolute;
    bottom: 0%;
    right: 10%;
    background: var(--magil-red-deep);
    color: var(--magil-cream);
    padding: 14px 22px;
    border-radius: 999px;
    box-shadow: 0 12px 28px rgba(139,14,32,0.35);
    display: flex;
    align-items: baseline;
    gap: 8px;
    z-index: 3;
  }
`;
