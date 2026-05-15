import {Link} from 'react-router';

const CATEGORIES = [
  {
    name: 'Kudineers',
    tamil: '\u0B95\u0BC1\u0B9F\u0BBF\u0BA8\u0BC0\u0BB0\u0BCD',
    icon: 'kudineer',
    href: '/collections/kudineers',
    count: '12 brews',
  },
  {
    name: 'Thailams',
    tamil: '\u0BA4\u0BC8\u0BB2\u0BAE\u0BCD',
    icon: 'thailam',
    href: '/collections/thailams',
    count: '10 oils',
  },
  {
    name: 'Chooranams',
    tamil: '\u0B9A\u0BC2\u0BB0\u0BA3\u0BAE\u0BCD',
    icon: 'chooranam',
    href: '/collections/chooranam-powders',
    count: '14 powders',
  },
  {
    name: 'Tablets',
    tamil: '\u0BAE\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC8',
    icon: 'tablet',
    href: '/collections/tablets',
    count: '7 herbals',
  },
  {
    name: 'Herbal Juices',
    tamil: '\u0B9A\u0BBE\u0BB1\u0BC1\u0B95\u0BB3\u0BCD',
    icon: 'juice',
    href: '/collections/herbal-juices',
    count: '18 juices',
  },
  {
    name: 'Kits',
    tamil: '\u0BA4\u0BCA\u0B95\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1',
    icon: 'kit',
    href: '/collections/kits',
    count: '5 sets',
  },
];

function CategoryIcon({kind}: {kind: string}) {
  const stroke = 'var(--magil-red-deep)';
  const sw = 1.6;
  const props = {
    width: 44,
    height: 44,
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke,
    strokeWidth: sw,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  };

  switch (kind) {
    case 'kudineer':
      return (
        <svg {...props}>
          <path d="M14 18 V 38 Q 14 42, 18 42 H 30 Q 34 42, 34 38 V 18" />
          <path d="M12 18 H 36" />
          <path d="M20 12 V 18" />
          <path d="M28 12 V 18" />
          <path d="M20 8 Q 22 10, 20 12" />
          <path d="M28 8 Q 30 10, 28 12" />
          <path d="M24 22 Q 21 26, 24 30 Q 27 26, 24 22" fill={stroke} opacity="0.2" />
        </svg>
      );
    case 'thailam':
      return (
        <svg {...props}>
          <path d="M20 8 H 28 V 14 H 20 Z" />
          <path d="M18 14 H 30 L 32 20 Q 32 24, 28 26 V 42 H 20 V 26 Q 16 24, 16 20 Z" />
          <circle cx="24" cy="32" r="2" fill={stroke} />
        </svg>
      );
    case 'chooranam':
      return (
        <svg {...props}>
          <path d="M12 16 L 12 38 Q 12 42, 16 42 H 32 Q 36 42, 36 38 V 16" />
          <path d="M12 16 H 36 L 34 10 H 14 Z" />
          <circle cx="20" cy="26" r="1.2" fill={stroke} />
          <circle cx="26" cy="30" r="1.2" fill={stroke} />
          <circle cx="23" cy="34" r="1.2" fill={stroke} />
        </svg>
      );
    case 'tablet':
      return (
        <svg {...props}>
          <rect x="14" y="10" width="20" height="32" rx="2" />
          <rect x="14" y="10" width="20" height="6" fill={stroke} opacity="0.2" />
          <circle cx="20" cy="24" r="1.5" fill={stroke} />
          <circle cx="28" cy="24" r="1.5" fill={stroke} />
          <circle cx="20" cy="32" r="1.5" fill={stroke} />
          <circle cx="28" cy="32" r="1.5" fill={stroke} />
        </svg>
      );
    case 'juice':
      return (
        <svg {...props}>
          <rect x="20" y="6" width="8" height="6" />
          <path d="M16 12 H 32 L 30 18 Q 30 22, 26 24 V 42 H 22 V 24 Q 18 22, 18 18 Z" />
          <path d="M22 28 Q 24 32, 26 28" fill={stroke} opacity="0.15" />
        </svg>
      );
    case 'kit':
      return (
        <svg {...props}>
          <rect x="8" y="16" width="32" height="24" rx="2" />
          <path d="M8 22 H 40" />
          <path d="M18 16 V 12 Q 18 8, 24 8 Q 30 8, 30 12 V 16" />
          <path d="M24 22 V 40" />
        </svg>
      );
    default:
      return null;
  }
}

export function CategoryRow() {
  return (
    <section className="category-row">
      <div className="category-row__inner">
        <div className="category-row__grid">
          {CATEGORIES.map((c) => (
            <Link key={c.name} to={c.href} className="category-row__item" prefetch="intent">
              <div className="category-row__circle">
                <CategoryIcon kind={c.icon} />
              </div>
              <div className="serif-bold category-row__name">{c.name}</div>
              <div className="tamil category-row__tamil">{c.tamil}</div>
              <div className="category-row__count">{c.count}</div>
            </Link>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: categoryStyles}} />
    </section>
  );
}

const categoryStyles = /* css */ `
  .category-row {
    padding: 60px 24px;
    background: var(--magil-paper);
  }
  @media (min-width: 768px) {
    .category-row { padding: 60px 48px; }
  }

  .category-row__inner {
    max-width: 1440px;
    margin: 0 auto;
  }

  .category-row__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (min-width: 768px) {
    .category-row__grid {
      grid-template-columns: repeat(6, 1fr);
    }
  }

  .category-row__item {
    text-align: center;
    text-decoration: none;
    color: inherit;
  }

  .category-row__circle {
    aspect-ratio: 1;
    background: linear-gradient(135deg, var(--magil-cream-warm) 0%, var(--magil-cream-deep) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    border: 1.5px solid var(--magil-line);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;
  }
  .category-row__item:hover .category-row__circle {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(184,115,42,0.2);
  }

  .category-row__name {
    font-size: 18px;
    color: var(--magil-ink);
  }
  @media (max-width: 767px) {
    .category-row__name { font-size: 14px; }
  }
  .category-row__tamil {
    font-size: 13px;
    color: var(--magil-red-deep);
    margin-top: 1px;
  }
  .category-row__count {
    font-size: 11px;
    color: var(--magil-ink-soft);
    margin-top: 4px;
    letter-spacing: 0.04em;
  }
`;
