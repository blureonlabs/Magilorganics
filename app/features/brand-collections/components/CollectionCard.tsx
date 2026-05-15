import {Link} from 'react-router';
import {CollectionGlyph} from './CollectionGlyph';
import type {CollectionMeta} from '../lib/brand-mapping';

interface CollectionCardProps {
  collection: CollectionMeta;
  productCount?: number;
}

export function CollectionCard({collection, productCount}: CollectionCardProps) {
  const c = collection;
  const count = productCount || 0;

  return (
    <Link
      to={`/collections/${c.handle}`}
      className="collection-card card"
      prefetch="intent"
    >
      <div className="collection-card__content">
        <div className="eyebrow" style={{color: c.color, fontSize: 10}}>
          {count} products
        </div>
        <h3 className="serif-bold collection-card__name">{c.name}</h3>
        <div className="tamil collection-card__tamil" style={{color: c.color}}>
          {c.tamil}
        </div>
        <p className="collection-card__blurb">{c.blurb}</p>
        <div className="collection-card__link" style={{color: c.color}}>
          Shop the {c.name.toLowerCase()} <span>&rarr;</span>
        </div>
      </div>
      <div className="collection-card__glyph-wrap" style={{background: c.bg}}>
        <CollectionGlyph kind={c.glyph} color={c.color} />
        <div className="collection-card__count-badge" style={{background: c.color}}>
          {count}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: collectionCardStyles}} />
    </Link>
  );
}

const collectionCardStyles = /* css */ `
  .collection-card {
    display: grid;
    grid-template-columns: 1fr 140px;
    gap: 20px;
    padding: 26px;
    text-decoration: none;
    color: inherit;
    border: 1px solid var(--magil-line-soft);
    border-radius: 20px;
    min-height: 200px;
    position: relative;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .collection-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(139,14,32,0.12);
  }

  @media (max-width: 640px) {
    .collection-card {
      grid-template-columns: 1fr 100px;
      padding: 20px;
      min-height: auto;
    }
  }

  .collection-card__content {
    position: relative;
    z-index: 2;
  }

  .collection-card__name {
    font-size: 28px;
    margin: 8px 0 4px;
    color: var(--magil-ink);
    line-height: 1.1;
  }
  @media (max-width: 640px) {
    .collection-card__name { font-size: 20px; }
  }

  .collection-card__tamil {
    font-size: 16px;
    font-weight: 500;
  }

  .collection-card__blurb {
    margin-top: 14px;
    font-size: 13px;
    color: var(--magil-ink-soft);
    line-height: 1.55;
    max-width: 360px;
  }

  .collection-card__link {
    margin-top: 16px;
    font-size: 13px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .collection-card__glyph-wrap {
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .collection-card__count-badge {
    position: absolute;
    bottom: -8px;
    right: -8px;
    color: var(--magil-cream);
    font-size: 11px;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 999px;
    letter-spacing: 0.08em;
  }
`;
