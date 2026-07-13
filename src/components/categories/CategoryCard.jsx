import React from "react";

// Bitta kategoriya kartochkasi. Bosilganda onSelect orqali
// tanlangan kategoriya nomini yuqoriga (App) uzatadi.
export default function CategoryCard({ category, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(category.name)}
      className="group relative rounded-2xl overflow-hidden aspect-[4/3] text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <img
        src={category.image}
        alt={category.name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Pastdan tepaga qorong'ilashuvchi qatlam - matn o'qilishi uchun */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="text-white font-semibold text-lg">{category.name}</h3>
        <p className="text-white/80 text-sm">
          {category.count.toLocaleString()} products
        </p>
      </div>
    </button>
  );
}
