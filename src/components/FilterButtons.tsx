// FilterButtons.tsx

import React from "react";

interface FilterButtonsProps {
  categories: string[];
  onFilterChange: (category: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  onFilterChange,
}) => {
  return (
    <div className="flex justify-center my-4 bg-slate-500">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onFilterChange(category)}
          className="mx-2 px-4 py-2 bg-salmon text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
