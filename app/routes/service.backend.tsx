import { motion } from "framer-motion";
import Navbar from "~/components/Navbar";

export default function ServiceSeo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const title = "Web Development Services";
  const description = "Backend Development";

  return (
    <>
      <Navbar />
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-y-repeat"
        style={{
          backgroundImage: "url('/element3.png')",
        }}
      >
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 font-baskervville text-[#0E3172]">
            {title}
          </h1>
          <p className="text-lg text-black font-mingzat">{description}</p>
        </div>
        <div className="">
          <div className="gap-6 flex flex-col items-center">
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                What You Need To Know About Back-end Development
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                At CodeFyze, we understand that while the frontend engages your users, it&apos;s the backend that powers your application. Back-end development is the backbone of any web or mobile application, handling the logic, database management, and server interactions that keep everything running smoothly behind the scenes.
From processing user data to ensuring secure transactions, the backend is critical for delivering functionality and reliability. Our team specializes in designing and developing robust, scalable, and high-performance back-end systems tailored to meet your business requirements. Whether you&apos;re building a small business platform or an enterprise-grade application, CodeFyze ensures your backend is secure, efficient, and ready to scale as your business grows.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/Backend/Backend_1.jpg"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center md:flex-row-reverse`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Backend Technologies we use
                </div>
                <p className="text-gray-700">Our backend development expertise spans several advanced frameworks and tools, ensuring your applications are built for performance and scalability:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Node.js:</b> A lightweight and fast runtime for building efficient, scalable, and event-driven server-side applications.</li>
                  <li><b>Express:</b> A flexible and minimalist Node.js framework for developing APIs and web applications seamlessly.</li>
                  <li><b>PHP:</b> A versatile and widely-used scripting language for building dynamic web applications with rich functionality.</li>
                  <li><b>NestJS:</b> A modern framework built on Node.js for creating scalable and maintainable server-side applications with a modular architecture.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/Backend/Backend_2.jpg"}
                  alt={"SEO"}
                />
              </div>
            </motion.div> 
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Databases we use
                </div>
                <p className="text-gray-700">Our backend development expertise spans several advanced frameworks and tools, ensuring your applications are built for performance and scalability:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>MySQL:</b> A highly reliable and widely-used relational database for structured data storage.</li>
                  <li><b>PostgreSQL:</b> A powerful open-source database system ideal for handling complex queries and large datasets.</li>
                  <li><b>MongoDB:</b> A NoSQL database designed for flexibility, scalability, and unstructured data.</li>
                  <li><b>Firebase:</b> A real-time database solution for building fast and responsive applications with cloud-based synchronization.</li>
                </ul>
                <p className="text-gray-700">With CodeFyze, you&apos;re not just getting backend development—you&apos;re getting a solution that ensures reliability, security, and performance. Let us handle the heavy lifting while you focus on growing your business.</p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/Backend/Backend_3.png"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
