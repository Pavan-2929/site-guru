"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white shadow-md fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto w-full md:px-8 sm:px-6 px-3 py-4 flex justify-between items-center">
        <div
          className="text-2xl cursor-pointer font-bold text-gray-800"
          onClick={() => scrollToSection("#home")}
        >
          Site Guru
        </div>

        <div className="hidden md:flex space-x-6 font-medium text-gray-700">
          <p
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => scrollToSection("#home")}
          >
            Home
          </p>
          <p
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => scrollToSection("#service")}
          >
            Services
          </p>
          <p
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => scrollToSection("#review")}
          >
            Reviews
          </p>
        </div>

        <div className="hidden md:block">
          <Button>Contact Us</Button>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-gray-800 focus:outline-none"
            aria-label="Menu"
            onClick={toggleMenu}
          >
            <FiMenu className="w-8 h-8" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden text-center bg-white shadow-md w-full mx-auto px-3 py-4">
          <p
            onClick={() => scrollToSection("#home")}
            className="text-gray-700 py-2 hover:text-blue-600 cursor-pointer"
          >
            Home
          </p>
          <p
            onClick={() => scrollToSection("#service")}
            className="text-gray-700 py-2 hover:text-blue-600 cursor-pointer"
          >
            Services
          </p>
          <p
            onClick={() => scrollToSection("#review")}
            className="text-gray-700 py-2 hover:text-blue-600 cursor-pointer"
          >
            Reviews
          </p>
          <div className="py-2">
            <Button>Contact Us</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
