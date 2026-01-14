'use client';

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function DevelopmentProcess() {
  const divVariant: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full relative lg:-top-24">
      <div className="w-full h-max bg-cover bg-center py-8" style={{ backgroundImage: "url('/white-background.png')" }}>
        <div className="w-full h-full flex flex-col justify-center items-center max-md:gap-[7vw] gap-[18vw] md:gap-28 xl:gap-[10vw]">

          {/* Heading */}
          <motion.div
            className="heading flex flex-col items-center w-10/12 md:w-4/6 lg:w-6/12 sm:gap-2"
            variants={divVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
          >
            <p className="font-extrabold sm:font-bold text-[#0E3172] text-center text-[6vw] md:text-2xl lg:text-4xl">
              Our Development Process
            </p>

            <p className="font-medium text-center text-[3vw] md:text-base lg:text-lg">
              At <span className="font-extrabold">CodeFyze</span>, one of the top software
              companies in the world, we follow a streamlined process from planning
              and design to development and deployment. Each step is tailored to
              deliver innovative solutions that meet client needs with precision.
            </p>
          </motion.div>

          {/* Image + Messages */}
          <div className="relative">

            {/* Desktop Image */}
            <Image
              src="/human-with-laptop.png"
              alt="human-with-laptop"
              width={800}
              height={600}
              className="w-[55vw] h-auto max-md:hidden object-contain"
              priority
            />

            {/* Mobile / Message Wrapper */}
            <div className="w-full h-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-y-5">

              {/* Mobile Background Image */}
              <div className="px-20 w-full md:hidden">
                <div className="bg-humanWithoutArrows bg-center bg-contain bg-no-repeat w-full aspect-[512/554]" />
              </div>

              {/* Message Boxes */}
              <motion.div
                className="msg -top-[13vw] -left-[15vw] md:-top-[10vw] lg:-top-[8vw]"
                variants={divVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h2 className="font-bold">Project Planning</h2>
                <p>
                  We collaborate closely with our client to understand their
                  requirements, <span className="font-bold">goals and objectives</span>,
                  ensuring a comprehensive plan is in place before starting development.
                </p>
              </motion.div>

              <motion.div
                className="msg -top-[6vw] -right-[18vw] sm:-top-[9vw] md:-top-[7vw] lg:-top-[5vw]"
                variants={divVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h2 className="font-bold">Testing and Deployment</h2>
                <p>
                  We rigorously test and deploy the developed software, ensuring
                  it meets the highest quality standards and is ready for real users.
                </p>
              </motion.div>

              <motion.div
                className="msg bottom-[16vw] -left-[19vw]"
                variants={divVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h2 className="font-bold">Development</h2>
                <p>
                  Our skilled developers bring the designs to life, writing clean
                  and <span className="font-bold">efficient code</span> following best practices.
                </p>
              </motion.div>

              <motion.div
                className="msg bottom-[9vw] -right-[19vw]"
                variants={divVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.4 }}
              >
                <h2 className="font-bold">Designing</h2>
                <p>
                  Our designers create intuitive and
                  <span className="font-bold"> user-friendly interfaces</span>,
                  ensuring a seamless experience aligned with branding.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
