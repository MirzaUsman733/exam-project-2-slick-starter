"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownIcon from "./DropdownIcon";
import DropupIcon from "./DropupIcon";

export default function DropdownMenu({ title, certifications }) {
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
    <li className="relative group dropdown-menu">
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
        className="inline-flex items-center text-gray-700 hover:text-blue-500 focus:text-blue-500 font-medium cursor-pointer"
      >
        {title} {isOpen ? <DropupIcon /> : <DropdownIcon />}
      </Link>
      <div
        className={`absolute top-full left-24 bg-white min-w-max z-50 border shadow-xl rounded-lg overflow-hidden py-2
          ${isOpen ? "block" : "hidden"}`}
        style={{ transition: "opacity 0.3s ease-out, transform 0.3s ease-out" }}
      >
        {Array.isArray(certifications) &&
          certifications?.slice(0, 15).map((certification) => (
            <Link
              className="block vendor-link-header mx-5 py-2 text-sm"
              key={certification.vendor_id}
              href={`/exam-providers/${certification?.vendor_perma}`}
            >
              {certification.vendor_title}
            </Link>
          ))}
      </div>
    </li>
  );
}
