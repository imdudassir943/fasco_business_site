import React, { useState } from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  colors: string[];
  soldOut?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
        
        {product.soldOut && (
          <div className="sold-out-badge">
            SOLD OUT
          </div>
        )}

        {isHovered && (
          <div className="product-actions">
            <button className="action-btn" aria-label="Add to wishlist">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 17.5L8.825 16.4375C4.5 12.5625 1.66667 10.0208 1.66667 6.91667C1.66667 4.375 3.54167 2.5 6.08333 2.5C7.525 2.5 8.90833 3.175 10 4.24167C11.0917 3.175 12.475 2.5 13.9167 2.5C16.4583 2.5 18.3333 4.375 18.3333 6.91667C18.3333 10.0208 15.5 12.5625 11.175 16.4458L10 17.5Z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="action-btn" aria-label="Quick view">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 6.66667C7.7 6.66667 5.8 8.06667 5 10C5.8 11.9333 7.7 13.3333 10 13.3333C12.3 13.3333 14.2 11.9333 15 10C14.2 8.06667 12.3 6.66667 10 6.66667ZM10 12C8.625 12 7.5 10.875 7.5 9.5C7.5 8.125 8.625 7 10 7C11.375 7 12.5 8.125 12.5 9.5C12.5 10.875 11.375 12 10 12Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        
        <div className="product-price">
          {product.originalPrice ? (
            <>
              <span className="price-current">${product.price.toFixed(2)}</span>
              <span className="price-original">${product.originalPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="price-current">${product.price.toFixed(2)}</span>
          )}
        </div>

        <div className="product-colors">
          {product.colors.map((color, index) => (
            color === 'pattern' ? (
              <button
                key={index}
                className="color-swatch pattern"
                aria-label="Pattern variant"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <rect x="0" y="0" width="12" height="12" fill="#000"/>
                  <rect x="12" y="12" width="12" height="12" fill="#000"/>
                </svg>
              </button>
            ) : (
              <button
                key={index}
                className="color-swatch"
                style={{ 
                  backgroundColor: color,
                  border: color === '#FFFFFF' ? '1px solid #e0e0e0' : 'none'
                }}
                aria-label={`Color ${color}`}
              />
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;