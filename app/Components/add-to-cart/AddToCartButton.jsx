"use client";
import useCart from "@/app/hooks/useCart";

const AddToCartButton = ({ item, onAddToCart, text }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    onAddToCart();
    window.location.reload();
  };

  return (
    <button
      onClick={handleAddToCart}
    >
      {text}
    </button>
  );
};

export default AddToCartButton;
