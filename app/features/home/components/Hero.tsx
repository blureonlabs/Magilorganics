import {Link} from 'react-router';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {DoodleUnderline, DoodleArrow} from '~/shared/motifs/DoodleElements';

export function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero__grid">
        {/* Left — editorial copy */}
        <div className="home-hero__copy">
          <div className="home-hero__badge">
            <PeacockMark size={24} />
            <span className="eyebrow">Magil Organics</span>
          </div>

          <h1 className="home-hero__heading">
            Cold-pressed oils &{' '}
            <em className="home-hero__heading-accent">
              herbal wellness
              <span className="home-hero__underline">
                <DoodleUnderline
                  width="100%"
                  color="var(--magil-gold)"
                  strokeWidth={2.5}
                />
              </span>
            </em>
            {' '}from our village.
          </h1>

          <p className="home-hero__body">
            Farm-sourced. Hand-prepared. Trusted by 12,000+ families.
            Cold-pressed oils, Siddha herbal powders, thailams and
            juices — made the traditional way in Paramathi Velur.
          </p>

          <div className="home-hero__cta">
            <Link to="/collections" className="btn btn-vibrant-red">
              Shop All Products <DoodleArrow width={18} color="#fff" />
            </Link>
            <Link to="/concerns" className="btn btn-outline">
              Shop by Concern
            </Link>
          </div>

          {/* Trust strip */}
          <div className="home-hero__trust">
            {[
              {label: '60+ Products'},
              {label: 'Farm-Sourced'},
              {label: 'Free Shipping above ₹999'},
            ].map((item) => (
              <div key={item.label} className="home-hero__trust-item">
                <span className="home-hero__trust-dot" />
                <span className="home-hero__trust-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — hero product illustration */}
        <div className="home-hero__product">
          <div className="home-hero__packshot">
            <HeroPouch />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: heroStyles}} />
    </section>
  );
}

function HeroPouch() {
  return (
    <svg
      width="280"
      height="360"
      viewBox="0 0 280 360"
      aria-hidden="true"
      style={{
        filter: 'drop-shadow(0 20px 60px rgba(43,24,16,0.18))',
      }}
    >
      <defs>
        <linearGradient id="hero-pouch" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3A1A12" />
          <stop offset="0.5" stopColor="#1F0808" />
          <stop offset="1" stopColor="#0D0303" />
        </linearGradient>
        <linearGradient id="hero-shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.3" stopColor="rgba(255,255,255,0.18)" />
          <stop offset="0.5" stopColor="rgba(255,255,255,0)" />
          <stop offset="0.7" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      {/* Pouch body */}
      <path
        d="M40 24 Q 40 8, 60 8 H 220 Q 240 8, 240 24 V 332 Q 240 350, 220 350 H 60 Q 40 350, 40 332 Z"
        fill="url(#hero-pouch)"
      />
      {/* Top seal */}
      <path
        d="M40 24 Q 40 8, 60 8 H 220 Q 240 8, 240 24 V 50 H 40 Z"
        fill="rgba(0,0,0,0.4)"
      />
      {/* Shine */}
      <path
        d="M40 24 Q 40 8, 60 8 H 220 Q 240 8, 240 24 V 332 Q 240 350, 220 350 H 60 Q 40 350, 40 332 Z"
        fill="url(#hero-shine)"
      />
      {/* Label */}
      <rect x="60" y="80" width="160" height="220" rx="6" fill="#FBF6EC" />
      {/* Peacock motif */}
      <g transform="translate(140 110)">
        <ellipse cx="0" cy="0" rx="4" ry="10" fill="#C8102E" />
        <ellipse
          cx="-6"
          cy="-2"
          rx="3"
          ry="8"
          fill="#E8A317"
          transform="rotate(-20)"
        />
        <ellipse
          cx="6"
          cy="-2"
          rx="3"
          ry="8"
          fill="#E8A317"
          transform="rotate(20)"
        />
        <circle cx="0" cy="-6" r="3" fill="#8B0E20" />
      </g>
      {/* Brand text */}
      <text
        x="140"
        y="148"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#8B0E20"
        letterSpacing="0.04em"
      >
        MAGIL
      </text>
      <text
        x="140"
        y="166"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="9"
        fontWeight="600"
        fill="#2B1810"
        letterSpacing="0.2em"
      >
        VILLAGE FOODS
      </text>
      {/* Divider */}
      <line x1="80" y1="180" x2="200" y2="180" stroke="#E8A317" strokeWidth="1" />
      <circle cx="140" cy="180" r="2.5" fill="#E8A317" />
      {/* Product name */}
      <text
        x="140"
        y="208"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="20"
        fontWeight="700"
        fill="#2B1810"
        letterSpacing="0.04em"
      >
        KABASURA
      </text>
      <text
        x="140"
        y="226"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="14"
        fontWeight="600"
        fill="#5A3A2A"
        fontStyle="italic"
      >
        Kudineer
      </text>
      {/* Sub info */}
      <text
        x="140"
        y="268"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="8"
        fontWeight="500"
        fill="#5A3A2A"
        letterSpacing="0.15em"
      >
        15 SIDDHA HERBS · IMMUNITY
      </text>
      {/* Certification badge */}
      <circle cx="140" cy="290" r="14" fill="#E8A317" />
      <text
        x="140"
        y="287"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="6"
        fontWeight="700"
        fill="#2B1810"
      >
        SIDDHA
      </text>
      <text
        x="140"
        y="295"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="6"
        fontWeight="700"
        fill="#2B1810"
      >
        CERTIFIED
      </text>
      {/* Weight */}
      <text
        x="140"
        y="320"
        textAnchor="middle"
        fontFamily="Satoshi, sans-serif"
        fontSize="9"
        fontWeight="700"
        fill="#5A3A2A"
        letterSpacing="0.1em"
      >
        NET 100 g
      </text>
    </svg>
  );
}

