"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import AddToCartButton from "../add-to-cart/AddToCartButton";
import Notification from "../add-to-cart/Notification";

const HeaderCard = ({
  examPerma,
  examTitle,
  examCode,
  lastUpdate,
  examQuestions,
  examVendorTitle,
  examVendorPerma,
  examPrices,
  examCerts,
  examRetired,
  examAlternate,
}) => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
  const [downloadLinks, setDownloadLinks] = useState([]);

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
    setIsEmailSubmitted(false);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/demo`,
          {
            email,
            exam_perma: examPerma,
          },
          {
            headers: {
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
        );

        if (response && response.data) {
          setIsEmailSubmitted(true);
          setDownloadLinks(response.data);
          alert(`Email ${email} submitted successfully!`);
        } else {
          alert("Failed to submit email. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting email:", error);
        alert("An error occurred. Please try again.");
      }
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-base text-left md:text-3xl font-bold md:hidden block md:mb-5">
        {examVendorTitle} {examCode} - {examTitle}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 md:gap-10">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex justify-center my-4">
            <img
              src="/PDF-TE.png"
              alt="Dumps Collection"
              className="sm:w-3/12 md:w-4/12 lg:w-6/12 md:mb-2 mt-3 md:mt-0 h-20 md:h-52 lg:h-44 xl:h-52 "
            />
          </div>

          <p className="text-center text-sm md:text-lg font-bold mb-3 md:mb-5">
            {examQuestions} Questions Answers with Explanation
          </p>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleDownloadDemoClick}
              className="bg-blue-600 text-white text-sm md:text-base px-4 py-2 rounded flex items-center"
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
            <h1 className="text-3xl font-semibold hidden md:block mb-5">
              {examVendorTitle} {examCode} - {examTitle} - Questions Answers
            </h1>
            <div className="text-sm md:text-lg flex py-1">
              <span className="mr-3"> Exam Code: </span>{" "}
              <span className="font-semibold text-start">{examCode}</span>
            </div>
            <div className="text-sm md:text-lg flex py-1">
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
            <div className="text-sm md:text-lg flex py-1">
              <div className="mr-3">Last Update: </div>{" "}
              <div> {lastUpdate} </div>{" "}
            </div>
            <div className="text-sm md:text-lg flex py-1">
              <div className="mr-3 text-nowrap">Exam Certifications:</div>
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

          <div className="bg-blue-50 border rounded-2xl p-2 md:p-5">
            {examPrices?.map((item, index) => (
              <div
                key={item.type}
                className="flex items-center justify-between flex-wrap py-2 text-lg border-b border-gray-300 last:border-b-0"
              >
                <div className="flex flex-wrap justify-between w-full md:w-auto md:justify-normal gap-2 md:gap-2 lg:gap-3 items-center mb-1 md:mb-0 ">
                  <p className="font-semibold text-sm md:text-md whitespace-nowrap">
                    {item.title}
                  </p>
                  <div
                    className={`bg-gray-100 py-1 text-xs md:text-sm font-bold ${
                      item.off >= 70
                        ? "text-red-800 bg-red-200 rounded-full px-1 md:px-2"
                        : "text-blue-500 bg-blue-200 rounded-full px-1 md:px-2"
                    }`}
                  >
                    {item.off}% Off
                  </div>
                </div>
                <div className="w-full md:w-auto flex items-center justify-between md:justify-normal">
                  <p className="text-blue-600 font-bold mr-2">${item.price}</p>
                  <p className="text-red-600 text-xs line-through">
                    ${item.full_price}
                  </p>
                  <div className="bg-green-500 text-white text-xs px-2 md:px-3 lg:px-4 py-2 ml-2 md:ml-3 lg:ml-4 rounded">
                    <AddToCartButton
                      text={"ADD TO CART"}
                      item={item}
                      onAddToCart={handleAddToCartSuccess}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-red-700 mt-2 text-md font-semibold">
            {examRetired && (
              <div className="flex flex-col">
                <span>
                  <span className="font-bold">Exam Code:</span> {examCode}{" "}
                  (Microsoft Azure Architect Design)
                </span>
                <span className="mt-1">
                  This exam will not receive any new updates.
                </span>
                <span className="mt-2">
                  <span className="font-bold">New Exam Code:</span>{" "}
                  <Link
                    href={`/mock-exam/${examVendorPerma}/${examAlternate?.exam_alternate_perma}`}
                    className="text-blue-500 underline hover:text-blue-700"
                    rel="noopener noreferrer"
                  >
                    {examAlternate?.exam_alternate_code}
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gradient-to-r from-white to-blue-100 p-8 rounded-xl shadow-2xl max-w-lg w-full relative">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">
              Get Download Demo
            </h2>
            {!isEmailSubmitted ? (
              <>
                <p className="mb-6 text-center text-gray-700">
                  Please enter your email to receive the demo download link.
                </p>
                <form onSubmit={handleEmailSubmit} className="mb-6">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-blue-400 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-lg w-full mb-4 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex justify-center items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"
                      ></path>
                    </svg>
                    <span>Get Demo Downloads</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="space-y-4">
                {downloadLinks.map((link, index) => (
                  <a
                    key={index}
                    href={`${process.env.NEXT_PUBLIC_API_BASE_URL}${link.link}`}
                    download
                    className={`bg-green-500 text-white px-4 py-3 rounded-lg w-full hover:bg-green-600 transition-all duration-300 flex justify-center items-center gap-2`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"
                      ></path>
                    </svg>
                    <span>Download {link.type.toUpperCase()} Demo</span>
                  </a>
                ))}
              </div>
            )}
            <div className="flex justify-between items-center mt-5">
              <ul className="space-y-3 text-gray-800">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 mr-3"
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
                    className="w-6 h-6 text-blue-500 mr-3"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 15l-5.5-5.5 1.414-1.414L10 12.172l8.086-8.086L19.5 5.5z" />
                  </svg>
                  Hassle-Free Refund
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-500 mr-3"
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
                    className="w-6 h-6 text-blue-500 mr-3"
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
                    className="w-6 h-6 text-blue-500 mr-3"
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
              className="absolute top-4 right-4 text-blue-600 underline hover:text-blue-800 transition-all duration-300"
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
        </div>
      )}

      <Notification message={notificationMessage} />
    </div>
  );
};

export default HeaderCard;
