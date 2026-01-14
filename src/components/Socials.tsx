'use client';

import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';

export default function Socials(): JSX.Element {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-10 right-4 flex flex-col space-y-2 z-50">
      {/* Gmail */}
      <div className="relative flex items-center justify-center">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=info@codefyze.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Send via Gmail"
          className="relative z-10 bg-white rounded-full p-2 m-2 text-[#0E3172] transition-colors duration-300"
        >
          <SiGmail className="text-4xl md:text-5xl" />
        </a>

        {/* Pulse animation */}
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring" />
          <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75" />
        </span>
      </div>

      {/* LinkedIn */}
      <div
        className="relative flex items-center justify-center cursor-pointer"
        onClick={() =>
          openInNewTab('https://www.linkedin.com/company/codefyze')
        }
      >
        <div className="relative z-10 bg-white rounded-full p-2 m-2 text-[#0E3172]">
          <FaLinkedin className="text-4xl md:text-5xl" />
        </div>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring" />
          <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75" />
        </span>
      </div>

      {/* WhatsApp */}
      <div
        className="relative flex items-center justify-center cursor-pointer"
        onClick={() => openInNewTab('https://wa.me/971552654401')}
      >
        <div className="relative z-10 bg-white rounded-full p-2 m-2 text-[#0E3172]">
          <FaWhatsapp className="text-4xl md:text-5xl" />
        </div>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring" />
          <span className="absolute w-full h-full rounded-full border-2 border-[#0E3172] animate-pulse-ring delay-75" />
        </span>
      </div>
    </div>
  );
}
