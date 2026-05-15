import {useSearchParams} from 'react-router';
import {ProductCard} from '~/features/product-catalog';
import {SearchFilters} from './SearchFilters';

interface SearchProduct {
  id: string;
  title: string;
  handle: string;
  vendor: string;
  availableForSale: boolean;
  tags: string[];
  featuredImage?: {
    url: string;
    altText?: string | null;
    width?: number;
    height?: number;
  } | null;
  priceRange: {
    minVariantPrice: {amount: string; currencyCode: string};
  };
  compareAtPriceRange?: {
    minVariantPrice: {amount: string; currencyCode: string};
  } | null;
  variants: {
    nodes: Array<{
      id: string;
      title: string;
      availableForSale: boolean;
      price: {amount: string; currencyCode: string};
      compareAtPrice?: {amount: string; currencyCode: string} | null;
      selectedOptions: Array<{name: string; value: string}>;
    }>;
  };
}

interface SearchResultsProps {
  products: SearchProduct[];
  totalCount: number;
  term: string;
}

export function SearchResultsGrid({
  products,
  totalCount,
  term,
}: SearchResultsProps) {
  const [searchParams] = useSearchParams();
  const brandFilter = searchParams.get('brand') || '';
  const formFilter = searchParams.get('form') || '';
  const sort = searchParams.get('sort') || 'relevance';

  // Client-side filtering
  let filtered = [...products];

  if (brandFilter) {
    filtered = filtered.filter((p) => p.vendor === brandFilter);
  }

  if (formFilter) {
    const formLower = formFilter.toLowerCase();
    filtered = filtered.filter((p) =>
      p.tags.some((t) => t.toLowerCase().includes(formLower)),
    );
  }

  // Client-side sorting
  if (sort === 'price-asc') {
    filtered.sort(
      (a, b) =>
        parseFloat(a.priceRange.minVariantPrice.amount) -
        parseFloat(b.priceRange.minVariantPrice.amount),
    );
  } else if (sort === 'price-desc') {
    filtered.sort(
      (a, b) =>
        parseFloat(b.priceRange.minVariantPrice.amount) -
        parseFloat(a.priceRange.minVariantPrice.amount),
    );
  }

  return (
    <section className="search-results">
      <div className="search-results__inner">
        <SearchFilters totalCount={totalCount} term={term} />

        {filtered.length === 0 ? (
          <div className="search-results__empty-filters">
            No matches with those filters. Try clearing them.
          </div>
        ) : (
          <div className="search-results__grid">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{__html: resultStyles}} />
    </section>
  );
}

const resultStyles = /* css */ `
  .search-results {
    padding: 20px 24px 80px;
    background: var(--magil-paper);
  }
  @media (min-width: 768px) {
    .search-results { padding: 20px 48px 80px; }
  }

  .search-results__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .search-results__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }
  @media (min-width: 768px) {
    .search-results__grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1024px) {
    .search-results__grid {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .search-results__empty-filters {
    background: var(--magil-cream-warm);
    padding: 60px 40px;
    border-radius: 18px;
    text-align: center;
    color: var(--magil-ink-soft);
  }
`;
