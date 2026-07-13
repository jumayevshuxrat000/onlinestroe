import React from "react";

// Chap tomondagi filtr paneli: kategoriya, narx oralig'i, reyting
export default function ShopSidebar({
  categories,
  activeCategory,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedRating,
  onRatingChange,
}) {
  const ratingOptions = [5, 4, 3];

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      {/* Kategoriyalar */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Categories</h3>
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category}>
              <button
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`w-full text-left px-3 py-1.5 rounded-lg text-sm transition-colors ${
                  activeCategory === category
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Narx oralig'i */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Price Range</h3>
        <input
          type="range"
          min={100}
          max={10000}
          step={50}
          value={priceRange}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full accent-indigo-600"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$100</span>
          <span className="font-medium text-gray-700">${priceRange.toLocaleString()}</span>
        </div>
      </div>

      {/* Reyting */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Rating</h3>
        <ul className="space-y-2">
          {ratingOptions.map((stars) => (
            <li key={stars} className="flex items-center gap-2">
              <input
                id={`rating-${stars}`}
                type="checkbox"
                checked={selectedRating === stars}
                onChange={() =>
                  onRatingChange(selectedRating === stars ? null : stars)
                }
                className="accent-indigo-600 w-4 h-4"
              />
              <label htmlFor={`rating-${stars}`} className="text-sm text-gray-600">
                {"★".repeat(stars)}
                {"☆".repeat(5 - stars)} & up
              </label>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
