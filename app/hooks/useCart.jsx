"use client";
import { useEffect, useState } from "react";

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
    setCart((prevCart) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.cart === item.cart
      );

      if (existingItemIndex > -1) {
        // If the item already exists, don't add it again
        console.log("Item already in the cart");
        return prevCart;
      } else {
        // If it's a new item, add it to the cart
        const newItem = {
          cart: item.cart,
          quantity: item.quantity, // Ensure you keep the quantity property
        };
        return [...prevCart, newItem];
      }
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemCartIdentifier) => {
    const itemPrefix =
      itemCartIdentifier.split("_").slice(0, 5).join("_") + "_";
    setCart((prevCart) => {
      return prevCart.filter((cartItem) => {
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
