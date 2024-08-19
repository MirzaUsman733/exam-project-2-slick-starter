"use client";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";

const Register = () => {
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
    event.preventDefault(); // Prevent default form submission behavior
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
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
      console.log("Registration successful:", response.data);
      if (response.data) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <section className="relative overflow-hidden">
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
                  {/* Form fields */}
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
                    // className="my-5"
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
      </section>
    </div>
  );
};

export default Register;
