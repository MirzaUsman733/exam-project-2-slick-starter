"use client";
import { useState, useEffect } from "react";

function useCart() {
  // Initialize the cart as an empty array if no cart is stored in local storage
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  // Use useEffect to update local storage whenever the cart changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (cart.length > 0) {
        localStorage.setItem("cart", JSON.stringify(cart));
      } else {
        localStorage.removeItem("cart");
      }
    }
  }, [cart]);

  // Function to add items to the cart
  const addToCart = (item) => {
    const newItem = {
      cart: item.cart,
    };
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.cart === item.cart
      );
      if (existingItemIndex > -1) {
        // If the item exists, update the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        // Add new item to the cart
        return [...prevCart, newItem];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemCartIdentifier) => {
    const itemPrefix =
      itemCartIdentifier.split("_").slice(0, 5).join("_") + "_";
    console.log(itemPrefix);
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => {
        console.log(
          "CArt Item Cart : ",
          cartItem.cart.split("_").slice(0, 5).join("_") + "_"
        );
        return (
          cartItem.cart.split("_").slice(0, 5).join("_") + "_" !== itemPrefix
        );
      });
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
}

export default useCart;
