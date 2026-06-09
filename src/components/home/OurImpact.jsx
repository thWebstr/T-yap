import React from "react";
import Security from "../../assets/security.png";
import Speed from "../../assets/speed.png";
import Transparency from "../../assets/transparency.png";
import Inclusion from "../../assets/inclusion.png";

const impacts = [
  {
    title: "Security",
    text: "Cashless transactions reduce theft, robbery, and revenue leakage.",
    image: Security,
  },
  {
    title: "Speed",
    text: "Faster boarding and seamless rides — no more long queues or cash delays.",
    image: Speed,
  },
  {
    title: "Transparency",
    text: "Every trip, fare, and payment tracked in real time for passengers and operators.",
    image: Transparency,
  },
  {
    title: "Inclusion",
    text: "Unbanked and underbanked travelers gain access to digital payments and services.",
    image: Inclusion,
  },
];

const OurImpact = () => {
  return (
    <section
      id="impact"
      className="relative w-full flex flex-col items-center justify-center py-32 pb-24 px-6 md:px-20 overflow-hidden tech-pattern-lines"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Premium Background Glows */}
      <div 
        className="absolute top-0 right-[-100px] w-[600px] h-[600px] opacity-40 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.06) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] opacity-30 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,75,0,0.05) 0%, transparent 70%)" }}
      />

      {/* Background Watermark Text - IMPACT (BOLDER) */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-[#0A0A0A]/[0.05] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Impact
      </div>

      {/* Header Area */}
      <div className="relative z-10 flex flex-col items-center mb-20 max-w-4xl w-full">
        
        <h2
          className="font-dm font-black text-center mb-10 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards] opacity-0"
          style={{
            fontSize: "clamp(42px, 8vw, 76px)",
            color: "#0A0A0A",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}
        >
          The{" "}
          <span className="relative inline-block px-2">
            <span 
              style={{
                color: "#FF4C00",
                position: "relative",
                display: "inline-block"
              }}
            >
              T-Yap
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
          </span>
          <br />
          Impact.
        </h2>

        <div className="w-full max-w-2xl flex flex-col items-center animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards] opacity-0">
          <p
            className="font-dm font-bold text-center mb-3"
            style={{ fontSize: "clamp(18px, 2.5vw, 24px)", color: "#1A1A1A", letterSpacing: "-0.02em" }}
          >
            Transforming Public Transport for Everyone
          </p>
          <p
            className="font-lato text-center"
            style={{
              fontSize: "clamp(17px, 1.6vw, 19px)",
              color: "rgba(0,0,0,0.65)",
              lineHeight: "1.7",
              maxWidth: "600px"
            }}
          >
            T-Yap isn't just about payments, it's about creating a smarter,
            safer, and more inclusive transportation system.
          </p>
        </div>
      </div>

      {/* Impact Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1340px] relative z-10">
        {impacts.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center text-center rounded-[40px] p-10 transition-all duration-700 hover:translate-y-[-15px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards] overflow-hidden"
            style={{ 
              animationDelay: `${0.6 + index * 0.15}s`,
              backgroundColor: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,0,0,0.04)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.03)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,76,0,0.15)";
              e.currentTarget.style.boxShadow = "0 40px 80px rgba(255,76,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
              e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.03)";
            }}
          >
            {/* Tech-Mesh Subtle Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

            {/* Iconic Representation - Biometric themed */}
            <div
              className="relative flex items-center justify-center w-[100px] h-[100px] rounded-[32px] mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
              style={{ backgroundColor: "rgba(255,76,0,0.08)" }}
            >
              {/* Inner Glow Pulse */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-[#FF4C00]/10 animate-pulse" />
              <img
                src={item.image}
                alt={item.title}
                className="w-[48px] h-[48px] object-contain relative z-10 transition-all duration-500 group-hover:brightness-110"
                style={{ filter: "invert(35%) sepia(90%) saturate(2000%) hue-rotate(345deg) brightness(95%) contrast(105%) shadow(0 0 10px rgba(255,76,0,0.2))" }}
              />
            </div>

            {/* Title - Bold & Tracked */}
            <h3
              className="font-dm font-black mb-4"
              style={{ fontSize: "24px", color: "#1A1A1A", letterSpacing: "-0.03em" }}
            >
              {item.title}
            </h3>

            {/* Premium Reactive Divider */}
            <div
              className="w-10 h-[3px] bg-[#FF4C00] mb-8 rounded-full transition-all duration-500 group-hover:w-24 group-hover:shadow-[0_0_15px_rgba(255,76,0,0.4)]"
            />

            {/* Description Text */}
            <p
              className="font-dm font-medium text-balance"
              style={{
                fontSize: "16px",
                color: "rgba(0,0,0,0.5)",
                lineHeight: "1.7",
              }}
            >
              {item.text}
            </p>

            {/* Subliminal Step Marker */}
            <div className="absolute top-6 right-8 font-dm font-black text-[11px] text-black/5 tracking-widest uppercase">
              Impact 0{index + 1}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;