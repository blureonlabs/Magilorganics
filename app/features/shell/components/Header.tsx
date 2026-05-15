import {useState, Suspense} from 'react';
import {Link, Await} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {SearchIcon, UserIcon, BagIcon, MenuIcon} from '~/shared/icons';
import {NAV_LINKS} from '~/shared/lib/constants';
import {MobileNav} from './MobileNav';

interface HeaderProps {
  cart: Promise<CartApiQueryFragment | null>;
}

export function Header({cart}: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      <header className="magil-header">
        <div className="magil-header__inner">
          {/* Left: hamburger (mobile) + search form (desktop) */}
          <div className="magil-header__left">
            <button
              className="magil-header__hamburger"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon />
            </button>

            <Link
              to="/search"
              className="magil-header__search-link"
              aria-label="Search"
            >
              <div className="magil-header__search-pill">
                <SearchIcon />
                <span className="magil-header__search-placeholder">
                  Search Kabasura, Thailam, Onion oil...
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Logo */}
          <div className="magil-header__center">
            <Link to="/" prefetch="intent" className="magil-header__logo-link">
              <img
                src="/magil-logo.png"
                alt="Magil Organics"
                className="magil-header__logo"
                width="180"
                height="62"
              />
            </Link>
          </div>

          {/* Right: icon actions */}
          <div className="magil-header__right">
            <Link
              to="/search"
              className="magil-header__icon-btn magil-header__search-mobile"
              aria-label="Search"
            >
              <SearchIcon />
            </Link>

            <Link
              to="/account"
              className="magil-header__icon-btn"
              aria-label="Account"
            >
              <UserIcon />
            </Link>

            <CartBadge cart={cart} />
          </div>
        </div>

        {/* Desktop nav bar */}
        <nav className="magil-header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="magil-header__nav-link"
              prefetch="intent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
}

function CartBadge({cart}: {cart: Promise<CartApiQueryFragment | null>}) {
  return (
    <Link to="/cart" className="magil-header__icon-btn" aria-label="Cart">
      <BagIcon />
      <Suspense fallback={<CartCount count={0} />}>
        <Await resolve={cart}>
          {(resolved) => <CartCount count={resolved?.totalQuantity ?? 0} />}
        </Await>
      </Suspense>
    </Link>
  );
}

function CartCount({count}: {count: number}) {
  if (count === 0) return null;
  return <span className="magil-header__cart-count">{count}</span>;
}
