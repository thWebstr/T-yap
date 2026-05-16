import React from "react";
import { useNavigate } from "react-router-dom";
import { IoFingerPrintSharp } from "react-icons/io5";
import { HiWallet } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { RiShieldCheckLine } from "react-icons/ri";

const features = [
  {
    icon: <IoFingerPrintSharp size={22} />,
    title: "Biometric Transport Payment",
    points: [
      "Pay instantly using your fingerprint — no cash, no cards, no phones needed.",
      "Works on all registered buses, terminals, and transport kiosks.",
      "Ensures security, eliminates fare disputes, and promotes transparency.",
    ],
  },
  {
    icon: <HiWallet size={22} />,
    title: "Fintech Infrastructure",
    points: [
      "Every user gets a T-Yap Wallet with a unique account number.",
      "Send, receive, withdraw, and transfer money to any Nigerian bank.",
      "Supports digital and biometric deposits or withdrawals at kiosks.",
    ],
  },
  {
    icon: <RiShieldCheckLine size={22} />,
    title: "T-Yap Insurance (Transport Cover)",
    points: [
      "Instant biometric-based insurance for passengers and drivers.",
      "Automatically covers each verified ride, reducing risk and ensuring trust.",
      "Transparent claims processed via the T-Yap app and partner insurers.",
    ],
  },
];

const FeaturesSnippet = () => {
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="relative w-full flex flex-col items-center justify-center py-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: "#0A0A0B" }}
    >
      {/* Dynamic Background Glows */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.12) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] opacity-15 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,75,0,0.1) 0%, transparent 70%)" }}
      />

      {/* Background Watermark Text */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Capabilities
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-24 max-w-4xl">
        
        <h2
          className="font-dm font-black text-center animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards] opacity-0"
          style={{
            fontSize: "clamp(42px, 8vw, 76px)",
            color: "#FFFFFF",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Key Solutions <br />
          <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
            Offered.
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

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1280px] relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-[32px] p-8 md:p-10 transition-all duration-500 hover:translate-y-[-8px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards] overflow-hidden"
            style={{
              animationDelay: `${0.3 + index * 0.1}s`,
              backgroundColor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,76,0,0.3)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(0,0,0,0.4), 0 0 40px rgba(255,76,0,0.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Hover Glow Behind Icon */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#FF4C00]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Icon Wrapper */}
            <div
              className="flex items-center justify-center w-[72px] h-[72px] rounded-[24px] mb-8 transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110"
              style={{ 
                backgroundColor: "rgba(255,76,0,0.12)",
                boxShadow: "0 10px 20px rgba(255,76,0,0.05)"
              }}
            >
              <span style={{ color: "#FF4C00" }}>{feature.icon}</span>
            </div>

            {/* Title */}
            <h3
              className="font-dm font-black mb-6"
              style={{ 
                fontSize: "22px", 
                color: "#FFFFFF",
                letterSpacing: "-0.01em",
                lineHeight: 1.2
              }}
            >
              {feature.title}
            </h3>

            {/* Premium Divider */}
            <div className="w-full h-px bg-gradient-to-r from-[#FF4C00]/40 via-[#FF4C00]/10 to-transparent mb-8" />

            {/* Points */}
            <ul className="flex flex-col gap-4 flex-1">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="mt-[9px] w-[6px] h-[6px] rounded-full flex-shrink-0 shadow-[0_0_8px_rgba(255,76,0,0.5)]"
                    style={{ backgroundColor: "#FF4C00" }}
                  />
                  <span
                    className="font-dm"
                    style={{
                      fontSize: "15px",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: "1.7",
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Optimized See All Features CTA */}
      <div className="relative z-10 mt-10 flex flex-col items-center">
        <button
          onClick={() => navigate("/features")}
          className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden transition-all duration-300"
          style={{
            backgroundColor: "rgba(255,76,0,0.05)",
            border: "1px solid rgba(255,76,0,0.2)"
          }}
        >
          {/* Button Background Glow */}
          <div className="absolute inset-0 bg-[#FF4C00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <span
            className="font-dm font-bold tracking-wider uppercase transition-colors duration-300"
            style={{ fontSize: "14px", color: "#FF4C00" }}
          >
            Explore All Features
          </span>
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" 
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12H19" stroke="#FF4C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="#FF4C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturesSnippet;