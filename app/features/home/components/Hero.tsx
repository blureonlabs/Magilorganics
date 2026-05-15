import {Link} from 'react-router';
import {PeacockBackdrop} from '~/shared/motifs/PeacockBackdrop';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {DoodleUnderline, DoodleArrow} from '~/shared/motifs/DoodleElements';
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
            <div className="eyebrow">Siddha Tradition · Since the Cauvery</div>
          </div>

          <h1 className="home-hero__heading">
            A taste of
            <br />
            <em className="home-hero__heading-accent">
              tradition,
              <span className="home-hero__underline">
                <DoodleUnderline width={200} color="var(--magil-gold)" strokeWidth={2.5} />
              </span>
            </em>{' '}
            <br />
            brewed at home.
          </h1>

          <div className="tamil home-hero__tamil">
            பாரம்பரியத்தின் சுவை — கிராமத்திலிருந்து உங்கள் வீடு வரை
          </div>

          <p className="home-hero__body">
            Kudineers steeped over woodfire. Thailams pressed in granite ural.
            Chooranams ground at sunrise. Every Magil jar carries the patience
            of a Tamil grandmother — and the wisdom of 3,000-year-old
            Siddha medicine.
          </p>

          <div className="home-hero__cta">
            <Link to="/products/kabasura-kudineer" className="btn btn-vibrant-red">
              Shop the Kabasura <DoodleArrow size={18} color="#fff" />
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
              {num: '4.9★', label: 'Across 8,000 reviews'},
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
          {/* Decorative dotted ring */}
          <svg className="home-hero__ring" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" stroke="var(--magil-red-deep)" strokeWidth="0.2" fill="none" strokeDasharray="0.5 1"/>
            <circle cx="50" cy="50" r="42" stroke="var(--magil-gold-light)" strokeWidth="0.15" fill="none" opacity="0.6"/>
          </svg>

          {/* Background disc */}
          <div className="home-hero__product-disc" />

          {/* Product packshot — Kabasura pouch */}
          <div className="home-hero__packshot">
            <HeroPouch />
          </div>

          {/* Floating tag - bestseller */}
          <div className="home-hero__floating-tag home-hero__floating-tag--top">
            <div className="eyebrow" style={{fontSize: 10}}>
              Hero of the season
            </div>
            <div className="serif-bold" style={{fontSize: 22, color: 'var(--magil-red-deep)', marginTop: 4}}>
              Kabasura
            </div>
            <div className="tamil" style={{fontSize: 14, color: 'var(--magil-ink-soft)'}}>
              கபசுர குடிநீர்
            </div>
          </div>

          {/* Floating ingredient tag */}
          <div className="home-hero__floating-tag home-hero__floating-tag--bottom-left">
            <LeafIcon size={16} />
            <span>15 Siddha herbs</span>
          </div>

          {/* Floating price tag */}
          <div className="home-hero__price-tag">
            <span style={{fontSize: 12, opacity: 0.8}}>From</span>
            <span className="serif-bold" style={{fontSize: 28}}>₹175</span>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: heroStyles}} />
    </section>
  );
}

