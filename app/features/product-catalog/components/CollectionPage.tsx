import {useState, useRef, useEffect} from 'react';
import {useSearchParams} from 'react-router';
import {ChevronIcon} from '~/shared/icons';
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
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const currentSortLabel = SORT_OPTIONS.find(o => o.value === sortValue)?.label || 'Most popular';

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    }
    if (sortOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [sortOpen]);

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
            <div className="magil-sort-bar__controls" ref={sortRef}>
              <span className="magil-sort-bar__label">Sort by</span>
              <button
                className="magil-sort-bar__trigger"
                onClick={() => setSortOpen(!sortOpen)}
                aria-expanded={sortOpen}
                aria-haspopup="listbox"
              >
                {currentSortLabel}
                <ChevronIcon size={16} />
              </button>
              {sortOpen && (
                <div className="magil-sort-bar__dropdown" role="listbox">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      className={`magil-sort-bar__option ${sortValue === opt.value ? 'magil-sort-bar__option--active' : ''}`}
                      role="option"
                      aria-selected={sortValue === opt.value}
                      onClick={() => {
                        const params = new URLSearchParams(searchParams);
                        params.set('sort', opt.value);
                        setSearchParams(params, {preventScrollReset: true});
                        setSortOpen(false);
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
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
    padding: 16px 16px 80px;
  }

  .magil-collection-section__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .magil-sort-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid var(--magil-line-soft);
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .magil-sort-bar__count {
    font-size: 14px;
    color: var(--magil-ink-soft);
  }

  .magil-sort-bar__count strong {
    color: var(--magil-ink);
    font-weight: 700;
  }

  .magil-sort-bar__controls {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  .magil-sort-bar__label {
    font-size: 13px;
    color: var(--magil-ink-soft);
    font-weight: 500;
  }

  .magil-sort-bar__trigger {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 16px;
    border: 1px solid var(--magil-line);
    border-radius: 12px;
    background: #fff;
    font-size: 14px;
    font-family: inherit;
    font-weight: 500;
    color: var(--magil-ink);
    cursor: pointer;
    transition: border-color 0.15s ease;
    min-height: 44px;
    white-space: nowrap;
  }
  .magil-sort-bar__trigger:hover {
    border-color: var(--magil-red-deep);
  }
  .magil-sort-bar__trigger:focus-visible {
    outline: 2px solid var(--magil-gold);
    outline-offset: 2px;
  }

  .magil-sort-bar__dropdown {
    position: absolute;
    top: calc(100% + 6px);
    right: 0;
    min-width: 200px;
    background: #fff;
    border: 1px solid var(--magil-line);
    border-radius: 14px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    z-index: 20;
    overflow: hidden;
    animation: sortDropIn 0.15s ease;
  }
  @keyframes sortDropIn {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .magil-sort-bar__option {
    display: block;
    width: 100%;
    padding: 12px 18px;
    text-align: left;
    font-size: 14px;
    font-family: inherit;
    color: var(--magil-ink);
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background 0.1s ease;
    min-height: 44px;
  }
  .magil-sort-bar__option:hover {
    background: var(--magil-cream);
  }
  .magil-sort-bar__option--active {
    color: var(--magil-red-deep);
    font-weight: 600;
    background: var(--magil-cream);
  }

  @media (min-width: 768px) {
    .magil-collection-section {
      padding: 20px 48px 80px;
    }
  }

  @media (max-width: 767px) {
    .magil-sort-bar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }

    .magil-sort-bar__controls {
      flex-direction: column;
      align-items: stretch;
      gap: 6px;
    }

    .magil-sort-bar__trigger {
      width: 100%;
      justify-content: space-between;
    }

    .magil-sort-bar__label {
      font-size: 12px;
    }
  }
`;
