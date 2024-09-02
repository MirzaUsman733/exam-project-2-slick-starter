"use client";
import useCart from "@/app/hooks/useCart";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Checkout = ({ formattedCartItems, responseData, onApplyCoupon }) => {
  const { removeFromCart } = useCart();
  const router = useRouter();
  const [couponCode, setCouponCode] = useState("MEGASALE");
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
  });
  const [ip, setIp] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");
  const calculateTotals = () => {
    const subtotal = responseData?.reduce(
      (acc, item) => acc + parseFloat(item.full_price),
      0
    );
    const discount = responseData?.reduce(
      (acc, item) =>
        acc + (parseFloat(item.full_price) - parseFloat(item.price)),
      0
    );
    const total = responseData?.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
    );
    return { subtotal, discount, total };
  };

  const totals = calculateTotals();

  const handleCouponSubmit = () => {
    if (couponCode.trim()) {
      onApplyCoupon(couponCode);
    }
  };

  const handleRemoveClick = (examId) => {
    removeFromCart(examId);
    window.location.reload();
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };
  const fetchIP = async () => {
    try {
      const response = await axios.get(`/api/my-ip`);
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };
  useEffect(() => {
    fetchIP();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: customerDetails.name,
      email: customerDetails.email,
      ip: ip,
      coupon: couponCode + "-30", // Adjust the coupon code if needed
      IsInvoice: false,
      invoice_perma: "",
      cart_items: formattedCartItems,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/payment`,
        payload,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setSnackbarMessage("Redrect to the Payment Page");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      router.push(response?.data?.redirect_link);
      // Redirect to payment gateway or display success message
    } catch (error) {
      console.error("Failed to Payment:", error);
      setSnackbarMessage("Failed to process payment.");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="p-6 border-b border-gray-300">
          <h1 className="text-2xl font-semibold text-gray-800">
            Complete Your Purchase
          </h1>
        </div>
        <div className="p-6">
          <section className="mb-5">
            <h2 className="text-xl text-gray-800">Order Summary</h2>
            {responseData &&
              responseData?.map((cartDetail) => (
                <div
                  key={cartDetail?.exam_id}
                  className="flex justify-between items-center py-3 border-b border-gray-300"
                >
                  <div className="flex gap-8 items-center">
                    <div>
                      <img
                        src="https://exam-hero.netlify.app/product2.png"
                        alt=""
                        className="h-28"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold">
                        {cartDetail.exam_vendor_title} - {cartDetail?.exam_code}{" "}
                        - {cartDetail?.exam_title}{" "}
                      </span>
                      <span className="text-lg font-semibold mb-1">
                        {" "}
                        {cartDetail.title}
                      </span>
                      <span className="text-sm text-gray-600">Quantity: 1</span>
                    </div>
                  </div>
                  <div className="text-lg text-end">
                    <div>
                      {/* Remove item button */}
                      <button
                        onClick={() => handleRemoveClick(cartDetail.cart)}
                        className="text-red-500 hover:text-red-700 font-bold px-2 mb-2 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <span className="inline-block mb-1"> 4.5 (155) </span>
                    <span className="flex gap-1 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fdd835"
                          d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                        ></path>
                        <path
                          fill="#ffff8d"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                        ></path>
                        <path
                          fill="#f4b400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fdd835"
                          d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                        ></path>
                        <path
                          fill="#ffff8d"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                        ></path>
                        <path
                          fill="#f4b400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fdd835"
                          d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                        ></path>
                        <path
                          fill="#ffff8d"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                        ></path>
                        <path
                          fill="#f4b400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fdd835"
                          d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                        ></path>
                        <path
                          fill="#ffff8d"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                        ></path>
                        <path
                          fill="#f4b400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 128 128"
                      >
                        <path
                          fill="#fdd835"
                          d="m68.05 7.23l13.46 30.7a7.05 7.05 0 0 0 5.82 4.19l32.79 2.94c3.71.54 5.19 5.09 2.5 7.71l-24.7 20.75c-2 1.68-2.91 4.32-2.36 6.87l7.18 33.61c.63 3.69-3.24 6.51-6.56 4.76L67.56 102a7.03 7.03 0 0 0-7.12 0l-28.62 16.75c-3.31 1.74-7.19-1.07-6.56-4.76l7.18-33.61c.54-2.55-.36-5.19-2.36-6.87L5.37 52.78c-2.68-2.61-1.2-7.17 2.5-7.71l32.79-2.94a7.05 7.05 0 0 0 5.82-4.19l13.46-30.7c1.67-3.36 6.45-3.36 8.11-.01"
                        ></path>
                        <path
                          fill="#ffff8d"
                          d="m67.07 39.77l-2.28-22.62c-.09-1.26-.35-3.42 1.67-3.42c1.6 0 2.47 3.33 2.47 3.33l6.84 18.16c2.58 6.91 1.52 9.28-.97 10.68c-2.86 1.6-7.08.35-7.73-6.13"
                        ></path>
                        <path
                          fill="#f4b400"
                          d="M95.28 71.51L114.9 56.2c.97-.81 2.72-2.1 1.32-3.57c-1.11-1.16-4.11.51-4.11.51l-17.17 6.71c-5.12 1.77-8.52 4.39-8.82 7.69c-.39 4.4 3.56 7.79 9.16 3.97"
                        ></path>
                      </svg>
                    </span>
                    <div>
                      <span>${cartDetail.price}</span>
                      <span>/</span>
                      <span className="text-red-700 text-sm">
                        ${cartDetail.full_price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            <p className="text-sm text-gray-600 mt-3">
              Discover advanced multicast protocols with this comprehensive
              guide, essential for network professionals.
            </p>
          </section>
          <section className="flex justify-between items-center my-5">
            <input
              type="text"
              placeholder="Enter Promo Code"
              className="input border px-3 py-2 rounded-md w-full max-w-xs"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleCouponSubmit}
            >
              Apply Code
            </button>
          </section>
          <section>
            <div className="flex justify-between py-2">
              <strong>Subtotal:</strong>
              <span>${totals.subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2">
              <strong>Discount:</strong>
              <span>{responseData && responseData[0]?.off}%</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <strong>Total:</strong>
              <span>${totals?.total?.toFixed(2)}</span>
            </div>
          </section>
        </div>
        <div className="p-6 border-t border-gray-300">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border px-3 py-2 rounded-md"
              value={customerDetails.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border px-3 py-2 rounded-md"
              value={customerDetails.email}
              onChange={handleInputChange}
            />
            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-sm text-gray-600">
                Accept Terms & Conditions
              </label>
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
