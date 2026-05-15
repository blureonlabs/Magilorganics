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
    tamil: '\u0BA8\u0BC0\u0BB0\u0BBF\u0BB4\u0BBF\u0BB5\u0BC1',
    color: '#A14828',
    Icon: DropletIcon,
    count: 8,
  },
  {
    name: 'Gut & Digestion',
    tamil: '\u0B9A\u0BC6\u0BB0\u0BBF\u0BAE\u0BBE\u0BA9\u0BAE\u0BCD',
    color: '#B8732A',
    Icon: WheatIcon,
    count: 12,
  },
  {
    name: 'Immunity',
    tamil: '\u0BA8\u0BCB\u0BAF\u0BCD \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1',
    color: '#C8102E',
    Icon: ShieldIcon,
    count: 14,
  },
  {
    name: 'Hair & Skin',
    tamil: '\u0BAE\u0BC1\u0B9F\u0BBF & \u0BA4\u0BCB\u0BB2\u0BCD',
    color: '#8B0E20',
    Icon: LotusIcon,
    count: 11,
  },
  {
    name: 'Joint & Pain',
    tamil: '\u0BAE\u0BC2\u0B9F\u0BCD\u0B9F\u0BC1 \u0BB5\u0BB2\u0BBF',
    color: '#5C0815',
    Icon: BoneIcon,
    count: 9,
  },
  {
    name: 'Lungs & Breath',
    tamil: '\u0BA8\u0BC1\u0BB0\u0BC8\u0BAF\u0BC0\u0BB0\u0BB2\u0BCD',
    color: '#2A5F3E',
    Icon: WindIcon,
    count: 7,
  },
  {
    name: 'Weight Care',
    tamil: '\u0B8E\u0B9F\u0BC8 \u0B95\u0BC1\u0BB1\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1',
    color: '#6E8E5C',
    Icon: ScaleIcon,
    count: 6,
  },
  {
    name: 'Mind & Memory',
    tamil: '\u0BAE\u0BA9\u0BAE\u0BCD & \u0B9E\u0BBE\u0BAA\u0B95\u0BAE\u0BCD',
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
            Shop by Concern &middot;{' '}
            {'\u0B86\u0BB0\u0BCB\u0B95\u0BCD\u0B95\u0BBF\u0BAF\u0BAE\u0BCD \u0BA4\u0BC7\u0B9F\u0BBF'}
          </div>
          <h2 className="serif shop-concern__heading">
            What is your body{' '}
            <em className="shop-concern__accent">asking for</em>?
          </h2>
          <p className="shop-concern__body">
            Pick a concern. We&rsquo;ll guide you to the right Siddha
            formulation &mdash; and the science behind it.
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
              <h3 className="serif-bold shop-concern__card-name">{c.name}</h3>
              <div
                className="tamil shop-concern__card-tamil"
                style={{color: c.color}}
              >
                {c.tamil}
              </div>
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
    font-size: clamp(32px, 5vw, 56px);
    margin: 10px 0 14px;
    color: var(--magil-ink);
    line-height: 1;
  }
  .shop-concern__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
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
    margin: 0;
    color: var(--magil-ink);
  }
  @media (max-width: 767px) {
    .shop-concern__card-name { font-size: 16px; }
  }
  .shop-concern__card-tamil {
    font-size: 13px;
    margin-top: 2px;
    font-weight: 500;
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
