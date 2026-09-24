import Image from "next/image";
import Link from "next/link";
import bannerIMG from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <section className="relative overflow-hidden rounded-2xl bg-[#121418] border border-zinc-800/60 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[380px]">
        <div className="flex-1 space-y-5 z-10 max-w-lg text-left">
          <span className="block text-[11px] font-bold tracking-widest text-[#a3e635] uppercase">
            WORKOUT LIBRARY
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white  font-sans">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal max-w-md">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="pt-2">
            <Link
              href="/plans"
              className="btn border-none bg-[#ccff00]!  font-black text-xs  px-6 rounded-lg "
            >
              BROWSE WORKOUTS
            </Link>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center md:justify-end w-full max-w-xs sm:max-w-md">
          <div className="relative w-65 h-65 sm:w-[320px] sm:h-80 lg:w-90 lg:h-90">
            <Image src={bannerIMG} alt="Gym Machine Illustration" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
