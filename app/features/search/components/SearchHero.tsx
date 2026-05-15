import {Form} from 'react-router';
import {SearchIcon, CloseIcon} from '~/shared/icons';

interface SearchHeroProps {
  term: string;
}

export function SearchHero({term}: SearchHeroProps) {
  return (
    <section className="search-hero">
      <div className="search-hero__inner">
        <h1 className="search-hero__heading serif">
          Find your{' '}
          <em className="search-hero__accent">remedy</em>
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

  @media (max-width: 767px) {
    .search-hero {
      padding: 24px 16px 32px;
    }
    .search-hero__form {
      flex-wrap: wrap;
      border-radius: 16px;
      padding: 8px 16px;
    }
    .search-hero__input {
      width: 100%;
      min-width: 100%;
    }
    .search-hero__submit {
      width: 100%;
      padding: 12px 16px;
      font-size: 14px;
      min-height: 44px;
    }
  }
`;
