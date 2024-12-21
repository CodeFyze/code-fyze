import { useState, useEffect, useRef } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

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
        <span className="hover:text-yellow-600">
          <DropdownMenu>
            <DropdownMenuTrigger>About US</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>About US</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
        <a href="/#services" className="hover:text-yellow-600">
          Services
        </a>
        <a href="/portfolio" className="hover:text-yellow-600">
          Portfolio
        </a>
        <a href="/#technologies" className="hover:text-yellow-600">
          Technologies
        </a>
      </div>
      <div className="hidden md:flex space-x-4 items-center">
        <button className="bg-[#3B3B3B] text-white px-4 py-2 rounded-full">
          Free Consultation
        </button>
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
        <div
          className="md:hidden absolute top-16 left-0 w-full h-max bg-[#F1F1F1] flex flex-col items-center space-y-4 py-4 text-gray-700 z-20 pb-10"
          ref={menuRef}
        >
          <a
            href="/#about-us"
            className="hover:text-yellow-600"
            onClick={handleLinkClick}
          >
            About US
          </a>
          <a
            href="/#services"
            className="hover:text-yellow-600"
            onClick={handleLinkClick}
          >
            Services
          </a>
          <a
            href="/portfolio"
            className="hover:text-yellow-600"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="/#technologies"
            className="hover:text-yellow-600"
            onClick={handleLinkClick}
          >
            Technologies
          </a>
        </div>
      )}
    </nav>
  );
}
