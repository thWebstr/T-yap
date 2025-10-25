import React from "react";

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#ffffff]">
      {/* Right-side orange glow near Hero section */}
      <div
        className="absolute w-[800px] h-[800px] bg-[rgba(255,76,0,0.6)] rounded-full blur-[400px] opacity-40 right-[-550px] top-[200px]"
      ></div>

      {/* Left-side orange glow near How It Works */}
      <div
        className="absolute w-[800px] h-[800px] bg-[rgba(255,76,0,0.6)] rounded-full blur-[400px] opacity-40 left-[-550px] top-[1200px]"
      ></div>

      {/* Right-side mid section glow (for About/Features) */}
      <div
        className="absolute w-[700px] h-[700px] bg-[rgba(255,76,0,0.6)] rounded-full blur-[400px] opacity-30 right-[-500px] top-[2000px]"
      ></div>

      {/* Bottom soft glow (for footer aesthetic) */}
      <div
        className="absolute w-[900px] h-[900px] bg-[rgba(255,76,0,0.5)] rounded-full blur-[400px] opacity-25 left-[50%] translate-x-[-50%] bottom-[-600px]"
      ></div>
    </div>
  );
};

export default GlobalBackground;
