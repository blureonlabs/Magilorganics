import {Link} from 'react-router';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {DoodleUnderline, DoodleArrow} from '~/shared/motifs/DoodleElements';
import {ThamaraiKolam} from '~/shared/motifs/ThamaraiKolam';

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
            Your body deserves{' '}
            <em className="home-hero__heading-accent">
              real medicine
              <span className="home-hero__underline">
                <DoodleUnderline
                  width="100%"
                  color="var(--magil-gold)"
                  strokeWidth={2.5}
                />
              </span>
            </em>
            {' '}from real soil.
          </h1>

          <p className="home-hero__body">
            Siddha herbs from named farms. Cold-pressed oils from
            village urals. Trusted by 12,000+ families across India.
            No factories. No shortcuts. Just honest food from Paramathi Velur.
          </p>

          <div className="home-hero__cta">
            <Link to="/collections" className="btn btn-vibrant-red">
              Explore Our Remedies <DoodleArrow width={18} color="#fff" />
            </Link>
            <Link to="/concerns" className="btn btn-outline">
              Find Your Remedy
            </Link>
          </div>

          {/* Trust strip */}
          <div className="home-hero__trust">
            {[
              {label: '60+ Herbal Products'},
              {label: 'Glyphosate-Free'},
              {label: 'Free Shipping above ₹999'},
            ].map((item) => (
              <div key={item.label} className="home-hero__trust-item">
                <span className="home-hero__trust-dot" />
                <span className="home-hero__trust-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — decorative Thamarai (lotus) kolam */}
        <div className="home-hero__product">
          <div className="home-hero__packshot">
            <ThamaraiKolam size={400} />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: heroStyles}} />
    </section>
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
    max-width: 400px;
  }
`;
