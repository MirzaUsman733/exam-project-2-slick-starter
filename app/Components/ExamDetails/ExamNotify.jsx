import React, { useState } from "react";

const ExamNotify = ({ examCode, examTitle, examId }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNotify = async () => {
    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/email-notification`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
          body: JSON.stringify({
            email: email,
            exam_id: examId,
          }),
        }
      );
      if (response.ok) {
        const responseMessage = await response.json();
        setMessage(responseMessage?.message);
        setEmail(""); // Clear email input field
      } else {
        const errorData = await response.json();
        setMessage(
          errorData.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setMessage("Failed to send notification. Please try again later.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="p-6 bg-white rounded-xl w-full shadow-lg border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Get Notified When{" "}
            <span className="font-black">
              {examCode} ({examTitle})
            </span>{" "}
            Available!
          </h2>
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-inner">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <button
              onClick={handleNotify}
              className="ml-4 bg-blue-500 text-white font-medium px-5 py-2 rounded-full hover:bg-blue-600 transition duration-200"
            >
              Notify Me
            </button>
          </div>
          {message && <p className="text-md text-green-500 mt-4">{message}</p>}
          <p className="text-xs text-gray-400 mt-2">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </div>
    </>
  );
};

export default ExamNotify;
