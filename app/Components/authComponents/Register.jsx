"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Alert, IconButton, InputAdornment, Snackbar } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [ip, setIp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const fetchIP = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/my-ip`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
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
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setSnackbar({ open: true, message: "All fields are required." });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setSnackbar({ open: true, message: "Passwords do not match!" });
      return;
    }

    const payload = {
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      password: formData.password,
      ip: ip,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/register`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      if (response.data) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error during registration:", error.response.data.message);
      setSnackbar({ open: true, message: error.response.data.message });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: "" });
  };


  return (
    <div>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {/* <section className="relative overflow-hidden">
        <div className="relative flex flex-wrap">
          <div className="w-full lg:w-9/12 xl:w-2/3 relative bg-blue-700 pt-24 pb-64 lg:py-32 h-full lg:min-h-screen flex items-center">
            <img
              className="absolute top-0 left-0"
              src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/yellow-circle-part.png"
              alt=""
            />
            <img
              className="hidden lg:block absolute top-0 left-72 mt-24 w-24"
              src="/below-arrow.png"
              alt=""
            />
            <img
              className="absolute top-1/2 left-36"
              src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/pink-dot-small.png"
              alt=""
            />
            <img
              className="absolute bottom-0 left-0 bg-opacity-20 w-full h-full"
              src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/bg-gradient.png"
              alt=""
            />
            <img
              className="absolute right-0 top-0 h-full"
              src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/blue-circle-half.png"
              alt=""
            />
            <div className="relative z-10 px-4 mx-auto lg:ml-12 xl:mr-0 xl:ml-20 max-w-md xl:max-w-lg">
              <h1 className="text-white text-4xl xl:text-5xl font-semibold mb-9 font-heading max-w-lg">
                Join over 2,500,000 community and explore the world
              </h1>
              <p className="text-gray-300 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
          <div className="relative w-full lg:w-3/12 xl:w-1/3 px-4 lg:min-h-screen bg-white">
            <div className="lg:absolute top-0 right-0 w-full h-full py-12 lg:py-0 max-w-lg lg:max-w-none mx-auto -mt-40 lg:-mt-0 lg:mx-0 lg:min-w-max flex items-center z-50">
              <div className="transform lg:-ml-64 xl:-ml-0 xl:-translate-x-1/2 lg:max-w-lg bg-gray-50 shadow-2xl text-black rounded-lg py-12 px-6 lg:px-8">
                <p className="uppercase text-rhino-300 text-xs font-bold tracking-widest mb-1 text-center">
                  <span className="border border-blue-500 rounded-full px-4 py-1 text-blue-600">
                    {" "}
                    SIGN UP{" "}
                  </span>
                </p>
                <h1 className="font-heading font-semibold text-4xl text-rhino-700 text-center my-4">
                  Create new account
                </h1>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="flex gap-5">
                    <TextField
                      id="first-name"
                      label="First Name"
                      variant="outlined"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      fullWidth
                    />
                    <TextField
                      id="last-name"
                      label="Last Name"
                      variant="outlined"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    className="my-5"
                  />
                  <TextField
                    id="password"
                    label="Password"
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={togglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    variant="outlined"
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    fullWidth
                    className="my-5"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={toggleConfirmPasswordVisibility}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <button
                    type="submit"
                    className="rounded-xl py-3 px-4 bg-blue-800 shadow-2xl text-white font-medium text-sm w-full mb-4 block text-center hover:bg-blue-900 transition duration-200"
                  >
                    Sign Up
                  </button>
                  <a className="group text-sm text-center block" href="/login">
                    Already have an account? Sign In
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="flex flex-wrap">
          <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
            <div className="max-w-md mx-auto">
              <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
                <a className="text-3xl font-bold leading-none" href="#">
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
                  <div className="flex flex-wrap">
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <input
                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <input
                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type="email"
                      name="email"
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
                      Sign Up
                    </button>
                    <span className="text-gray-400 text-xs">
                      <span>Already have an account?</span> {" "}
                      <Link className="text-blue-600 hover:underline" href="/login">
                        Sign In
                      </Link>
                    </span>
                    <p className="mt-16 text-xs text-gray-400">
                      <Link className="underline hover:text-gray-500" href="/privacy-policy">
                        Policy privacy
                      </Link>{" "}
                      and{" "}
                      <Link className="underline hover:text-gray-500" href="/terms">
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

export default Register;
