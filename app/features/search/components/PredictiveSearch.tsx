import {useEffect, useRef, useCallback} from 'react';
import {Link, useFetcher, useNavigate, useLocation} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import {BrandBadge} from '~/features/product-catalog';
import {SearchIcon} from '~/shared/icons';

interface PredictiveProduct {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  featuredImage?: {
    url: string;
    altText?: string | null;
    width?: number;
    height?: number;
  } | null;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

interface PredictiveCollection {
  id: string;
  title: string;
  handle: string;
  image?: {
    url: string;
    altText?: string | null;
    width?: number;
    height?: number;
  } | null;
}

interface PredictiveSearchData {
  products: PredictiveProduct[];
  collections: PredictiveCollection[];
}

interface PredictiveSearchProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PredictiveSearch({query, isOpen, onClose}: PredictiveSearchProps) {
  const fetcher = useFetcher<PredictiveSearchData>();
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const prevLocationRef = useRef(location.pathname + location.search);

  // Close on route navigation
  useEffect(() => {
    const current = location.pathname + location.search;
    if (current !== prevLocationRef.current) {
      onClose();
    }
    prevLocationRef.current = current;
  }, [location, onClose]);

  // Debounced fetch
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!query || query.length < 2) return;

    timerRef.current = setTimeout(() => {
      fetcher.load(`/api/predictive-search?q=${encodeURIComponent(query)}`);
    }, 300);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  if (!isOpen) return null;

  const isLoading = fetcher.state === 'loading';
  const data = fetcher.data;
  const products = data?.products ?? [];
  const collections = data?.collections ?? [];
  const hasResults = products.length > 0 || collections.length > 0;
  const hasQuery = query.length >= 2;

