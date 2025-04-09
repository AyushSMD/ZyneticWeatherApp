import React from 'react';

function Navbar({ history, onHistoryClick }) {
  if (!history.length) return null;

  return (
    <div className="mb-4 text-sm text-gray-600 dark:text-gray-300 w-129 mx-auto">
      <p className="font-medium mb-1 text-center pb-7">Recent Searches:</p>
      <div className="flex gap-2 flex-wrap justify-between px-3">
        {history.map((city, i) => (
          <button
            key={i}
            onClick={() => onHistoryClick(city)}
            className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
