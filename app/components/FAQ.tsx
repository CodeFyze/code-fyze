"use client";
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  page: "home" | "landing";
}

const FAQ: React.FC<FAQProps> = ({ page }) => {
  const [open, setOpen] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    if (open.includes(index)) {
      setOpen(open.filter((i) => i !== index));
    } else {
      setOpen([...open, index]);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What industries do you specialize in?",
      answer:
        "We provide IT solutions for a wide range of industries, including healthcare, finance, e-commerce, manufacturing, and more. Our team has the expertise to adapt to the unique needs of any sector.",
    },
    {
      question: "Can I customize a service bundle?",
      answer: "Yes, we offer flexible service bundles to meet your specific business needs.",
    },
    {
      question: "How do you protect data?",
      answer: "We use advanced encryption, firewalls, and regular security audits to protect your data.",
    },
    {
      question: "How do you ensure data security?",
      answer: "Our team implements best practices, including secure coding and regular vulnerability assessments, to ensure your data remains secure.",
    },
    {
      question: "What is a landing page?",
      answer:
        "A landing page is a standalone web page designed specifically for a marketing or advertising campaign. It's where visitors land after clicking on a link in an email, advertisement, or search engine result.",
    },
    {
      question: "Why are landing pages important?",
      answer:
        "Landing pages play a crucial role in converting visitors into leads or customers. They are tailored to a specific audience and offer a clear call-to-action (CTA), making them highly effective for driving conversions and achieving marketing objectives.",
    },
    {
      question: "What makes a good landing page design?",
      answer:
        "A good landing page design agency solutions are visually appealing, easy to navigate, and focused on a single objective. It should have a compelling headline, engaging content, clear CTA, and relevant visuals. Additionally, it should be optimized for mobile devices and load quickly.",
    },
    {
      question: "How long does it take to design a landing page?",
      answer:
        "The time required to design a landing page depends on various factors, including complexity, scope, and client feedback. Typically, it can take anywhere from a few days to a couple of weeks to design and refine a landing page.",
    },
    {
      question: "Can you create landing pages for different industries?",
      answer:
        "Yes, as a landing page design agency, we have experience creating landing pages for a wide range of industries, including e-commerce, healthcare, technology, real estate, and more. Our team customizes each landing page to suit the specific needs and objectives of our clients.",
    },
    {
      question: "Do you provide A/B testing for landing pages?",
      answer:
        "Yes, we offer A/B testing services to optimize landing pages for maximum effectiveness. By testing different variations of elements such as headlines, images, and CTAs, we can identify which versions perform best and refine the design accordingly to improve conversion rates.",
    },
    {
      question: "How do you ensure my landing page is optimized for search engines (SEO)?",
      answer:
        "We incorporate SEO best practices into our landing page design process, including keyword research, optimized meta tags, and relevant content. Additionally, we ensure that landing pages are mobile-friendly, load quickly, and provide a positive user experience—all factors that contribute to higher search engine rankings.",
    },
    {
      question: "Can you integrate my landing page with my existing website or CRM system?",
      answer:
        "Yes, we can integrate your landing page with your existing website or CRM (Customer Relationship Management) system. As a landing page design agency our team has the expertise to seamlessly integrate your landing page and ensure smooth functionality.",
    },
  ];

  const homeFAQs = faqs.slice(0, 4); 
  const landingFAQs = faqs.slice(4); 

  const heading = page === "home"
    ? "Welcome to Our Home Page FAQ Section"
    : "Frequently Asked Questions (FAQs) Landing Page Design Agency Solutions";

  const subheading =
    page === "home"
      ? "Learn more about our core services and how we can help your business."
      : "Everything You Need to Know About Our IT Services";

  const displayedFAQs = page === "home" ? homeFAQs : landingFAQs;

  return (
    <div className="bg-gray-100 border bg-[url('/Ellipse237.png')] bg-cover bg-center py-10 px-6 sm:px-12 md:px-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">{heading}</h2>
      <p className="text-gray-600 mb-8">{subheading}</p>
      <div className="space-y-4 border rounded-md">
        {displayedFAQs.map((faq, index) => (
          <div key={index} className="bg-white rounded-md shadow-md overflow-hidden">
            <button
              className="w-full text-left px-4 py-3 sm:py-4 font-semibold text-[#0E3172] text-lg sm:text-xl focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
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
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
