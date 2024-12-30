import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-600 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section - Get in Touch */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
              accumsan eros, sit amet auctor nunc. Nullam ac purus.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="text-orange-500">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>London Eye, London, UK</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-orange-500">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span>+123-456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="text-orange-500">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>mailto@subx.com</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="E-mail address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#0E3172] text-white py-2 rounded-lg hover:bg-orange-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <iframe
            title="map"
            className="w-full h-64 rounded-lg"
            src="https://www.google.com/maps/place/P.A.F+Base+Nawabshah+Nawabshah,+Shaheed+Benazirabad,+Sindh,+Pakistan/@26.2358405,68.3832779,15z/data=!3m1!4b1!4m6!3m5!1s0x394a4ccd7d8c18b1:0xe65a364eb4acb79a!8m2!3d26.235822!4d68.3935776!16s%2Fg%2F11s74l6vqh?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