const heroStyles = /* css */ `
  .home-hero {
    position: relative;
    background: linear-gradient(180deg, var(--magil-cream) 0%, var(--magil-paper) 100%);
    overflow: clip;
  }

  .home-hero__grid {
    max-width: 1280px;
    margin: 0 auto;
    padding: 48px 24px 56px;
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 1024px) {
    .home-hero__grid {
      padding: 80px 56px 96px;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 64px;
    }
  }

  /* Badge / eyebrow */
  .home-hero__badge {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 28px;
    padding: 6px 16px 6px 8px;
    background: rgba(232,163,23,0.08);
    border: 1px solid rgba(232,163,23,0.2);
    border-radius: 999px;
  }
  .home-hero__badge .eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--magil-ink);
  }

  /* Heading */
  .home-hero__heading {
    font-weight: 700;
    font-size: 36px;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin: 0;
    color: var(--magil-ink);
  }
  @media (min-width: 768px) {
    .home-hero__heading {
      font-size: 56px;
    }
  }
  @media (min-width: 1024px) {
    .home-hero__heading {
      font-size: 72px;
    }
  }
  @media (min-width: 1280px) {
    .home-hero__heading {
      font-size: 80px;
    }
  }

  .home-hero__heading-accent {
    font-style: italic;
    color: var(--magil-red-deep);
    position: relative;
    font-weight: 700;
    display: inline-block;
  }
  .home-hero__underline {
    position: absolute;
    left: -4px;
    right: -4px;
    bottom: -6px;
    width: calc(100% + 8px);
    height: 12px;
    pointer-events: none;
  }

  /* Body text */
  .home-hero__body {
    max-width: 480px;
    margin-top: 24px;
    font-size: 16px;
    line-height: 1.7;
    color: var(--magil-ink-soft);
  }
  @media (min-width: 1024px) {
    .home-hero__body {
      font-size: 17px;
      margin-top: 28px;
    }
  }

  /* CTAs */
  .home-hero__cta {
    display: flex;
    gap: 14px;
    margin-top: 36px;
    flex-wrap: wrap;
  }
  .home-hero__cta .btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  /* Mobile: full-width stacked CTAs */
  @media (max-width: 767px) {
    .home-hero__cta {
      flex-direction: column;
      margin-top: 28px;
    }
    .home-hero__cta .btn {
      width: 100%;
      justify-content: center;
      min-height: 48px;
    }
  }

  /* Trust strip */
  .home-hero__trust {
    margin-top: 44px;
    display: flex;
    align-items: center;
    gap: 24px;
    padding-top: 24px;
    border-top: 1px solid var(--magil-line);
    flex-wrap: wrap;
  }
  .home-hero__trust-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .home-hero__trust-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--magil-gold);
    flex-shrink: 0;
  }
  .home-hero__trust-label {
    font-size: 13px;
    font-weight: 500;
    color: var(--magil-ink-soft);
    letter-spacing: 0.02em;
    white-space: nowrap;
  }

  @media (max-width: 767px) {
    .home-hero__grid {
      padding: 32px 20px 40px;
    }
    .home-hero__trust {
      gap: 16px;
      margin-top: 32px;
    }
    .home-hero__trust-label {
      font-size: 12px;
    }
  }

  /* Right side — product illustration */
  .home-hero__product {
    position: relative;
    display: none;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1024px) {
    .home-hero__product {
      display: flex;
    }
  }

  .home-hero__packshot {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .home-hero__packshot svg {
    width: 100%;
    height: auto;
    max-width: 300px;
  }
`;
