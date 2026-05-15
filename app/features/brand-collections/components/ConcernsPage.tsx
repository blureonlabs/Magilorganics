import {useState} from 'react';
import {Link} from 'react-router';
import {ProductCard} from '~/features/product-catalog';
import {ConcernCard, getConcernIcon} from './ConcernCard';
import type {ConcernData} from './ConcernCard';

const CONCERNS: ConcernData[] = [
  {
    id: 'immunity',
    name: 'Immunity',
    color: '#C8102E',
    headline: "Build a body that doesn't fall sick.",
    body: 'Seasonal flu? Recovery week? Constant fatigue? These formulations work with your body\u2019s natural defenses \u2014 the way Siddha intended.',
    stat: '78%',
    statLabel: 'fewer sick days in 90 days*',
  },
  {
    id: 'diabetes',
    name: 'Diabetes Care',
    color: '#A14828',
    headline: "Sugar that doesn't spike. Energy that doesn't crash.",
    body: 'Low-GI rice, bitter melon-infused formulations, and ancient Siddha herbs that help your body manage glucose \u2014 without sacrificing taste.',
    stat: 'GI < 50',
    statLabel: 'across our diabetes range',
  },
  {
    id: 'hair-skin',
    name: 'Hair & Skin',
    color: '#8B0E20',
    headline: 'What grandmothers put in your hair, now in a bottle.',
    body: 'Onion. Hibiscus. Coconut. Karuveppilai. The oils that built a hundred generations of thick hair \u2014 pressed in granite ural, never adulterated.',
    stat: '92%',
    statLabel: 'saw reduced hair fall in 60 days*',
  },
  {
    id: 'gut',
    name: 'Gut & Digestion',
    color: '#B8732A',
    headline: 'A calm gut. A clear mind. A fuller life.',
    body: 'Triphala. Bottle gourd. Banana stem. Adamant creeper. The fiber and ferments your body forgot \u2014 quietly working in the background.',
    stat: '12k+',
    statLabel: 'Triphala families and counting',
  },
  {
    id: 'lungs',
    name: 'Lungs & Breath',
    color: '#2A5F3E',
    headline: 'Breathing room, in a pouch.',
    body: 'Kabasura. Adathodai. Karpooravalli. Tulasi. The respiratory herbs of Tamil tradition \u2014 for clear breath and steady stamina.',
    stat: '3,000+',
    statLabel: 'year-old respiratory formulas',
  },
  {
    id: 'joints',
    name: 'Joint & Pain',
    color: '#5C0815',
    headline: 'For the knees that built a family.',
    body: 'Pinda Thailam. Karpoorathi. Vatha Sura. Ulunthu. Warming oils and decoctions that ease swelling, restore strength, and let you climb stairs again.',
    stat: '10 oils',
    statLabel: 'Thailams, in our family for 4 generations',
  },
  {
    id: 'weight',
    name: 'Weight Care',
    color: '#6E8E5C',
    headline: 'Not a diet. A re-introduction to your body.',
    body: 'Dr Slim. Avaram Senna. Bottle Gourd. Wheat Grass. Real metabolic support \u2014 no stimulants, no jitters, no rebound.',
    stat: '\u20B90',
    statLabel: 'stimulants, ever',
  },
  {
    id: 'mind',
    name: 'Mind & Memory',
    color: '#E8A317',
    headline: 'A quieter mind. A sharper memory.',
    body: 'Dr Brain. Ashwagandha. Brahmi. Sankhupushpam. For the student, the founder, the grandparent \u2014 anyone whose mind asks for more.',
    stat: '60 days',
    statLabel: 'to feel the difference, per our users',
  },
];

interface ConcernsPageProps {
  products: any[];
}

