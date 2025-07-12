import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Services from "~/constants/serviceslink";
import { Link, useNavigate } from "@remix-run/react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile Nav About us and services submenu
  // const [aboutUsOpen, setAboutUsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // const toggleAboutUs = () => {
  //   setAboutUsOpen(!aboutUsOpen);
  // };
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMobileMenuOpen(false);
    }
  };

   const navigate = useNavigate();
  
    const handleRedirect = () => {
      navigate("/contact-us");
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
      className={`py-4 px-6 flex items-center justify-between sticky top-0 transition-transform duration-300 bg-white/30 transparent backdrop-blur-xl z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link to="/" className="flex items-center justify-center space-x-2">
        <img src="/logo.png" alt="Logo" className="w-40" />
      </Link>
      <div className="hidden text-sm font-bold lg:text-base lg:flex space-x-6 text-gray-700">
      <Link
          to="/"
          className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out"
        >
          Home
        </Link>
        <Link
          to="/about-us"
          className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out"
        >
          About US
        </Link>
        {/* <span className="hover:scale-105 transition-transform ease-in-out">
          <Dropdown title="About US" variant="about" />
        </span> */}
        <span className="hover:scale-105 transition-transform ease-in-out">
          <Dropdown title="Services" variant="services" />
        </span>
        <Link
          to="/portfolio"
          className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out"
        >
          Portfolio
        </Link>
        <Link
          to="/blogs"
          className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out"
        >
          Blogs
        </Link>
        <Link
          to="/contact-us"
          className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out"
        >
          Contact US
        </Link>
      </div>
      <div className="hidden lg:flex space-x-4 items-center">
        <button className="bg-[#3B3B3B] text-white px-4 py-2 rounded-full" onClick={handleRedirect}>
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
          className="lg:hidden absolute top-14 right-0 w-3/4 max-w-md min-h-screen bg-[#F1F1F1] flex flex-col items-start pl-[8vw] space-y-4 py-4 text-gray-700 z-20 pb-32 overflow-y-scroll h-full text-lg"
          ref={menuRef}
        >
          <Link
            to="/"
            className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/About-US"
            className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            About US
          </Link>
          {/* <div>
            <p
              className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out flex font-bold text-[#0E3172]"
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
              <div className="flex flex-col space-y-2 mt-2 text-[#7D8D9A]">
                <span className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out duration-300">About Us 1</span>
                <span className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out duration-300">About Us 2</span>
              </div>
            </div>
          </div> */}
          <div>
            <p
              className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out flex font-bold text-[#0E3172]"
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
              className={`transition-max-height duration-300 ease-in-out overflow-hidden w-full ${
                servicesOpen ? "max-h-[34rem]" : "max-h-0"
              }`}
            >
              {Services.map((service, index) => (
                <div
                  key={index}
                  className="py-2 space-y-1 flex flex-col items-start focus:bg-transparent"
                >
                  <h2 className="font-medium text-[#0E3172]">
                    {service.title}
                  </h2>
                  <ul className="">
                    {service.technologies.map((tech, techIndex) => (
                      <Link key={techIndex} onClick={handleLinkClick} to={tech.link}><li className="text-[#7D8D9A] font-medium cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 hover:text-blue-800 origin-left">
                        {tech.text}
                      </li></Link>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Link
            to="/portfolio"
            className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Portfolio
          </Link>
          <Link
            to="/blogs"
            className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Blogs
          </Link>
          <Link
            to="/ContactUS"
            className="hover:text-blue-800 hover:scale-105 transition-transform ease-in-out font-bold text-[#0E3172]"
            onClick={handleLinkClick}
          >
            Contact US
          </Link>
        </div>
      )}
    </nav>
  );
}
