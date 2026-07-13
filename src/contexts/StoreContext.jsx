import { createContext, useContext, useMemo, useState } from "react";

/* ============================================================
   SAVAT (CART) TIZIMI
   ============================================================ */
const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  function addItem(product, qty = 1) {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { ...product, qty }];
    });
    setToast(`${product.name} savatga qo'shildi`);
    window.clearTimeout(addItem._t);
    addItem._t = window.setTimeout(() => setToast(""), 2200);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id, qty) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, qty) } : i))
    );
  }

  function clearCart() {
    setItems([]);
  }

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQty,
      clearCart,
      totalCount,
      subtotal,
      isOpen,
      toast,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }),
    [items, isOpen, toast]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart faqat <CartProvider> ichida ishlaydi");
  return ctx;
}

/* ============================================================
   SEVIMLILAR (WISHLIST) TIZIMI
   ============================================================ */
const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState("");

  function addItem(product) {
    setItems((prev) => {
      if (prev.find((i) => i.id === product.id)) return prev;
      return [...prev, product];
    });
    setToast(`${product.name} sevimlilarga qo'shildi`);
    window.clearTimeout(addItem._t);
    addItem._t = window.setTimeout(() => setToast(""), 2200);
  }

  function removeItem(id) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function isInWishlist(id) {
    return items.some((i) => i.id === id);
  }

  function toggleItem(product) {
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  }

  const totalCount = items.length;

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      isInWishlist,
      toggleItem,
      totalCount,
      isOpen,
      toast,
      openWishlist: () => setIsOpen(true),
      closeWishlist: () => setIsOpen(false),
    }),
    [items, isOpen, toast]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist faqat <WishlistProvider> ichida ishlaydi");
  return ctx;
}
