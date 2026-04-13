import React from 'react';
import ProductCard, { type Product } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  viewMode: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, viewMode }) => {
  const getGridClass = () => {
    switch(viewMode) {
      case 'list':
        return 'product-grid-list';
      case 'grid-2':
        return 'product-grid-2';
      case 'grid-3':
        return 'product-grid-3';
      case 'grid-4':
        return 'product-grid-4';
      case 'grid-5':
        return 'product-grid-5';
      default:
        return 'product-grid-3';
    }
  };

  return (
    <div className={`product-grid ${getGridClass()}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
      
      <div className="pagination">
        <button className="page-number active">1</button>
        <button className="page-number">2</button>
        <button className="page-number">3</button>
        <button className="page-next">»</button>
      </div>
    </div>
  );
};

export default ProductGrid;