"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownIcon from "./DropdownIcon";
import DropupIcon from "./DropupIcon";

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginResponse, setLoginResponse] = useState(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-menu") && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);
  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("loginResponse");
      if (storedLoginResponse) {
        setLoginResponse(JSON.parse(storedLoginResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("CartProducts");
      if (storedLoginResponse) {
        setCartResponce(JSON.parse(storedLoginResponse));
      }
    }
  }, []);

  const truncatedEmail =
    loginResponse?.email?.length > 10
      ? `${loginResponse?.email?.slice(0, 10)}...`
      : loginResponse?.email;
  const truncatedName =
    loginResponse?.name?.length > 12
      ? `${loginResponse?.name?.slice(0, 12)}...`
      : loginResponse?.name;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSignOut = () => {
    localStorage.removeItem("loginResponse");
    window.location.reload();
  };
  return (
    <>
      <div>
        {!loginResponse?.is_logged_in ? (
          <>
            <a className="my-4 lg:my-0 " href={"/login"}>
              <b
                style={{
                  padding: "10px 20px",
                }}
                className="hover:text-white hover:border-blue-500 rounded-full border-blue-500 border-2 mr-3 text-blue-500 hover:bg-blue-500"
              >
                Log In
              </b>
            </a>
            <a
              href={"/register"}
              style={{
                padding: "10px 20px",
                marginLeft: "4px",
              }}
              className="hover:text-blue-500 rounded-full bg-blue-500 border-blue-500 border-2 my-4 lg:my-0 text-white hover:bg-white"
            >
              <b>Register Now</b>
            </a>
          </>
        ) : (
          <div className="relative">
            <button
              className="text-gray-700 hover:text-blue-500 font-medium flex items-center"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              My Account {isOpen ? <DropupIcon /> : <DropdownIcon />}
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md border shadow-xl z-20 animate-dropdown">
                <a
                  className="block ms-4 py-2 text-sm text-gray-700 vendor-link-header"
                  href="/personal/products"
                >
                  <span className="text-gray-700 hover:text-blue-500 header-link">
                    Products
                  </span>
                </a>
                <a
                  className="block ms-4 py-2 text-sm text-gray-700 vendor-link-header"
                  href="/personal/invoices"
                >
                  <span className="text-gray-700 hover:text-blue-500 header-link">
                    Invoice
                  </span>
                </a>
                <a
                  className="block ms-4 py-2 text-sm text-gray-700 vendor-link-header"
                  href="/personal/setting"
                >
                  <span className="text-gray-700 hover:text-blue-500 header-link">
                    Setting
                  </span>
                </a>
                <a
                  className="block ms-4 py-2 text-sm text-gray-700 vendor-link-header"
                  href="/personal/download-history"
                >
                  <span className="text-gray-700 hover:text-blue-500 header-link">
                    Download History
                  </span>
                </a>
                <a
                  className="block ms-4 py-2 text-sm text-gray-700 vendor-link-header"
                  href="/personal/login-history"
                >
                  <span className="text-gray-700 hover:text-blue-500 header-link">
                    Login History
                  </span>
                </a>
                <hr className="container w-[80%] mx-auto" />
                <button
                  className="block ms-4 py-2 text-sm text-gray-700 vendor-link-header"
                  onClick={handleSignOut}
                >
                  <span className="text-gray-700 hover:text-blue-500 header-link">
                    Logout
                  </span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default AccountDropdown;
