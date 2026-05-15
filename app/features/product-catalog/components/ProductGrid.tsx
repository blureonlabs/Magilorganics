import {ProductCard} from './ProductCard';

interface ProductGridProps {
  products: Array<any>;
}

export function ProductGrid({products}: ProductGridProps) {
  return (
    <>
      <div className="magil-product-grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: productGridStyles,
        }}
      />
    </>
  );
}

const productGridStyles = /* css */ `
  .magil-product-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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
`;
