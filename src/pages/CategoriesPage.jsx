import React from "react";
import CategoryCard from "../components/categories/CategoryCard";
import Footer from "../components/Footer";
import { categoriesData } from "../data/categoriesData";

// "Categories" sahifasi - barcha kategoriyalarni ko'rsatadi
// onCategorySelect(categoryName) - kartochka bosilganda App.jsx ga xabar beradi
export default function CategoriesPage({ onCategorySelect }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Sarlavha qismi */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Browse
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            All Categories
          </h1>
          <p className="text-sm text-gray-500 mt-3 max-w-md mx-auto">
            Discover our curated collection of premium products across all
            lifestyle categories.
          </p>
        </div>

        {/* Kategoriyalar grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categoriesData.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onSelect={onCategorySelect}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
