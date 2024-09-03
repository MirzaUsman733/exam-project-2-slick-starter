"use client";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
const ForgotForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [activeSlide, setActiveSlide] = useState(1);

  const fetchIP = async () => {
    try {
      const response = await axios.get(`/api/my-ip`);
      setIp(response.data); // Assuming response.data contains an 'ip' field
    } catch (error) {
      console.error("Error fetching IP:", error);
    }
  };

  useEffect(() => {
    fetchIP();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    try {
      const response = await axios.post(
        `${process?.env?.NEXT_PUBLIC_API_BASE_URL}/v1/account/forgot-password`,
        {
          email,
          ip: ip.ip,
          reset_url: "/reset-password/",
        },
        {
          headers: {
            "x-api-key": process?.env?.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      setEmail("")
      setResponseMessage(response.data.message || "Request successful");
      setOpenSnackbar(true);
      // Optionally, navigate to another page like login
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Something went wrong. Please try again later.");
      setOpenSnackbar(true);
      setEmail("")
    }
  };
  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={
            responseMessage.includes("We have sent you an reset password")
              ? "success"
              : "error"
          }
          variant="filled"
          sx={{ width: "100%" }}
        >
          {responseMessage}
        </Alert>
      </Snackbar>
      <div className="flex flex-wrap mt-24">
        <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
          <div className="max-w-md mx-auto">
            <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
              <Link className="text-3xl font-bold leading-none" href="/">
                <img
                  className="h-12"
                  src="/Dumps-Collections-logo.png"
                  alt=""
                  width="auto"
                />
              </Link>
              <Link
                className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition duration-200"
                href="/register"
              >
                Sign Up
              </Link>
            </div>
            <div>
              <div className="mb-6 px-3">
                <span className="text-gray-500">Forgot Password</span>
                <h3 className="text-2xl font-bold">
                  Forgot Your Account Password
                </h3>
                <p className="text-lg text-coolGray-500 font-medium">
                  Enter your email to get a reset verification code.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                  <input
                    className="w-full text-xs bg-gray-50 outline-none"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    placeholder="name@email.com"
                  />
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <button
                  className="inline-block py-3 px-7 mb-4 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm"
                  type="submit"
                >
                  Forgot Password
                </button>
              </form>
            </div>
            <div className="text-center" > Go to the {" "}
            <Link className="text-blue-500 underline hover:text-blue-700 text-center" href='/login'>SignIn</Link> page
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-full lg:w-1/2 bg-blue-600">
          <div
            className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
            style={{ zIndex: 10 }}
          >
            <div className="overflow-hidden">
              <div
                style={{
                  transform: `translateX(-${(activeSlide - 1) * 100.5}%)`,
                }}
                className="whitespace-nowrap transition-transform duration-500 ease-in-out"
              >
                <div className="inline-block w-full whitespace-normal">
                  <img
                    className="lg:max-w-xl mx-auto"
                    src="https://static.shuffle.dev/components/preview/066b9353-3d24-43c8-8faf-381d7322bfa7/assets/public/atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
                    alt=""
                  />
                  <h2 className="mb-2 text-2xl text-white font-bold">
                    So much more than a business analytics tool
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <p className="mb-6 text-gray-50 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                </div>
                <div className="inline-block w-full whitespace-normal">
                  <img
                    className="lg:max-w-xl mx-auto"
                    src="https://static.shuffle.dev/components/preview/066b9353-3d24-43c8-8faf-381d7322bfa7/assets/public/atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
                    alt=""
                  />
                  <h2 className="mb-2 text-2xl text-white font-bold">
                    Beyond Analytics: Unveiling Business Potential
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <p className="mb-6 text-gray-50 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                </div>
                <div className="inline-block w-full whitespace-normal">
                  <img
                    className="lg:max-w-xl mx-auto"
                    src="https://static.shuffle.dev/components/preview/066b9353-3d24-43c8-8faf-381d7322bfa7/assets/public/atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
                    alt=""
                  />
                  <h2 className="mb-2 text-2xl text-white font-bold">
                    Data Dynamics: Expanding Business Insights
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <p className="mb-6 text-gray-50 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                </div>
                <div className="inline-block w-full whitespace-normal">
                  <img
                    className="lg:max-w-xl mx-auto"
                    src="https://static.shuffle.dev/components/preview/066b9353-3d24-43c8-8faf-381d7322bfa7/assets/public/atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
                    alt=""
                  />
                  <h2 className="mb-2 text-2xl text-white font-bold">
                    Analytics Unleashed: Elevating Business Impact
                  </h2>
                  <div className="max-w-lg mx-auto">
                    <p className="mb-6 text-gray-50 leading-loose">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque efficitur nisl sodales egestas lobortis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="inline-block py-2 px-6 leading-loose rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
              href="#"
            >
              Get Started
            </a>
            <div className="mt-12 flex justify-center space-x-3">
              <button
                className={`p-1 rounded-full ${
                  activeSlide === 1 ? "bg-white" : "bg-blue-500"
                }`}
                onClick={() => setActiveSlide(1)}
              ></button>
              <button
                className={`p-1 rounded-full ${
                  activeSlide === 2 ? "bg-white" : "bg-blue-500"
                }`}
                onClick={() => setActiveSlide(2)}
              ></button>
              <button
                className={`p-1 rounded-full ${
                  activeSlide === 3 ? "bg-white" : "bg-blue-500"
                }`}
                onClick={() => setActiveSlide(3)}
              ></button>
              <button
                className={`p-1 rounded-full ${
                  activeSlide === 4 ? "bg-white" : "bg-blue-500"
                }`}
                onClick={() => setActiveSlide(4)}
              ></button>
            </div>
          </div>
        </div>
        <div className="lg:hidden bg-blue-600 w-full">
          <div className="relative w-full">
            <img
              className="relative mx-auto max-w-sm mt-4 mb-4 block"
              src="https://static.shuffle.dev/components/preview/066b9353-3d24-43c8-8faf-381d7322bfa7/assets/public/atis-assets/illustrations/pablo-coming-soon-dark-mono.png"
              alt=""
            />
            <div className="flex justify-center space-x-3">
              <button className="p-1 bg-blue-500 rounded-full"></button>
              <button className="p-1 bg-blue-500 rounded-full"></button>
              <button className="p-1 bg-white rounded-full"></button>
              <button className="p-1 bg-blue-500 rounded-full"></button>
            </div>
          </div>
          <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
            <h2 className="mb-2 text-2xl text-white font-bold">
              So much more than a business analytics tool
            </h2>
            <p className="mb-6 text-gray-50 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a
              className="py-2 px-6 rounded-t-xl rounded-l-xl bg-white hover:bg-gray-500 text-gray-900 hover:text-white transition duration-200 font-bold"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotForm;
