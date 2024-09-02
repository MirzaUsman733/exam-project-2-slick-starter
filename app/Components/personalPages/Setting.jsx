"use client";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Register = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const [snackbar, setSnackbar] = useState({ open: false, message: "" });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [ip, setIp] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiResponse, setApiResponse] = useState({});
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    if (!loginResponse?._token) {
      router.push("/login");
      return;
    }
    setUser(loginResponse);
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

  //   const handleChange = (event) => {
  //     const { name, value, type, checked } = event.target;
  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: type === "checkbox" ? checked : value,
  //     }));
  //   };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Reset errors

    if (formData.password.length < 8) {
      setErrors({ password: "Password must be at least 8 characters long" });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/update-profile`,
        {
          name: user?.name,
          password: formData.password,
        },
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setApiResponse(response.data);
      setFormData({ name: "", password: "", confirmPassword: "" });
      setOpenSnackbar(true);
      router.push("/");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
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
                  href="/"
                >
                  Home
                </Link>
              </div>
              <div>
                <div className="mb-6 px-3">
                  <span className="text-gray-500">Update Profile</span>
                  <h3 className="text-2xl font-bold">Change the Password</h3>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                  <div className="flex flex-wrap">
                    <div className="mb-3 w-full lg:w-1/2 px-2">
                      <input
                        className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                        type="text"
                        name="name"
                        disabled
                        value={user?.name || ""}
                        onChange={handleChange}
                        placeholder="First Name"
                      />
                    </div>
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
                      Update Profile
                    </button>
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
