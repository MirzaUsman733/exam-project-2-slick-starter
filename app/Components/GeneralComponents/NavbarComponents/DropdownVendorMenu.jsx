'use client';
import { useState, useEffect } from 'react';
import Link from "next/link";
import DropdownIcon from "./DropdownIcon";
import DropupIcon from './DropupIcon';

export default function DropdownMenu({ title, vendors }) {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Ensure the menu is open and the click is outside the dropdown element
      if (!event.target.closest('.dropdown-menu') && isOpen) {
        setIsOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener('click', handleOutsideClick);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen]); // Only re-run the effect if isOpen changes

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
        className="inline-flex items-center text-gray-700 hover:text-yellow-500 focus:text-yellow-500 font-medium cursor-pointer"
      >
        {title}  {isOpen ? <DropupIcon /> : <DropdownIcon /> } 
      </Link>
      <div
        className={`absolute top-full left-16 bg-white min-w-max z-50 border shadow-xl rounded-lg overflow-hidden py-2
          ${isOpen ? 'block' : 'hidden'}`}
        style={{ transition: "opacity 0.3s ease-out, transform 0.3s ease-out" }}
      >
        {Array.isArray(vendors) &&
          vendors.slice(0, 15).map((vendor) => (
            <Link
              className="block vendor-link-header mx-5 py-2 text-sm"
              key={vendor.vendor_id}
              href={`/exam-providers/${vendor.vendor_perma}`}
            >
              {vendor.vendor_title}
            </Link>
          ))}
      </div>
    </li>
  );
}
