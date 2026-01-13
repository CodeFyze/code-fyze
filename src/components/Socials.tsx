"use client";

import React from "react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Socials: React.FC = () => {
  const openInNewTab = (url: string): void => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed bottom-10 right-4 z-50 flex flex-col space-y-2">
      {/* Gmail */}
      <div className="relative flex items-center justify-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@codefyze.com"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 m-2 flex items-center justify-center rounded-full bg-white p-2 text-[#0E3172]"
        >
          <SiGmail className="text-4xl md:text-5xl" />
        </a>

        {/* Animation layers */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#0E3172] animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75" />
        </span>
      </div>

      {/* LinkedIn */}
      <div
        className="relative flex cursor-pointer items-center justify-center"
        onClick={() =>
          openInNewTab("https://www.linkedin.com/company/codefyze")
        }
      >
        <div className="z-10 m-2 flex items-center justify-center rounded-full bg-white p-2 text-[#0E3172]">
          <FaLinkedin className="text-4xl md:text-5xl" />
        </div>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#0E3172] animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75" />
        </span>
      </div>

      {/* WhatsApp */}
      <div
        className="relative flex cursor-pointer items-center justify-center"
        onClick={() => openInNewTab("https://wa.me/+971552654401")}
      >
        <div className="z-10 m-2 flex items-center justify-center rounded-full bg-white p-2 text-[#0E3172]">
          <FaWhatsapp className="text-4xl md:text-5xl" />
        </div>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute inset-0 rounded-full border-2 border-[#0E3172] animate-pulse-ring" />
          <span className="absolute inset-0 rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75" />
        </span>
      </div>
    </div>
  );
};

export default Socials;
