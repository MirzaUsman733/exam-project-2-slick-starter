"use client";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const Invoices = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const fetchData = async () => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      if (!loginResponse?._token) {
        router.push("/login");
        return;
      }
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/invoices`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchInvoiceDetails = async (invoiceId) => {
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/invoice/${invoiceId}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setSelectedInvoice(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error fetching invoice details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Your Invoices
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from(Array(5)).map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow-md animate-pulse"
              >
                <div className="h-24 bg-gray-200 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))
          : data.map((item) => (
              <div
                key={item.invoice_id}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 cursor-pointer"
                onClick={() => fetchInvoiceDetails(item.invoice_id)}
              >
                <div className="flex flex-col justify-between h-full">
                  <div className="flex justify-between">
                    <div className="text-xl font-bold text-indigo-600 hover:text-indigo-800">
                      Invoice #{item.invoice_id}
                    </div>
                    <button
                      className={`px-5 py-1 text-sm font-medium rounded-full ${
                        item.invoice_paid
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {item.invoice_paid ? "Paid" : "Unpaid"}
                    </button>
                  </div>
                  <div className="mt-5 flex justify-between">
                    <div className="text-xl font-semibold text-gray-800">
                      ${item.invoice_amount.toFixed(2)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {moment(item.invoice_date).format(
                        "MMM DD, YYYY | hh:mm A"
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {showPopup && selectedInvoice && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 p-8 rounded-xl shadow-3xl w-full max-w-3xl">
            <div className="flex justify-between items-center mb-5 ">
              <h2 className="text-3xl font-bold text-gray-900">
                Invoice Details
              </h2>
              <button
                className="text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                onClick={() => setShowPopup(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-gray-800">
                  Invoice #{selectedInvoice.invoice_id}
                </div>
                <div
                  className={`px-4 py-1 text-sm font-medium rounded-full ${
                    selectedInvoice.invoice_paid
                      ? "bg-green-300 text-green-800"
                      : "bg-red-300 text-red-800"
                  }`}
                >
                  {selectedInvoice.invoice_paid ? "Paid" : "Unpaid"}
                </div>
              </div>
              <div className="text-lg text-gray-600 mb-2">
                {moment(selectedInvoice.invoice_date).format(
                  "MMM DD, YYYY | hh:mm A"
                )}
              </div>
              <div className="text-3xl font-extrabold text-gray-900 mb-4">
                ${selectedInvoice.invoice_amount.toFixed(2)}
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Products
            </h3>
            <ul className="space-y-4">
              {selectedInvoice.invoice_products.map((product) => (
                <li
                  key={product.title}
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-200"
                >
                  <div className="flex justify-between">
                    <div className="text-xl font-bold text-gray-800">
                      {product.title}
                    </div>
                    <p className="text-sm mb-2 text-blue-500 font-bold ">
                      {product.description}
                    </p>
                  </div>
                  <div className="text-lg text-gray-700 mb-2">
                    {product.name}
                  </div>
                  <div className="text-xl font-semibold text-gray-900">
                    ${product.amount.toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex justify-center">
              <button
                className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                onClick={() => setShowPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Invoices;
