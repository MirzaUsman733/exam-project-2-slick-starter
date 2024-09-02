"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SendComment(examPerma) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [ip, setIp] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

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

  const handleRecaptcha = (token) => {
    setIsRecaptchaVerified(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = JSON.stringify({
      name: name,
      comment: comment,
      email: email,
      ip: ip,
    });
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/exam_comment/${examPerma}`,
      headers: {
        "x-api-key": process?.env?.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json",
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      setName("");
      setEmail("");
      setComment("");
      setIsRecaptchaVerified(false);
      window.grecaptcha.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto p-6 mb-5">
      <div className="border shadow-xl rounded-xl overflow-hidden">
        <div className="w-full mx-auto bg-gradient-to-r from-blue-500 to-blue-500 p-5">
          <h2 className="text-3xl font-semibold text-white text-center">
            Leave a Comment
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4 bg-white">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 flex items-center"
              >
                <i className="fas fa-user mr-2"></i> Name:
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 flex items-center"
              >
                <i className="fas fa-envelope mr-2"></i> Email:
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md shadow-sm transition duration-200 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="comment"
              className="block text-sm font-semibold text-gray-700"
            >
              <i className="fas fa-comment-alt mr-2"></i> Comment:
            </label>
            <textarea
              id="comment"
              placeholder="Enter your comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md min-h-[150px] shadow-sm transition duration-200 ease-in-out transform"
            />
          </div>
          <div className="flex justify-between items-center">
            <div
              className="g-recaptcha"
              data-sitekey="your-site-key"
              data-callback={handleRecaptcha}
            ></div>
            <button
              type="submit"
              className="w-1/4 h-11 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none shadow-md transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
