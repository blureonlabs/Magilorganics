import {Link} from 'react-router';
import {CloseIcon} from '~/shared/icons';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {useScrollLock} from '~/shared/hooks/useScrollLock';
import {NAV_LINKS, STORE_NAME} from '~/shared/lib/constants';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({isOpen, onClose}: MobileNavProps) {
  useScrollLock(isOpen);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`magil-mobile-nav__backdrop ${isOpen ? 'magil-mobile-nav__backdrop--open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <nav
        className={`magil-mobile-nav ${isOpen ? 'magil-mobile-nav--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        {/* Close header */}
        <div className="magil-mobile-nav__header">
          <div className="magil-mobile-nav__brand">
            <PeacockMark size={24} />
            <span className="magil-mobile-nav__brand-name">{STORE_NAME}</span>
          </div>
          <button
            className="magil-mobile-nav__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Links */}
        <ul className="magil-mobile-nav__links">
          {NAV_LINKS.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="magil-mobile-nav__link"
                onClick={onClose}
                prefetch="intent"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Secondary links */}
        <div className="magil-mobile-nav__secondary">
          <Link to="/search" className="magil-mobile-nav__secondary-link" onClick={onClose}>
            Search
          </Link>
          <Link to="/account" className="magil-mobile-nav__secondary-link" onClick={onClose}>
            Account
          </Link>
          <Link to="/pages/about" className="magil-mobile-nav__secondary-link" onClick={onClose}>
            Our Story
          </Link>
          <Link to="/pages/contact" className="magil-mobile-nav__secondary-link" onClick={onClose}>
            Contact
          </Link>
        </div>

        {/* Tamil tagline at bottom */}
        <div className="magil-mobile-nav__footer">
          <p className="magil-mobile-nav__tamil">
            கிராம உணவுகள் — பாரம்பரிய முறையில்
          </p>
        </div>
      </nav>
    </>
  );
}
