"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownIcon from "./DropdownIcon";
import DropupIcon from "./DropupIcon";

function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
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
          <Link
            className="block mx-4 py-2 text-sm text-gray-700 vendor-link-header"
            href="/profile"
          >
            Profile
          </Link>
          <Link
            className="block mx-4 py-2 text-sm text-gray-700 vendor-link-header"
            href="/settings"
          >
            Settings
          </Link>
          <Link
            className="block mx-4 py-2 text-sm text-gray-700 vendor-link-header"
            href="/logout"
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}

export default AccountDropdown;
