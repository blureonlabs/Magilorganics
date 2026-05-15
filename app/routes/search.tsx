import {useLoaderData} from 'react-router';
import type {Route} from './+types/search';
import {Analytics} from '@shopify/hydrogen';
import {SearchPage, SEARCH_PRODUCTS_QUERY} from '~/features/search';
import {
  type RegularSearchReturn,
  type PredictiveSearchReturn,
  getEmptyPredictiveSearchResult,
} from '~/lib/search';
import type {PredictiveSearchQuery} from 'storefrontapi.generated';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Search | Magil Organics'}];
};

export async function loader({request, context}: Route.LoaderArgs) {
  const url = new URL(request.url);
  const isPredictive = url.searchParams.has('predictive');

  if (isPredictive) {
    const result = await predictiveSearch({request, context});
    return result;
  }

  const term = String(url.searchParams.get('q') || '').trim();

  if (!term) {
    return {
      type: 'regular' as const,
      term: '',
      products: [],
      totalCount: 0,
    };
  }

  const data: any = await context.storefront.query(SEARCH_PRODUCTS_QUERY, {
    variables: {
      query: term,
      first: 40,
    },
  });

  return {
    type: 'regular' as const,
    term,
    products: data.search?.nodes ?? [],
    totalCount: data.search?.totalCount ?? 0,
  };
}

export default function SearchRoute() {
  const data = useLoaderData<typeof loader>();

  if (data.type === 'predictive') return null;

  return (
    <>
      <SearchPage
        term={data.term}
        products={data.products as any}
        totalCount={data.totalCount}
      />
      <Analytics.SearchView
        data={{searchTerm: data.term, searchResults: {totalCount: data.totalCount} as any}}
      />
    </>
  );
}

// ---- Predictive search (kept for header search) ----

const PREDICTIVE_SEARCH_QUERY = `#graphql
  fragment PredictiveProduct on Product {
    __typename
    id
    title
    handle
    trackingParameters
    selectedOrFirstAvailableVariant(
      selectedOptions: []
      ignoreUnknownOptions: true
      caseInsensitiveMatch: true
    ) {
      id
      image {
        url
        altText
        width
        height
      }
      price {
        amount
        currencyCode
      }
    }
  }
  fragment PredictiveCollection on Collection {
    __typename
    id
    title
    handle
    image {
      url
      altText
      width
      height
    }
    trackingParameters
  }
  fragment PredictiveQuery on SearchQuerySuggestion {
    __typename
    text
    styledText
    trackingParameters
  }
  query PredictiveSearch(
    $country: CountryCode
    $language: LanguageCode
    $limit: Int!
    $limitScope: PredictiveSearchLimitScope!
    $term: String!
    $types: [PredictiveSearchType!]
  ) @inContext(country: $country, language: $language) {
    predictiveSearch(
      limit: $limit,
      limitScope: $limitScope,
      query: $term,
      types: $types,
    ) {
      collections {
        ...PredictiveCollection
      }
      products {
        ...PredictiveProduct
      }
      queries {
        ...PredictiveQuery
      }
    }
  }
` as const;

async function predictiveSearch({
  request,
  context,
}: Pick<Route.LoaderArgs, 'request' | 'context'>): Promise<PredictiveSearchReturn> {
  const {storefront} = context;
  const url = new URL(request.url);
  const term = String(url.searchParams.get('q') || '').trim();
  const limit = Number(url.searchParams.get('limit') || 10);
  const type = 'predictive';

  if (!term) return {type, term, result: getEmptyPredictiveSearchResult()};

  const {
    predictiveSearch: items,
    errors,
  }: PredictiveSearchQuery & {errors?: Array<{message: string}>} =
    await storefront.query(PREDICTIVE_SEARCH_QUERY, {
      variables: {
        limit,
        limitScope: 'EACH',
        term,
      },
    });

  if (errors) {
    throw new Error(
      `Shopify API errors: ${errors.map(({message}: {message: string}) => message).join(', ')}`,
    );
  }

  if (!items) {
    throw new Error('No predictive search data returned from Shopify API');
  }

  const total = Object.values(items).reduce(
    (acc: number, item: Array<unknown>) => acc + item.length,
    0,
  );

  return {type, term, result: {items, total}};
}
