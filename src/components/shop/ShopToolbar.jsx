import React from "react";
import { Grid2X2, List } from "lucide-react";

// "Shop All" sarlavha qatori: mahsulotlar soni, saralash va grid/list almashtirgich
export default function ShopToolbar({
  totalCount,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Shop All</h1>
        <p className="text-sm text-indigo-600 font-medium mt-1">
          {totalCount} products found
        </p>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>

        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => onViewModeChange("grid")}
            aria-label="Grid ko'rinish"
            className={`p-2 ${
              viewMode === "grid" ? "bg-indigo-600 text-white" : "bg-white text-gray-500"
            }`}
          >
            <Grid2X2 size={16} />
          </button>
          <button
            type="button"
            onClick={() => onViewModeChange("list")}
            aria-label="Ro'yxat ko'rinish"
            className={`p-2 ${
              viewMode === "list" ? "bg-indigo-600 text-white" : "bg-white text-gray-500"
            }`}
          >
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
