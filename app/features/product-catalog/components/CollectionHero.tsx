import {Link} from 'react-router';

interface CollectionHeroProps {
  title: string;
  description?: string | null;
  productCount: number;
}

export function CollectionHero({
  title,
  description,
  productCount,
}: CollectionHeroProps) {
  return (
    <>
      <section className="magil-collection-hero">
        {/* Decorative peacock backdrop */}
        <div style={{position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'}} aria-hidden="true">
          <svg
            className="magil-collection-hero__peacock"
            viewBox="0 0 200 200"
          >
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
              (a) => (
                <g key={a} transform={`rotate(${a} 100 100)`}>
                  <ellipse
                    cx="100"
                    cy="40"
                    rx="14"
                    ry="48"
                    fill="var(--magil-red-deep)"
                  />
                  <ellipse
                    cx="100"
                    cy="25"
                    rx="8"
                    ry="14"
                    fill="var(--magil-gold)"
                  />
                  <circle cx="100" cy="25" r="4" fill="var(--magil-red-dark)" />
                </g>
              ),
            )}
            <circle cx="100" cy="100" r="18" fill="var(--magil-gold)" />
          </svg>
        </div>

        <div className="magil-collection-hero__inner">
          {/* Breadcrumb */}
          <nav className="magil-collection-hero__breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> &rsaquo; </span>
            <Link to="/collections">Collections</Link>
            <span aria-hidden="true"> &rsaquo; </span>
            <span className="magil-collection-hero__breadcrumb-current">
              {title}
            </span>
          </nav>

          {/* Title */}
          <h1 className="magil-collection-hero__title serif">{title}</h1>

          {/* Description */}
          {description && (
            <p className="magil-collection-hero__description">{description}</p>
          )}

          {/* Product count */}
          <div className="magil-collection-hero__count">
            {productCount} {productCount === 1 ? 'product' : 'products'}
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: collectionHeroStyles,
        }}
      />
    </>
  );
}

const collectionHeroStyles = /* css */ `
  .magil-collection-hero {
    background: linear-gradient(160deg, var(--magil-cream) 0%, var(--magil-cream-warm) 60%, var(--magil-cream-deep) 100%);
    padding: 32px 16px 28px;
    position: relative;
    overflow: hidden;
  }

  .magil-collection-hero__peacock {
    position: absolute;
    top: 5%;
    right: 5%;
    width: 15%;
    max-width: 180px;
    aspect-ratio: 1;
    opacity: 0.03;
    pointer-events: none;
  }

  .magil-collection-hero__inner {
    max-width: 1440px;
    margin: 0 auto;
    position: relative;
  }

  .magil-collection-hero__breadcrumb {
    font-size: 14px;
    color: var(--magil-ink-soft);
    margin-bottom: 16px;
    line-height: 1.5;
  }

  .magil-collection-hero__breadcrumb a {
    color: inherit;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  .magil-collection-hero__breadcrumb a:hover {
    color: var(--magil-red-deep);
    text-decoration: none;
  }

  .magil-collection-hero__breadcrumb-current {
    color: var(--magil-red-deep);
    font-weight: 600;
  }

  .magil-collection-hero__title {
    font-size: 48px;
    font-weight: 500;
    line-height: 1;
    margin: 10px 0 20px;
    color: var(--magil-ink);
    letter-spacing: -0.02em;
  }

  .magil-collection-hero__description {
    max-width: 600px;
    margin-top: 8px;
    color: var(--magil-ink-soft);
    font-size: 16px;
    line-height: 1.6;
  }

  .magil-collection-hero__count {
    margin-top: 14px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--magil-ochre);
  }

  @media (min-width: 768px) {
    .magil-collection-hero {
      padding: 60px 48px 44px;
    }

    .magil-collection-hero__title {
      font-size: 72px;
      margin-bottom: 24px;
    }

    .magil-collection-hero__breadcrumb {
      font-size: 15px;
    }

    .magil-collection-hero__peacock {
      width: 15%;
      max-width: 180px;
    }
  }

  @media (max-width: 767px) {
    .magil-collection-hero {
      padding: 28px 16px 24px;
    }

    .magil-collection-hero__title {
      font-size: 36px;
      margin-bottom: 16px;
    }

    .magil-collection-hero__description {
      font-size: 14px;
    }
  }
`;
