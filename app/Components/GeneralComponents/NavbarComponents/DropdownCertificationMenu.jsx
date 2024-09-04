"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownIcon from "./DropdownIcon";
import DropupIcon from "./DropupIcon";

export default function DropdownMenu({ title, certifications }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown-certification-menu") && isOpen) {
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
    <li className="relative group dropdown-certification-menu">
      <div
        onClick={(e) => {
          e.preventDefault();
          toggleDropdown();
        }}
        className="inline-flex items-center text-gray-700 hover:text-blue-500 focus:text-blue-500 font-medium cursor-pointer"
      >
        {title} {isOpen ? <DropupIcon /> : <DropdownIcon />}
      </div>
      <div
        className={`absolute top-full left-24 bg-white min-w-max z-50 border shadow-xl rounded-lg xl:overflow-hidden overflow-auto h-32 xl:h-auto py-2
          ${isOpen ? "block" : "hidden"}`}
        style={{ transition: "opacity 0.3s ease-out, transform 0.3s ease-out" }}
      >
        {Array.isArray(certifications) &&
          certifications?.slice(0, 10).map((certification) => (
            <a
              className="block vendor-link-header mx-5 py-2 text-sm"
              key={certification.vendor_id}
              href={`/mock-exam-provider/${certification?.vendor_perma}`}
            >
              {certification.vendor_title}
            </a>
          ))}
        <a
          className="vendor-link-header text-blue-500 flex mx-5 py-2 text-sm"
          href={`/mock-certifications-providers`}
        >
          See All{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </li>
  );
}
