import React from 'react';
import FilterGroup from './FilterGroup';

export interface FilterState {
  sizes: string[];
  colors: string[];
  priceRanges: string[];
  brands: string[];
  collections: string[];
  tags: string[];
}

interface FilterSidebarProps {
  selectedFilters: FilterState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ selectedFilters, setSelectedFilters }) => {
  const sizeOptions = ['S', 'M', 'L', 'XL'];
  
  const colorOptions = [
    '#FF6B6B', '#FF8C42', '#FFD93D', '#6BCF7F', '#4ECDC4',
    '#45B7D1', '#4A90E2', '#5B7FFF', '#8B5CF6', '#A855F7',
    '#D946EF', '#EC4899', '#EF4444', '#22D3EE', '#3B82F6'
  ];

  const priceRanges = [
    { label: '$0-$50', value: '0-50' },
    { label: '$50-$100', value: '50-100' },
    { label: '$100-$150', value: '100-150' },
    { label: '$150-$200', value: '150-200' },
    { label: '$300-$400', value: '300-400' }
  ];

  const brands = [
    'Minimog', 'Retrolie Brook', 'Learts', 'Vagabond', 'Abby'
  ];

  const collections = [
    'All products', 'Best sellers', 'New arrivals', 'Accessories'
  ];

  const tags = [
    'Fashion', 'Hats', 'Sandal', 'Belt', 'Bags',
    'Sneaker', 'Denim', 'Minimog', 'Vagabond',
    'Sunglasses', 'Beachwear'
  ];

  const toggleFilter = (category: keyof FilterState, value: string) => {
    setSelectedFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  return (
    <aside className="filter-sidebar">
      <h2 className="filter-title">Filters</h2>

      <FilterGroup title="Size">
        <div className="size-options">
          {sizeOptions.map(size => (
            <button
              key={size}
              className={`size-button ${selectedFilters.sizes.includes(size) ? 'active' : ''}`}
              onClick={() => toggleFilter('sizes', size)}
            >
              {size}
            </button>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Colors">
        <div className="color-options">
          {colorOptions.map((color, index) => (
            <button
              key={index}
              className={`color-swatch ${selectedFilters.colors.includes(color) ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => toggleFilter('colors', color)}
              aria-label={`Color ${color}`}
            />
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Prices">
        <div className="price-options">
          {priceRanges.map(range => (
            <label key={range.value} className="checkbox-label">
              <input
                type="checkbox"
                checked={selectedFilters.priceRanges.includes(range.value)}
                onChange={() => toggleFilter('priceRanges', range.value)}
              />
              <span>{range.label}</span>
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Brands" collapsible={true}>
        <div className="brand-options">
          {brands.map(brand => (
            <label key={brand} className="brand-link">
              {brand}
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Collections" collapsible={true}>
        <div className="collection-options">
          {collections.map(collection => (
            <label key={collection} className="collection-link">
              {collection}
            </label>
          ))}
        </div>
      </FilterGroup>

      <FilterGroup title="Tags">
        <div className="tag-options">
          {tags.map(tag => (
            <button
              key={tag}
              className={`tag-button ${selectedFilters.tags.includes(tag) ? 'active' : ''}`}
              onClick={() => toggleFilter('tags', tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </FilterGroup>
    </aside>
  );
};

export default FilterSidebar;