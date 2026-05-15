import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {PromoStrip} from './PromoStrip';
import {Header} from './Header';
import {Footer} from './Footer';

interface LayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  children?: React.ReactNode;
}

export function Layout({cart, children}: LayoutProps) {
  return (
    <>
      <PromoStrip />
      <Header cart={cart} />
      <main className="magil-main">{children}</main>
      <Footer />
    </>
  );
}
