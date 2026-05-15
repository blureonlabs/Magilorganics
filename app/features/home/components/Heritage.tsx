import {PeacockMark} from '~/shared/motifs/PeacockMark';

export function Heritage() {
  return (
    <section className="heritage">
      <div className="heritage__inner">
        <div className="eyebrow">A letter from the family</div>

        <div className="serif heritage__quote-mark">&ldquo;</div>

        <p className="serif heritage__quote">
          My grandmother brewed Kabasura on a clay stove behind her house in
          Karaikudi. She didn&rsquo;t measure herbs &mdash; she{' '}
          <em className="heritage__accent">knew</em> them. We built Magil to
          bring that knowing into your home, untouched.
        </p>

        <div className="feather-divider heritage__divider">
          <PeacockMark size={28} />
        </div>

        <div>
          <div className="serif-bold heritage__author">
            Karthik Subramaniam
          </div>
          <div className="heritage__title">
            FOUNDER &middot; 4th GENERATION SIDDHA FAMILY &middot; KARAIKUDI
          </div>
        </div>
      </div>

      {/* Decorative peacock */}
      <svg
        className="heritage__motif"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <ellipse
              cx="100"
              cy="40"
              rx="14"
              ry="50"
              fill="var(--magil-red-deep)"
            />
            <ellipse
              cx="100"
              cy="22"
              rx="8"
              ry="14"
              fill="var(--magil-gold)"
            />
          </g>
        ))}
      </svg>

      <style dangerouslySetInnerHTML={{__html: heritageStyles}} />
    </section>
  );
}

const heritageStyles = /* css */ `
  .heritage {
    padding: 100px 24px;
    background: linear-gradient(180deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%);
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .heritage { padding: 100px 48px; }
  }

  .heritage__inner {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }

  .heritage__quote-mark {
    font-size: 60px;
    color: var(--magil-gold);
    line-height: 1;
    margin: 6px 0 20px;
  }

  .heritage__quote {
    font-size: clamp(24px, 4vw, 38px);
    line-height: 1.3;
    color: var(--magil-ink);
    font-weight: 500;
    letter-spacing: -0.01em;
    margin: 0;
    font-style: italic;
  }
  .heritage__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .heritage__divider {
    margin: 44px auto;
    max-width: 360px;
  }

  .heritage__author {
    font-size: 22px;
    color: var(--magil-ink);
  }
  .heritage__title {
    font-size: 13px;
    color: var(--magil-ink-soft);
    margin-top: 4px;
    letter-spacing: 0.08em;
  }

  .heritage__motif {
    position: absolute;
    bottom: -60px;
    right: -60px;
    width: 300px;
    height: 300px;
    opacity: 0.06;
    z-index: 1;
    pointer-events: none;
  }
`;
