import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUS: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm("service_98qzbeo", "template_6omni09", form.current!, "GCqfRit-FDfnhUHVB")
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setIsSubmitting(false);
          form.current?.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <div className="font-sans bg-contain bg-no-repeat bg-y-repeat bg-topServicesBg">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />

      {/* Header Section */}
      <header className="relative text-center py-16 lg:pb-0">
        <h1 className="text-5xl font-bold">Contact Us</h1>
        <p className="text-gray-400 mt-2">Home / Contact Us</p>
      </header>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16 lg:px-32 lg:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img src="/hero-sec-pic.png" alt="Video Editing" className="rounded-lg" />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">We Always Make The Best</h2>
            <p className="text-gray-400 mb-6">
              Our expertise spans Frontend Development, Backend Systems, Databases, Frameworks, Designing, and SEO Optimization, ensuring a perfect blend of functionality and aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <div className="grid lg:grid-cols-2 gap-8 mx-4 my-4 text-white">
        {/* Left Section - Get in Touch */}
        <div className="bg-black/30 transparent backdrop-blur-xl lg:px-24 rounded-md border-slate-200 border-[3px] shadow-md">
          <h3 className="text-xl font-semibold my-4">Get In Touch</h3>
          <p className="mb-4">
            At CODE FYZE, we believe in powering businesses with cutting-edge IT solutions that are as dynamic as the digital world we live in.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="text-orange-500">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span>Nawabshah, Sindh, Pakistan</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-orange-500">
                <i className="fas fa-phone-alt"></i>
              </div>
              <span>+92 306-3026466</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="text-orange-500">
                <i className="fas fa-envelope"></i>
              </div>
              <span>codefyze@gmail.com</span>
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
        <div className="bg-black/30 transparent backdrop-blur-xl lg:px-24 rounded-md border-slate-200 border-[3px] p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4 text-black" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="E-mail address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#0E3172] text-white py-2 rounded-lg hover:bg-[#134092]"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;