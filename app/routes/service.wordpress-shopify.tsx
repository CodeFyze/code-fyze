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
  const description = "Wordpress and Shopify";

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
                  About Wordpress & Shopify Development
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                At CodeFyze, we specialize in building dynamic, user-friendly websites and online stores using two of the most powerful platforms available: WordPress and Shopify. Whether you&apos;re looking for a content-rich website or a feature-packed e-commerce platform, we tailor our solutions to meet your unique business needs.
                </p>
              </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-[26rem]">
                <img
                  className="object-cover h-full"
                  src={"/services/Wordpress-Shopify/Wordpress-Shopify_1.jpg"}
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
                WordPress Development
                </div>
                <p className="text-gray-700">WordPress is the go-to platform for creating highly customizable, content-driven websites. Known for its flexibility and scalability, WordPress powers millions of websites worldwide. From blogs and business websites to membership portals and online stores, we leverage the full potential of WordPress to deliver:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li>Custom themes and plugins for enhanced functionality</li>
                  <li>Search engine-friendly structures for improved rankings</li>
                  <li>Seamless integrations with third-party tools</li>
                  <li>Easy-to-manage admin dashboards</li>
                </ul>
                <p className="text-gray-700">With WordPress, we give you the freedom to scale your website as your business grows while maintaining exceptional performance and user experience.</p>
                </div>
              <div className="w-full h-auto max-md:aspect-video md:w-2/5 md:h-72">
                <img
                  className="object-cover h-full"
                  src={"/services/Wordpress-Shopify/Wordpress-Shopify_2.png"}
                  alt={"SEO"}
                />
              </div>
            </motion.div> <motion.div
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-3/4 md:h-auto px-6 py-4 md:w-3/5">
                <div className="font-bold text-xl mb-2 font-baskervville">
                Shopify Development
                </div>
                <p className="text-gray-700">Shopify is a leading e-commerce platform that enables businesses to create professional, scalable online stores with ease. Ideal for businesses of all sizes, Shopify offers robust features, seamless integrations, and a simple interface for managing your store. At CodeFyze, we help you:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li>Build visually stunning, conversion-focused storefronts</li>
                  <li>Integrate payment gateways, shipping, and inventory systems</li>
                  <li>Customize themes and extend functionality with Shopify apps</li>
                  <li>Migrate from existing platforms to Shopify effortlessly</li>
                </ul>
                <p className="text-gray-700">With Shopify, you can launch and manage an online store that delivers a seamless shopping experience for your customers.</p>
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
              className={`w-4/5 h-full rounded-xl overflow-hidden shadow-lg bg-white bg-opacity-90 flex max-md:flex-col-reverse items-center bg-[url('/hero-sec-bg.png')] bg-cover bg-center`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.01 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-full px-6 py-4 md:py-10">
                <div className="font-bold text-xl mb-2 font-baskervville">
                Our Shopify & WordPress Development Process
                </div>
                <p className="text-gray-700">At CodeFyze, our WordPress and Shopify development processes are designed to deliver e-commerce and content management solutions that align perfectly with your business objectives. By following a structured and collaborative approach, we ensure every project meets the highest standards of quality and functionality.</p>
                <p className="text-gray-700">Here&apos;s how we bring your vision to life:</p>
                <ul className="text-gray-700 text-base font-mingzat list-disc list-inside">
                  <li><b>Discovery & Planning:</b> We begin by gaining a deep understanding of your business goals, target audience, and specific requirements. This phase involves defining a clear project scope, setting timelines, and crafting a comprehensive strategy for your WordPress or Shopify website.</li>
                  <li><b>Design & Prototyping:</b> Our designers create visually stunning mockups, wireframes, and prototypes to map out the layout and user experience of your website. Whether it's a customizable WordPress theme or a Shopify storefront, we ensure the design reflects your brand identity and enhances user engagement.</li>
                  <li><b>Development & Integration:</b> Our developers bring the design to life by coding responsive, high-performing websites tailored to your needs. For Shopify, we customize themes and integrate apps or APIs for additional functionality. For WordPress, we build custom plugins or optimize existing ones to ensure seamless functionality.</li>
                  <li><b>Testing & Quality Assurance:</b> We conduct extensive testing to identify and fix any issues before the website goes live. From load performance and security checks to compatibility across devices and browsers, we ensure a flawless user experience.</li>
                  <li><b>Launch & Deployment:</b> Once approved, we deploy the website to a live environment. For Shopify, this involves migrating data, setting up payment gateways, and ensuring the storefront is optimized for sales. For WordPress, we handle content migration, plugin configurations, and server setups for a smooth launch.</li>
                  <li><b>Ongoing Support & Optimization:</b> Our work doesn&apos;t stop at launch. We provide ongoing maintenance, performance monitoring, and updates to ensure your website stays secure, fast, and aligned with your evolving business goals.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
