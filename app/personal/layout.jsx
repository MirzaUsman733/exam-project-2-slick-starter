"use client";

import withAuth from "../Components/authComponents/ProfileProtector";

const layout = ({ children }) => {
  return <div>{children}</div>;
};

export default withAuth(layout);
