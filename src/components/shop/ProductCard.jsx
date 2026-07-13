import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

// CartContext va WishlistContext ni App.jsx dan import qilib bo'lmaydi
// (circular dependency), shuning uchun props orqali olamiz
export default function ProductCard({ product, onAddToCart, onToggleWishlist, isWishlisted }) {
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      {/* Rasm qismi */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Chegirma belgisi */}
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
            -{product.discount}%
          </span>
        )}

        {/* Sevimlilar tugmasi */}
        <button
          type="button"
          onClick={() => onToggleWishlist?.(product)}
          aria-label="Sevimlilarga qo'shish"
          className={`absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full shadow-sm transition-colors ${
            isWishlisted
              ? "bg-red-500 hover:bg-red-600"
              : "bg-white/90 hover:bg-white"
          }`}
        >
          <Heart
            size={16}
            className={isWishlisted ? "fill-white text-white" : "text-gray-500"}
          />
        </button>
      </div>

      {/* Matn qismi */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wide text-indigo-600">
            {product.brand}
          </span>
          <span className="text-xs text-gray-400">{product.category}</span>
        </div>

        <h3 className="text-sm font-semibold text-gray-900 leading-snug">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Star size={13} className="fill-yellow-400 text-yellow-400" />
          <span className="font-medium text-gray-700">{product.rating}</span>
          <span>({product.reviews.toLocaleString()})</span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
