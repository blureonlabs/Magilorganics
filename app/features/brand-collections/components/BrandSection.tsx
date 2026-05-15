import {BrandBadge} from '~/features/product-catalog';

interface BrandSectionProps {
  brand: 'vp' | 'magil';
  productCount: number;
  blurb: string;
}

const BRAND_CONFIG = {
  vp: {
    heading: (
      <>
        The{' '}
        <em style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
          Village Pharma
        </em>{' '}
        shelf
      </>
    ),
    statLabel: 'Siddha & Ayurvedic products',
    statNote: 'PARTNER BRAND \u00b7 PARAMATHI VELUR',
    bgGradient: 'linear-gradient(135deg, var(--magil-leaf) 0%, #1A3F2A 100%)',
  },
  magil: {
    heading: (
      <>
        Pressed in our{' '}
        <em style={{color: 'var(--magil-red-deep)', fontWeight: 600}}>
          own mill
        </em>
      </>
    ),
    statLabel: 'Single-filtered oils, 3 sizes each',
    statNote: 'HOUSE BRAND \u00b7 OUR FAMILY MILL',
    bgGradient:
      'linear-gradient(135deg, var(--magil-red-deep) 0%, var(--magil-red-dark) 100%)',
  },
};

export function BrandSection({brand, productCount, blurb}: BrandSectionProps) {
  const config = BRAND_CONFIG[brand];
  const isVP = brand === 'vp';

  return (
    <div className="brand-section">
      <div className="brand-section__content">
        <div className="brand-section__badge">
          {isVP ? (
            <BrandBadge vendor="Village Pharma" size="lg" />
          ) : (
            <span className="brand-section__house-badge">
              <span className="brand-section__house-dot" />
              House Brand &middot; Magil Organics
            </span>
          )}
        </div>

        <h2 className="serif brand-section__heading">{config.heading}</h2>
        <p className="brand-section__blurb">{blurb}</p>
      </div>

      <div className="brand-section__stats" style={{background: config.bgGradient}}>
        <div style={{position: 'relative'}}>
          <div className="serif-bold brand-section__stats-num">
            {productCount}+
          </div>
          <div className="brand-section__stats-label">{config.statLabel}</div>
          <div className="brand-section__stats-note">{config.statNote}</div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: brandSectionStyles}} />
    </div>
  );
}

const brandSectionStyles = /* css */ `
  .brand-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    align-items: center;
    margin-bottom: 36px;
  }
  @media (min-width: 768px) {
    .brand-section {
      grid-template-columns: 1.4fr 1fr;
      gap: 50px;
    }
  }

  .brand-section__badge {
    margin-bottom: 16px;
  }
  .brand-section__house-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    background: var(--magil-red-deep);
    color: var(--magil-cream);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-radius: 4px;
  }
  .brand-section__house-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--magil-gold);
  }

  .brand-section__heading {
    font-size: clamp(32px, 5vw, 64px);
    font-weight: 500;
    line-height: 0.95;
    margin: 0 0 14px;
    color: var(--magil-ink);
    letter-spacing: -0.02em;
  }

  .brand-section__blurb {
    font-size: 16px;
    line-height: 1.65;
    color: var(--magil-ink-soft);
    max-width: 540px;
  }

  .brand-section__stats {
    color: var(--magil-cream);
    padding: 30px 32px;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
  }
  .brand-section__stats-num {
    font-size: 56px;
    line-height: 1;
    color: var(--magil-gold-light);
  }
  .brand-section__stats-label {
    font-size: 14px;
    margin-top: 8px;
    color: rgba(251,246,236,0.8);
  }
  .brand-section__stats-note {
    margin-top: 18px;
    font-size: 12px;
    color: var(--magil-gold-light);
    letter-spacing: 0.1em;
    font-weight: 600;
  }
`;
