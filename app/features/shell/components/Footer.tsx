import {Link} from 'react-router';
import {PeacockMark} from '~/shared/motifs/PeacockMark';
import {
  STORE_NAME,
  STORE_TAGLINE,
  STORE_ADDRESS,
  STORE_PHONE_PRIMARY,
  STORE_PHONE_SECONDARY,
  STORE_EMAIL,
  STORE_HOURS,
  FOOTER_CATEGORIES,
  FOOTER_CONCERNS,
  FOOTER_COMPANY,
  FOOTER_POLICIES,
} from '~/shared/lib/constants';

export function Footer() {
  return (
    <footer className="magil-footer">
      {/* Decorative wave */}
      <svg
        className="magil-footer__wave"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        height="60"
        aria-hidden="true"
      >
        <path
          d="M0 60 Q 360 0 720 30 T 1440 30 V 60 Z"
          fill="var(--magil-ink)"
        />
      </svg>

      <div className="magil-footer__inner">
        {/* Newsletter section */}
        <div className="magil-footer__newsletter">
          <p className="magil-footer__eyebrow">Join the family</p>
          <h2 className="magil-footer__headline">The Organic Way of Life</h2>
          <p className="magil-footer__newsletter-desc">
            Subscribe for harvest stories, seasonal recipes, and Siddha wisdom
            from the villages of Tamil Nadu.
          </p>
          <form
            className="magil-footer__newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your e-mail"
              className="magil-footer__newsletter-input"
              aria-label="Email for newsletter"
            />
            <button type="submit" className="magil-footer__newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>

        {/* Link columns */}
        <div className="magil-footer__grid">
          {/* Brand column */}
          <div className="magil-footer__brand-col">
            <div className="magil-footer__brand-logo">
              <img
                src="/magil-logo.png"
                alt={STORE_NAME}
                width="140"
                height="48"
                style={{objectFit: 'contain'}}
              />
            </div>
            <p className="magil-footer__brand-desc">{STORE_TAGLINE}</p>
            <p className="magil-footer__brand-tamil">
              கிராம உணவுகள் — பாரம்பரிய முறையில்
            </p>
          </div>

          {/* Categories */}
          <div className="magil-footer__col">
            <h3 className="magil-footer__col-title">Categories</h3>
            <ul className="magil-footer__col-list">
              {FOOTER_CATEGORIES.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="magil-footer__link" prefetch="intent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop by Concern */}
          <div className="magil-footer__col">
            <h3 className="magil-footer__col-title">Shop by Concern</h3>
            <ul className="magil-footer__col-list">
              {FOOTER_CONCERNS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="magil-footer__link" prefetch="intent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Magil Family */}
          <div className="magil-footer__col">
            <h3 className="magil-footer__col-title">Magil Family</h3>
            <ul className="magil-footer__col-list">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="magil-footer__link" prefetch="intent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div className="magil-footer__col">
            <h3 className="magil-footer__col-title">Reach Us</h3>
            <ul className="magil-footer__col-list">
              <li>
                <a href={`tel:${STORE_PHONE_PRIMARY.replace(/\s/g, '')}`} className="magil-footer__link">
                  {STORE_PHONE_PRIMARY}
                </a>
              </li>
              <li>
                <a href={`tel:${STORE_PHONE_SECONDARY.replace(/\s/g, '')}`} className="magil-footer__link">
                  {STORE_PHONE_SECONDARY}
                </a>
              </li>
              <li>
                <a href={`mailto:${STORE_EMAIL}`} className="magil-footer__link">
                  {STORE_EMAIL}
                </a>
              </li>
              <li className="magil-footer__text">{STORE_ADDRESS}</li>
              <li className="magil-footer__text">{STORE_HOURS}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="magil-footer__bottom">
          <p>&copy; 2026 Magil Village Foods Pvt. Ltd. All rights reserved.</p>
          <div className="magil-footer__policies">
            {FOOTER_POLICIES.map((link) => (
              <Link key={link.to} to={link.to} className="magil-footer__policy-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
