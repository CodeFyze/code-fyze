import React from 'react';
import Contact from '~/components/Contact';
import { useNavigate } from "react-router-dom";
import { MetaFunction } from '@remix-run/node';
import { loader } from '~/root';
// Meta
  export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [
      { title: "About Us | Software Development Agency | CodeFyze" },
      { name: "description",content: "CodeFyze is one of the top software development agencies delivering scalable, custom solutions for global businesses. Call +971 55 265 4401 for a free consultation." },
       { name: "robots", content: "index, follow" }
    ];
  };

const AboutUS: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/contact-us");
  };


  
  
  return (
    <div className="font-sans ">
      <div className='bg-contain bg-y-repeat bg-topServicesBg xl:bg-cover'>
      {/* Header Section */}
      <header className="relative text-center py-4">
        <h1 className="text-5xl font-bold">About Us</h1>
        <p className="text-gray-400 mt-2">Home / About Us</p>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 lg:py-4 flex justify-center">
        <div className="grid grid-cols-1 gap-8 w-3/5 lg:w-2/3">
          {/* Content */}
          <div className=''>
            <h2 className="text-3xl font-bold mb-4">We Always Make The Best</h2>
            <p className="text-gray-400 mb-6">
            At CodeFyze, as one of the top software companies in the world, we blend innovation, strategy, and technology to accelerate your business growth.
            </p>
            <button className="flex items-center px-5 py-2 md:px-6 md:py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300" onClick={handleRedirect}>
            Contact Us
          </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className='flex items-center justify-center mt-10'>
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
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="mt-2">Year Of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">1000+</h3>
                <p className="mt-2">Project Done</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">500+</h3>
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
      </div>

      {/* Contact Component */}
      <div className='py-24'>
        <Contact />
      </div>
    </div>
  );
};

export default AboutUS;