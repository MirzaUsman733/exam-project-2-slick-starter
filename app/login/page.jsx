// // "use client";
// // import React, { useEffect, useState } from "react";
// // import Login from "../Components/authComponents/Login";
// // import loginPageProtector from "../Components/authComponents/loginPageProtector";
// // import { useRouter } from "next/navigation";

// // const page = () => {
// //   const router = useRouter();
// //   let loginResponse;

// //   if (typeof window !== "undefined") {
// //     loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
// //   }
// //   useEffect(() => {
// //     if (loginResponse?.is_logged_in) {
// //       window.location.reload();
// //     }
// //   }, [loginResponse, router]);
// //   if (!loginResponse?.is_logged_in) {
// //     return <Login />
// //   }
// // };

// // export default loginPageProtector(page);

// "use client";
// import { useRouter } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import { IconButton, InputAdornment, Snackbar } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import axios from "axios";
// import Link from "next/link";

// const Page = () => {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [isLogin, setIsLogin] = useState("");
//   const [ip, setIp] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const fetchIP = async () => {
//     try {
//       const response = await axios.get(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/my-ip`,
//         {
//           headers: {
//             "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
//           },
//         }
//       );
//       setIp(response.data);
//     } catch (error) {
//       console.error("Error fetching IP:", error);
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetchIP();
//     }, 500);

//     // Cleanup the timer if the component unmounts before the delay
//     return () => clearTimeout(timer);
//   }, []);

//   const handleChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const payload = {
//       email: formData.email,
//       password: formData.password,
//       ip: ip,
//     };

//     try {
//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/account/login`,
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
//           },
//         }
//       );
//       setIsLogin(response.data);
//       if (response.data.is_logged_in) {
//         const currentTime = Date.now();
//         const twoHoursInMillis = 2 * 60 * 60 * 1000;
//         const expiryTime = currentTime + twoHoursInMillis;

