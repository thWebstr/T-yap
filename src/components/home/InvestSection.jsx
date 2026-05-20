import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const InvestSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="invest"
      className="relative w-full flex justify-center items-center py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Watermark */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-black/[0.02] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Growth
      </div>

      {/* Dynamic Background Glows */}
      <div 
        className="absolute top-[-200px] left-[-200px] w-[800px] h-[800px] opacity-20 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(213,67,5,0.1) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-300px] right-[-200px] w-[800px] h-[800px] opacity-15 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 70%)" }}
      />

      {/* Main Container - Premium Orange Gradient Card */}
      <div
        className="relative z-10 w-full max-w-[1280px] rounded-[40px] py-24 px-8 md:px-20 flex flex-col items-center justify-center text-center overflow-hidden opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]"
        style={{ 
          background: "linear-gradient(135deg, #FF4C00 0%, #D54305 100%)",
          boxShadow: "0 40px 80px rgba(213,67,5,0.25), 0 20px 40px rgba(0,0,0,0.1)"
        }}
      >
        {/* Subtle Tech-Mesh Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
        
        {/* Internal Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        {/* Heading - Upscaled to match design system */}
        <h2 
          className="font-dm font-black text-white max-w-[850px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
          style={{
            fontSize: "clamp(32px, 5.5vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.03em"
          }}
        >
          Invest in the{" "}
          <span style={{ position: "relative", display: "inline-block" }}>
            Future
            <svg
              className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[14px] md:h-[20px]"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z"
                fill="white"
                style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" }}
              />
            </svg>
          </span>{" "}
          of Public Transport Payments.
        </h2>

        {/* Subtitle */}
        <p 
          className="font-dm mt-10 max-w-[700px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.6s_forwards]"
          style={{
            fontSize: "clamp(18px, 2.2vw, 24px)",
            color: "rgba(255,255,255,0.9)",
            lineHeight: "1.6",
            fontWeight: 500
          }}
        >
          First-mover advantage, massive market, recurring revenue, pilot tested. Nigeria's biometric revolution starts here.
        </p>

        {/* Responsive CTA Button */}
        <div className="mt-14 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.8s_forwards]">
          <button
            onClick={() => navigate("/invest")}
            className="group relative flex items-center justify-between bg-white rounded-[16px] px-8 pl-10 py-3 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] active:scale-95"
            style={{ 
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
            }}
          >
            <span 
              className="font-dm font-bold tracking-tight text-[20px] md:text-[22px]"
              style={{ color: "#D54305" }}
            >
              Invest Now
            </span>
            
            {/* Arrow with Glow Effect */}
            <div 
              className="flex items-center justify-center w-[54px] h-[54px] md:w-[60px] md:h-[60px] rounded-[14px] ml-10 transition-all duration-300 group-hover:rotate-45"
              style={{ backgroundColor: "#FF4C00" }}
            >
              <BsArrowUpRight className="text-white text-[24px] md:text-[28px]" />
            </div>

            {/* Subtle Button Shine */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;
