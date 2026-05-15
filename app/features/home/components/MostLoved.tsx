import {Link} from 'react-router';
import {ProductCard} from '~/features/product-catalog';

interface MostLovedProps {
  products: any[];
}

export function MostLoved({products}: MostLovedProps) {
  // Show up to 6 bestselling products
  const display = products.slice(0, 6);

  return (
    <section className="most-loved">
      <div className="most-loved__inner">
        <div className="most-loved__header">
          <div>
            <div className="eyebrow">Most Loved</div>
            <h2 className="serif most-loved__heading">
              The{' '}
              <em className="most-loved__accent">amma-approved</em> picks.
            </h2>
          </div>
          <Link to="/collections" className="btn btn-outline">
            All bestsellers &rarr;
          </Link>
        </div>

        <div className="scroll-x most-loved__scroll">
          {display.map((p: any) => (
            <div key={p.id} className="most-loved__card-wrap">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: mostLovedStyles}} />
    </section>
  );
}

const mostLovedStyles = /* css */ `
  .most-loved {
    padding: 80px 24px;
    background: var(--magil-paper);
  }
  @media (min-width: 768px) {
    .most-loved { padding: 80px 48px; }
  }

  .most-loved__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .most-loved__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 36px;
    flex-wrap: wrap;
    gap: 20px;
  }
  .most-loved__heading {
    font-size: clamp(32px, 5vw, 56px);
    margin: 10px 0 0;
    color: var(--magil-ink);
    line-height: 1;
  }
  .most-loved__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
    font-style: italic;
  }

  .most-loved__scroll {
    gap: 24px;
    padding-bottom: 18px;
  }

  .most-loved__card-wrap {
    min-width: 260px;
    max-width: 300px;
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`;
