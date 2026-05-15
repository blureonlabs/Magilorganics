import {Link} from 'react-router';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {VaazhaiIlai} from '~/shared/motifs/HerbIllustrations';
import {BrandSection} from './BrandSection';
import {CollectionCard} from './CollectionCard';
import {
  VP_COLLECTION_META,
  MAGIL_COLLECTION_META,
  VP_COLLECTION_HANDLES,
  MAGIL_COLLECTION_HANDLES,
} from '../lib/brand-mapping';

interface Collection {
  id: string;
  title: string;
  handle: string;
  description: string;
  image?: {url: string; altText?: string | null} | null;
}

interface AllCollectionsPageProps {
  collections: Collection[];
}

function getProductCount(collections: Collection[], handle: string): number {
  const col = collections.find((c) => c.handle === handle);
  // We don't have productsCount from simple query, show 0 as fallback
  return col ? 0 : 0;
}

export function AllCollectionsPage({collections}: AllCollectionsPageProps) {
  const vpCollections = collections.filter((c) =>
    VP_COLLECTION_HANDLES.includes(c.handle),
  );
  const magilCollections = collections.filter((c) =>
    MAGIL_COLLECTION_HANDLES.includes(c.handle),
  );

  return (
    <div>
      {/* Hero */}
      <section className="collections-hero">
        <div className="collections-hero__inner">
          <div className="eyebrow">
            All Categories
          </div>
          <h1 className="serif collections-hero__heading">
            Shop by{' '}
            <em className="collections-hero__accent">category</em>
          </h1>
          <p className="collections-hero__body">
            Two brands under one roof:{' '}
            <strong style={{color: 'var(--magil-leaf)'}}>Village Pharma</strong>{' '}
            for our Siddha & Ayurvedic remedies, and{' '}
            <strong style={{color: 'var(--magil-red-deep)'}}>Magil Organics</strong>{' '}
            for our own cold-pressed oils. Same village, same hands.
          </p>

          <div className="collections-hero__stats">
            {[
              {num: '9', label: 'Collections'},
              {num: '60+', label: 'Total products'},
              {num: '2', label: 'Brands, one family'},
              {num: '1', label: 'Village in Paramathi Velur'},
            ].map((s) => (
              <div key={s.label} className="collections-hero__stat">
                <div className="serif-bold collections-hero__stat-num">
                  {s.num}
                </div>
                <div className="collections-hero__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Village Pharma section */}
      <section
        id="vp"
        className="collections-brand-section"
        style={{
          background: 'linear-gradient(180deg, var(--magil-paper) 0%, var(--magil-cream) 100%)',
        }}
      >
        <div className="collections-brand-section__inner">
          <BrandSection
            brand="vp"
            productCount={61}
            blurb="The heart of our shelf. Sixty herbal formulations from Paramathi Velur \u2014 Kudineers brewed over woodfire, Thailams pressed in granite ural, Chooranams ground at sunrise. All Siddha-vaidyar approved, all glyphosate-tested, all hand-prepared in small batches."
          />
          <div className="collections-brand-section__grid">
            {VP_COLLECTION_META.map((c) => {
              const liveCol = vpCollections.find((vc) => vc.handle === c.handle);
              return (
                <CollectionCard
                  key={c.handle}
                  collection={c}
                  productCount={liveCol ? 0 : 0}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Section break */}
      <div className="collections-section-break" style={{background: 'var(--magil-cream)'}}>
        <div className="collections-section-break__inner">
          <div className="feather-divider" style={{width: '100%', maxWidth: 800}}>
            <PeacockMark size={32} />
          </div>
          <div className="script collections-section-break__text">
            and from our own mill &mdash;
          </div>
        </div>
      </div>

      {/* Magil section */}
      <section
        id="magil"
        className="collections-brand-section"
        style={{
          background: 'linear-gradient(180deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%)',
          paddingTop: 20,
        }}
      >
        <div className="collections-brand-section__inner">
          <BrandSection
            brand="magil"
            productCount={5}
            blurb="Our own cold-pressed oils, pressed in our family mill in Paramathi Velur. Single-filtered, never refined, sold in glass bottles. Groundnut for everyday cooking, Gingelly for Tamil kitchens, Coconut for everything, Castor for hair, Deepam for the lamp."
          />
          <div className="collections-brand-section__grid">
            {MAGIL_COLLECTION_META.map((c) => (
              <CollectionCard key={c.handle} collection={c} productCount={5} />
            ))}

            {/* Oils price tile */}
            <div className="collections-oils-tile">
              <div style={{position: 'relative'}}>
                <div className="eyebrow" style={{color: 'var(--magil-gold-light)'}}>
                  The 5 oils we press
                </div>
                <h3 className="serif-bold collections-oils-tile__heading">
                  Three sizes, one promise.
                </h3>
                <div className="collections-oils-tile__list">
                  {[
                    ['Groundnut Oil', '500ml \u20B9180 / 1L \u20B9340 / 5L \u20B91,600'],
                    ['Gingelly Oil', '500ml \u20B9230 / 1L \u20B9440 / 5L \u20B92,100'],
                    ['Coconut Oil', '500ml \u20B9230 / 1L \u20B9440 / 5L \u20B92,100'],
                    ['Castor Oil', '500ml \u20B9210 / 1L \u20B9350'],
                    ['Deepam Oil', '500ml \u20B9160 / 1L \u20B9280'],
                  ].map(([n, p]) => (
                    <div key={n} className="collections-oils-tile__row">
                      <span className="collections-oils-tile__oil-name">{n}</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to="/collections/cold-pressed-oils"
                className="btn btn-gold collections-oils-tile__btn"
              >
                Shop all 5 oils &rarr;
              </Link>
            </div>
          </div>

          {/* Decorative VaazhaiIlai accent */}
          <div className="collections-magil__vaazhai" aria-hidden="true" style={{pointerEvents: 'none'}}>
            <VaazhaiIlai size={60} opacity={0.06} />
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: allCollectionsStyles}} />
    </div>
  );
}

const allCollectionsStyles = /* css */ `
  /* Hero */
  .collections-hero {
    background: linear-gradient(135deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%);
    padding: 60px 24px 40px;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .collections-hero { padding: 60px 48px 40px; }
  }

  .collections-hero__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .collections-hero__heading {
    font-size: clamp(40px, 8vw, 88px);
    font-weight: 500;
    line-height: 0.95;
    margin: 12px 0 18px;
    color: var(--magil-ink);
    letter-spacing: -0.025em;
  }
  .collections-hero__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .collections-hero__body {
    margin-top: 18px;
    font-size: 17px;
    color: var(--magil-ink-soft);
    line-height: 1.6;
    max-width: 640px;
  }

  .collections-hero__stats {
    margin-top: 36px;
    padding-top: 28px;
    border-top: 1px solid var(--magil-line);
    display: flex;
    gap: 48px;
    flex-wrap: wrap;
  }
  .collections-hero__stat-num {
    font-size: 36px;
    color: var(--magil-red-deep);
    line-height: 1;
  }
  .collections-hero__stat-label {
    font-size: 12px;
    color: var(--magil-ink-soft);
    margin-top: 6px;
  }

  /* Mobile: stats 2 per row, single column cards */
  @media (max-width: 767px) {
    .collections-hero {
      padding: 40px 16px 30px;
    }
    .collections-hero__stats {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .collections-hero__stat-num {
      font-size: 28px;
    }
    .collections-brand-section {
      padding: 40px 16px;
    }
    .collections-brand-section__grid {
      grid-template-columns: 1fr !important;
    }
  }

  /* Brand sections */
  .collections-brand-section {
    padding: 60px 24px;
  }
  @media (min-width: 768px) {
    .collections-brand-section { padding: 60px 48px; }
  }

  .collections-brand-section__inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .collections-brand-section__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 22px;
  }
  @media (min-width: 768px) {
    .collections-brand-section__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Section break */
  .collections-section-break {
    padding: 0 24px;
  }
  @media (min-width: 768px) {
    .collections-section-break { padding: 0 48px; }
  }
  .collections-section-break__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    padding: 20px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .collections-section-break__text {
    margin-top: 10px;
    font-size: 22px;
    color: var(--magil-ink-soft);
    font-style: italic;
  }

  /* Oils tile */
  .collections-oils-tile {
    padding: 26px;
    border-radius: 20px;
    background: linear-gradient(135deg, #2B1810 0%, #5C0815 100%);
    color: var(--magil-cream);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    min-height: 200px;
  }
  .collections-oils-tile__heading {
    font-size: 26px;
    margin: 10px 0 14px;
    color: var(--magil-cream);
  }
  .collections-oils-tile__list {
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 13px;
    color: rgba(251,246,236,0.85);
  }
  .collections-oils-tile__row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 4px;
  }
  .collections-oils-tile__oil-name {
    font-weight: 600;
    color: var(--magil-gold-light);
  }
  .collections-oils-tile__btn {
    margin-top: 16px;
    padding: 10px 18px;
    font-size: 12px;
    align-self: flex-start;
    position: relative;
  }

  .collections-magil__vaazhai {
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
  @media (max-width: 767px) {
    .collections-magil__vaazhai { display: none; }
  }
`;
