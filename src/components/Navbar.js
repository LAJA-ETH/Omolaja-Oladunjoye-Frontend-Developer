import React, { useState } from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      document.body.style.overflow = "unset";
    } else {
      document.body.style.overflow = "hidden";
    }
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between py-4 lg:pb-24 text-white">
      <img src={Logo} className="w-20 md:w-44"/>
      <div className="hidden md:block">
        <ul className="flex items-center gap-12 text-sm">
          <button className="cursor-pointer">
            <a href="#" className="cursor-pointer">
              HOME
            </a>
          </button>
          <button className="cursor-pointer">
            <a href="#" className="cursor-pointer">
              ABOUT US
            </a>
          </button>
          <button className="cursor-pointer">
            <a href="#" className="cursor-pointer">
              CONTACT US
            </a>
          </button>
          <button className="cursor-pointer">
            <a href="#" className="cursor-pointer">
              CAPSULES
            </a>
          </button>
          <button className="cursor-pointer">
            <a href="#" className="cursor-pointer">
              ROCKETS
            </a>
          </button>
        </ul>
      </div>
      <div className="block md:hidden">
        <p
          className={`absolute top-0 right-0 z-10 p-3 cursor-pointer ${
            isOpen ? "text-red-800" : "text-white"
          }`}
          onClick={toggleMenu}>
          {isOpen ? "x" : "Menu"}
        </p>
        <ul
          className={`absolute right-0 top-0 flex flex-col gap-3 bg-white text-red-800 h-screen transition-transform duration-300 ${
            isOpen
              ? "transform translate-x-0"
              : "transform translate-x-full hidden"
          }`}>
          <li className="border-b-2 border-red-800 py-4 px-6">Home</li>
          <li className="border-b-2 border-red-800 py-4 px-6">About Us</li>
          <li className="border-b-2 border-red-800 py-4 px-6">Contact Us</li>
          <li className="border-b-2 border-red-800 py-4 px-6">Capsules</li>
          <li className="border-b-2 border-red-800 py-4 px-6">Rockects</li>
        </ul>
      </div>
    </div>
  );
}
