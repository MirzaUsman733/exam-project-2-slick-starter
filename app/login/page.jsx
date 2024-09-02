"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Login from "../Components/authComponents/Login";
import loginPageProtector from "../Components/authComponents/loginPageProtector";

const Page = () => {
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
  return <Login />;
};

export default loginPageProtector(Page);
