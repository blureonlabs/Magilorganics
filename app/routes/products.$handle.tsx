import {useLoaderData} from 'react-router';
import type {Route} from './+types/products.$handle';
import {
  getSelectedProductOptions,
  Analytics,
  useOptimisticVariant,
  getProductOptions,
  getAdjacentAndFirstAvailableVariants,
  useSelectedOptionInUrlParam,
  getSeoMeta,
} from '@shopify/hydrogen';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {ProductPage} from '~/features/product-detail';
import {
  PRODUCT_QUERY,
  RECOMMENDED_PRODUCTS_QUERY,
} from '~/features/product-detail/queries/product';

// Re-export for codegen
export {PRODUCT_QUERY, RECOMMENDED_PRODUCTS_QUERY};

export const meta: Route.MetaFunction = ({data}) => {
  return getSeoMeta({
    title: `${data?.product?.title ?? 'Product'} | Magil Organics`,
    description:
      data?.product?.description ??
      'Shop authentic village foods and Siddha remedies from Magil Organics.',
  });
};

export async function loader(args: Route.LoaderArgs) {
  const criticalData = await loadCriticalData(args);
  const deferredData = loadDeferredData(args, criticalData.product.id);
  return {...criticalData, ...deferredData};
}

/**
 * Load data necessary for rendering content above the fold.
 */
async function loadCriticalData({context, params, request}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;

  if (!handle) {
    throw new Error('Expected product handle to be defined');
  }

  const [{product}] = await Promise.all([
    storefront.query(PRODUCT_QUERY, {
      variables: {handle, selectedOptions: getSelectedProductOptions(request)},
    }),
  ]);

  if (!product?.id) {
    throw new Response(null, {status: 404});
  }

  redirectIfHandleIsLocalized(request, {handle, data: product});

  return {product};
}

/**
 * Load data for rendering content below the fold (deferred).
 */
function loadDeferredData({context}: Route.LoaderArgs, productId: string) {
  const {storefront} = context;

  const recommendedProducts = storefront
    .query(RECOMMENDED_PRODUCTS_QUERY, {
      variables: {productId},
    })
    .then((data: any) => data?.productRecommendations ?? null)
    .catch(() => null);

  return {recommendedProducts};
}

export default function ProductRoute() {
  const {product, recommendedProducts} = useLoaderData<typeof loader>();

  // Optimistically selects a variant with given available variant information
  const selectedVariant = useOptimisticVariant(
    product.selectedOrFirstAvailableVariant,
    getAdjacentAndFirstAvailableVariants(product),
  );

  // Sets the search param to the selected variant without navigation
  useSelectedOptionInUrlParam(selectedVariant.selectedOptions);

  // Get the product options array
  const productOptions = getProductOptions({
    ...product,
    selectedOrFirstAvailableVariant: selectedVariant,
  });

  return (
    <>
      <ProductPage
        product={product}
        selectedVariant={selectedVariant as any}
        productOptions={productOptions}
        recommendedProducts={recommendedProducts}
      />
      <Analytics.ProductView
        data={{
          products: [
            {
              id: product.id,
              title: product.title,
              price: selectedVariant?.price?.amount || '0',
              vendor: product.vendor,
              variantId: selectedVariant?.id || '',
              variantTitle: selectedVariant?.title || '',
              quantity: 1,
            },
          ],
        }}
      />
    </>
  );
}
