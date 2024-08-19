"use client";
import ForgotForm from "../Components/authComponents/ForgotForm";
import loginPageProtector from "../Components/authComponents/loginPageProtector";

const page = () => {
  return (
    <div>
      <ForgotForm />
    </div>
  );
};

export default loginPageProtector(page);
