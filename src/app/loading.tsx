import React from "react";

const Loading = () => {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#0d0e10] text-white p-4">
      {/* Animated Dumbbell / Pulse Loader */}
      <div className="relative flex items-center justify-center mb-6">
        {/* Glowing Background Pulse */}
        <div className="absolute w-20 h-20 bg-[#a3e635]/20 rounded-full blur-xl animate-ping" />

        {/* DaisyUI Spinner */}
        <span className="loading loading-spinner loading-lg text-[#a3e635] relative z-10 w-12 h-12" />
      </div>

      {/* Text Container */}
      <div className="text-center space-y-2">
        <h2 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-white animate-pulse">
          Loading Workouts<span className="text-[#a3e635]">...</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 font-medium tracking-wider uppercase">
          Preparing your training routine
        </p>
      </div>

      {/* Progress Line */}
      <div className="w-48 h-1 bg-zinc-800 rounded-full mt-6 overflow-hidden relative">
        <div className="w-1/2 h-full bg-[#a3e635] rounded-full animate-pulse absolute left-0 top-0 translate-x-full duration-1000" />
      </div>
    </div>
  );
};

export default Loading;
