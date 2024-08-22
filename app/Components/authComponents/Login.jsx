"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLogin, setIsLogin] = useState("");
  const [ip, setIp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
    const timer = setTimeout(() => {
      fetchIP();
    }, 500);

    // Cleanup the timer if the component unmounts before the delay
    return () => clearTimeout(timer);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      email: formData.email,
      password: formData.password,
      ip: ip,
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/login`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );
      setIsLogin(response.data);
      if (response.data.is_logged_in) {
        const currentTime = Date.now();
        const twoHoursInMillis = 2 * 60 * 60 * 1000;
        const expiryTime = currentTime + twoHoursInMillis;

        localStorage.setItem(
          "loginResponse",
          JSON.stringify({ ...response.data, expiryTime })
        );
        router.push("/");
        window.location.reload();
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  if (isLogin?.is_logged_in && ip === "") {
    return null;
  } else if (!isLogin?.is_logged_in && ip != "") {
    return (
      <section>
        <div className="flex flex-wrap">
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
                  <span className="text-gray-500">Sign In</span>
                  <h3 className="text-2xl font-bold">Login Your account</h3>
                </div>
                <form action="" onSubmit={handleSubmit}>
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
                  <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                    <input
                      className="w-full text-xs bg-gray-50 outline-none"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="ml-4"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
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
                      Sign In
                    </button>
                    <span className="text-gray-400 text-xs">
                      <span>Do not have an account?</span>{" "}
                      <Link
                        className="text-blue-600 hover:underline"
                        href="/register"
                      >
                        Sign Up
                      </Link>
                    </span>
                    <p className="mt-16 text-xs text-gray-400">
                      <a className="underline hover:text-gray-500" href="#">
                        Policy privacy
                      </a>{" "}
                      and{" "}
                      <a className="underline hover:text-gray-500" href="#">
                        Terms of Use
                      </a>
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
    );
  }
};

export default Login;
