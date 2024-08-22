"use client";

import { useRouter } from "next/navigation";
import loginPageProtector from "../Components/authComponents/loginPageProtector";
import { useEffect } from "react";

const page = () => {
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

export default loginPageProtector(page);