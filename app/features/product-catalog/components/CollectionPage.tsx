import {useState} from 'react';
import {useSearchParams} from 'react-router';
import {CollectionHero} from './CollectionHero';
import {ProductCard} from './ProductCard';
import {PaginationControls} from './PaginationControls';

interface CollectionPageProps {
  collection: {
    id: string;
    handle: string;
    title: string;
    description?: string | null;
    image?: {
      url: string;
      altText?: string | null;
      width?: number;
      height?: number;
    } | null;
    products: {
      nodes: Array<any>;
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  };
}

const SORT_OPTIONS = [
  {label: 'Most popular', value: 'popular'},
  {label: 'Price: Low to high', value: 'price-asc'},
  {label: 'Price: High to low', value: 'price-desc'},
  {label: 'Newest', value: 'newest'},
] as const;

export function CollectionPage({collection}: CollectionPageProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get('sort') || 'popular';
  const productCount = collection.products.nodes.length;

  return (
    <>
      <CollectionHero
        title={collection.title}
        description={collection.description}
        productCount={productCount}
      />

      <section className="magil-collection-section">
        <div className="magil-collection-section__inner">
          {/* Sort/Filter bar */}
          <div className="magil-sort-bar">
            <div className="magil-sort-bar__count">
              Showing{' '}
              <strong>{productCount}</strong>{' '}
              {productCount === 1 ? 'product' : 'products'}
            </div>
            <div className="magil-sort-bar__controls">
              <span className="magil-sort-bar__label">Sort by</span>
              <select
                className="magil-sort-bar__select"
                value={sortValue}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams);
                  params.set('sort', e.target.value);
                  setSearchParams(params, {preventScrollReset: true});
                }}
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Product grid with pagination */}
          <PaginationControls connection={collection.products}>
            {({node: product, index}) => (
              <ProductCard
                key={product.id}
                product={product}
                loading={index < 8 ? 'eager' : 'lazy'}
              />
            )}
          </PaginationControls>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: collectionPageStyles,
        }}
      />
    </>
  );
}

const collectionPageStyles = /* css */ `
  .magil-collection-section {
    background: var(--magil-paper);
    padding: 20px 20px 80px;
  }

  .magil-collection-section__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .magil-sort-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid var(--magil-line);
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .magil-sort-bar__count {
    font-size: 14px;
    color: var(--magil-ink-soft);
  }

  .magil-sort-bar__count strong {
    color: var(--magil-ink);
  }

  .magil-sort-bar__controls {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .magil-sort-bar__label {
    font-size: 13px;
    color: var(--magil-ink-soft);
  }

  .magil-sort-bar__select {
    padding: 8px 14px;
    border: 1px solid var(--magil-line);
    border-radius: 999px;
    background: #fff;
    font-size: 13px;
    font-family: inherit;
    color: var(--magil-ink);
    cursor: pointer;
  }

  .magil-sort-bar__select:focus-visible {
    outline: 2px solid var(--magil-gold);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    .magil-collection-section {
      padding: 20px 48px 80px;
    }
  }

  @media (max-width: 767px) {
    .magil-sort-bar {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;
