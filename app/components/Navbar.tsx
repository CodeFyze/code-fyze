import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Services from "~/constants/services";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile Nav About us and services submenu
  const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const toggleAboutUs = () => {
    setAboutUsOpen(!aboutUsOpen);
  };
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (!mobileMenuOpen) return;
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > 100) { // Only start hiding after scrolling 100px
        if (window.scrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true); // Always show navbar when at the top
      }
      setLastScrollY(window.scrollY);
    }
  };

  return (
    <nav
      className={`py-4 px-6 flex items-center justify-between z-10 sticky top-0 transition-transform duration-300 bg-white/30 transparent backdrop-blur-xl ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <a href="/" className="flex items-center justify-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-40" />
      </a>
      <div className="hidden text-sm font-bold lg:text-base lg:flex space-x-6 text-gray-700">
        <a
          href="/"
          className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out"
        >
          Home
        </a>
        <span className="hover:scale-105 transition-transform ease-in-out">
          <Dropdown title="About US" variant="about" />
        </span>
        <span className="hover:scale-105 transition-transform ease-in-out">
          <Dropdown title="Services" variant="services" />
        </span>
        <a
          href="/portfolio"
          className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out"
        >
          Portfolio
        </a>
        <a
          href="/#technologies"
          className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out"
        >
          Technologies
        </a>
      </div>
      <div className="hidden lg:flex space-x-4 items-center">
        <button className="bg-[#3B3B3B] text-white px-4 py-2 rounded-full">
          Free Consultation
        </button>
      </div>
      <div className="lg:hidden flex items-center">
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
          className="lg:hidden absolute top-14 left-0 w-full min-h-screen bg-[#F1F1F1] flex flex-col items-start pl-[10vw] space-y-4 py-4 text-gray-700 z-20 pb-20 overflow-y-scroll h-full"
          ref={menuRef}
        >
          <a
            href="/"
            className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Home
          </a>
          <div>
            <p
              className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out flex gap-x-1 font-bold text-[#0E3172]"
              onClick={toggleAboutUs}
            >
              About US
              <span className="w-4 flex aspect-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </span>
            </p>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                aboutUsOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="px-4 flex flex-col items-center space-y-2 mt-2">
                <span>About Us 1</span>
                <span>About Us 2</span>
              </div>
            </div>
          </div>
          <div>
            <p
              className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out flex gap-x-1 font-bold text-[#0E3172]"
              onClick={toggleServices}
            >
              Services
              <span className="w-4 flex aspect-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </span>
            </p>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                servicesOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {Services.map((service, index) => (
                <div
                  key={index}
                  className="p-4 space-y-1 flex flex-col items-start focus:bg-transparent"
                >
                  <h2 className="text-sm font-semibold text-[#0E3172]">
                    {service.title}
                  </h2>
                  <ul className="list-disc list-inside">
                    {service.technologies.map((tech, techIndex) => (
                      <a key={techIndex} href={tech.link}><li className="text-[#7D8D9A] text-xs cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300">
                        {tech.text}
                      </li></a>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <a
            href="/portfolio"
            className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
          <a
            href="/#technologies"
            className="hover:text-yellow-600 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Technologies
          </a>
        </div>
      )}
    </nav>
  );
}
