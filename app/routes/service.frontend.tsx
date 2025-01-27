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

  const title = "Web Development Services";
  const description = "Frontend Development";

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
                What You Need To Know About Frontend Development
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                At CodeFyze, we specialize in crafting exceptional user experiences through innovative frontend development. Frontend development is the art of building the visible parts of a website or application—everything the user interacts with. From visually appealing designs to seamless navigation, it&apos;s what ensures your business stands out online. Our team focuses on delivering modern, responsive, and user-friendly interfaces that not only captivate but also perform flawlessly across devices. Whether it&apos;s a web portal, e-commerce site, or custom software, we make sure your brand leaves a lasting impression.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/Frontend/Frontend_1.jpg"}
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
                  Technologies we use
                </div>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                <li><b>React JS:</b> A robust library for building highly interactive web applications with dynamic and responsive user interfaces.</li>
                  <li><b>React Native:</b> Creating cross-platform applications with a native look and feel, ensuring a seamless experience on both iOS and Android.</li>
                  <li><b>Vue JS:</b> Developing lightweight and feature-rich frontend applications tailored to meet unique business requirements.</li>
                  <li><b>Next JS:</b> Implementing server-side rendering and static site generation to enhance performance and SEO for modern web applications.</li>
                  <li><b>Remix:</b> Building fast, scalable, and highly interactive web applications with an emphasis on user experience and developer productivity.</li>
                </ul>
              </div>
              <div className="w-full h-full max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full w-full"
                  src={"/services/Frontend/Frontend_2.jpg"}
                  alt={"SEO"}
                />
              </div>
            </motion.div>
            <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center bg-[url('/hero-sec-bg.png')] bg-cover bg-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full px-6 py-4 md:py-10">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  Why should you Hire Us?
                </div>
                <p>When you partner with CodeFyze, you're choosing a team that&apos;s committed to driving results and delivering excellence. Here's why we stand out:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Custom-Tailored Development:</b> We provide personalized solutions aligned with your business objectives. From SRS requirements to flawless delivery, we ensure every detail is handled with precision.</li>
                  <li><b>Experienced in Diverse Programming Stacks:</b> Our developers bring a wealth of experience in creating tailored solutions for web, mobile, and desktop platforms.</li>
                  <li><b>Advanced UX Expertise:</b> We focus on crafting responsive and intuitive user experiences, ensuring seamless usability for your customers.</li>
                  <li><b>Proactive Engineering Practices:</b> Instead of merely fixing issues, we implement preventive engineering to future-proof your software.</li>
                  <li><b>Cost-Effective Solutions:</b> CodeFyze offers unmatched value with affordable development services, enabling businesses of all sizes to achieve premium results.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
