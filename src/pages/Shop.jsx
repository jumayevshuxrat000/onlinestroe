import React, { useMemo, useState } from "react";
import ShopSidebar from "../components/shop/ShopSidebar";
import ShopToolbar from "../components/shop/ShopToolbar";
import ProductGrid from "../components/shop/ProductGrid";
import Footer from "../components/Footer";
import { products, categories } from "../data/products";
import { useCart, useWishlist } from "../contexts/StoreContext";

// Do'kon (Shop) sahifasi: filtr + sort + mahsulotlar grid
// initialCategory - Categories sahifasidan tanlab kelingan kategoriya (ixtiyoriy)
export default function Shop({ initialCategory = "All" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState(10000);
  const [selectedRating, setSelectedRating] = useState(null);
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const { addItem } = useCart();
  const { toggleItem, isInWishlist } = useWishlist();

  // Filtr va saralash mantiqi
  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory;
      const matchesPrice = product.price <= priceRange;
      const matchesRating = selectedRating
        ? product.rating >= selectedRating
        : true;
      return matchesCategory && matchesPrice && matchesRating;
    });

    switch (sortBy) {
      case "price-asc":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
      default:
        break; // "featured" - asl tartibda qoladi
    }

    return result;
  }, [activeCategory, priceRange, selectedRating, sortBy]);

  const handleAddToCart = (product) => {
    addItem(product);
  };

  const handleToggleWishlist = (product) => {
    toggleItem(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <ShopSidebar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            selectedRating={selectedRating}
            onRatingChange={setSelectedRating}
          />

          <div className="flex-1">
            <ShopToolbar
              totalCount={filteredProducts.length}
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />

            <ProductGrid
              products={filteredProducts}
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              isInWishlist={isInWishlist}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
