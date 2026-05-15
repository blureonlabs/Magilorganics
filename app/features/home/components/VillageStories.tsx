import {PlayIcon} from '~/shared/icons';

const REELS = [
  {
    title: '15 herbs, one clay pot',
    subtitle: 'How Kabasura is brewed at dawn',
    bg: '#5C0815',
  },
  {
    title: 'Selvi Amma\u2019s onion oil secret',
    subtitle: 'A Chettinad kitchen, unchanged for decades',
    bg: '#8B0E20',
  },
  {
    title: '72 hours under the sun',
    subtitle: 'Why we sun-dry Vatha herbs the slow way',
    bg: '#A14828',
  },
  {
    title: 'Stone-pressed, not machine-made',
    subtitle: 'Inside our granite ural for Thailam',
    bg: '#5A3A2A',
  },
  {
    title: 'Ramu picks amla at 5 AM',
    subtitle: 'Four generations of farming in Salem',
    bg: '#2A5F3E',
  },
  {
    title: 'Sacred trees, sacred fruit',
    subtitle: 'How we source Triphala the right way',
    bg: '#B8732A',
  },
];

export function VillageStories() {
  return (
    <section className="village-stories">
      <div className="village-stories__inner">
        <div className="village-stories__header">
          <div className="eyebrow">From the village floor</div>
          <h2 className="serif village-stories__heading">
            See how your{' '}
            <em className="village-stories__accent">medicine</em> is really
            made.
          </h2>
        </div>

        <div className="scroll-x village-stories__scroll">
          {REELS.map((r, i) => (
            <div
              key={i}
              className="village-stories__reel"
              style={{background: r.bg}}
            >
              <div className="village-stories__reel-overlay" />
              <div className="village-stories__play">
                <PlayIcon size={22} style={{color: 'var(--magil-red-deep)', fill: 'var(--magil-red-deep)'}} />
              </div>
              <div className="village-stories__reel-label">
                <span className="village-stories__reel-tag">
                  MAGIL &middot; REEL {i + 1}
                </span>
              </div>
              <div className="village-stories__reel-text">
                <div className="serif-bold village-stories__reel-title">
                  {r.title}
                </div>
                <div className="village-stories__reel-subtitle">
                  {r.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: villageStyles}} />
    </section>
  );
}

const villageStyles = /* css */ `
  .village-stories {
    background: linear-gradient(180deg, var(--magil-cream-warm) 0%, var(--magil-cream) 100%);
    padding: 90px 24px;
  }
  @media (min-width: 768px) {
    .village-stories { padding: 90px 48px; }
  }

  .village-stories__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .village-stories__header {
    text-align: center;
    margin-bottom: 50px;
  }
  .village-stories__heading {
    font-size: clamp(32px, 5vw, 56px);
    margin: 10px 0;
    color: var(--magil-ink);
    line-height: 1;
  }
  .village-stories__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
    font-style: italic;
  }

  .village-stories__scroll {
    gap: 18px;
    padding-bottom: 12px;
  }

  .village-stories__reel {
    min-width: 240px;
    width: 240px;
    aspect-ratio: 9 / 16;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    scroll-snap-align: start;
    flex-shrink: 0;
  }

  .village-stories__reel-overlay {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 35%, rgba(255,255,255,0.15) 0%, transparent 60%);
  }

  .village-stories__play {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(255,255,255,0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(0,0,0,0.3);
  }

  .village-stories__reel-label {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    color: var(--magil-cream);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.85;
  }
  .village-stories__reel-tag {
    background: rgba(0,0,0,0.4);
    padding: 4px 8px;
    border-radius: 4px;
  }

  .village-stories__reel-text {
    position: absolute;
    bottom: 20px;
    left: 16px;
    right: 16px;
    color: var(--magil-cream);
  }
  .village-stories__reel-title {
    font-size: 18px;
    line-height: 1.2;
  }
  .village-stories__reel-subtitle {
    font-size: 12px;
    opacity: 0.8;
    margin-top: 4px;
  }
`;
