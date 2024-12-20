import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="py-4 px-6 flex items-center justify-between relative z-10">
      <div className="flex items-center justify-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-40" />
      </div>
      <div className="hidden text-sm lg:text-base md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-yellow-600">About US</a>
        <a href="#" className="hover:text-yellow-600">Services</a>
        <a href="#" className="hover:text-yellow-600">Portfolio</a>
        <a href="#" className="hover:text-yellow-600">Technologies</a>
       
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button className="bg-[#3B3B3B] text-white px-4 py-2 rounded-full">Free Consultation</button>
      </div>
      <div className="md:hidden flex items-center">
        <button
          className="text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full h-max bg-[#F1F1F1] flex flex-col items-center space-y-4 py-4 text-gray-700 z-20 pb-10">
          <a href="#" className="hover:text-yellow-600">About US</a>
        <a href="#" className="hover:text-yellow-600">Services</a>
        <a href="#" className="hover:text-yellow-600">Portfolio</a>
        <a href="#" className="hover:text-yellow-600">Technologies</a>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded w-3/4">Instructor Login</button>
        </div>
      )}
    </nav>
  );
};