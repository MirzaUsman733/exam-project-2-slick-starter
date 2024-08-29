"use client";
import React, { useState } from "react";
import Link from "next/link";
import AddToCartButton from "../add-to-cart/AddToCartButton";
import Notification from "../add-to-cart/Notification";

const HeaderCard = ({
  examTitle,
  examCode,
  lastUpdate,
  examQuestions,
  examVendorTitle,
  examVendorPerma,
  examPrices,
  examCerts,
}) => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleAddToCartSuccess = () => {
    setNotificationMessage(
      "Your item was successfully added to the cart. Please see our cart."
    );
  };

  const handleDownloadDemoClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEmail("");
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here (e.g., API call)
    handleModalClose();
    alert(`Email ${email} submitted successfully!`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex justify-center mb-4">
            <img
              src="https://exam-hero.netlify.app/product2.png"
              alt="Marks4Sure"
              className="w-80 h-96"
            />
          </div>

          <p className="text-center text-lg font-bold mb-5">
            {examQuestions} Questions Answers with Explanation
          </p>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleDownloadDemoClick}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center"
            >
              <span className="mr-2">DOWNLOAD DEMO</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.75 9.75l7.5 7.5 7.5-7.5M12 2.25v15.75"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="col-span-1 lg:col-span-3">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-5">
              {examVendorTitle} - {examCode} - {examTitle} - Questions Answers
            </h1>
            <div className="text-lg flex py-1">
              <span className="mr-3"> Exam Code: </span>{" "}
              <span className="font-semibold text-start">{examCode}</span>
            </div>
            <div className="text-lg flex py-1">
              <span className="mr-3"> Exam Provider Name: </span>
              <span className="font-semibold">
                <Link
                  href={`/mock-exam-provider/${examVendorPerma}`}
                  className="text-blue-600 underline"
                >
                  {examVendorTitle}
                </Link>
              </span>
            </div>
            <div className="text-lg flex py-1">
              <div className="mr-3">Last Update: </div>{" "}
              <div> {lastUpdate} </div>{" "}
            </div>
            <div className="text-lg flex py-1">
              <div className="mr-3">Exam Certifications:</div>
              <div>
                {examCerts?.map((cert) => (
                  <Link
                    className="text-blue-600 underline font-semibold hover:text-blue-700"
                    key={cert?.cert_id}
                    href={`/mock-exam-certification/${examVendorPerma}/${cert?.cert_perma}`}
                  >
                    <span>{cert.cert_name},</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border rounded-2xl p-5">
            {examPrices?.map((item, index) => (
              <div
                key={item.type}
                className={`flex items-center justify-between py-2 text-lg ${
                  index !== examPrices.length - 1 ? "" : ""
                }`}
              >
                <div className="flex gap-1 md:gap-2 lg:gap-3 items-center">
                  <p className="font-semibold text-sm md:text-md">
                    {item.title}
                  </p>
                  <div
                    className={`bg-gray-100 py-1 text-xs md:text-sm font-bold ${
                      item.off >= 70
                        ? "text-red-800 bg-red-200 rounded-3xl px-1 md:px-2"
                        : "text-blue-500 bg-blue-200 rounded-3xl px-1 md:px-2"
                    } `}
                  >
                    {item.off}% Off
                  </div>
                </div>
                <div className="flex items-center">
                  <p className="text-blue-600 font-bold mr-2">${item.price}</p>
                  <p className="text-red-600 text-xs align-super line-through">
                    ${item.full_price}
                  </p>
                  <AddToCartButton
                    item={item}
                    onAddToCart={handleAddToCartSuccess}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <h2 className="text-2xl font-semibold mb-4 text-center">Download Demo</h2>
            <p className="mb-4 text-center">
              Please enter your email to receive the demo download link.
            </p>
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded mb-4"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                Submit
              </button>
            </form>

            <div className="mt-6">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l-5.5-5.5 1.414-1.414L10 12.172l8.086-8.086L19.5 5.5z" />
                  </svg>
                  High Success Rate
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l-5.5-5.5 1.414-1.414L10 12.172l8.086-8.086L19.5 5.5z" />
                  </svg>
                  Hassle Free Refund
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l-5.5-5.5 1.414-1.414L10 12.172l8.086-8.086L19.5 5.5z" />
                    </svg>
                  Instant Downloads
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l-5.5-5.5 1.414-1.414L10 12.172l8.086-8.086L19.5 5.5z" />
                  </svg>
                  Free Quick Updates
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-5 h-5 text-green-500 mr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l-5.5-5.5 1.414-1.414L10 12.172l8.086-8.086L19.5 5.5z" />
                  </svg>
                  Secure Shopping
                </li>
              </ul>
            </div>

            <button
              onClick={handleModalClose}
              className="mt-6 text-blue-600 underline absolute top-4 right-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Notification message={notificationMessage} />
    </div>
  );
};

export default HeaderCard;
