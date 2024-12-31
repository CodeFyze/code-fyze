"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqs } from "~/constants/faqs";

interface FAQProps {
  faq: faqs;
}

const FAQ: React.FC<FAQProps> = ({ faq }) => {
  const [open, setOpen] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter((i) => i !== index));
    } else {
      setOpen([...open, index]);
    }
  };

  return (
    <div className="bg-gray-100 border bg-[url('/Ellipse237.png')] bg-cover bg-center py-10 px-6 sm:px-12 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{faq.heading}</h2>
      <p className="text-gray-600 mb-8">{faq.subheading}</p>
      <div className="space-y-4 border rounded-md">
        {faq.questions.map((item, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
            <button
              className="w-full text-left px-4 py-3 sm:py-4 font-semibold text-[#0E3172] text-lg sm:text-xl focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="ml-2">
                {open.includes(index) ? (
                  <FiChevronUp className="text-xl" />
                ) : (
                  <FiChevronDown className="text-xl" />
                )}
              </span>
            </button>
            <div
              className={`transition-[max-height,opacity,transform] duration-500 ease-in-out ${
                open.includes(index)
                  ? "max-h-screen opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              } overflow-hidden`}
            >
              <div className="px-4 py-3 sm:py-4 text-gray-600 border-t border-gray-200">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
