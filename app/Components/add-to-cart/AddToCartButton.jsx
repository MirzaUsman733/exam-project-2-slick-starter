'use client'
import useCart from "@/app/hooks/useCart";
import React from "react";

const AddToCartButton = ({ item, onAddToCart  }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(item); 
    onAddToCart(); 
    window.location.reload();
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-green-500 text-white text-xs px-2 md:px-3 lg:px-4 py-2 ml-2 md:ml-3 lg:ml-4 rounded"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;
