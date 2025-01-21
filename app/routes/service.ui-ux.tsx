import { motion } from "framer-motion";

export default function ServiceSeo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const title = "Graphic Design Services";
  const description = "UI/UX Design";

  return (
    <>
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
                  UI/UX Design
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                UI (User Interface) and UX (User Experience) design are the cornerstones of creating engaging, intuitive, and visually appealing digital products. UI focuses on the visual elements and layout, ensuring a seamless interaction with your website or app. UX, on the other hand, ensures the overall experience is smooth, efficient, and enjoyable for users. Together, UI/UX design bridges the gap between your business goals and your customers' needs, creating digital solutions that are not only functional but also delightful to use.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/UI-UX/UI-UX_1.png"}
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
                HOW OUR UI/UX DESIGNERS WORK
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                At CodeFyze, our UI/UX design process is user-centric and driven by creativity and research. Here&apos;s how our designers bring your vision to life:
                </p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Research & Analysis:</b> Understand your business objectives and target audience. Conduct competitor analysis to identify industry trends and opportunities.</li>
                  <li><b>Wireframing & Prototyping:</b> Create wireframes and low-fidelity prototypes to outline the user journey. Design interactive prototypes to test usability and gather feedback.</li>
                  <li><b>Visual Design:</b> Develop visually stunning, brand-aligned designs that enhance user engagement. Focus on consistency in color schemes, typography, and layout.</li>
                  <li><b>Usability Testing:</b> Test the designs with real users to identify areas for improvement. Refine designs to ensure a flawless user experience.</li>
                  <li><b>Delivery & Collaboration:</b> Hand over designs to developers with detailed guidelines. Work closely with the development team to ensure the final product matches the vision.</li>
                </ul>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/UI-UX/UI-UX_2.jpg"}
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
                  Key Benefits of Implementing UI/UX Designs
                </div>
                <p className="text-gray-700">Investing in UI/UX design brings several advantages to your business:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Enhanced User Engagement:</b> Intuitive and appealing designs keep users engaged and reduce bounce rates.</li>
                  <li><b>Improved Usability:</b> A well-thought-out user experience ensures seamless navigation, making it easy for users to achieve their goals.</li>
                  <li><b>Increased Conversion Rates:</b> A user-friendly interface motivates users to take desired actions, such as making a purchase or signing up.</li>
                  <li><b>Stronger Brand Identity:</b> Consistent and visually appealing designs strengthen your brand&apos;s credibility and recognition.</li>
                  <li><b>Reduced Development Costs:</b> Identifying design flaws early in the process saves time and money during development.</li>
                  <li><b>Customer Satisfaction:</b> By addressing user needs effectively, your business fosters loyalty and long-term relationships.</li>
                </ul>
                <p className="text-gray-700">At CodeFyze, we design with the end-user in mind, ensuring that every interaction with your digital product is meaningful and impactful. Let us help you create designs that stand out and drive success.</p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/UI-UX/UI-UX_3.jpg"}
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
