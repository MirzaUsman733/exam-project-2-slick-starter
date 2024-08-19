"use client";
import React from "react";
import Login from "../Components/authComponents/Login";
import loginPageProtector from "../Components/authComponents/loginPageProtector";

const page = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export default loginPageProtector(page);
