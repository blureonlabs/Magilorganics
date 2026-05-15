import {Link} from 'react-router';
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
                className="shop-concern__card-blob"
                style={{background: c.color}}
              />
              <div
                className="shop-concern__card-icon"
                style={{background: c.color}}
              >
                <c.Icon size={26} style={{color: '#fff'}} />
              </div>
              <h3 className="shop-concern__card-name">{c.name}</h3>
              <div className="shop-concern__card-footer">
                <span>{c.count} remedies</span>
                <span style={{color: c.color, fontWeight: 600}}>
                  Explore &rarr;
                </span>
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
    border-radius: 18px;
    padding: 32px 26px;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--magil-line-soft);
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .shop-concern__card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.08);
  }

  .shop-concern__card-blob {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    opacity: 0.1;
  }

  .shop-concern__card-icon {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  .shop-concern__card-name {
    font-size: 22px;
    font-weight: 700;
    margin: 0;
    color: var(--magil-ink);
  }
  @media (max-width: 767px) {
    .shop-concern__card-name { font-size: 16px; }
  }
  .shop-concern__card-footer {
    margin-top: 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    color: var(--magil-ink-soft);
  }
`;
