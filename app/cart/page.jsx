"use client";
import React, { useEffect, useState } from "react";
import Checkout from "../Components/add-to-cart/Checkout";
import useCart from "../hooks/useCart";

const Page = () => {
  const [responseData, setResponseData] = useState(null);
  const { cart, removeFromCart  } = useCart();
  const [coupon, setCoupon] = useState("MEGASALE");
  
  console.log("Cart Data : ",cart)
  const handleApplyCoupon = (couponCode) => {
    setCoupon(couponCode);
  };
  useEffect(() => {
    if (cart) {
      const formattedCartItems = cart.map(item => item.cart);
      const requestData = {
        coupon: `${coupon}-30`,
        cart_items: formattedCartItems,
      };

      fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/update-cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          setResponseData(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [coupon]);

  return (
    <div>
      <Checkout responseData={responseData} onApplyCoupon={handleApplyCoupon} />
    </div>
  );
};

export default Page;
