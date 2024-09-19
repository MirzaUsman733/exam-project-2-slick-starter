"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [ip, setIp] = useState("");
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // or "error"
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchIP = async () => {
    try {
      const response = await axios.get(`/api/my-ip`);
      setIp(response.data.ip);
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  // Validate email format
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, subject, email, message } = formData;

    // Basic validation
    if (!name || !subject || !email || !message) {
      setSnackbar({
        open: true,
        message: "Please fill out all fields.",
        severity: "error",
      });
      return;
    }

    if (!validateEmail(email)) {
      setSnackbar({
        open: true,
        message: "Please enter a valid email address.",
        severity: "error",
      });
      return;
    }

    // Prepare the data to be sent
    const dataToSend = {
      name,
      subject,
      email,
      message,
      ip,
    };

    try {
      setLoading(true);
      const response = await fetch(
        `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/contact`,
        {
          method: "POST",
          headers: {
            "x-api-key": process?.env?.NEXT_PUBLIC_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataToSend),
        }
      );

      const messageData = await response.json();

      if (response.ok) {
        setSnackbar({
          open: true,
          message: messageData.message,
          severity: "success",
        });
        setFormData({
          name: "",
          subject: "",
          email: "",
          message: "",
        });
      } else {
        setSnackbar({
          open: true,
          message: "Failed to send message. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSnackbar({
        open: true,
        message: "An error occurred. Please try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle Snackbar close
  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <div className="container mx-auto px-6">
      <section className="relative lg:h-screen bg-gray-50">
        <div className="hidden lg:flex items-center absolute inset-0 w-2/5 bg-white">
          <img
            className="mx-auto"
            src="/technical-support-dark-green.png"
            alt="Technical Support"
          />
        </div>
        <div className="lg:absolute inset-0 flex justify-center items-center ml-auto w-full lg:w-3/5 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto py-10">
              <h3 className="mb-6 text-2xl font-bold text-center">
                Got a question? Let&apos;s talk about it.
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    className="w-full p-4 text-sm font-semibold leading-none bg-white rounded outline-none border border-gray-300 focus:ring focus:border-blue-400 transition"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    aria-label="Subject"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full p-4 text-sm font-semibold leading-none bg-white rounded outline-none border border-gray-300 focus:ring focus:border-blue-400 transition"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    aria-label="Name"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full p-4 text-sm font-semibold leading-none bg-white rounded outline-none border border-gray-300 focus:ring focus:border-blue-400 transition"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    aria-label="Email"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-full h-32 p-4 text-sm font-semibold leading-none bg-white rounded outline-none border border-gray-300 resize-none focus:ring focus:border-blue-400 transition"
                    name="message"
                    value={formData?.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    aria-label="Message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center md:justify-end items-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`inline-block py-2 px-6 w-full md:w-auto md:rounded-l-xl md:rounded-t-xl bg-blue-500 hover:bg-blue-700 text-white font-bold leading-loose transition duration-200 ${
                      loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {loading ? "Sending..." : "Get Started"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Snackbar Notification */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ContactUs;
