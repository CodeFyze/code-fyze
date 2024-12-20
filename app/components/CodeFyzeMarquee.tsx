import Marquee from "./ui/marquee";

export function CodeFyzeMarquee() {
  return (
    <div className="relative flex h-14 w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:10s]">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[33vw] h-full block object-contain"
        />
      </Marquee>
      <div className="w-7 pointer-events-none absolute inset-y-0 left-0 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="w-7 pointer-events-none absolute inset-y-0 right-0 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
