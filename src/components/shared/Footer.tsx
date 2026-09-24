import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-[#0b0c0e] text-zinc-500 border-t border-zinc-900 py-6 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 container ">
          <div className="flex items-center gap-2 font-black tracking-wider uppercase text-zinc-400">
            <Image src={logo} alt="logo of fitlog"></Image> FITLOG
          </div>

          <div className="text-center sm:text-right text-zinc-600">
            &copy; 2026 FitLog — Workout Library. Train hard, log minimal.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