function HeroPouch() {
  return (
    <svg width="280" height="360" viewBox="0 0 280 360" aria-hidden="true" style={{
      filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
    }}>
      <defs>
        <linearGradient id="hero-pouch" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3A1A12"/>
          <stop offset="0.5" stopColor="#1F0808"/>
          <stop offset="1" stopColor="#0D0303"/>
        </linearGradient>
        <linearGradient id="hero-shine" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="rgba(255,255,255,0)"/>
          <stop offset="0.3" stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="0.5" stopColor="rgba(255,255,255,0)"/>
          <stop offset="0.7" stopColor="rgba(255,255,255,0.08)"/>
          <stop offset="1" stopColor="rgba(255,255,255,0)"/>
        </linearGradient>
      </defs>
      {/* Pouch body */}
      <path d="M40 24 Q 40 8, 60 8 H 220 Q 240 8, 240 24 V 332 Q 240 350, 220 350 H 60 Q 40 350, 40 332 Z"
        fill="url(#hero-pouch)"/>
      {/* Top seal */}
      <path d="M40 24 Q 40 8, 60 8 H 220 Q 240 8, 240 24 V 50 H 40 Z" fill="rgba(0,0,0,0.4)"/>
      {/* Shine */}
      <path d="M40 24 Q 40 8, 60 8 H 220 Q 240 8, 240 24 V 332 Q 240 350, 220 350 H 60 Q 40 350, 40 332 Z"
        fill="url(#hero-shine)"/>
      {/* Label */}
      <rect x="60" y="80" width="160" height="220" rx="6" fill="#FBF6EC"/>
      {/* Peacock motif */}
      <g transform="translate(140 110)">
        <ellipse cx="0" cy="0" rx="4" ry="10" fill="#C8102E"/>
        <ellipse cx="-6" cy="-2" rx="3" ry="8" fill="#E8A317" transform="rotate(-20)"/>
        <ellipse cx="6" cy="-2" rx="3" ry="8" fill="#E8A317" transform="rotate(20)"/>
        <circle cx="0" cy="-6" r="3" fill="#8B0E20"/>
      </g>
      {/* Brand text */}
      <text x="140" y="148" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="22" fontWeight="700" fill="#8B0E20" letterSpacing="0.04em">MAGIL</text>
      <text x="140" y="166" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontSize="9" fontWeight="600" fill="#2B1810" letterSpacing="0.2em">VILLAGE FOODS</text>
      {/* Divider */}
      <line x1="80" y1="180" x2="200" y2="180" stroke="#E8A317" strokeWidth="1"/>
      <circle cx="140" cy="180" r="2.5" fill="#E8A317"/>
      {/* Product name */}
      <text x="140" y="208" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="20" fontWeight="700" fill="#2B1810" letterSpacing="0.04em">KABASURA</text>
      <text x="140" y="226" textAnchor="middle" fontFamily="Cormorant Garamond, serif" fontSize="14" fontWeight="600" fill="#5A3A2A" fontStyle="italic">Kudineer</text>
      <text x="140" y="244" textAnchor="middle" fontFamily="Hind Madurai, sans-serif" fontSize="13" fontWeight="500" fill="#8B0E20">கபசுர குடிநீர்</text>
      {/* Sub info */}
      <text x="140" y="268" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontSize="8" fontWeight="500" fill="#5A3A2A" letterSpacing="0.15em">15 SIDDHA HERBS · IMMUNITY</text>
      {/* Certification badge */}
      <circle cx="140" cy="290" r="14" fill="#E8A317"/>
      <text x="140" y="287" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontSize="6" fontWeight="700" fill="#2B1810">SIDDHA</text>
      <text x="140" y="295" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontSize="6" fontWeight="700" fill="#2B1810">CERTIFIED</text>
      {/* Weight */}
      <text x="140" y="320" textAnchor="middle" fontFamily="Satoshi, sans-serif" fontSize="9" fontWeight="700" fill="#5A3A2A" letterSpacing="0.1em">NET 100 g</text>
    </svg>
  );
}

const heroStyles = /* css */ `
  .home-hero {
    position: relative;
    background: linear-gradient(135deg, #FBF6EC 0%, #F5EBD7 100%);
    overflow: clip;
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
  @media (max-width: 767px) {
    .home-hero__tamil { font-size: 16px; }
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
  .home-hero__cta .btn { display: inline-flex; align-items: center; gap: 8px; }

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

  /* Mobile hero optimizations */
  @media (max-width: 767px) {
    .home-hero__grid {
      padding: 24px 16px 40px;
    }
    .home-hero__heading {
      font-size: 38px;
    }
    .home-hero__body {
      font-size: 15px;
      margin-top: 16px;
    }
    .home-hero__cta {
      flex-direction: column;
      margin-top: 24px;
    }
    .home-hero__cta .btn {
      width: 100%;
      justify-content: center;
      min-height: 48px;
    }
    .home-hero__trust {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 32px;
    }
    .home-hero__trust-num {
      font-size: 26px;
    }
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

  .home-hero__ring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .home-hero__product-disc {
    position: absolute;
    inset: 8% 8% 12%;
    background: radial-gradient(circle at 40% 30%, var(--magil-gold-light) 0%, var(--magil-gold) 50%, var(--magil-clay) 100%);
    border-radius: 50%;
    box-shadow: 0 30px 80px rgba(184,115,42,0.35), inset 0 -20px 60px rgba(139,14,32,0.25);
    z-index: 1;
  }

  .home-hero__packshot {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }
  .home-hero__packshot svg {
    width: 55%;
    height: auto;
    max-width: 280px;
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
