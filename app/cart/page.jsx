"use client";
import { useEffect, useState } from "react";
import Checkout from "../Components/add-to-cart/Checkout";
import useCart from "../hooks/useCart";

const Page = () => {
  
  const { cart } = useCart();
  const [responseData, setResponseData] = useState(null);
  const [coupons, setCoupons] = useState([]);
  const [coupon, setCoupon] = useState("MEGASALE");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const formattedCartItems = cart?.map((item) => item.cart);

  useEffect(() => {
    async function fetchCoupons() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/coupons`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );
        if (!response.ok) throw new Error("Failed to fetch coupons.");
        const data = await response.json();
        setCoupons(data);
      } catch (error) {
        console.error("Failed to fetch coupons:", error);
        setSnackbarMessage("Failed to fetch coupons.");
        setSnackbarOpen(true);
      }
    }
    fetchCoupons();
  }, []);

  const handleApplyCoupon = (couponCode) => {
    const isValidCoupon = coupons.some((c) => c.coupon === couponCode);
    if (isValidCoupon) {
      setSnackbarMessage("Coupon code applied successfully!");
      setCoupon(couponCode);
      setSnackbarOpen(true);
    } else {
      setSnackbarMessage("Invalid coupon code.");
      setSnackbarOpen(true);
    }
  };

  useEffect(() => {
    if (cart && cart.length > 0) {
      const requestData = {
        coupon: `${coupon}-30`,
        cart_items: formattedCartItems,
      };
      async function updateCart() {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/update-cart`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
              },
              body: JSON.stringify(requestData),
            }
          );
          if (!response.ok) throw new Error("Failed to update cart.");
          const data = await response.json();
          setResponseData(data);
        } catch (error) {
          console.error("Error updating cart:", error);
          setSnackbarMessage("Error updating cart.");
          setSnackbarOpen(true);
        }
      }
      updateCart();
    }
  }, [coupon, cart]); // Ensure dependencies are correctly listed

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
