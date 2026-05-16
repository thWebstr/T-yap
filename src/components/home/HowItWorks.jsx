import React, { useState } from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoFingerPrintSharp } from "react-icons/io5";
import { HiWallet } from "react-icons/hi2";
import { TbBus } from "react-icons/tb";

const steps = [
  {
    id: 1,
    title: "Register with Fingerprint",
    description:
      "Sign up via the mobile app or at a T-yap kiosk. Your fingerprint becomes your secure key for all payments and travel.",
    icon: <IoFingerPrintSharp size={24} />,
  },
  {
    id: 2,
    title: "Load Your Wallet",
    description:
      "Fund your wallet easily through bank transfer, USSD, agent kiosks, or partner merchants.",
    icon: <HiWallet size={24} />,
  },
  {
    id: 3,
    title: "Tap to Pay",
    description:
      "Board a bus or keke and tap your fingerprint. No cash, no stress.",
    icon: <TbBus size={24} />,
  },
  {
    id: 4,
    title: "Track Activity",
    description:
      "Monitor trips, wallet balance, and receipts in real time.",
    icon: <BiSolidBarChartAlt2 size={24} />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="how-it-works"
      className="relative w-full flex flex-col items-center py-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Mesh Glows */}
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-30 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.08) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-0 left-[-100px] w-[500px] h-[500px] opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,75,0,0.05) 0%, transparent 70%)" }}
      />

      {/* Background Watermark Text */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-[#0A0A0A]/[0.02] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Journey
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-24 max-w-4xl">
        
        <h2
          className="font-dm font-black text-center animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards] opacity-0"
          style={{
            fontSize: "clamp(42px, 8vw, 76px)",
            color: "#0A0A0A",
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          How It{" "}
          <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
            Works.
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

      {/* Steps layout */}
      <div className="relative w-full max-w-4xl z-10 mx-auto">
        {/* Vertical connector line — shifted left for better scanning */}
        <div
          className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px] bg-[#0A0A0A]/[0.05]"
        >
          {/* Animated Progress Indicator */}
          <div 
            className="absolute top-0 left-0 w-full bg-[#FF4C00] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-[0_0_20px_rgba(255,76,0,0.4)]"
            style={{ 
              height: `${(activeStep / steps.length) * 100}%`,
              opacity: 1
            }}
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-12 relative">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id;

            return (
              <div
                key={step.id}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 cursor-pointer group/step opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                onClick={() => setActiveStep(step.id)}
              >
                {/* Timeline Node - Always Left on Desktop */}
                <div className="hidden md:flex flex-shrink-0 items-center justify-center w-16 h-16 rounded-full z-10 relative ml-0"
                  style={{
                    backgroundColor: isActive ? "#0A0A0A" : "#FFFFFF",
                    border: isActive
                      ? "2px solid #FF4C00"
                      : "2px solid #0000000D",
                    transition: "all 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                    boxShadow: isActive ? "0 0 30px rgba(255,76,0,0.3)" : "none",
                  }}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-full border-2 border-[#FF4C00] animate-ping opacity-20" />
                  )}
                  
                  <span
                    className="font-dm font-black"
                    style={{
                      fontSize: "18px",
                      color: isActive ? "#FF4C00" : "rgba(0,0,0,0.2)",
                    }}
                  >
                    {step.id}
                  </span>
                </div>

                {/* Card Container - Always Right on Desktop */}
                <div className="w-full md:flex-1 md:pl-20">
                  <div
                    className={`relative rounded-[32px] p-8 md:p-10 transition-all duration-500 overflow-hidden ${
                      isActive ? "scale-[1.02]" : "hover:scale-[1.01]"
                    }`}
                    style={{
                      backgroundColor: isActive ? "#0A0A0A" : "rgba(0,0,0,0.02)",
                      border: isActive
                        ? "1px solid rgba(255,76,0,0.2)"
                        : "1px solid rgba(0,0,0,0.05)",
                      boxShadow: isActive
                        ? "0 40px 80px rgba(0,0,0,0.12), 0 20px 40px rgba(255,76,0,0.05)"
                        : "0 10px 30px rgba(0,0,0,0.02)",
                    }}
                  >
                    {/* Active State Background Glow */}
                    {isActive && (
                      <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4C00]/10 blur-3xl pointer-events-none" />
                    )}

                    <div className="flex flex-col md:flex-row gap-8 relative z-10">
                      {/* Icon */}
                      <div
                        className={`flex-shrink-0 flex items-center justify-center w-[72px] h-[72px] rounded-[24px] transition-all duration-500 ${
                          isActive ? "rotate-[10deg] scale-110" : "group-hover/step:translate-y-[-5px]"
                        }`}
                        style={{
                          backgroundColor: isActive
                            ? "rgba(255,76,0,0.15)"
                            : "rgba(0,0,0,0.04)",
                        }}
                      >
                        <span style={{ color: "#FF4C00" }}>{step.icon}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <span
                            className="font-dm text-[12px] font-black tracking-[0.2em] uppercase"
                            style={{ color: isActive ? "#FF4C00" : "rgba(0,0,0,0.3)" }}
                          >
                            Stage 0{step.id}
                          </span>
                        </div>
                        
                        <h3
                          className="font-dm font-black mb-4 transition-colors duration-300"
                          style={{
                            fontSize: "26px",
                            color: isActive ? "#FFFFFF" : "#0A0A0A",
                            letterSpacing: "-0.02em",
                          }}
                        >
                          {step.title}
                        </h3>

                        <p
                          className="font-dm"
                          style={{
                            fontSize: "16px",
                            lineHeight: "1.7",
                            color: isActive
                              ? "rgba(255,255,255,0.6)"
                              : "rgba(0,0,0,0.5)",
                            maxWidth: "500px"
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;