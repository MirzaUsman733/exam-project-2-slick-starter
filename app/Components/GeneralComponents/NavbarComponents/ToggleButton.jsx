"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    const drawer = document.getElementById("drawer");
    drawer.classList.toggle("hidden");
    setIsOpen(!isOpen);
  };

  return (
    <button onClick={toggleDrawer} className="text-black flex items-center">
      {isOpen ? (
        <FaTimes className="inline-block mr-1" size={20} />
      ) : (
        <FaBars className="inline-block mr-1" size={20} />
      )}
    </button>
  );
}

export default ToggleButton;
