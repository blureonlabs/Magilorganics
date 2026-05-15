import {useLoaderData, type HeadersFunction} from 'react-router';
import type {Route} from './+types/cart';
import {getSeoMeta, Analytics} from '@shopify/hydrogen';
import {CartPage} from '~/features/cart';
import {handleCartAction} from '~/features/cart/lib/cart-utils';

export const meta: Route.MetaFunction = () => {
  return getSeoMeta({
    title: 'Your Cart | Magil Organics',
    description:
      'Review your kudukai and proceed to checkout. Free shipping on orders above \u20B9999.',
  });
};

export const headers: HeadersFunction = ({actionHeaders}) => actionHeaders;

export async function action(args: Route.ActionArgs) {
  return handleCartAction(args);
}

export async function loader({context}: Route.LoaderArgs) {
  return await context.cart.get();
}

export default function CartRoute() {
  const cart = useLoaderData<typeof loader>();

  return (
    <>
      <CartPage cart={cart} />
      <Analytics.CartView />
    </>
  );
}
