"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const CustomInvoiceComponent = ({ customInvoicePerma, responseData }) => {
  const router = useRouter();
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
  });
  const [ip, setIp] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prev) => ({ ...prev, [name]: value }));
  };
  const fetchIP = async () => {
    try {
      const response = await axios.get(
        `/api/my-ip`,
      );
      setIp(response.data);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };
  useEffect(() => {
    fetchIP();
  }, []);
  const formattedCartItems = responseData?.invoice_items?.map((item) => item.cart);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: customerDetails.name,
      email: customerDetails.email,
      ip: ip,
      coupon: "", // Adjust the coupon code if needed
      IsInvoice: true,
      invoice_perma: customInvoicePerma,
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
        <div className="p-6 border-b border-gray-300 flex justify-between">
          <h1 className="text-2xl font-semibold text-gray-800">
            Complete Your Purchase
          </h1>
          <div>
            <div className="bg-yellow-500 py-1 px-2 text-white  rounded-lg">{responseData?.invoice_paid === true ? 'Paid': 'UnPaid' }</div>
          </div>
        </div>
        <div className="p-6">
          <section className="mb-5">
            <h2 className="text-xl text-gray-800">Order Summary</h2>
            {responseData &&
              responseData?.invoice_items?.map((cartDetail) => (
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
                        {cartDetail.title} - {cartDetail?.sub_title}{" "}
                        - {cartDetail?.exam_title}{" "}
                      </span>
                      <span className="text-lg font-semibold mb-1">
                        {" "}
                        {cartDetail?.type}
                      </span>
                      <span className="text-sm text-gray-600">Quantity: 1</span>
                    </div>
                  </div>
                  <div className="text-lg text-end">
                    <div>
                      <span>${cartDetail.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            <p className="text-sm text-gray-600 mt-3">
              Discover advanced multicast protocols with this comprehensive
              guide, essential for network professionals.
            </p>
          </section>
          <section>
            <div className="flex justify-between py-2">
              <strong>Subtotal:</strong>
              <span>${responseData.invoice_sub_total}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <strong>Total:</strong>
              <span>${responseData?.invoice_total}</span>
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

export default CustomInvoiceComponent;
