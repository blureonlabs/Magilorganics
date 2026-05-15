import {Link} from 'react-router';
import {LampIcon} from '~/shared/icons';

const TRENDING = [
  'Kabasura',
  'Onion Oil',
  'Triphala',
  'Ashwagandha',
  'Coconut Oil',
  'Aloevera',
  'Hair Kit',
];

interface NoResultsProps {
  term: string;
}

export function NoResults({term}: NoResultsProps) {
  return (
    <section className="no-results">
      <div className="no-results__inner">
        <div className="no-results__icon-wrap">
          <LampIcon size={44} style={{color: 'var(--magil-gold)'}} />
        </div>
        <div className="eyebrow">Nothing found</div>
        <h2 className="serif no-results__heading">
          We don&rsquo;t have{' '}
          <em className="no-results__term">&ldquo;{term}&rdquo;</em> &mdash;
          yet.
        </h2>
        <p className="no-results__body">
          Try a more general term, or browse our most-loved remedies below. If
          you&rsquo;re looking for something specific, our vaidyar would love to
          hear from you.
        </p>

        <div className="no-results__actions">
          <Link to="/concerns" className="btn btn-primary">
            Shop by concern
          </Link>
          <Link to="/collections" className="btn btn-outline">
            Browse all categories
          </Link>
        </div>

        <div className="eyebrow" style={{marginBottom: 14}}>
          Try searching for
        </div>
        <div className="no-results__suggestions">
          {TRENDING.map((t) => (
            <Link
              key={t}
              to={`/search?q=${encodeURIComponent(t)}`}
              className="no-results__suggestion-pill"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: noResultsStyles}} />
    </section>
  );
}

const noResultsStyles = /* css */ `
  .no-results {
    padding: 60px 24px 80px;
    background: var(--magil-paper);
  }
  @media (min-width: 768px) {
    .no-results { padding: 60px 48px 80px; }
  }

  .no-results__inner {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .no-results__icon-wrap {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--magil-cream-warm);
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .no-results__heading {
    font-size: clamp(28px, 5vw, 44px);
    margin: 8px 0 14px;
    color: var(--magil-ink);
  }

  .no-results__term {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .no-results__body {
    font-size: 16px;
    color: var(--magil-ink-soft);
    line-height: 1.6;
    max-width: 540px;
    margin: 0 auto 24px;
  }

  .no-results__actions {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
  }

  .no-results__suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .no-results__suggestion-pill {
    padding: 8px 16px;
    background: var(--magil-cream-warm);
    border-radius: 999px;
    font-size: 13px;
    font-weight: 600;
    color: var(--magil-ink);
    text-decoration: none;
    transition: all 0.15s ease;
  }
  .no-results__suggestion-pill:hover {
    background: var(--magil-red-deep);
    color: var(--magil-cream);
  }
`;
