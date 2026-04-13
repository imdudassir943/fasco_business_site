import React, { useState, type ReactNode } from 'react';

interface FilterGroupProps {
  title: string;
  children: ReactNode;
  collapsible?: boolean;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ title, children, collapsible = false }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="filter-group mb-8">
      <div 
        className={`filter-group-header flex items-center justify-between mb-4 ${collapsible ? 'cursor-pointer' : ''}`}
        onClick={() => collapsible && setIsOpen(!isOpen)}
      >
        <h3 className="font-serif text-lg font-semibold text-gray-900">{title}</h3>
        {collapsible && (
          <span className="text-gray-500">
            {isOpen ? (
               <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                 <path d="M1 6.5L6 1.5L11 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            ) : (
               <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                 <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            )}
          </span>
        )}
      </div>
      {(isOpen || !collapsible) && (
        <div className="filter-group-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterGroup;
