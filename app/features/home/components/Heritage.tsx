import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {DoodleUnderline, DoodleLeaf} from '~/shared/motifs/DoodleElements';

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

        {/* Hand-drawn underline accent under the quote */}
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
          <DoodleUnderline width={160} color="var(--magil-gold)" strokeWidth={1.5} />
        </div>

        <div className="feather-divider heritage__divider">
          <PeacockMark size={28} />
        </div>

        <div>
          <div className="serif-bold heritage__author">
            Karthik Subramaniam
          </div>
          <div className="heritage__title doodle-text">
            FOUNDER &middot; 4th GENERATION SIDDHA FAMILY &middot; KARAIKUDI
          </div>
        </div>
      </div>

      {/* Decorative doodle leaves — subtle accents */}
      <div style={{position: 'absolute', top: '15%', left: '5%', opacity: 0.12, pointerEvents: 'none'}} aria-hidden="true">
        <DoodleLeaf width={24} color="var(--magil-leaf)" />
      </div>
      <div style={{position: 'absolute', bottom: '18%', right: '6%', opacity: 0.10, pointerEvents: 'none', transform: 'rotate(45deg)'}} aria-hidden="true">
        <DoodleLeaf width={20} color="var(--magil-leaf)" />
      </div>

      {/* Decorative peacock */}
      <div style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'}} aria-hidden="true">
        <svg
          className="heritage__motif"
          viewBox="0 0 200 200"
        >
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
            <g key={a} transform={`rotate(${a} 100 100)`}>
              <ellipse
                cx="100"
                cy="40"
                rx="14"
                ry="48"
                fill="var(--magil-red-deep)"
              />
              <ellipse
                cx="100"
                cy="25"
                rx="8"
                ry="14"
                fill="var(--magil-gold)"
              />
              <circle cx="100" cy="25" r="4" fill="var(--magil-red-dark)" />
            </g>
          ))}
          <circle cx="100" cy="100" r="18" fill="var(--magil-gold)" />
        </svg>
      </div>

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
    bottom: 5%;
    right: 5%;
    width: 15%;
    max-width: 180px;
    aspect-ratio: 1;
    opacity: 0.03;
    z-index: 1;
    pointer-events: none;
  }
`;
