import {useSearchParams} from 'react-router';

const BRANDS = [
  {id: '', label: 'All'},
  {id: 'Village Pharma', label: 'Village Pharma'},
  {id: 'Magil Organics', label: 'Magil Organics'},
] as const;

const FORMS = [
  'All',
  'Kudineer',
  'Thailam',
  'Tablet',
  'Powder',
  'Juice',
  'Oil',
] as const;

const SORT_OPTIONS = [
  {value: 'relevance', label: 'Relevance'},
  {value: 'price-asc', label: 'Price: Low to high'},
  {value: 'price-desc', label: 'Price: High to low'},
] as const;

interface SearchFiltersProps {
  totalCount: number;
  term: string;
}

export function SearchFilters({totalCount, term}: SearchFiltersProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const brandFilter = searchParams.get('brand') || '';
  const formFilter = searchParams.get('form') || '';
  const sort = searchParams.get('sort') || 'relevance';

  function updateParam(key: string, value: string) {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value) {
          next.set(key, value);
        } else {
          next.delete(key);
        }
        return next;
      },
      {replace: true},
    );
  }

  return (
    <div className="search-filters">
      {/* Result count + sort */}
      <div className="search-filters__header">
        <div>
          <div className="eyebrow">Search results</div>
          <h2 className="serif-bold search-filters__count">
            {totalCount} result{totalCount === 1 ? '' : 's'} for{' '}
            <em className="search-filters__term">&ldquo;{term}&rdquo;</em>
          </h2>
        </div>
        <div className="search-filters__sort">
          <span className="search-filters__sort-label">Sort by</span>
          <select
            value={sort}
            onChange={(e) => updateParam('sort', e.target.value)}
            className="search-filters__sort-select"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Filter chips */}
      <div className="search-filters__chips">
        {/* Brand */}
        <div className="search-filters__group">
          <span className="search-filters__group-label">Brand</span>
          {BRANDS.map((b) => {
            const active = brandFilter === b.id;
            return (
              <button
                key={b.label}
                onClick={() => updateParam('brand', b.id)}
                className={`search-filters__pill touch-target ${active ? 'search-filters__pill--active' : ''}`}
              >
                {b.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        <div className="search-filters__group">
          <span className="search-filters__group-label">Form</span>
          {FORMS.map((f) => {
            const val = f === 'All' ? '' : f;
            const active = formFilter === val;
            return (
              <button
                key={f}
                onClick={() => updateParam('form', val)}
                className={`search-filters__pill touch-target ${active ? 'search-filters__pill--form-active' : ''}`}
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: filterStyles}} />
    </div>
  );
}

const filterStyles = /* css */ `
  .search-filters__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    padding: 24px 0;
    border-bottom: 1px solid var(--magil-line);
    margin-bottom: 24px;
  }

  .search-filters__count {
    font-size: 24px;
    margin: 4px 0 0;
    color: var(--magil-ink);
  }

  .search-filters__term {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .search-filters__sort {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .search-filters__sort-label {
    font-size: 13px;
    color: var(--magil-ink-soft);
  }
  .search-filters__sort-select {
    padding: 8px 14px;
    border: 1px solid var(--magil-line);
    border-radius: 999px;
    background: #fff;
    font-size: 13px;
    font-family: inherit;
    color: var(--magil-ink);
  }

  .search-filters__chips {
    display: flex;
    gap: 24px;
    margin-bottom: 28px;
    flex-wrap: wrap;
  }

  .search-filters__group {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
  }
  .search-filters__group-label {
    font-size: 12px;
    color: var(--magil-ink-soft);
    letter-spacing: 0.06em;
    font-weight: 600;
    text-transform: uppercase;
  }

  .search-filters__pill {
    padding: 6px 14px;
    background: #fff;
    color: var(--magil-ink);
    border: 1px solid var(--magil-line);
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .search-filters__pill:hover {
    border-color: var(--magil-red-deep);
    color: var(--magil-red-deep);
  }
  .search-filters__pill--active {
    background: var(--magil-red-deep);
    color: var(--magil-cream);
    border-color: var(--magil-red-deep);
  }
  .search-filters__pill--active:hover {
    color: var(--magil-cream);
  }
  .search-filters__pill--form-active {
    background: var(--magil-gold);
    color: var(--magil-ink);
    border-color: var(--magil-gold);
  }
  .search-filters__pill--form-active:hover {
    color: var(--magil-ink);
  }
`;
