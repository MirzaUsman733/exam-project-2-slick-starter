"use client";
import { useEffect, useState } from "react";
import Checkout from "../Components/add-to-cart/Checkout";
import useCart from "../hooks/useCart";

const Page = () => {
  const [responseData, setResponseData] = useState(null);
  const { cart } = useCart();
  const [coupons, setCoupons] = useState([]);
  const [coupon, setCoupon] = useState("MEGASALE");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const formattedCartItems = cart.map((item) => item.cart);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/coupons`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch coupons.');
        }
  
        const data = await response.json();
        console.log(data)
        setCoupons(data);
      } catch (error) {
        console.error("Failed to fetch coupons:", error);
        setSnackbarMessage("Failed to fetch coupons.");
        setSnackbarOpen(true);
      }
    };
  
    fetchCoupons();
  }, [coupon, cart]); // Make sure the dependencies are correct. They trigger the useEffect.
  

  const handleApplyCoupon = (couponCode) => {
    // Check if the coupon code exists in the fetched coupons list
    const isValidCoupon = coupons?.find((c) => c.coupon === couponCode);
    console.log(isValidCoupon)
    if (isValidCoupon) {
      setSnackbarMessage('Coupon code apply')
      setCoupon(couponCode);
    } else {
      setSnackbarMessage("Invalid coupon code.");
      setSnackbarOpen(true);
    }
  };


  useEffect(() => {
    const formattedCartItems = cart?.map((item) => item?.cart);
    if (cart) {
      console.log('cart:', cart)
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
  }, [coupon, cart]);
  return (
    <div>
      <Checkout
        formattedCartItems={formattedCartItems}
        responseData={responseData}
        onApplyCoupon={handleApplyCoupon}
        snackbarCouponOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
        snackbarCouponMessage={snackbarMessage}
      />
    </div>
  );
};

export default Page;
