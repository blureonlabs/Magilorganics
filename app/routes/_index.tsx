import {useLoaderData} from 'react-router';
import type {Route} from './+types/_index';
import {getSeoMeta} from '@shopify/hydrogen';
import {HomePage, FEATURED_COLLECTIONS_QUERY, HOMEPAGE_PRODUCTS_QUERY} from '~/features/home';

export const meta: Route.MetaFunction = () => {
  return getSeoMeta({title: 'Magil Organics \u2014 A Taste of Tradition'});
};

export async function loader({context}: Route.LoaderArgs) {
  const [{collections}, {products}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTIONS_QUERY),
    context.storefront.query(HOMEPAGE_PRODUCTS_QUERY),
  ]);

  return {
    collections: collections.nodes,
    products: products.nodes,
  };
}

export default function HomepageRoute() {
  const {products} = useLoaderData<typeof loader>();

  return <HomePage products={products} />;
}
