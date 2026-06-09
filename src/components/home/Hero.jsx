import React, { useEffect, useState } from "react";
import heroBg from "../../assets/herobg_danfo_v3.png";
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
      className="relative min-h-screen flex items-end justify-center overflow-hidden tech-pattern-lines"
      style={{ backgroundColor: "#0A0A0A" }}
      onMouseMove={handleMouseMove}
    >
      {/* Background Watermark Text - BOLDER & DARKER */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 font-dm font-black text-[15vw] tracking-[-0.05em] text-white/[0.04] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Future
      </div>

      {/* Technical Scanning Line */}
      <div className="tech-scanning-line" />

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
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:60%_center] md:bg-right transition-transform duration-1000"
        style={{
          backgroundImage: `url(${heroBg})`,
          transform: mounted ? "scale(1)" : "scale(1.1)",
        }}
      />

      {/* Subtle radial vignette overlay - Lightened on the right to show the device */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.6) 100%)",
        }}
      />

      {/* Bottom vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 40%)",
        }}
      />

      {/* Left-side focus vignette to keep text readable without darkening the device on the right */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-3/4"
        style={{
          background: "linear-gradient(to right, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 50%, transparent 100%)",
        }}
      />

      {/* Content — bottom-anchored, left-aligned for visibility */}
      <div className="relative z-20 w-full px-4 sm:px-8 md:px-16 lg:px-24 pb-20 md:pb-12 flex flex-col items-start text-left">
        {/* Headline */}
        <h1
          className={`font-dm text-white w-full max-w-[720px] leading-[1.05] mb-6 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
          className={`font-lato text-white/90 w-full sm:w-[90%] md:w-[70%] lg:w-[50%] leading-[1.7] mb-10 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          style={{
            paddingTop: "10px",
            fontSize: "clamp(16px, 4vw, 22px)",
            fontWeight: 450,
            transitionDelay: "320ms",
          }}
        >
          Nigeria’s first biometric payment system for public transport. Safe,
          fast, and convenient powered by fintech and insurance features.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
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
