import {useState} from 'react';
import {Link} from 'react-router';
import {ProductCard} from '~/features/product-catalog';

const TABS = ['Kudineers', 'Thailams', 'Tablets', 'Juices', 'Kits'] as const;

const TAB_TAG_MAP: Record<string, string[]> = {
  Kudineers: ['kudineer', 'powder'],
  Thailams: ['thailam', 'oil'],
  Tablets: ['tablet'],
  Juices: ['juice'],
  Kits: ['kit'],
};

const TAB_COLLECTION_MAP: Record<string, string> = {
  Kudineers: '/collections/kudineers',
  Thailams: '/collections/thailams',
  Tablets: '/collections/tablets',
  Juices: '/collections/herbal-juices',
  Kits: '/collections/kits',
};

interface TopPicksProps {
  products: any[];
}

export function TopPicks({products}: TopPicksProps) {
  const [active, setActive] = useState<string>('Kudineers');

  const filtered = products.filter((p) => {
    const tags = p.tags.map((t: string) => t.toLowerCase());
    const matchTags = TAB_TAG_MAP[active] || [];
    return matchTags.some((m) => tags.some((t: string) => t.includes(m)));
  });

  // Fallback: if no tag matches, show first 4 products
  const displayProducts = filtered.length > 0 ? filtered.slice(0, 8) : products.slice(0, 4);

  return (
    <section className="top-picks">
      <div className="top-picks__inner">
        <div className="top-picks__header">
          <div>
            <div className="eyebrow">Bestsellers</div>
            <h2 className="serif top-picks__heading">
              Loved by 12,000+{' '}
              <em className="top-picks__heading-accent">families</em>
            </h2>
          </div>

          {/* Tabs */}
          <div className="top-picks__tabs">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`top-picks__tab touch-target ${active === t ? 'top-picks__tab--active' : ''}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="scroll-x top-picks__scroll">
          {displayProducts.map((p: any) => (
            <div key={p.id} className="top-picks__card-wrap">
              <ProductCard product={p} />
            </div>
          ))}
        </div>

        <div className="top-picks__view-all">
          <Link to={TAB_COLLECTION_MAP[active] || '/collections'} className="btn btn-dark">
            View all {active.toLowerCase()} &rarr;
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: topPicksStyles}} />
    </section>
  );
}

const topPicksStyles = /* css */ `
  .top-picks {
    background: linear-gradient(180deg, var(--magil-paper) 0%, var(--magil-cream) 100%);
    padding: 90px 24px 80px;
  }
  @media (min-width: 768px) {
    .top-picks { padding: 90px 48px 80px; }
  }

  .top-picks__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .top-picks__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;
    gap: 20px;
  }

  .top-picks__heading {
    font-size: clamp(32px, 5vw, 56px);
    margin: 6px 0 0;
    color: var(--magil-ink);
    line-height: 1;
  }
  .top-picks__heading-accent {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .top-picks__tabs {
    display: flex;
    gap: 6px;
    background: var(--magil-cream-warm);
    padding: 6px;
    border-radius: 999px;
    border: 1px solid var(--magil-line);
    flex-wrap: wrap;
  }

  .top-picks__tab {
    padding: 10px 20px;
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--magil-ink);
    background: transparent;
    transition: background 0.2s ease, color 0.2s ease;
  }
  .top-picks__tab--active {
    color: var(--magil-cream);
    background: var(--magil-red-deep);
  }

  .top-picks__scroll {
    gap: 24px;
    padding-bottom: 18px;
  }

  .top-picks__card-wrap {
    min-width: 260px;
    max-width: 300px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }

  .top-picks__view-all {
    display: flex;
    justify-content: center;
    margin-top: 36px;
  }
`;
