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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 w-full max-w-[1340px] relative z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative flex flex-col rounded-[48px] p-8 md:p-12 transition-all duration-700 hover:translate-y-[-12px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards] overflow-hidden"
            style={{
              animationDelay: `${0.3 + index * 0.1}s`,
              backgroundColor: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(30px)",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.3)"
            }}
          >
            {/* --- Tech-Mesh Texture Overlay --- */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700" 
                 style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
            
            {/* Dynamic Corner Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF4C00]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Icon Wrapper with Pulse */}
            <div
              className="relative flex items-center justify-center w-[80px] h-[80px] rounded-[28px] mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
              style={{ 
                backgroundColor: "rgba(255,76,0,0.12)",
                boxShadow: "0 15px 30px rgba(255,76,0,0.1)"
              }}
            >
              <div className="absolute inset-0 rounded-[28px] border-2 border-[#FF4C00]/20 animate-pulse" />
              <span style={{ color: "#FF4C00", fontSize: "28px" }}>{feature.icon}</span>
            </div>

            {/* Title - Bold & Tracked */}
            <h3
              className="font-dm font-black mb-6"
              style={{ 
                fontSize: "26px", 
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.1
              }}
            >
              {feature.title}
            </h3>

            {/* Premium Linear Divider */}
            <div className="w-full h-px bg-gradient-to-r from-[#FF4C00]/60 via-[#FF4C00]/10 to-transparent mb-10" />

            {/* Points with Modern Bullet Branding */}
            <ul className="flex flex-col gap-5 flex-1">
              {feature.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 group/point">
                  <div
                    className="mt-[11px] w-[6px] h-[6px] rounded-full flex-shrink-0 transition-transform duration-300 group-hover/point:scale-150"
                    style={{ 
                      backgroundColor: "#FF4C00",
                      boxShadow: "0 0 12px rgba(255,76,0,0.6)" 
                    }}
                  />
                  <span
                    className="font-dm font-medium"
                    style={{
                      fontSize: "16px",
                      color: "rgba(255,255,255,0.55)",
                      lineHeight: "1.6",
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Subliminal Brand Mark */}
            <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
              <span className="font-dm font-black text-[10px] uppercase tracking-[0.4em] text-white">Security Layer</span>
            </div>
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