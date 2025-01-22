import React from 'react';
import Contact from '~/components/Contact';
import { useNavigate } from "react-router-dom";

const AboutUS: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contactus");
  };
  
  return (
    <div className="font-sans bg-contain bg-no-repeat bg-y-repeat bg-topServicesBg">
      {/* Header Section */}
      <header className="relative text-center py-16 lg:pb-0">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-gray-400 mt-2">Home / About Us</p>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div>
            <img src="/hero-sec-pic.png" alt="Video Editing" className="rounded-lg" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">We Always Make The Best</h2>
            <p className="text-gray-400 mb-6">
            At CODE FYZE, we believe in powering businesses with cutting-edge IT solutions that are as dynamic as the digital world we live in.
            </p>
            <button className="flex items-center md:px-6 md:py-3 p-5 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300" onClick={handleRedirect}>
            Contact Us
          </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='flex items-center justify-center'>
        <div className="w-[80%] py-16 px-4 md:px-16 text-white bg-black/30 transparent backdrop-blur-xl lg:px-24 rounded-md border-slate-200 border-[3px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Content */}
            <div>
              <p className="mb-4">
              Our expertise spans Frontend Development, Backend Systems, Databases, Frameworks, Designing, and SEO Optimization, ensuring a perfect blend of functionality and aesthetics.
              </p>
              {/* Skill Bars */}
              <div className="mb-6">
                <p className="text-sm font-semibold">Web Development</p>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold">App Development</p>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-sm font-semibold">SEO</p>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                  <div className="bg-white h-2 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold">20+</h3>
                <p className="mt-2">Year Of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">1,000+</h3>
                <p className="mt-2">Project Done</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">300+</h3>
                <p className="mt-2">Satisfied Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">64</h3>
                <p className="mt-2">Certified Awards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Component */}
      <div className='py-24'>
        <Contact />
      </div>
    </div>
  );
};

export default AboutUS;