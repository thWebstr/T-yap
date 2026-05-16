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
      className="relative w-full flex flex-col items-center justify-center py-32 pb-24 px-6 md:px-20 overflow-hidden"
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

      {/* Background Watermark Text - IMPACT */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-[#0A0A0A]/[0.025] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1340px] relative z-10">
        {impacts.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col items-center text-center rounded-[32px] p-10 transition-all duration-500 hover:translate-y-[-10px] bg-[#F9F9FB] border border-black/[0.04] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
            style={{ 
              animationDelay: `${0.6 + index * 0.15}s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FFFFFF";
              e.currentTarget.style.borderColor = "rgba(255,76,0,0.15)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(255,76,0,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#F9F9FB";
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Iconic Representation */}
            <div
              className="flex items-center justify-center w-[88px] h-[88px] rounded-[28px] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[6deg]"
              style={{ backgroundColor: "rgba(255,76,0,0.08)" }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[42px] h-[42px] object-contain"
                style={{ filter: "invert(40%) sepia(80%) saturate(800%) hue-rotate(340deg) brightness(100%)" }}
              />
            </div>

            {/* Title */}
            <h3
              className="font-dm font-black mb-4"
              style={{ fontSize: "20px", color: "#1A1A1A", letterSpacing: "-0.01em" }}
            >
              {item.title}
            </h3>

            {/* Accent Divider */}
            <div
              className="w-8 h-[3px] bg-gradient-to-r from-[#FF4C00] to-[#FF7A00] mb-6 rounded-full transition-all duration-500 group-hover:w-16"
            />

            {/* Description Text */}
            <p
              className="font-lato"
              style={{
                fontSize: "15px",
                color: "rgba(0,0,0,0.6)",
                lineHeight: "1.7",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;