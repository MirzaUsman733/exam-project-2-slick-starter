"use client";

import withAuth from "../Components/authComponents/ProfileProtector";

const layout = ({ children }) => {
  return children;
};

export default withAuth(layout);
