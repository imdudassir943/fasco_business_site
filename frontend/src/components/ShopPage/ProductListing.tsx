import React, { useState } from 'react';
import FilterSidebar, { type FilterState } from './FilterSidebar';
import ProductGrid from './ProductGrid';
import ListingHeader from './ListingHeader';
import './Productlisting.css';
import Image1 from "@/assets/FashionPage/FashionFilter1.png";
import Image2 from "@/assets/FashionPage/FashionFilter2.png";
import Image3 from "@/assets/FashionPage/FashionFilter3.png";
import Image4 from "@/assets/FashionPage/FashionFilter4.png";
import Image5 from "@/assets/FashionPage/FashionFilter5.png";
import Image6 from "@/assets/FashionPage/FashionFilter6.png";
import Image7 from "@/assets/FashionPage/FashionFilter7.png";
import Image8 from "@/assets/FashionPage/FashionFilter8.png";
import Image9 from "@/assets/FashionPage/FashionFilter9.png";

const ProductListing: React.FC = () => {
  const [viewMode, setViewMode] = useState<string>('grid-3');
  const [sortBy, setSortBy] = useState<string>('best-selling');
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    sizes: [],
    colors: [],
    priceRanges: [],
    brands: [],
    collections: [],
    tags: []
  });

  const products = [
    {
      id: 1,
      name: 'Rounded Red Hat',
      price: 8.00,
      image: Image1,
      colors: ['#FFD700', '#000000']
    },
    {
      id: 2,
      name: 'Linen blend Shirt',
      price: 17.00,
      image: Image2,
      colors: ['#4A90E2', '#FFB6C1'],
      soldOut: true
    },
    {
      id: 3,
      name: 'Long-sleeve Coat',
      price: 106.00,
      image: Image3,
      colors: ['#FFFFFF', '#90EE90']
    },
    {
      id: 4,
      name: 'Boxy Denim Hat',
      price: 25.00,
      image: Image4,
      colors: ['#E8E8E8', '#1E3A8A']
    },
    {
      id: 5,
      name: 'Linen Plain Top',
      price: 25.00,
      image: Image5,
      colors: ['#90EE90', 'pattern']
    },
    {
      id: 6,
      name: 'Oversized T-shirt',
      price: 11.00,
      originalPrice: 14.00,
      image: Image6,
      colors: ['#FFB6C1', '#D8BFD8']
    },
    {
      id: 7,
      name: 'Polarised Sunglasses',
      price: 18.00,
      originalPrice: 21.00,
      image: Image7,
      colors: ['#000000', '#8B4513']
    },
    {
      id: 8,
      name: 'Rockstar Jacket',
      price: 22.00,
      image: Image8,
      colors: ['#FFB6C1', '#ADD8E6']
    },
    {
      id: 9,
      name: 'Dotted Black Dress',
      price: 20.00,
      image: Image9,
      colors: ['#1E3A8A', '#000000', '#ADD8E6']
    }
  ];

  return (
    <div className="product-listing-container">
      <div className="page-header">
        <h1 className="page-title">Fashion</h1>
        <div className="breadcrumb">
          <a href="/">Home</a>
          <span className="separator">›</span>
          <span>Fashion</span>
        </div>
      </div>

      <div className="listing-content">
        <FilterSidebar 
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
        
        <div className="main-content">
          <ListingHeader 
            viewMode={viewMode}
            setViewMode={setViewMode}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          
          <ProductGrid 
            products={products}
            viewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;