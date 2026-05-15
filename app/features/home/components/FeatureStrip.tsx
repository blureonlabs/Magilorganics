export function FeatureStrip() {
  return (
    <section className="feature-strip-section">
      <div className="feature-strip">
        {/* Decorative arcs */}
        <svg
          className="feature-strip__motif"
          viewBox="0 0 200 200"
          aria-hidden="true"
        >
          {[20, 40, 60, 80, 100].map((r) => (
            <circle
              key={r}
              cx="100"
              cy="100"
              r={r}
              stroke="var(--magil-gold)"
              strokeWidth="0.4"
              fill="none"
              strokeDasharray="0.6 1.2"
            />
          ))}
        </svg>

        <div className="feature-strip__content">
          <div className="eyebrow" style={{color: 'var(--magil-gold)'}}>
            The Magil Promise
          </div>
          <h2 className="serif feature-strip__heading">
            For anyone seeking{' '}
            <em className="feature-strip__accent">real medicine</em> from real
            soil.
          </h2>
          <p className="feature-strip__body">
            If you&rsquo;re tired of synthetic supplements, polished promises
            and &ldquo;Ayurvedic-inspired&rdquo; mass production &mdash; these
            are for you. Our formulations come from Siddha texts, our
            ingredients from named farmers, and our quality from your
            grandmother&rsquo;s standards.
          </p>

          <div className="feature-strip__stats">
            {[
              ['Glyphosate-free', 'Lab-tested every batch'],
              ['No outsourcing', 'Packed at our village'],
              ['FSSC 22000', 'World-class hygiene'],
            ].map(([h, s]) => (
              <div key={h} className="feature-strip__stat">
                <div className="serif-bold feature-strip__stat-heading">
                  {h}
                </div>
                <div className="feature-strip__stat-sub">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: featureStripStyles}} />
    </section>
  );
}

const featureStripStyles = /* css */ `
  .feature-strip-section {
    padding: 80px 24px;
    background: var(--magil-cream);
  }
  @media (min-width: 768px) {
    .feature-strip-section { padding: 80px 48px; }
  }

  .feature-strip {
    max-width: 1440px;
    margin: 0 auto;
    background: linear-gradient(110deg, var(--magil-ink) 0%, var(--magil-red-deep) 100%);
    border-radius: 32px;
    padding: 50px 32px;
    color: var(--magil-cream);
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .feature-strip { padding: 70px 80px; }
  }

  .feature-strip__motif {
    position: absolute;
    top: -100px;
    right: -100px;
    width: 400px;
    height: 400px;
    opacity: 0.15;
    pointer-events: none;
  }

  .feature-strip__content {
    position: relative;
    z-index: 2;
  }

  .feature-strip__heading {
    font-size: clamp(28px, 5vw, 64px);
    line-height: 1;
    margin: 10px 0 24px;
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
    gap: 36px;
    margin-top: 36px;
    flex-wrap: wrap;
  }
  .feature-strip__stat {
    border-left: 1px solid var(--magil-gold);
    padding-left: 14px;
  }
  .feature-strip__stat-heading {
    font-size: 18px;
    color: var(--magil-gold-light);
  }
  .feature-strip__stat-sub {
    font-size: 12px;
    color: rgba(251,246,236,0.6);
    margin-top: 4px;
  }
`;
