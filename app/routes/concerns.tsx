import {useLoaderData} from 'react-router';
import type {Route} from './+types/concerns';
import {getSeoMeta} from '@shopify/hydrogen';
import {ConcernsPage} from '~/features/brand-collections';
import {HOMEPAGE_PRODUCTS_QUERY} from '~/features/home';

export const meta: Route.MetaFunction = () => {
  return getSeoMeta({title: 'Shop by Concern | Magil Organics'});
};

export async function loader({context}: Route.LoaderArgs) {
  const {products} = await context.storefront.query(HOMEPAGE_PRODUCTS_QUERY);

  return {
    products: products.nodes,
  };
}

export default function ConcernsRoute() {
  const {products} = useLoaderData<typeof loader>();

  return <ConcernsPage products={products} />;
}
