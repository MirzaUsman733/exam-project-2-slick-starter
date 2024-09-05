"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const ResetPassword = ({ email, token }) => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [formData, setFormData] = useState({
    email: email,
    password: "",
    confirmPassword: "",
  });
  const [ip, setIp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setSnackbar({ open: true, message: "All fields are required." });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setSnackbar({ open: true, message: "Passwords do not match!" });
      return;
    }

    const payload = {
      email: formData.email,
      reset_token: token,
      new_password: formData.password,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/reset-password`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (response.data) {
        setFormData({
          email: "",
          password: "",
          confirmPassword: "",
        });
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error during password reset:", error.response.data.message);
      setSnackbar({ open: true, message: error.response.data.message });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: "" });
  };
  return (
    <div>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <section>
        <div className="flex flex-wrap">
          <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
              <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                <a className="text-3xl font-bold leading-none" href="/">
                  <img
                    className="h-12"
                    src="/Dumps-Collections-logo.png"
                    alt=""
                    width="auto"
                  />
                </a>
                <Link
                  className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition duration-200"
                  href="/login"
                >
                  Sign In
                </Link>
              </div>
              <div>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Sign Up</span>
                  <h3 className="text-2xl font-bold">Create an account</h3>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type="email"
                      name="email"
                      readOnly
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@email.com"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.3em"
                      height="1.3em"
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="currentColor"
                        d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="mb-2 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                    />
                    <button type="button" onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>
                  <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Enter your Confirm password"
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                    >
                      {showConfirmPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </button>
                  </div>
                  <div className="px-3 text-center">
                    <button
                      type="submit"
                      className="mb-2 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200"
                    >
                      Reset Password
                    </button>
                    <span className="text-gray-400 text-xs">
                      <span>Already have an account?</span>{" "}
                      <Link
                        className="text-blue-600 hover:underline"
                        href="/login"
                      >
                        Sign In
                      </Link>
                    </span>
                    <p className="mt-16 text-xs text-gray-400">
                      <Link
                        className="underline hover:text-gray-500"
                        href="/privacy-policy"
                      >
                        Policy privacy
                      </Link>{" "}
                      and{" "}
                      <Link
                        className="underline hover:text-gray-500"
                        href="/terms"
                      >
                        Terms of Use
                      </Link>
                    </p>
                  </div>
                </form>
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
      </section>
    </div>
  );
};

export default ResetPassword;
