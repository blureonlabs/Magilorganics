import {Form} from 'react-router';
import {SearchIcon, CloseIcon} from '~/shared/icons';

interface SearchHeroProps {
  term: string;
}

export function SearchHero({term}: SearchHeroProps) {
  return (
    <section className="search-hero">
      {/* Decorative peacock wheel */}
      <svg
        className="search-hero__motif"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((a) => (
          <g key={a} transform={`rotate(${a} 100 100)`}>
            <ellipse
              cx="100"
              cy="40"
              rx="14"
              ry="50"
              fill="var(--magil-red-deep)"
            />
            <ellipse
              cx="100"
              cy="22"
              rx="8"
              ry="14"
              fill="var(--magil-gold)"
            />
          </g>
        ))}
      </svg>

      <div className="search-hero__inner">
        <h1 className="search-hero__heading serif">
          What are you{' '}
          <em className="search-hero__accent">looking for</em>?
        </h1>

        <Form method="get" action="/search" className="search-hero__form">
          <SearchIcon size={20} style={{color: 'var(--magil-red-deep)', flexShrink: 0}} />
          <input
            name="q"
            defaultValue={term}
            placeholder="Search by name (Kabasura), Tamil, or concern (joint pain)..."
            className="search-hero__input"
            autoFocus
            type="search"
          />
          {term && (
            <a href="/search" className="search-hero__clear touch-target" aria-label="Clear search">
              <CloseIcon size={16} />
            </a>
          )}
          <button type="submit" className="btn btn-primary search-hero__submit">
            Search
          </button>
        </Form>
      </div>

      <style dangerouslySetInnerHTML={{__html: searchHeroStyles}} />
    </section>
  );
}

const searchHeroStyles = /* css */ `
  .search-hero {
    background: linear-gradient(135deg, var(--magil-cream) 0%, var(--magil-cream-warm) 100%);
    padding: 40px 24px 50px;
    position: relative;
    overflow: hidden;
  }
  @media (min-width: 768px) {
    .search-hero { padding: 40px 48px 50px; }
  }

  .search-hero__motif {
    position: absolute;
    top: -30%;
    right: -5%;
    width: 480px;
    height: 480px;
    opacity: 0.05;
    pointer-events: none;
  }

  .search-hero__inner {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
  }

  .search-hero__heading {
    font-size: clamp(32px, 6vw, 56px);
    font-weight: 500;
    line-height: 1;
    margin: 0;
    color: var(--magil-ink);
    letter-spacing: -0.02em;
  }
  .search-hero__accent {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .search-hero__form {
    margin-top: 22px;
    display: flex;
    align-items: center;
    background: #fff;
    border: 2px solid var(--magil-line);
    border-radius: 999px;
    padding: 8px 8px 8px 24px;
    max-width: 760px;
    box-shadow: var(--magil-shadow);
    gap: 12px;
  }

  .search-hero__input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: inherit;
    background: transparent;
    color: var(--magil-ink);
    padding: 12px 0;
    min-width: 0;
  }
  .search-hero__input::placeholder {
    color: var(--magil-ink-soft);
  }

  .search-hero__clear {
    padding: 8px 12px;
    color: var(--magil-ink-soft);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-hero__submit {
    padding: 12px 28px;
    flex-shrink: 0;
  }

  @media (max-width: 600px) {
    .search-hero__submit {
      padding: 10px 16px;
      font-size: 12px;
    }
  }
`;
