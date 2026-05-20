import React, { useState, useEffect } from "react";
import Testimonial1 from "../../assets/Testimonial1.png";
import Testimonial2 from "../../assets/Testimonial2.png";
import Testimonial3 from "../../assets/Testimonial3.png";

const testimonials = [
  {
    image: Testimonial1,
    text: "Drivers love the automated settlements and wallet features.",
    name: "Bukumi Somto",
    role: "Bus Driver, Lagos",
  },
  {
    image: Testimonial2,
    text: "Passengers enjoy the convenience of fingerprint payments.",
    name: "Chiamaka Adeyemi",
    role: "Daily Commuter",
  },
  {
    image: Testimonial3,
    text: "Park managers now track payments effortlessly in real-time.",
    name: "Ibrahim Musa",
    role: "Park Manager",
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
      className="relative w-full flex flex-col items-center py-32 px-6 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background Watermark */}
      <div
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
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
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-5">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: "#FF4C00" }}
          />
          <span
            className="font-dm text-xs font-semibold tracking-[0.16em] uppercase"
            style={{ color: "#FF4C00" }}
          >
            What People Say
          </span>
        </div>

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

      {/* Glass Card */}
      <div
        className="relative z-10 w-full max-w-2xl mx-auto rounded-[32px] p-10 md:p-14 flex flex-col items-center opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
        style={{
          backgroundColor: "rgba(255,255,255,0.02)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.3), 0 0 60px rgba(255,76,0,0.03)",
        }}
      >
        {/* Orange corner glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF4C00]/5 blur-3xl rounded-full pointer-events-none" />


        {/* Text — crossfade */}
        <div className="min-h-[120px] flex items-center justify-center mb-8 w-full">
          <p
            className="font-dm text-center"
            style={{
              fontSize: "clamp(18px, 2.2vw, 24px)",
              fontWeight: 500,
              color: "#FFFFFF",
              lineHeight: 1.6,
              opacity: visible ? 1 : 0,
              transition: "opacity 0.5s ease",
            }}
          >
            {testimonials[activeIndex].text}
          </p>
        </div>

        {/* Gradient divider — matches FeaturesSnippet */}
        <div className="w-full h-px bg-gradient-to-r from-[#FF4C00]/40 via-[#FF4C00]/10 to-transparent mb-8" />

        {/* Avatar + name */}
        <div
          className="flex flex-col items-center gap-3 mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        >
          <img
            src={testimonials[activeIndex].image}
            alt={testimonials[activeIndex].name}
            className="w-16 h-16 rounded-full object-cover"
            style={{ border: "2px solid rgba(255,76,0,0.5)" }}
          />
          <p
            className="font-dm font-semibold"
            style={{ fontSize: "15px", color: "rgba(255,255,255,0.9)" }}
          >
            {testimonials[activeIndex].name}
          </p>
          <p
            className="font-dm"
            style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.04em" }}
          >
            {testimonials[activeIndex].role}
          </p>
        </div>

        {/* Expanding dot nav */}
        <div className="flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`View testimonial ${index + 1}`}
              className="transition-all duration-300"
              style={{
                width: index === activeIndex ? "24px" : "8px",
                height: "8px",
                borderRadius: "9999px",
                backgroundColor:
                  index === activeIndex
                    ? "#FF4C00"
                    : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;