  return (
    <div className="ps-dropdown" role="listbox" aria-label="Search suggestions">
      {/* Loading skeleton */}
      {isLoading && hasQuery && (
        <div className="ps-dropdown__loading">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="ps-dropdown__skeleton">
              <div className="ps-dropdown__skeleton-img" />
              <div className="ps-dropdown__skeleton-text">
                <div className="ps-dropdown__skeleton-line ps-dropdown__skeleton-line--title" />
                <div className="ps-dropdown__skeleton-line ps-dropdown__skeleton-line--sub" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Results */}
      {!isLoading && hasQuery && hasResults && (
        <>
          {/* Products */}
          {products.length > 0 && (
            <div className="ps-dropdown__section">
              <h4 className="ps-dropdown__section-title">Products</h4>
              <ul className="ps-dropdown__list">
                {products.slice(0, 6).map((product) => (
                  <li key={product.id}>
                    <Link
                      to={`/products/${product.handle}`}
                      className="ps-dropdown__item"
                      onClick={onClose}
                      prefetch="intent"
                    >
                      <div className="ps-dropdown__item-img">
                        {product.featuredImage ? (
                          <Image
                            data={product.featuredImage}
                            alt={product.featuredImage.altText || product.title}
                            width={56}
                            height={56}
                            sizes="56px"
                          />
                        ) : (
                          <div className="ps-dropdown__item-placeholder">
                            {product.title.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="ps-dropdown__item-info">
                        <span className="ps-dropdown__item-title">
                          {product.title}
                        </span>
                        <div className="ps-dropdown__item-meta">
                          <span className="ps-dropdown__item-price">
                            <Money data={product.priceRange.minVariantPrice} />
                          </span>
                          {product.vendor === 'Village Pharma' && (
                            <BrandBadge vendor={product.vendor} size="sm" />
                          )}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Collections */}
          {collections.length > 0 && (
            <div className="ps-dropdown__section">
              <h4 className="ps-dropdown__section-title">Collections</h4>
              <ul className="ps-dropdown__list">
                {collections.slice(0, 3).map((collection) => (
                  <li key={collection.id}>
                    <Link
                      to={`/collections/${collection.handle}`}
                      className="ps-dropdown__item"
                      onClick={onClose}
                      prefetch="intent"
                    >
                      <div className="ps-dropdown__item-img">
                        {collection.image ? (
                          <Image
                            data={collection.image}
                            alt={collection.image.altText || collection.title}
                            width={56}
                            height={56}
                            sizes="56px"
                          />
                        ) : (
                          <div className="ps-dropdown__item-placeholder">
                            {collection.title.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="ps-dropdown__item-info">
                        <span className="ps-dropdown__item-title">
                          {collection.title}
                        </span>
                        <span className="ps-dropdown__item-type">Collection</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* View all link */}
          <div className="ps-dropdown__footer">
            <Link
              to={`/search?q=${encodeURIComponent(query)}`}
              className="ps-dropdown__view-all"
              onClick={onClose}
            >
              <SearchIcon />
              <span>View all results for &lsquo;{query}&rsquo;</span>
            </Link>
          </div>
        </>
      )}

      {/* No results */}
      {!isLoading && hasQuery && !hasResults && data && (
        <div className="ps-dropdown__empty">
          <p>No results for &lsquo;{query}&rsquo;</p>
          <Link
            to={`/search?q=${encodeURIComponent(query)}`}
            className="ps-dropdown__view-all"
            onClick={onClose}
          >
            Try full search
          </Link>
        </div>
      )}

      {/* Prompt for more chars */}
      {!hasQuery && (
        <div className="ps-dropdown__empty">
          <p>Type at least 2 characters to search</p>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: predictiveSearchStyles}} />
    </div>
  );
}

const predictiveSearchStyles = /* css */ `
  .ps-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 100;
    background: var(--magil-cream);
    border: 1px solid var(--magil-line);
    border-top: none;
    border-radius: 0 0 16px 16px;
    box-shadow: var(--magil-shadow-lg);
    max-height: 70vh;
    overflow-y: auto;
    overscroll-behavior: contain;
  }

  /* Loading skeleton */
  .ps-dropdown__loading {
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .ps-dropdown__skeleton {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ps-dropdown__skeleton-img {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    background: var(--magil-line-soft);
    animation: ps-pulse 1.2s ease-in-out infinite;
    flex-shrink: 0;
  }

  .ps-dropdown__skeleton-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .ps-dropdown__skeleton-line {
    height: 12px;
    border-radius: 6px;
    background: var(--magil-line-soft);
    animation: ps-pulse 1.2s ease-in-out infinite;
  }

  .ps-dropdown__skeleton-line--title {
    width: 70%;
  }

  .ps-dropdown__skeleton-line--sub {
    width: 40%;
  }

  @keyframes ps-pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }

  /* Section */
  .ps-dropdown__section {
    padding: 8px 0;
  }

  .ps-dropdown__section-title {
    margin: 0;
    padding: 8px 20px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--magil-ink-soft);
  }

  .ps-dropdown__list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /* Item row */
  .ps-dropdown__item {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 10px 20px;
    text-decoration: none;
    color: inherit;
    transition: background 0.15s ease;
    cursor: pointer;
  }

  .ps-dropdown__item:hover {
    background: var(--magil-cream-warm);
  }

  .ps-dropdown__item-img {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
    background: var(--magil-cream-warm);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ps-dropdown__item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .ps-dropdown__item-placeholder {
    font-size: 20px;
    font-weight: 700;
    color: var(--magil-ink-soft);
    font-family: var(--font-display);
  }

  .ps-dropdown__item-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .ps-dropdown__item-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--magil-ink);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: var(--font-display);
  }

  .ps-dropdown__item-meta {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .ps-dropdown__item-price {
    font-size: 14px;
    font-weight: 700;
    color: var(--magil-red-deep);
  }

  .ps-dropdown__item-type {
    font-size: 12px;
    color: var(--magil-ink-soft);
    font-weight: 500;
  }

  /* Footer */
  .ps-dropdown__footer {
    border-top: 1px solid var(--magil-line);
    padding: 12px 20px;
  }

  .ps-dropdown__view-all {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: var(--magil-red-deep);
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .ps-dropdown__view-all:hover {
    color: var(--magil-red);
    text-decoration: underline;
  }

  .ps-dropdown__view-all svg {
    width: 16px;
    height: 16px;
  }

  /* Empty */
  .ps-dropdown__empty {
    padding: 24px 20px;
    text-align: center;
    color: var(--magil-ink-soft);
    font-size: 14px;
  }

  .ps-dropdown__empty p {
    margin: 0 0 8px;
  }

  /* Mobile: full-width */
  @media (max-width: 768px) {
    .ps-dropdown {
      border-radius: 0 0 12px 12px;
      max-height: 60vh;
    }

    .ps-dropdown__item {
      padding: 8px 16px;
      gap: 10px;
    }

    .ps-dropdown__item-img {
      width: 48px;
      height: 48px;
    }

    .ps-dropdown__section-title {
      padding: 8px 16px;
    }

    .ps-dropdown__footer {
      padding: 12px 16px;
    }
  }
`;
