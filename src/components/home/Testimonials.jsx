import React, { useState, useEffect } from "react";
import Testimonial1 from "../../assets/Testimonial1.png";
import Testimonial2 from "../../assets/Testimonial2.png";
import Testimonial3 from "../../assets/Testimonial3.png";

const testimonials = [
  {
    image: Testimonial1,
    text: "Drivers love the automated settlements and wallet features.",
    name: "Bukumi Somto",
  },
  {
    image: Testimonial2,
    text: "Passengers enjoy the convenience of fingerprint payments.",
    name: "Chiamaka Adeyemi",
  },
  {
    image: Testimonial3,
    text: "Park managers now track payments effortlessly in real-time.",
    name: "Ibrahim Musa",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Crossfade on index change
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [activeIndex]);

  return (
    <section
      id="testimonials"
      className="relative w-full flex flex-col items-center py-40 px-6 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background Watermark - TRUST */}
      <div
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[15vw] tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Trust
      </div>

      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none blur-[130px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(255,76,0,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-20 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
        {/* Headline — matches other sections */}
        <h2
          className="font-dm font-black text-center"
          style={{
            fontSize: "clamp(42px, 8vw, 76px)",
            color: "#FFFFFF",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Trusted by{" "}
          <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
            Everyone.
            <svg
              className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[18px] md:h-[26px]"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z"
                fill="#FF4C00"
                style={{ filter: "drop-shadow(0 2px 4px rgba(255,76,0,0.3))" }}
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Pinnacle Glass Manifesto Card */}
      <div
        className="relative z-10 w-full max-w-4xl mx-auto rounded-[48px] p-10 md:p-20 flex flex-col items-center opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
        style={{
          backgroundColor: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(40px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 60px 120px rgba(0,0,0,0.4), 0 0 80px rgba(255,76,0,0.05)",
        }}
      >
        {/* Dynamic Inner Glows */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF4C00]/5 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF4C00]/3 blur-3xl rounded-full pointer-events-none" />

        {/* Testimonial Quote Icon */}
        <div className="mb-10 text-[#FF4C00]/20">
          <svg width="60" height="45" viewBox="0 0 60 45" fill="currentColor">
            <path d="M16.4 0C25.4 0 31.8 6.4 31.8 15.4C31.8 28.6 20.4 45 0 45V38.6C10.4 33.6 14 26.6 14.8 20.2H0V0H16.4ZM44.6 0C53.6 0 60 6.4 60 15.4C60 28.6 48.6 45 28.2 45V38.6C38.6 33.6 42.2 26.6 43 20.2H28.2V0H44.6Z" />
          </svg>
        </div>

        {/* Text — Manifesto Style */}
        <div className="min-h-[160px] md:min-h-[220px] flex items-center justify-center mb-12 w-full">
          <p
            className="font-dm text-center font-black"
            style={{
              fontSize: "clamp(24px, 4.5vw, 42px)",
              color: "#FFFFFF",
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            "{testimonials[activeIndex].text}"
          </p>
        </div>

        {/* Premium Divider */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#FF4C00] to-transparent mb-12" />

        {/* Bio + Verified Identity */}
        <div
          className="flex flex-col items-center gap-4 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        >
          <div className="relative">
            <img
              src={testimonials[activeIndex].image}
              alt={testimonials[activeIndex].name}
              className="w-20 h-20 rounded-full object-cover transition-transform duration-500 scale-110"
              style={{ 
                border: "2px solid #FF4C00",
                boxShadow: "0 0 20px rgba(255,76,0,0.3)"
              }}
            />
            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 bg-[#FF4C00] text-white p-1 rounded-full border-2 border-[#0A0A0A] shadow-lg">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>
          
          <div className="text-center">
            <p
              className="font-dm font-black text-[18px] text-white tracking-tight"
            >
              {testimonials[activeIndex].name}
            </p>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4C00] animate-pulse" />
              <p
                className="font-dm font-bold text-[12px] text-white/40 uppercase tracking-[0.2em]"
              >
                Verified Identity
              </p>
            </div>
          </div>
        </div>

        {/* Signature Pulse Dot Nav */}
        <div className="flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className="relative group h-3 transition-all duration-500"
              style={{ width: index === activeIndex ? "40px" : "10px" }}
            >
              <div 
                className="absolute inset-0 rounded-full transition-all duration-500"
                style={{ 
                  backgroundColor: index === activeIndex ? "#FF4C00" : "rgba(255,255,255,0.1)",
                  boxShadow: index === activeIndex ? "0 0 15px rgba(255,76,0,0.5)" : "none"
                }}
              />
              {index === activeIndex && (
                <div className="absolute inset-0 rounded-full border border-[#FF4C00] animate-ping opacity-40" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;