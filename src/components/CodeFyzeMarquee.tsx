import Marquee from "./ui/marquee";

export function CodeFyzeMarquee() {

  return (
    <div className="relative flex h-14 w-full flex-col items-center justify-center overflow-hidden bg-slate-300 bg-opacity-70 backdrop-blur-sm">
      <Marquee pauseOnHover className="[--duration:10s]">
        {/* Array of images */}
        {Array.from({ length: 16 }).map((_, i) => (
          <img
            key={i}
            src={`/icons/${i+1}.png`}
            alt={`logo ${i+1}`}
            className="w-auto h-8 mx-4 block object-contain"
          />
        ))}
        {/* <img
          src="/logo.png"
          alt="logo"
          className="w-44 h-full block object-contain"
        /> */}
      </Marquee>
      <div className="w-7 pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="w-7 pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
