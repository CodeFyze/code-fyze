export default function Innovation() {
  return (
    <div className="flex w-screen h-full px-10 lg:px-[10vw] lg:py-11 mt-11">
      <div className="flex flex-col gap-y-7 items-center justify-around md:flex-row w-full text-white bg-black/30 transparent backdrop-blur-xl py-11 px-11 lg:px-24 rounded-md border-slate-200 border-[3px]">
        <div className="w-full md:w-[40%] text-center">
          <h1 className="font-bold text-xl md:text-2xl md:text-start lg:text-3xl">
            Innovation at Work
          </h1>
          <p className="font-medium text-sm md:text-base md:text-start">
            Innovative technology to transform your operations and drive growth.
          </p>
        </div>
        <div className="flex flex-col justify-around sm:flex-row gap-y-7">
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-black">1500+</h1>
            <p className="text-center">Success Projects</p>
          </div>
          <div className="w-full h-[2px] sm:h-full sm:w-[2px] md:w-10 bg-white/30 backdrop-blur-md"></div>
          <div className="w-full md:w-[29%] flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-5xl font-black">500+</h1>
            <p className="text-center">Happy Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}
