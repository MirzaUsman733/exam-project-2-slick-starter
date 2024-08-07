"use client";
import React from "react";
import Login from "../Components/authComponents/Login";
import loginPageProtector from "../Components/authComponents/loginPageProtector";

const page = () => {
  return <Login />;
};

export default loginPageProtector(page);
