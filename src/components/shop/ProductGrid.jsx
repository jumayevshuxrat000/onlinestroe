import React from "react";
import ProductCard from "./ProductCard";

// Mahsulotlarni grid ko'rinishida chizadi
export default function ProductGrid({ products, onAddToCart, onToggleWishlist, isInWishlist }) {
  if (!products.length) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center text-gray-500">
        <p className="text-lg font-medium">Mahsulot topilmadi</p>
        <p className="text-sm">Filtrlarni o'zgartirib qayta urinib ko'ring</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleWishlist={onToggleWishlist}
          isWishlisted={isInWishlist?.(product.id)}
        />
      ))}
    </div>
  );
}
