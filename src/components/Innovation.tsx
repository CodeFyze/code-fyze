import { motion } from "framer-motion";

export default function Innovation() {
  const divVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" } as const,
    },
  };

  return (
    <div className="flex w-screen h-full px-10 lg:px-[10vw] py-11 md:py-36 lg:py-[15vw] lg:pb-[18vw] mt-11 bg-contain bg-no-repeat bg-innovationBgVertical max-sm:bg-left sm:bg-innovationBg sm:bg-cover bg-center">
      <motion.div
        className="flex flex-col gap-y-7 items-center justify-around md:flex-row xl:justify-center w-full text-white bg-black/30 transparent backdrop-blur-xl py-11 px-11 lg:px-24 rounded-md border-slate-200 border-[3px]"
        variants={divVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        <div className="w-full md:w-[40%] text-center">
          <h2 className="font-bold text-xl md:text-2xl md:text-start lg:text-2xl">
            Innovation at Work
          </h2>
          <p className="font-medium text-sm md:text-lg md:text-start md:w-60">
            Innovative technology to transform your operations and drive growth.
          </p>
        </div>
        <div className="flex flex-col justify-around sm:flex-row gap-y-7">
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-5xl font-black">1000+</h2>
            <p className="text-center">Success Projects</p>
          </div>
          <div className="w-full h-[2px] sm:h-full sm:w-[2px] md:w-10 bg-white/70 backdrop-blur-md"></div>
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-black">500+</h2>
            <p className="text-center">Happy Clients</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