//         localStorage.setItem(
//           "loginResponse",
//           JSON.stringify({ ...response.data, expiryTime })
//         );
//         router.push("/");
//         window.location.reload();
//       } else {
//         router.push("/login");
//       }
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };
//   if (isLogin?.is_logged_in && ip === "" ) {
//     return null;
//   } else if (!isLogin?.is_logged_in && ip != "") {
//   return (
//     <>
//       {/* <section className="relative overflow-hidden">
//             <div className="relative flex flex-wrap">
//               <div className="w-full lg:w-9/12 xl:w-2/3 relative bg-blue-700 pt-24 pb-64 lg:py-32 h-full lg:min-h-screen flex items-center">
//                 <img
//                   className="absolute top-0 left-0"
//                   src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/yellow-circle-part.png"
//                   alt=""
//                 />
//                 <img
//                   className="hidden lg:block absolute top-0 left-72 mt-24 w-24"
//                   src="/below-arrow.png"
//                   alt=""
//                 />
//                 <img
//                   className="absolute top-1/2 left-36"
//                   src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/pink-dot-small.png"
//                   alt=""
//                 />
//                 <img
//                   className="absolute bottom-0 left-0 bg-opacity-20 w-full h-full"
//                   src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/bg-gradient.png"
//                   alt=""
//                 />
//                 <img
//                   className="absolute right-0 top-0 h-full"
//                   src="https://static.shuffle.dev/components/preview/0888ef30-c554-4436-a0b4-ea41a62b8bd4/assets/public/coleos-assets/sign-in/blue-circle-half.png"
//                   alt=""
//                 />
//                 <div className="relative z-10 px-4 mx-auto lg:ml-12 xl:mr-0 xl:ml-20 max-w-md xl:max-w-lg">
//                   <h1 className="text-white text-4xl xl:text-5xl font-semibold mb-9 font-heading max-w-lg">
//                     Join over 2,500,000 community and explore the world
//                   </h1>
//                   <p className="text-gray-300 max-w-lg">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Pellentesque massa nibh, pulvinar vitae aliquet nec,
//                     accumsan aliquet orci.
//                   </p>
//                 </div>
//               </div>
//               <div className="relative w-full lg:w-3/12 xl:w-1/3 px-4 lg:min-h-screen bg-white">
//                 <div className="lg:absolute top-0 right-0 w-full h-full py-12 lg:py-0 max-w-lg lg:max-w-none mx-auto -mt-40 lg:-mt-0 lg:mx-0 lg:min-w-max flex items-center z-50">
//                   <div className="p-10 transform lg:-ml-64 xl:-ml-0 xl:-translate-x-1/2 lg:max-w-lg bg-gray-50 shadow-2xl text-black rounded-lg py-12 px-6 lg:px-8">
//                     <p className="uppercase text-rhino-300 text-xs font-bold tracking-widest mb-1 text-center">
//                       <span className="border border-blue-500 rounded-full px-4 py-1 text-blue-600">
//                         {" "}
//                         Login{" "}
//                       </span>
//                     </p>
//                     <h1 className="font-heading font-semibold text-4xl text-rhino-700 text-center my-4">
//                       Login your account
//                     </h1>
//                     <form className="flex flex-col" onSubmit={handleSubmit}>
//                       <TextField
//                         id="email"
//                         label="Email"
//                         variant="outlined"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         fullWidth
//                       />
//                       <TextField
//                         id="password"
//                         label="Password"
//                         variant="outlined"
//                         type={showPassword ? "text" : "password"}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         fullWidth
//                         className="my-5"
//                         InputProps={{
//                           endAdornment: (
//                             <InputAdornment position="end">
//                               <IconButton
//                                 onClick={togglePasswordVisibility}
//                                 edge="end"
//                               >
//                                 {showPassword ? (
//                                   <VisibilityOffIcon />
//                                 ) : (
//                                   <VisibilityIcon />
//                                 )}
//                               </IconButton>
//                             </InputAdornment>
//                           ),
//                         }}
//                       />
//                       <button
//                         type="submit"
//                         className="rounded-xl py-3 px-4 bg-blue-800 shadow-2xl text-white font-medium text-sm w-full mb-4 block text-center hover:bg-blue-900 transition duration-200"
//                       >
//                         Sign In
//                       </button>
//                       <Link
//                         className="group text-sm text-center block"
//                         href="/register"
//                       >
//                         Do not have an account? Sign Up
//                       </Link>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section> */}
//       <section className="py-10 bg-blue-600">
//         <div className="container px-4 mx-auto">
//           <div className="flex max-w-md mx-auto flex-col text-center">
//             <a
//               className="block mx-auto text-3xl text-white font-semibold leading-none"
//               href="#"
//             >
//               <img
//                 className="h-10"
//                 src="metis-assets/logos/metis/metis-light.svg"
//                 alt=""
//                 width="auto"
//               />
//             </a>
//             <div className="mt-12 mb-8 p-8 bg-white rounded">
//               <span className="text-sm text-blueGray-400">Sign In</span>
//               <h4 className="mb-6 text-3xl font-semibold">
//                 Login your account
//               </h4>
//               {/* <div className="flex -mx-3">
//                     <div className="w-1/2 px-3">
//                       <div className="w-full mb-4 px-4 bg-blueGray-50 rounded">
//                         <input
//                           className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
//                           type="text"
//                           placeholder="First name"
//                         />
//                       </div>
//                     </div>
//                     <div className="w-1/2 px-3">
//                       <div className="w-full mb-4 px-4 bg-blueGray-50 rounded">
//                         <input
//                           className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
//                           type="text"
//                           placeholder="Last name"
//                         />
//                       </div>
//                     </div>
//                   </div> */}
//               <form className="flex flex-col" onSubmit={handleSubmit}>
//                 <div className="flex mb-4 px-4 bg-blueGray-50 rounded">
//                   <input
//                     className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="name@email.com"
//                   />
//                   <svg
//                     className="h-6 w-6 ml-4 my-auto text-blueGray-300"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                     />
//                   </svg>
//                 </div>
//                 <div className="flex mb-6 px-4 bg-blueGray-50 rounded">
//                   <input
//                     className="w-full py-4 text-xs placeholder-blueGray-400 font-semibold leading-none bg-blueGray-50 outline-none"
//                     // type="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Enter your password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                   />
//                   <button className="ml-4" onClick={togglePasswordVisibility}>
//                     {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
//                   </button>
//                 </div>
//                 <button
//                   type="submit"
//                   className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
//                 >
//                   Sign In
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// }

// export default Page;

"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const page = () => {
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

export default page;
