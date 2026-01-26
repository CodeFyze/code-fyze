"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

/* =========================
   TESTIMONIALS CONSTANT
========================= */
const testimonials = [
  {
    name: "Michael Anderson",
    role: "Custom Web Development",
    rating: 5,
    review:
      "CodeFyze delivered a fully custom website that perfectly matched our business needs. The design, performance, and functionality exceeded our expectations.",
  },
  {
    name: "Sarah Thompson",
    role: "Website Maintenance & Support",
    rating: 5,
    review:
      "We rely on CodeFyze for ongoing website maintenance. Their timely updates and reliable support have made managing our website completely stress-free",
  },
  {
    name: "David Wilson",
    role: "SEO Services",
    rating: 5,
    review:
      "CodeFyze's SEO strategy helped us achieve strong keyword rankings and consistent organic traffic growth. Their approach is professional and results-driven.",
  },
  {
    name: "Emily Roberts",
    role: "PPC Advertising",
    rating: 5,
    review:
      "Our PPC campaigns became more profitable after CodeFyze optimized them. Lower ad spend and higher conversions made a huge difference for our business",
  },
  {
    name: "James Carter",
    role: "E-Commerce Development",
    rating: 5,
    review:
      "CodeFyze built an excellent e-commerce platform for us. The checkout flow is smooth, secure, and user-friendly, leading to increased online sales.",
  },
  {
    name: "Daniel Martinez",
    role: "Responsive Web Design",
    rating: 5,
    review:
      "Thanks to CodeFyze, our website works flawlessly across all devices. Mobile performance improved, and user engagement increased noticeably.",
  },
  {
    name: "Sophia Miller",
    role: "Web Application Development",
    rating: 5,
    review:
      "CodeFyze developed a powerful web application tailored to our internal processes. Their technical skills and communication were outstanding.",
  },
  {
    name: "Andrew Johnson",
    role: "Website Speed Optimization",
    rating: 5,
    review:
      "After CodeFyze optimized our website speed, loading times improved significantly. This had an immediate positive impact on user experience.",
  },
  {
    name: "Laura Williams",
    role: "WordPress CMS Development",
    rating: 5,
    review:
      "Managing content is now simple thanks to CodeFyze’s WordPress development. The site is fast, secure, and easy to update.",
  },
  {
    name: "Robert Taylor",
    role: "Landing Page Development",
    rating: 5,
    review:
      "The landing pages created by CodeFyze are highly optimized for conversions. We saw an immediate increase in qualified leads.",
  },
  {
    name: "Daniel Roberts",
    role: "Flutter App Development",
    rating: 5,
    review:
      "CodeFyze delivered a high-performance Flutter app with a smooth and consistent experience across both iOS and Android. The quality and speed of delivery were impressive.",
  },
  {
    name: "Sophia Bennett",
    role: "Cross-Platform Flutter App",
    rating: 5,
    review:
      "Using Flutter, CodeFyze built a single app that works perfectly on multiple platforms. The UI is clean, fast, and exactly what we envisioned.",
  },
  {
    name: "Mark Thompson",
    role: "IOS Mobile App",
    rating: 5,
    review:
      "CodeFyze’s Flutter expertise helped us launch our ios app faster without compromising quality. Performance, scalability, and design were all handled professionally.",
  },
  
];

/* ========================= */

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Animation Variant
  const divVariant: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Auto Play
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change slide every 4s

    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const active = testimonials[index];

  return (
    <section className="w-full bg-gray-200"
    id="testimonials"
    >
        
      <div
        className="w-full bg-cover bg-center  py-20 md:py-28"
        //style={{ backgroundImage: "url('/white-background.png')" }}
      >
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-12">
          {/* Heading */}
          <motion.div
            className="text-center max-w-[760px] space-y-3"
            variants={divVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <h2 className="font-bold text-[#0E3172] text-2xl md:text-3xl lg:text-4xl">
              What Our Clients Say
            </h2>

            <p className="text-[#7D8D9A] text-sm md:text-lg">
              Trusted by businesses worldwide. Real feedback from real clients.
            </p>
          </motion.div>

          {/* Slider Card */}
          <motion.div
            key={index}
            variants={divVariant}
            initial="hidden"
            animate="visible"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="
              w-full max-w-[900px]
              bg-white/90 backdrop-blur-xl
              border border-gray-200 shadow-xl
              rounded-2xl p-6 md:p-10
              text-center space-y-6
            "
          >
            {/* Stars */}
            <div className="flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < active.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Review */}
            <p className="text-[#7D8D9A] text-base md:text-lg leading-relaxed">
              “{active.review}”
            </p>

            {/* Name */}
            <div className="space-y-1">
              <h3 className="font-semibold text-[#0E3172] text-lg">
                {active.name}
              </h3>
              <p className="text-sm text-gray-500">{active.role}</p>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center gap-6">
            <button
              onClick={prev}
              className="p-3 rounded-full border hover:bg-gray-100 transition"
            >
              <ChevronLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    i === index ? "bg-[#0E3172]" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-full border hover:bg-gray-100 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
