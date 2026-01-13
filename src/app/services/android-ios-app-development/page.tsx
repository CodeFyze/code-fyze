'use client';
import { motion } from "framer-motion";

export default function ServiceSeo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  const title = "App Development Services:";
  const description = "Android & IOS Development";

  return (
    <>
      <div
        className="mx-auto px-4 py-8 bg-contain bg-center bg-y-repeat xl:bg-cover"
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
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Why You need App for your business
                </div>
                <p className="text-gray-700">In today&apos;s fast-paced digital world, having a mobile app is no longer a luxury—it&apos;s a necessity. Mobile apps provide a direct channel to engage with your customers, offering personalized experiences that drive loyalty and increase sales. Here&apos;s why your business needs an app:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Enhanced Customer Engagement:</b> Apps allow you to interact with your customers in real time through notifications, promotions, and updates.</li>
                  <li><b>Increased Accessibility:</b> Be available to your customers 24/7, right at their fingertips.</li>
                  <li><b>Brand Visibility:</b> A well-designed app reinforces your brand presence and keeps you top-of-mind for users.</li>
                  <li><b>Improved Customer Loyalty:</b> Loyalty programs, exclusive offers, and personalized content within apps foster stronger customer relationships.</li>
                  <li><b>Streamlined Operations:</b> Apps can automate processes, improve workflows, and integrate seamlessly with your existing business tools.</li>
                </ul>
                <p className="text-gray-700">An app transforms the way your business connects with customers, helping you stand out in a competitive market while boosting revenue and growth</p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/Wordpress-Shopify/Wordpress-Shopify_3.png"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center md:flex-row-reverse`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Mobile App Development Process
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Planning:</b> This phase involves understanding the project requirements, setting goals, and creating a roadmap for the development process.</li>
                  <li><b>Designing:</b> In this phase, the user interface and user experience are designed to ensure the application is intuitive and visually appealing.</li>
                  <li><b>Defining:</b> This step involves defining the technical specifications, architecture, and technologies to be used in the project.</li>
                  <li><b>Building:</b> The actual development of the application takes place in this phase, where the code is written and integrated.</li>
                  <li><b>Testing:</b> Rigorous testing is conducted to identify and fix bugs, ensuring the application functions correctly and meets quality standards.</li>
                  <li><b>Deployment:</b> The application is deployed to the production environment, making it available to users.</li>
                  <li><b>Maintenance:</b> Ongoing maintenance is performed to update the application, fix any issues, and ensure it continues to meet user needs.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/Wordpress-Shopify/Wordpress-Shopify_3.png"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Why should you Hire Us?
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  At CodeFyze, we combine innovation, expertise, and a customer-first approach to deliver tailored web and mobile solutions that drive results. Our team of skilled developers and designers specializes in creating high-performance, user-friendly apps and websites that align with your business goals. We prioritize intuitive design, seamless functionality, and scalability, ensuring your digital solutions grow with your business. From custom development to ongoing support, CodeFyze is your trusted partner for delivering exceptional results on time and within budget.
                </p>
              </div>
              <div className="w-2/5 sm:w-1/5 h-1/4 md:h-full md:w-2/5 md:flex md:justify-center">
                <img
                  className="object-contain md:p-10 xl:p-18"
                  src={"/help.png"}
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
