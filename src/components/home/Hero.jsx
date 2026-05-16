import React, { useEffect, useState } from "react";
import heroBg from "../../assets/herobg.png";
import Button from "../ui/Button";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 500, y: 500 });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end justify-center overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
      onMouseMove={handleMouseMove}
    >
      {/* --- TEST OPTION 3: Mouse-Tracking Spotlight --- */}
      <div 
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 76, 0, 0.15), transparent 80%)`,
        }}
      />
      {/* ----------------------------------------------- */}
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:60%_center] md:bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      {/* Subtle radial vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.4) 100%)",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 40%)",
        }}
      />

      {/* Blurry background behind content */}
      <div
        className="absolute left-1/2 bottom-1/3 -translate-x-1/2 z-5 w-full lg:w-2/3 h-96 blur-3xl opacity-50"
        style={{
          background: "radial-gradient(ellipse at center, rgba(10,10,10,0.9), transparent 70%)",
        }}
      />

      {/* Radial vignette behind content for readability */}
      <div
        className="absolute left-1/2 bottom-1/3 -translate-x-1/2 z-4 w-full lg:w-3/4 h-80"
        style={{
          background: "radial-gradient(ellipse at center, rgba(10,10,10,0.6) 0%, transparent 80%)",
        }}
      />

      {/* --- Abstract Side Vectors --- */}
      {/* Left Abstract Vector: Rotating Tech Node */}
      <div className="absolute top-[15%] -left-[15%] md:left-[-5%] lg:left-[5%] w-48 h-48 md:w-64 md:h-64 opacity-20 md:opacity-30 select-none pointer-events-none animate-[spin_40s_linear_infinite]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" stroke="#FF4C00" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="50" cy="50" r="38" stroke="#FF4C00" strokeWidth="1.5" strokeDasharray="10 5 2 5" className="animate-[spin_20s_linear_infinite_reverse]" style={{ transformOrigin: "center" }} />
          <circle cx="50" cy="50" r="28" stroke="#FF4C00" strokeWidth="0.5" />
          <path d="M 50 10 L 50 22 M 50 78 L 50 90 M 10 50 L 22 50 M 78 50 L 90 50" stroke="#FF4C00" strokeWidth="1" />
        </svg>
      </div>

      {/* Right Abstract Vector: Biometric Fingerprint Scanner */}
      <div className="absolute bottom-[20%] -right-[10%] md:right-[5%] lg:right-[10%] w-32 h-44 md:w-48 md:h-64 opacity-30 md:opacity-50 z-10 overflow-hidden rotate-[15deg]">
        {/* Full Fingerprint SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 100 140" fill="none" className="w-full h-full opacity-60">
             {/* Concentric Ovals */}
             <ellipse cx="50" cy="70" rx="8"  ry="14" stroke="#FF4C00" strokeWidth="3" />
             <ellipse cx="50" cy="70" rx="18" ry="28" stroke="#FF4C00" strokeWidth="3" strokeDasharray="30 6" />
             <ellipse cx="50" cy="70" rx="28" ry="42" stroke="#FF4C00" strokeWidth="3" />
             <ellipse cx="50" cy="70" rx="38" ry="56" stroke="#FF4C00" strokeWidth="3" strokeDasharray="50 8 15 8" />
             <ellipse cx="50" cy="70" rx="48" ry="68" stroke="#FF4C00" strokeWidth="3" />
          </svg>
        </div>
        
        {/* Scanning Laser Line */}
        <div className="absolute left-[-20%] w-[140%] h-[2px] bg-gradient-to-r from-transparent via-[#FF4C00] to-transparent shadow-[0_0_15px_3px_rgba(255,76,0,0.6)] animate-scan-laser" />
        
        {/* Scanner Glow Pulse (Follows the line) */}
        <div className="absolute left-0 w-full bg-gradient-to-b from-transparent via-[rgba(255,76,0,0.2)] to-transparent animate-scan-laser" style={{ height: '40px', marginTop: '-19px' }} />
      </div>
      {/* ----------------------------- */}

      {/* Content — bottom-anchored, centered alignment */}
      <div className="relative z-10 w-full px-4 sm:px-8 md:px-16 lg:px-24 pb-24 md:pb-10 flex flex-col items-center">
        {/* Eyebrow tag */}


        {/* Headline */}
        <h1
          className={`font-dm text-white text-center w-full px-2 sm:px-0 max-w-[680px] leading-[1.05] mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            fontSize: "clamp(42px, 10vw, 98px)",
            transitionDelay: "200ms",
          }}
        >
          <span style={{ fontWeight: 500 }}>
            Tap. Ride.{" "}
            <br />
            Pay,{" "}
          </span>
          <span style={{ fontWeight: 900, color: "#FF4C00", position: "relative", display: "inline-block" }}>
            Smarter.
            <svg
              className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-[14px] md:h-[20px]"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z"
                fill="#FF4C00"
                style={{ filter: "drop-shadow(0 1px 2px rgba(255,76,0,0.4))" }}
              />
            </svg>
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`font-lato text-white/90 text-center w-full sm:w-[90%] md:w-[80%] lg:w-[70%] px-4 sm:px-0 leading-[1.7] mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            paddingTop: "20px",
            fontSize: "clamp(16px, 4vw, 23px)",
            fontWeight: 450,
            transitionDelay: "320ms",
          }}
        >
          Nigeria’s first biometric payment system for public transport. Safe,
          fast, and convenient powered by fintech and insurance features.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full px-6 sm:px-0 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{ transitionDelay: "420ms" }}
        >
          {/* Primary CTA */}
          <Button
            label="Get Started"
            onClick={() => scrollToSection("#who-we-serve")}
            className="w-full sm:w-auto font-lato text-[18px] md:text-[22px] !font-semibold !py-[12px] md:!py-[14px] !px-[24px] md:!px-[32px] tracking-[0.01em]"
          />

          {/* Secondary CTA */}
          <Button
            label="Partner With Us"
            variant="secondary"
            onClick={() => scrollToSection("#invest")}
            className="w-full sm:w-auto font-lato text-[18px] md:text-[22px] !font-semibold !py-[12px] md:!py-[13px] !px-[24px] md:!px-[32px] tracking-[0.01em]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
