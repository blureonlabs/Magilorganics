import {Pagination} from '@shopify/hydrogen';

interface PaginationControlsProps {
  connection: any;
  children: (props: {node: any; index: number}) => React.ReactNode;
}

export function PaginationControls({
  connection,
  children,
}: PaginationControlsProps) {
  return (
    <>
      <Pagination connection={connection}>
        {({nodes, isLoading, PreviousLink, NextLink}) => (
          <div className="magil-pagination-wrap">
            <PreviousLink>
              {isLoading ? (
                <span className="magil-pagination__loading">Loading...</span>
              ) : (
                <span className="btn btn-outline magil-pagination__btn">
                  <span aria-hidden="true">&larr;</span> Previous
                </span>
              )}
            </PreviousLink>

            <div className="magil-product-grid">
              {nodes.map((node: any, index: number) =>
                children({node, index}),
              )}
            </div>

            <NextLink>
              {isLoading ? (
                <span className="magil-pagination__loading">Loading...</span>
              ) : (
                <span className="btn btn-outline magil-pagination__btn">
                  Load more <span aria-hidden="true">&rarr;</span>
                </span>
              )}
            </NextLink>
          </div>
        )}
      </Pagination>

      <style
        dangerouslySetInnerHTML={{
          __html: paginationStyles,
        }}
      />
    </>
  );
}

const paginationStyles = /* css */ `
  .magil-product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
  }

  @media (min-width: 768px) {
    .magil-product-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 22px;
    }
  }

  @media (min-width: 1024px) {
    .magil-product-grid {
      grid-template-columns: repeat(4, 1fr);
      gap: 24px;
    }
  }

  .magil-pagination-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .magil-pagination-wrap > a {
    text-decoration: none;
  }

  .magil-pagination__btn {
    padding: 14px 32px;
    font-size: 13px;
    border-radius: 999px;
    transition: background 0.15s ease, color 0.15s ease, transform 0.15s ease;
  }

  .magil-pagination__btn:hover {
    background: var(--magil-red-deep);
    color: #fff;
    transform: translateY(-1px);
  }

  .magil-pagination__loading {
    font-size: 14px;
    color: var(--magil-ink-soft);
    padding: 14px 32px;
  }

  /* Mobile: tighter grid gap */
  @media (max-width: 767px) {
    .magil-product-grid {
      gap: 12px;
    }
    .magil-pagination-wrap {
      gap: 28px;
    }
    .magil-pagination__btn {
      min-height: 44px;
      padding: 12px 24px;
    }
  }
`;
