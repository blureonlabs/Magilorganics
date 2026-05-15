import type {LoaderFunctionArgs} from 'react-router';

const PREDICTIVE_SEARCH_QUERY = `#graphql
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
      products {
        id
        title
        handle
        vendor
        featuredImage {
          url
          altText
          width
          height
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
      collections {
        id
        title
        handle
        image {
          url
          altText
          width
          height
        }
      }
    }
  }
` as const;

export async function loader({request, context}: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q') || '';

  if (!query || query.length < 2) {
    return {products: [], collections: []};
  }

  const data = await context.storefront.query(PREDICTIVE_SEARCH_QUERY, {
    variables: {
      term: query,
      limit: 6,
      limitScope: 'EACH' as const,
      types: ['PRODUCT', 'COLLECTION'],
    },
  });

  return {
    products: data?.predictiveSearch?.products ?? [],
    collections: data?.predictiveSearch?.collections ?? [],
  };
}
