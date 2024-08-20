"use client"
import { useState, useEffect } from "react";

function useCart() {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : null;
}});

  useEffect(() => {
      if (typeof window !== "undefined") {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
}
  }, [cart]);

  const addToCart = (item) => {
    setCart(item);
  };

  const clearCart = () => {
    setCart(null);
  };

  return {
    cart,
    addToCart,
    clearCart,
  };
}

export default useCart;
