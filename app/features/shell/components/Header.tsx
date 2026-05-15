import {useState, useRef, useEffect, useCallback, Suspense} from 'react';
import {Link, Await, useNavigate} from 'react-router';
import type {CartApiQueryFragment} from 'storefrontapi.generated';
import {SearchIcon, UserIcon, BagIcon, MenuIcon} from '~/shared/icons';
import {NAV_LINKS} from '~/shared/lib/constants';
import {MobileNav} from './MobileNav';
import {PredictiveSearch} from '~/features/search';

interface HeaderProps {
  cart: Promise<CartApiQueryFragment | null>;
}

export function Header({cart}: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchWrapRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(e.target as Node)
      ) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen]);

  // Close on Escape
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        setSearchOpen(false);
        searchInputRef.current?.blur();
      }
      if (e.key === 'Enter' && searchQuery.trim()) {
        e.preventDefault();
        setSearchOpen(false);
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    },
    [searchQuery, navigate],
  );

  const handleSearchClose = useCallback(() => {
    setSearchOpen(false);
  }, []);

  // Mobile search toggle
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const mobileSearchRef = useRef<HTMLDivElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (mobileSearchOpen && mobileInputRef.current) {
      mobileInputRef.current.focus();
    }
  }, [mobileSearchOpen]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(e.target as Node)
      ) {
        setMobileSearchOpen(false);
      }
    }
    if (mobileSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileSearchOpen]);

  const handleMobileKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Escape') {
        setMobileSearchOpen(false);
        mobileInputRef.current?.blur();
      }
      if (e.key === 'Enter' && searchQuery.trim()) {
        e.preventDefault();
        setMobileSearchOpen(false);
        navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    },
    [searchQuery, navigate],
  );

  const handleMobileSearchClose = useCallback(() => {
    setMobileSearchOpen(false);
  }, []);

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

            {/* Desktop search with predictive dropdown */}
            <div
              className="magil-header__search-wrap"
              ref={searchWrapRef}
            >
              <div
                className={`magil-header__search-pill ${searchOpen ? 'magil-header__search-pill--active' : ''}`}
              >
                <SearchIcon />
                <input
                  ref={searchInputRef}
                  type="text"
                  className="magil-header__search-input"
                  placeholder="Search Kabasura, Thailam, Onion oil..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (!searchOpen) setSearchOpen(true);
                  }}
                  onFocus={() => setSearchOpen(true)}
                  onKeyDown={handleKeyDown}
                  aria-label="Search products"
                  autoComplete="off"
                />
              </div>

              <PredictiveSearch
                query={searchQuery}
                isOpen={searchOpen}
                onClose={handleSearchClose}
              />
            </div>
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
            <button
              className="magil-header__icon-btn magil-header__search-mobile"
              aria-label="Search"
              onClick={() => setMobileSearchOpen((v) => !v)}
            >
              <SearchIcon />
            </button>

            {/* Account link - disabled for launch
            <Link
              to="/account"
              className="magil-header__icon-btn"
              aria-label="Account"
            >
              <UserIcon />
            </Link>
            */}

            <CartBadge cart={cart} />
          </div>
        </div>

        {/* Mobile search bar — slides down on toggle */}
        {mobileSearchOpen && (
          <div
            className="magil-header__mobile-search-bar"
            ref={mobileSearchRef}
          >
            <div className="magil-header__mobile-search-inner">
              <SearchIcon />
              <input
                ref={mobileInputRef}
                type="text"
                className="magil-header__search-input"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleMobileKeyDown}
                aria-label="Search products"
                autoComplete="off"
              />
              <button
                className="magil-header__mobile-search-close"
                onClick={() => setMobileSearchOpen(false)}
                aria-label="Close search"
              >
                &times;
              </button>
            </div>
            <PredictiveSearch
              query={searchQuery}
              isOpen={mobileSearchOpen && searchQuery.length >= 2}
              onClose={handleMobileSearchClose}
            />
          </div>
        )}

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
