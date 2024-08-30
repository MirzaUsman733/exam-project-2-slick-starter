"use client";
import useCart from "@/app/hooks/useCart";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const CartIcon = () => {
  const [cartItems, setCartItems] = useState(0);
  const { cart } = useCart();
  useEffect(() => {
   setCartItems(cart.length)
  }, [cart]);

  return (
    <Link href="/cart" className="mr-8 relative group inline-flex items-center">
      <span className="text-gray-700 group-hover:text-blue-500">
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.3334 8.16667V4.83333C11.3334 2.99238 9.84099 1.5 8.00004 1.5C6.15909 1.5 4.66671 2.99238 4.66671 4.83333V8.16667M2.16671 6.5H13.8334L14.6667 16.5H1.33337L2.16671 6.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </span>
      {cartItems ? (
        <span className="-ml-2 absolute top-0 -right-2 flex items-center justify-center h-4 w-4 p-1 border-2 border-blueGray-800 bg-blue-500 group-hover:bg-blue-500 rounded-full">
          <span className="text-[10px] font-bold text-white">{cartItems}</span>
        </span>
      ) : (
        ""
      )}
    </Link>
  );
};

export default CartIcon;
