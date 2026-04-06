'use client';
import WF1 from "@/assets/NewArrivals/WomenFashion/WomenF1.png"
import WF2 from "@/assets/NewArrivals/WomenFashion/WomenF2.png"
import WF3 from "@/assets/NewArrivals/WomenFashion/WomenF3.png"
import WF4 from "@/assets/NewArrivals/WomenFashion/WomenF4.png"
import WF5 from "@/assets/NewArrivals/WomenFashion/WomenF5.png"
import WF6 from "@/assets/NewArrivals/WomenFashion/WomenF6.png"

import { useState, useEffect } from 'react';

import { Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  rating: number;
  reviews: number;
  status: string;
}

const categories = [
  "Men's Fashion",
  "Women's Fashion",
  'Women Accessories',
  'Men Accessories',
  'Discount Deals'
];

const products: Record<string, Product[]> = {
  "Women's Fashion": [
    {
      id: '1',
      name: 'Shiny Dress',
      brand: 'Al Karam',
      image: WF1,
      price: 95.50,
      rating: 5,
      reviews: 4.1,
      status: 'Almost Sold Out'
    },
    {
      id: '2',
      name: 'Long Dress',
      brand: 'Al Karam',
      image: WF2,
      price: 95.50,
      rating: 5,
      reviews: 4.1,
      status: 'Almost Sold Out'
    },
    {
      id: '3',
      name: 'Full Sweater',
      brand: 'Al Karam',
      image: WF3,
      price: 95.50,
      rating: 5,
      reviews: 4.1,
      status: 'Almost Sold Out'
    },
    {
      id: '4',
      name: 'White Dress',
      brand: 'Al Karam',
      image: WF4,
      price: 95.50,
      rating: 5,
      reviews: 4.1,
      status: 'Almost Sold Out'
    },
    {
      id: '5',
      name: 'Color Dress',
      brand: 'Al Karam',
      image: WF5,
      price: 95.50,
      rating: 5,
      reviews: 4.1,
      status: 'Almost Sold Out'
    },
    {
      id: '6',
      name: 'Bottoms',
      brand: 'Al Karam',
      image: WF6,
      price: 95.50,
      rating: 5,
      reviews: 4.1,
      status: 'Almost Sold Out'
    }
  ]
};

export default function NewArrivals() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!activeCategory) {
      setActiveCategory("Women's Fashion");
    }
  }, [activeCategory]);

  if (!mounted) {
    return (
      <section className="w-full bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-5xl font-semibold font-serif text-[#484848]">New Arrivals</h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
              ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
            </p>
          </div>

          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                disabled
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  category === "Women's Fashion"
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-transparent text-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products["Women's Fashion"]?.map((product) => (
              <div key={product.id} className="flex flex-col">
                <div className="relative mb-4 h-64 w-full overflow-hidden rounded-2xl bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
                  <p className="text-sm text-[#484848] mb-2">{product.brand}</p>

                  <div className="mb-2 flex items-center gap-1">
                    <div className="flex gap-0.5">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews}k) Customer Reviews
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm font-medium text-red-500">
                      {product.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <button className="bg-black text-white px-12 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg">
              View More
            </button>
          </div>
        </div>
      </section>
    );
  }

  const currentProducts = products[activeCategory || "Women's Fashion"] || [];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-5xl font-bold font-serif text-[#484848]">New Arrivals</h2>
          <p className="mx-auto max-w-3xl text-[#484848] text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis
            ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-50 text-[#484848] hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => (
            <div key={product.id} className="flex flex-col shadow-lg rounded-2xl pt-2 pb-7 px-4">
              {/* Product Image */}
              <div className="relative mb-4 h-64 w-full overflow-hidden rounded-xl bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-[#484848]">{product.name}</h3>
                <p className="text-sm text-[#484848] mb-2">{product.brand}</p>

                {/* Rating */}
                <div className="mb-2 flex items-center gap-1">
                  <div className="flex gap-0.5">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-[#484848]">
                    ({product.reviews}k) Customer Reviews
                  </span>
                </div>

                {/* Price and Status */}
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-[#484848]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs font-small text-red-500">
                    {product.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-black text-white px-12 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors shadow-lg">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
