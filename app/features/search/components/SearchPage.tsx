import {SearchHero} from './SearchHero';
import {TrendingPanel} from './TrendingPanel';
import {NoResults} from './NoResults';
import {SearchResultsGrid} from './SearchResults';

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

interface SearchPageProps {
  term: string;
  products: SearchProduct[];
  totalCount: number;
}

export function SearchPage({term, products, totalCount}: SearchPageProps) {
  return (
    <div>
      <SearchHero term={term} />
      {!term ? (
        <TrendingPanel />
      ) : totalCount === 0 ? (
        <NoResults term={term} />
      ) : (
        <SearchResultsGrid
          products={products}
          totalCount={totalCount}
          term={term}
        />
      )}
    </div>
  );
}
