import {PeacockMark} from '~/shared/motifs/PeacockMark';

export function Heritage() {
  return (
    <section className="heritage">
      <div className="heritage__inner">
        <div className="eyebrow">A letter from the family</div>

        <div className="heritage__quote-mark">&ldquo;</div>

        <p className="heritage__quote">
          In our family, medicine was never bought &mdash; it was brewed.
          My paatti would pick herbs before sunrise and boil them on a clay
          stove in Karaikudi. She didn&rsquo;t need a recipe. She{' '}
          <em className="heritage__accent">knew</em>. Magil exists to bring
          that knowing to your kitchen, exactly as she made it.
        </p>

        <div className="feather-divider heritage__divider">
          <PeacockMark size={28} />
        </div>

        <div>
          <div className="heritage__author">
            Karthik Subramaniam
          </div>
          <div className="heritage__title">
            FOUNDER &middot; 4th GENERATION SIDDHA FAMILY &middot; KARAIKUDI
          </div>
        </div>
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
    letter-spacing: normal;
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
    font-weight: 600;
    color: var(--magil-ink);
  }
  .heritage__title {
    font-size: 13px;
    font-weight: 600;
    color: var(--magil-ink-soft);
    margin-top: 4px;
    letter-spacing: normal;
  }

`;
