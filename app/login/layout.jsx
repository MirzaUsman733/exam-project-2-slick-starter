// "use client";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const layout = () => {
//   const router = useRouter();
//   let loginResponse;

//   if (typeof window !== "undefined") {
//     loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
//   }
//   useEffect(() => {
//     if (loginResponse?.is_logged_in) {
//       window.location.reload();
//     }
//   }, [loginResponse, router]);
//   if (!loginResponse?.is_logged_in) {
//     return <Login />
//   }
// };

// export default loginPageProtector(layout);

"use client";

import { useRouter } from "next/navigation";
import loginPageProtector from "../Components/authComponents/loginPageProtector";
import { useEffect } from "react";

const layout = ({ children }) => {
  const router = useRouter();
  let loginResponse;

  if (typeof window !== "undefined") {
    loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
  }
  useEffect(() => {
    if (loginResponse?.is_logged_in) {
      window.location.reload();
    }
  }, [loginResponse, router]);
  return children;
};

export default loginPageProtector(layout);
