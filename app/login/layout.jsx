"use client";

import loginPageProtector from "../Components/authComponents/loginPageProtector";

const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default loginPageProtector(layout);
