'use client';
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import VisitorLogger from "./VisitorLogger";

export default function ContactForm({ apiUrl }: { apiUrl?: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_98qzbeo",
        "template_6omni09",
        form.current!,
        "GCqfRit-FDfnhUHVB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
          setIsSubmitting(false);
          form.current?.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send message. Please try again.");
          setIsSubmitting(false);
        }
      );
  };

  const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="max-w-[1200px] mx-auto px-6">{children}</div>
  );

  return (
    <div className="font-sans">
      <VisitorLogger apiUrl={apiUrl} path="/contact us" />

      <div className="bg-contain lg:bg-cover" style={{ backgroundImage: 'url(/top-services-bg.png)' }}>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop />

        {/* Header */}
        <header className="relative text-center py-8">
          <Container>
            <h1 className="text-5xl font-bold">Contact Us</h1>
            <p className="text-gray-400 mt-2">Home / Contact Us</p>
          </Container>
        </header>

        {/* Intro Section */}
        <section className="py-16">
          <Container>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-3xl font-bold">We Deliver Excellence Every Time</h2>
              <p className="text-gray-400">
                As the best web development company, we offer a wide range of services — including Frontend Development, Backend, Databases, Frameworks, UI/UX Design, SEO Optimization, Graphic Designing, Social Media Marketing and Management. We combine functionality with aesthetics to create digital solutions that truly stand out.
              </p>
            </div>
          </Container>
        </section>

        {/* Form & Info Section */}
        <section className="py-16">
          <Container>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left - Contact Info */}
              <div className="bg-black/30 backdrop-blur-xl rounded-md border border-slate-200 shadow-md p-6 lg:p-10 text-white">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                <p className="mb-4">
                  At CodeFyze, we believe in powering businesses with cutting-edge IT solutions that are as dynamic as the digital world we live in.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3"><FaMapMarkerAlt className="text-orange-500" /> <span>Karachi, Sindh, Pakistan</span></div>
                  <div className="flex items-center space-x-3"><FaPhoneAlt className="text-orange-500" /> <span>+971 55 265 4401</span></div>
                  <div className="flex items-center space-x-3"><FaEnvelope className="text-orange-500" /> <span>info@codefyze.com</span></div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="https://www.linkedin.com/company/codefyze/" target="_blank"><CiLinkedin size={30} /></a>
                  <a href="https://www.instagram.com/code_fyze/" target="_blank"><FaInstagram size={30} /></a>
                  <a href="https://www.facebook.com/profile.php?id=61566949416573&mibextid=LQQJ4d" target="_blank"><GrFacebookOption size={30} /></a>
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-black/30 backdrop-blur-xl rounded-md border border-slate-200 shadow-md p-6 lg:p-10">
                <h3 className="text-xl font-semibold mb-4 text-white">Send a Message</h3>
                <form ref={form} onSubmit={sendEmail} className="space-y-4 text-black">
                  <input type="text" name="user_name" placeholder="Name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-white" required />
                  <input type="email" name="user_email" placeholder="E-mail address" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-white" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                  <textarea name="message" placeholder="Message" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring bg-white" required />
                  <button type="submit" className="w-full bg-[#0E3172] text-white py-2 rounded-lg hover:bg-[#134092]" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}