export function ConcernsPage({products}: ConcernsPageProps) {
  const [active, setActive] = useState('immunity');

  return (
    <div>
      {/* Hero */}
      <section className="concerns-hero">
        <div className="concerns-hero__inner">
          <div className="concerns-hero__grid">
            <div>
              <div className="eyebrow">
                Shop by Concern
              </div>
              <h1 className="serif concerns-hero__heading">
                What is your body{' '}
                <em className="concerns-hero__accent">
                  asking for
                  <svg className="concerns-hero__underline" viewBox="0 0 400 12" preserveAspectRatio="none">
                    <path d="M2 8 Q 100 2, 200 6 T 398 8" stroke="var(--magil-gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  </svg>
                </em>
                ?
              </h1>
              <p className="concerns-hero__body">
                Eight body concerns, eight curated paths. Each guided by a
                Siddha vaidyar, each tested on real grandmothers, each shipped
                from a real village. Pick your concern &mdash; we&rsquo;ll walk
                you through the remedy.
              </p>
            </div>

            {/* Quick jump sidebar */}
            <div className="concerns-hero__nav">
              <div className="eyebrow" style={{marginBottom: 6}}>Quick Jump</div>
              {CONCERNS.map((c) => (
                <ConcernCard
                  key={c.id}
                  concern={c}
                  active={active === c.id}
                  onClick={() => {
                    setActive(c.id);
                    document.getElementById(c.id)?.scrollIntoView({behavior: 'smooth', block: 'start'});
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concern sections */}
      {CONCERNS.map((concern, idx) => (
        <ConcernSection
          key={concern.id}
          concern={concern}
          idx={idx}
          products={products}
        />
      ))}

      {/* Vaidyar CTA */}
      <section className="vaidyar-cta-section">
        <div className="vaidyar-cta">
          <div className="vaidyar-cta__content">
            <div className="eyebrow">
              Personalized guidance
            </div>
            <h2 className="serif vaidyar-cta__heading">
              Talk to a real <em className="vaidyar-cta__accent">vaidyar</em>.
              <br />
              Free, on the phone.
            </h2>
            <p className="vaidyar-cta__body">
              Not sure which Kudineer? Conflicting medications? Pregnancy? Our
              Madurai-based Siddha practitioners take 15-minute consultation
              calls, free, no upsells.
            </p>
            <div className="vaidyar-cta__actions">
              <Link to="/pages/contact" className="btn btn-primary">
                Book a call
              </Link>
              <Link to="/pages/contact" className="btn btn-outline">
                WhatsApp us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: concernsStyles}} />
    </div>
  );
}

function ConcernSection({
  concern,
  idx,
  products,
}: {
  concern: ConcernData;
  idx: number;
  products: any[];
}) {
  const flip = idx % 2 === 1;
  const Icon = getConcernIcon(concern.id);

  // Show up to 4 products per concern
  const displayProducts = products.slice(0, 4);

  return (
    <section
      id={concern.id}
      className="concern-section"
      style={{
        background: idx % 2 === 0 ? 'var(--magil-paper)' : 'var(--magil-cream)',
      }}
    >
      <div className="concern-section__inner">
        {/* Copy + packshot */}
        <div
          className="concern-section__hero"
          style={{direction: flip ? 'rtl' : 'ltr'}}
        >
          <div className="concern-section__copy" style={{direction: 'ltr'}}>
            <div className="concern-section__badge">
              <div
                className="concern-section__icon"
                style={{background: concern.color}}
              >
                <Icon size={26} style={{color: '#fff'}} />
              </div>
              <div>
                <div className="eyebrow" style={{color: concern.color}}>
                  {concern.name}
                </div>
              </div>
            </div>

            <h2 className="serif concern-section__headline">
              {concern.headline}
            </h2>
            <p className="concern-section__body">{concern.body}</p>

            <div
              className="concern-section__stat-strip"
              style={{borderTopColor: concern.color}}
            >
              <div>
                <div
                  className="serif-bold concern-section__stat-num"
                  style={{color: concern.color}}
                >
                  {concern.stat}
                </div>
                <div className="concern-section__stat-label">
                  {concern.statLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Packshot */}
          <div className="concern-section__packshot" style={{direction: 'ltr'}}>
            <div
              className="concern-section__disc"
              style={{
                background: `linear-gradient(135deg, var(--magil-cream) 0%, ${concern.color}22 100%)`,
                boxShadow: `inset 0 -30px 80px ${concern.color}33`,
              }}
            />
            <div className="concern-section__chip concern-section__chip--top" style={{color: concern.color}}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill={concern.color} aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Vaidyar-approved
            </div>
            <div className="concern-section__chip concern-section__chip--bottom" style={{background: concern.color}}>
              Real medicine. Real village.
            </div>
          </div>
        </div>

        {/* Product grid */}
        <div className="concern-section__products">
          <div className="concern-section__products-header">
            <div className="eyebrow" style={{color: concern.color}}>
              Recommended remedies for {concern.name.toLowerCase()}
            </div>
            <Link
              to="/collections"
              style={{fontSize: 13, fontWeight: 600, color: concern.color}}
            >
              View all &rarr;
            </Link>
          </div>
          <div className="concern-section__products-grid">
            {displayProducts.map((p: any) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const concernsStyles = /* css */ `
  /* Hero */
  .concerns-hero {
    background: linear-gradient(135deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%);
    padding: 60px 24px 50px;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .concerns-hero { padding: 60px 48px 50px; }
  }
  .concerns-hero__inner {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }
  .concerns-hero__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: flex-end;
  }
  @media (min-width: 1024px) {
    .concerns-hero__grid {
      grid-template-columns: 1.4fr 1fr;
      gap: 60px;
    }
  }
  .concerns-hero__heading {
    font-size: clamp(40px, 7vw, 96px);
    font-weight: 500;
    line-height: 0.92;
    margin: 12px 0 14px;
    color: var(--magil-ink);
    letter-spacing: -0.025em;
  }
  .concerns-hero__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
    position: relative;
  }
  .concerns-hero__underline {
    position: absolute;
    left: -6px;
    right: -6px;
    bottom: -8px;
    width: calc(100% + 12px);
    height: 12px;
  }
  .concerns-hero__body {
    max-width: 540px;
    margin-top: 18px;
    color: var(--magil-ink-soft);
    font-size: 17px;
    line-height: 1.65;
  }
  .concerns-hero__nav {
    background: #fff;
    border: 1px solid var(--magil-line);
    border-radius: 18px;
    padding: 18px 22px;
    box-shadow: var(--magil-shadow);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  /* Mobile: horizontal scroll pills for quick jump */
  @media (max-width: 767px) {
    .concerns-hero {
      padding: 40px 16px 30px;
    }
    .concerns-hero__nav {
      flex-direction: row;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      gap: 8px;
      padding: 12px 16px;
      border-radius: 999px;
      scrollbar-width: none;
    }
    .concerns-hero__nav::-webkit-scrollbar {
      display: none;
    }
    .concerns-hero__nav > .eyebrow {
      display: none;
    }
  }

  /* Concern sections */
  .concern-section {
    padding: 80px 24px;
    position: relative;
  }
  @media (min-width: 768px) {
    .concern-section { padding: 100px 48px; }
  }
  .concern-section__inner {
    max-width: 1440px;
    margin: 0 auto;
  }
  .concern-section__hero {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    align-items: center;
    margin-bottom: 50px;
  }
  @media (min-width: 1024px) {
    .concern-section__hero {
      grid-template-columns: 1.1fr 1fr;
      gap: 60px;
    }
  }

  .concern-section__copy {
    position: relative;
  }
  .concern-section__badge {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 14px;
  }
  .concern-section__icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .concern-section__headline {
    font-size: clamp(28px, 5vw, 56px);
    font-weight: 500;
    line-height: 1;
    margin: 10px 0 18px;
    color: var(--magil-ink);
    letter-spacing: -0.02em;
  }
  .concern-section__body {
    font-size: 17px;
    color: var(--magil-ink-soft);
    line-height: 1.65;
    max-width: 520px;
  }
  .concern-section__stat-strip {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px dashed;
  }
  .concern-section__stat-num {
    font-size: 44px;
    line-height: 1;
  }
  .concern-section__stat-label {
    font-size: 12px;
    color: var(--magil-ink-soft);
    margin-top: 6px;
    max-width: 180px;
  }

  /* Packshot */
  .concern-section__packshot {
    position: relative;
    aspect-ratio: 1 / 1;
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
    display: none;
  }
  @media (min-width: 1024px) {
    .concern-section__packshot { display: block; }
  }
  .concern-section__disc {
    position: absolute;
    inset: 8%;
    border-radius: 50%;
  }
  .concern-section__chip {
    position: absolute;
    z-index: 3;
    font-size: 13px;
    font-weight: 600;
    border-radius: 999px;
    box-shadow: 0 10px 24px rgba(0,0,0,0.1);
  }
  .concern-section__chip--top {
    top: 8%;
    right: 5%;
    background: var(--magil-paper);
    padding: 10px 16px;
    transform: rotate(4deg);
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .concern-section__chip--bottom {
    bottom: 10%;
    left: 0%;
    color: var(--magil-cream);
    padding: 10px 16px;
    transform: rotate(-3deg);
  }

  /* Products */
  .concern-section__products-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    flex-wrap: wrap;
    gap: 12px;
  }
  .concern-section__products-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }
  @media (min-width: 768px) {
    .concern-section__products-grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  /* Vaidyar CTA */
  .vaidyar-cta-section {
    background: var(--magil-paper);
    padding: 80px 24px 100px;
  }
  @media (min-width: 768px) {
    .vaidyar-cta-section { padding: 100px 48px; }
  }
  .vaidyar-cta {
    max-width: 1200px;
    margin: 0 auto;
    background: linear-gradient(135deg, var(--magil-cream-warm) 0%, var(--magil-gold-soft) 100%);
    border-radius: 28px;
    padding: 50px 32px;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .vaidyar-cta { padding: 70px 80px; }
  }
  .vaidyar-cta__content {
    position: relative;
    z-index: 2;
  }
  .vaidyar-cta__heading {
    font-size: clamp(28px, 5vw, 56px);
    font-weight: 500;
    line-height: 1;
    margin: 10px 0 18px;
    color: var(--magil-ink);
  }
  .vaidyar-cta__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
    font-style: italic;
  }
  .vaidyar-cta__body {
    font-size: 17px;
    color: var(--magil-ink-soft);
    line-height: 1.6;
    max-width: 480px;
  }
  .vaidyar-cta__actions {
    display: flex;
    gap: 14px;
    margin-top: 28px;
    flex-wrap: wrap;
  }

  /* Mobile: concern sections full width, stacked */
  @media (max-width: 767px) {
    .concern-section {
      padding: 50px 16px;
    }
    .concern-section__hero {
      gap: 24px;
    }
    .concern-section__headline {
      font-size: 26px;
    }
    .concern-section__body {
      font-size: 15px;
    }
    .concern-section__stat-num {
      font-size: 32px;
    }
    .concern-section__products-grid {
      gap: 16px;
    }
    .vaidyar-cta-section {
      padding: 50px 16px 60px;
    }
    .vaidyar-cta {
      padding: 32px 20px;
    }
    .vaidyar-cta__actions {
      flex-direction: column;
    }
    .vaidyar-cta__actions .btn {
      width: 100%;
      justify-content: center;
    }
  }
`;
