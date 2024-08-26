import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className={`mx-1 px-3 py-1 rounded ${
          filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button
        className={`mx-1 px-3 py-1 rounded ${
          filter === 'active' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button
        className={`mx-1 px-3 py-1 rounded ${
          filter === 'completed' ? 'bg-blue-500 text-white' : 'bg-gray-200'
        }`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterButtons;