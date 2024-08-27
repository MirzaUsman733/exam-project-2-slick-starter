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

  const handleAddToCartSuccess = () => {
    setNotificationMessage(
      "Your item was successfully added to the cart. Please see our cart."
    );
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
            <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center">
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
              {examCode} - {examTitle} - Questions Answers
            </h1>
            <div className="text-lg flex py-1">
              <span className="mr-3"> Exam Code: </span>{" "}
              <span className="font-semibold text-start">{examCode}</span>
            </div>
            <div className="text-lg flex py-1">
              <span className="mr-3"> Exam Provider Name: </span>
              <span className="font-semibold">
                <Link
                  href={examVendorPerma}
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
                  <span key={cert?.cert_id}>{cert.cert_name}, </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border rounded-2xl p-5">
            {examPrices?.map((item, index) => (
              <div
                key={item.type}
                className={`flex items-center justify-between py-2 text-lg 
                   ${
                     index !== examPrices.length - 1
                       ? //  "border-b border-blue-300"
                         ""
                       : ""
                   }
                `}
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
      <Notification message={notificationMessage} />
    </div>
  );
};

export default HeaderCard;
