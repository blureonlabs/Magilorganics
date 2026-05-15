import {Link} from 'react-router';
import {Manjal} from '~/shared/motifs/HerbIllustrations';
import {
  DropletIcon,
  WheatIcon,
  ShieldIcon,
  LotusIcon,
  BoneIcon,
  WindIcon,
  ScaleIcon,
  BrainIcon,
} from '~/shared/icons';

const CONCERNS = [
  {
    name: 'Diabetes Care',
    color: '#A14828',
    Icon: DropletIcon,
    count: 8,
  },
  {
    name: 'Gut & Digestion',
    color: '#B8732A',
    Icon: WheatIcon,
    count: 12,
  },
  {
    name: 'Immunity',
    color: '#C8102E',
    Icon: ShieldIcon,
    count: 14,
  },
  {
    name: 'Hair & Skin',
    color: '#8B0E20',
    Icon: LotusIcon,
    count: 11,
  },
  {
    name: 'Joint & Pain',
    color: '#5C0815',
    Icon: BoneIcon,
    count: 9,
  },
  {
    name: 'Lungs & Breath',
    color: '#2A5F3E',
    Icon: WindIcon,
    count: 7,
  },
  {
    name: 'Weight Care',
    color: '#6E8E5C',
    Icon: ScaleIcon,
    count: 6,
  },
  {
    name: 'Mind & Memory',
    color: '#E8A317',
    Icon: BrainIcon,
    count: 5,
  },
];

export function ShopByConcern() {
  return (
    <section className="shop-concern">
      {/* Decorative Manjal accent */}
      <div className="shop-concern__manjal-accent" aria-hidden="true" style={{pointerEvents: 'none'}}>
        <Manjal size={80} opacity={0.08} />
      </div>
      <div className="shop-concern__inner">
        <div className="shop-concern__header">
          <div className="eyebrow">
            What Bothers You?
          </div>
          <h2 className="shop-concern__heading">
            Tell us your concern. We&rsquo;ll find your remedy.
          </h2>
          <p className="shop-concern__body">
            Every body is different. Pick what troubles you and
            we&rsquo;ll match you with the right Siddha formulation
            &mdash; backed by ancient texts and modern testing.
          </p>
        </div>

        <div className="shop-concern__grid">
          {CONCERNS.map((c) => (
            <Link
              key={c.name}
              to="/concerns"
              className="shop-concern__card"
              prefetch="intent"
            >
              <div
                className="shop-concern__card-icon"
                style={{background: c.color}}
              >
                <c.Icon size={22} style={{color: '#fff'}} />
              </div>
              <div className="shop-concern__card-text">
                <h3 className="shop-concern__card-name">{c.name}</h3>
                <span className="shop-concern__card-count">{c.count} remedies &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: shopConcernStyles}} />
    </section>
  );
}

const shopConcernStyles = /* css */ `
  .shop-concern {
    padding: 90px 24px;
    background: linear-gradient(180deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%);
    position: relative;
    overflow: hidden;
  }
  .shop-concern__manjal-accent {
    position: absolute;
    top: 24px;
    right: 24px;
  }
  @media (max-width: 767px) {
    .shop-concern__manjal-accent { display: none; }
  }
  @media (min-width: 768px) {
    .shop-concern { padding: 90px 48px; }
  }

  .shop-concern__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .shop-concern__header {
    text-align: center;
    margin-bottom: 50px;
  }
  .shop-concern__heading {
    font-size: clamp(28px, 5vw, 48px);
    font-weight: 700;
    margin: 10px 0 14px;
    color: var(--magil-ink);
    line-height: 1.1;
  }
  .shop-concern__body {
    max-width: 520px;
    margin: 0 auto;
    color: var(--magil-ink-soft);
    font-size: 16px;
    line-height: 1.6;
  }

  .shop-concern__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (min-width: 768px) {
    .shop-concern__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .shop-concern__card {
    background: #fff;
    border-radius: 14px;
    padding: 16px;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--magil-line-soft);
    display: flex;
    align-items: center;
    gap: 14px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .shop-concern__card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.06);
  }

  .shop-concern__card-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .shop-concern__card-text {
    min-width: 0;
  }

  .shop-concern__card-name {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    color: var(--magil-ink);
    line-height: 1.2;
  }

  .shop-concern__card-count {
    font-size: 12px;
    color: var(--magil-ink-soft);
    margin-top: 2px;
    display: block;
  }

  @media (min-width: 768px) {
    .shop-concern__card {
      padding: 20px;
      gap: 16px;
    }
    .shop-concern__card-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
    }
    .shop-concern__card-name {
      font-size: 17px;
    }
    .shop-concern__card-count {
      font-size: 13px;
    }
  }
`;
