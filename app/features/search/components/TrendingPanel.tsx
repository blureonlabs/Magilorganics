import {Link} from 'react-router';
import {ShieldIcon, DropletIcon, LotusIcon, ScaleIcon} from '~/shared/icons';

const TRENDING = [
  'Kabasura',
  'Onion Oil',
  'Triphala',
  'Ashwagandha',
  'Coconut Oil',
  'Aloevera',
  'Hair Kit',
];

const CONCERN_CARDS = [
  {
    name: 'Diabetes',
    tamil: '\u0BA8\u0BC0\u0BB0\u0BBF\u0BB4\u0BBF\u0BB5\u0BC1',
    color: '#A14828',
    bg: '#F5EBD7',
    Icon: DropletIcon,
  },
  {
    name: 'Hair Care',
    tamil: '\u0BAE\u0BC1\u0B9F\u0BBF \u0BAA\u0BB0\u0BBE\u0BAE\u0BB0\u0BBF\u0BAA\u0BCD\u0BAA\u0BC1',
    color: '#8B0E20',
    bg: '#F5DCD0',
    Icon: LotusIcon,
  },
  {
    name: 'Immunity',
    tamil: '\u0BA8\u0BCB\u0BAF\u0BCD \u0B8E\u0BA4\u0BBF\u0BB0\u0BCD\u0BAA\u0BCD\u0BAA\u0BC1',
    color: '#C8102E',
    bg: '#FBE6A7',
    Icon: ShieldIcon,
  },
  {
    name: 'Weight Loss',
    tamil: '\u0B8E\u0B9F\u0BC8 \u0B95\u0BC1\u0BB1\u0BC8\u0BAA\u0BCD\u0BAA\u0BC1',
    color: '#6E8E5C',
    bg: '#DFE9D5',
    Icon: ScaleIcon,
  },
];

export function TrendingPanel() {
  return (
    <section className="trending-panel">
      <div className="trending-panel__inner">
        {/* Trending pills */}
        <div className="trending-panel__section">
          <h2 className="serif-bold trending-panel__section-heading">
            Trending Searches
          </h2>
          <div className="trending-panel__pills">
            {TRENDING.map((t) => (
              <Link
                key={t}
                to={`/search?q=${encodeURIComponent(t)}`}
                className="trending-panel__pill touch-target"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>

        {/* Shop by concern chips */}
        <div className="trending-panel__section">
          <h2 className="serif-bold trending-panel__section-heading">
            Shop By Concern
          </h2>
          <div className="trending-panel__concerns">
            {CONCERN_CARDS.map((c) => (
              <Link
                key={c.name}
                to="/concerns"
                className="trending-panel__concern-card"
                style={{
                  background: c.bg,
                  borderColor: `${c.color}22`,
                }}
              >
                <div
                  className="trending-panel__concern-icon"
                  style={{background: c.color}}
                >
                  <c.Icon size={22} style={{color: '#fff'}} />
                </div>
                <div>
                  <div className="serif-bold trending-panel__concern-name">
                    {c.name}
                  </div>
                  <div
                    className="tamil trending-panel__concern-tamil"
                    style={{color: c.color}}
                  >
                    {c.tamil}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: trendingStyles}} />
    </section>
  );
}

const trendingStyles = /* css */ `
  .trending-panel {
    padding: 60px 24px 80px;
    background: var(--magil-paper);
  }
  @media (min-width: 768px) {
    .trending-panel { padding: 60px 48px 80px; }
  }

  .trending-panel__inner {
    max-width: 1280px;
    margin: 0 auto;
  }

  .trending-panel__section {
    margin-bottom: 40px;
  }
  .trending-panel__section:last-child {
    margin-bottom: 0;
  }

  .trending-panel__section-heading {
    font-size: 22px;
    margin: 0 0 14px;
    color: var(--magil-ink);
  }

  .trending-panel__pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .trending-panel__pill {
    padding: 10px 18px;
    background: #fff;
    border: 1.5px solid var(--magil-line);
    border-radius: 999px;
    font-size: 14px;
    font-weight: 500;
    color: var(--magil-ink);
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .trending-panel__pill:hover {
    background: var(--magil-red-deep);
    color: var(--magil-cream);
    border-color: var(--magil-red-deep);
  }

  .trending-panel__concerns {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  @media (min-width: 768px) {
    .trending-panel__concerns {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .trending-panel__concern-card {
    border-radius: 14px;
    padding: 20px 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    text-decoration: none;
    color: inherit;
    border: 1px solid;
    transition: transform 0.15s ease;
  }
  .trending-panel__concern-card:hover {
    transform: translateY(-2px);
  }

  .trending-panel__concern-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .trending-panel__concern-name {
    font-size: 17px;
    color: var(--magil-ink);
  }
  .trending-panel__concern-tamil {
    font-size: 12px;
    font-weight: 500;
  }
`;
