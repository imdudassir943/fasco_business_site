import React from 'react';

interface ListingHeaderProps {
  viewMode: string;
  setViewMode: (mode: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({ viewMode, setViewMode, sortBy, setSortBy }) => {
  return (
    <div className="listing-header">
      <div className="sort-section">
        <select 
          className="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="best-selling">Best selling</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="newest">Newest</option>
          <option value="featured">Featured</option>
        </select>
      </div>

      <div className="view-mode-controls">
        <button
          className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
          aria-label="List view"
          title="List view"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="3" width="16" height="2" fill="currentColor"/>
            <rect x="1" y="8" width="16" height="2" fill="currentColor"/>
            <rect x="1" y="13" width="16" height="2" fill="currentColor"/>
          </svg>
        </button>

        <button
          className={`view-mode-btn ${viewMode === 'grid-2' ? 'active' : ''}`}
          onClick={() => setViewMode('grid-2')}
          aria-label="2 column grid"
          title="2 columns"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="7" height="7" fill="currentColor"/>
            <rect x="10" y="1" width="7" height="7" fill="currentColor"/>
            <rect x="1" y="10" width="7" height="7" fill="currentColor"/>
            <rect x="10" y="10" width="7" height="7" fill="currentColor"/>
          </svg>
        </button>

        <button
          className={`view-mode-btn ${viewMode === 'grid-3' ? 'active' : ''}`}
          onClick={() => setViewMode('grid-3')}
          aria-label="3 column grid"
          title="3 columns"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="6.75" y="1" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="12.5" y="1" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="1" y="6.75" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="6.75" y="6.75" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="12.5" y="6.75" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="1" y="12.5" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="6.75" y="12.5" width="4.5" height="4.5" fill="currentColor"/>
            <rect x="12.5" y="12.5" width="4.5" height="4.5" fill="currentColor"/>
          </svg>
        </button>

        <button
          className={`view-mode-btn ${viewMode === 'grid-4' ? 'active' : ''}`}
          onClick={() => setViewMode('grid-4')}
          aria-label="4 column grid"
          title="4 columns"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="5.5" y="1" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="10" y="1" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="14.5" y="1" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="1" y="5.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="5.5" y="5.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="10" y="5.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="14.5" y="5.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="1" y="10" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="5.5" y="10" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="10" y="10" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="14.5" y="10" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="1" y="14.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="5.5" y="14.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="10" y="14.5" width="3.5" height="3.5" fill="currentColor"/>
            <rect x="14.5" y="14.5" width="3.5" height="3.5" fill="currentColor"/>
          </svg>
        </button>

        <button
          className={`view-mode-btn ${viewMode === 'grid-5' ? 'active' : ''}`}
          onClick={() => setViewMode('grid-5')}
          aria-label="5 column grid"
          title="5 columns"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="1" y="1" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="4.6" y="1" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="8.2" y="1" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="11.8" y="1" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="15.4" y="1" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="1" y="4.6" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="4.6" y="4.6" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="8.2" y="4.6" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="11.8" y="4.6" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="15.4" y="4.6" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="1" y="8.2" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="4.6" y="8.2" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="8.2" y="8.2" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="11.8" y="8.2" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="15.4" y="8.2" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="1" y="11.8" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="4.6" y="11.8" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="8.2" y="11.8" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="11.8" y="11.8" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="15.4" y="11.8" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="1" y="15.4" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="4.6" y="15.4" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="8.2" y="15.4" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="11.8" y="15.4" width="2.6" height="2.6" fill="currentColor"/>
            <rect x="15.4" y="15.4" width="2.6" height="2.6" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ListingHeader;