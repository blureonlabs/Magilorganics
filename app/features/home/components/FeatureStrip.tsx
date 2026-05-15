import {MannPaanai, Ammikkal} from '~/shared/motifs/HerbIllustrations';

export function FeatureStrip() {
  return (
    <section className="feature-strip-section">
      <div className="feature-strip">
        <div className="feature-strip__content">
          <div className="eyebrow" style={{color: 'var(--magil-gold)'}}>
            Why Magil
          </div>
          <h2 className="feature-strip__heading">
            We grow it.{' '}
            <em className="feature-strip__accent">We make it.</em>
          </h2>
          <p className="feature-strip__body">
            Every herb traced to a named farm. Every formula rooted in
            3,000-year-old Siddha texts. Zero middlemen. Zero compromise.
          </p>

          <div className="feature-strip__stats">
            {[
              ['Glyphosate-Free', 'Every batch lab-tested'],
              ['Village-Packed', 'Made and sealed in Paramathi Velur'],
              ['FSSC 22000', 'International food-safety certified'],
            ].map(([h, s]) => (
              <div key={h} className="feature-strip__stat">
                <div className="feature-strip__stat-heading">
                  {h}
                </div>
                <div className="feature-strip__stat-sub">{s}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative motifs */}
        <div className="feature-strip__motif-left" aria-hidden="true" style={{pointerEvents: 'none'}}>
          <MannPaanai size={50} opacity={0.1} />
        </div>
        <div className="feature-strip__motif-right" aria-hidden="true" style={{pointerEvents: 'none'}}>
          <Ammikkal size={50} opacity={0.1} />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: featureStripStyles}} />
    </section>
  );
}

const featureStripStyles = /* css */ `
  .feature-strip-section {
    padding: 60px 24px;
    background: var(--magil-cream);
  }
  @media (min-width: 768px) {
    .feature-strip-section { padding: 60px 48px; }
  }

  .feature-strip {
    max-width: 1440px;
    margin: 0 auto;
    background: linear-gradient(110deg, var(--magil-ink) 0%, var(--magil-red-deep) 100%);
    border-radius: 32px;
    padding: 40px 28px;
    color: var(--magil-cream);
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .feature-strip { padding: 56px 64px; }
  }

  .feature-strip__content {
    position: relative;
    z-index: 2;
  }

  .feature-strip__heading {
    font-size: clamp(28px, 5vw, 56px);
    font-weight: 700;
    line-height: 1.1;
    margin: 10px 0 20px;
    color: var(--magil-cream);
  }
  .feature-strip__accent {
    color: var(--magil-gold-light);
    font-style: italic;
    font-weight: 600;
  }

  .feature-strip__body {
    font-size: 17px;
    line-height: 1.6;
    color: rgba(251,246,236,0.78);
    max-width: 520px;
  }

  .feature-strip__stats {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 32px;
  }
  @media (min-width: 768px) {
    .feature-strip__stats {
      flex-direction: row;
      gap: 36px;
    }
  }
  .feature-strip__stat {
    border-left: 1px solid var(--magil-gold);
    padding-left: 14px;
  }
  .feature-strip__stat-heading {
    font-size: 18px;
    font-weight: 700;
    color: var(--magil-gold-light);
  }
  .feature-strip__stat-sub {
    font-size: 12px;
    color: rgba(251,246,236,0.6);
    margin-top: 4px;
  }

  .feature-strip__motif-left {
    position: absolute;
    bottom: 16px;
    left: 20px;
  }
  .feature-strip__motif-right {
    position: absolute;
    bottom: 16px;
    right: 20px;
  }
  @media (max-width: 767px) {
    .feature-strip__motif-left,
    .feature-strip__motif-right { display: none; }
  }
`;
