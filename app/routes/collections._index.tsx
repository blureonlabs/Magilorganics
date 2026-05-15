import {useLoaderData} from 'react-router';
import type {Route} from './+types/collections._index';
import {getSeoMeta} from '@shopify/hydrogen';
import {AllCollectionsPage, ALL_COLLECTIONS_QUERY} from '~/features/brand-collections';

export const meta: Route.MetaFunction = () => {
  return getSeoMeta({title: 'Shop by Category | Magil Organics'});
};

export async function loader({context}: Route.LoaderArgs) {
  const {collections} = await context.storefront.query(ALL_COLLECTIONS_QUERY);

  return {
    collections: collections.nodes,
  };
}

export default function CollectionsRoute() {
  const {collections} = useLoaderData<typeof loader>();

  return <AllCollectionsPage collections={collections} />;
}
