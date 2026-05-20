import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    question: "What is T-yap?",
    answer:
      "T-yap is Nigeria’s first biometric-powered payment system for public transport. It allows passengers to pay fares with a fingerprint linked to a secure digital wallet.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration is simple you can sign up at participating transport parks or through the T-yap agent network using your fingerprint. No smartphone required.",
  },
  {
    question: "Can drivers and park managers use T-yap too?",
    answer:
      "Yes! Drivers and park managers can use T-yap to manage trips, receive automatic settlements, and access real-time reports, all powered by biometrics.",
  },
  {
    question: "Is insurance included?",
    answer:
      "T-yap partners with local insurance providers to offer affordable coverage options that protect passengers and drivers during transit.",
  },
  {
    question: "Do I need a bank account to use T-yap?",
    answer:
      "No. T-yap enables the unbanked to participate, you only need your fingerprint. Funds can be topped up and withdrawn easily through partner agents.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full py-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Watermark */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-black/[0.02] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Support
      </div>

      {/* Subtle Background Glows */}
      <div 
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.05) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,75,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          <h2
            className="font-dm font-black text-center"
            style={{
              fontSize: "clamp(42px, 8vw, 76px)",
              color: "#0A0A0A",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            FAQ
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              s.
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

        {/* FAQ List */}
        <div className="flex flex-col gap-6 w-full relative z-10">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="group w-full opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
                style={{ 
                  animationDelay: `${0.4 + index * 0.1}s`,
                }}
              >
                <div
                  className={`relative rounded-[24px] overflow-hidden transition-all duration-500 cursor-pointer ${
                    isActive ? "shadow-[0_20px_40px_rgba(255,76,0,0.08)] scale-[1.01]" : "hover:scale-[1.005]"
                  }`}
                  style={{
                    backgroundColor: isActive ? "#0A0A0A" : "rgba(0,0,0,0.015)",
                    border: isActive ? "1px solid rgba(255,76,0,0.4)" : "1px solid rgba(0,0,0,0.05)",
                    backdropFilter: "blur(10px)",
                    boxShadow: isActive ? "0 40px 80px rgba(0,0,0,0.4), 0 20px 40px rgba(255,76,0,0.1)" : "none"
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question Row */}
                  <div className="flex justify-between items-center px-8 py-6">
                    <p 
                      className="font-dm font-bold text-left transition-colors duration-300"
                      style={{ 
                        fontSize: "clamp(18px, 2.2vw, 22px)", 
                        color: isActive ? "#FFFFFF" : "#0A0A0A",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {faq.question}
                    </p>

                    <div
                      className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 ${
                        isActive ? "bg-[#FF4C00] text-white rotate-180 scale-110" : "bg-white text-[#FF4C00]"
                      }`}
                      style={{ 
                        boxShadow: isActive ? "0 0 20px rgba(255,76,0,0.4)" : "0 4px 12px rgba(0,0,0,0.05)" 
                      }}
                    >
                      <Plus 
                        size={20} 
                        className={`transition-transform duration-500 ${isActive ? "rotate-45" : ""}`} 
                        strokeWidth={3}
                      />
                    </div>
                  </div>

                  {/* Answer Container */}
                  <div
                    className={`transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden ${
                      isActive ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <div 
                      className="px-8 pb-8 pt-0 font-dm transition-all duration-500"
                      style={{ 
                        opacity: isActive ? 1 : 0,
                        transform: isActive ? "translateY(0)" : "translateY(-10px)"
                      }}
                    >
                      {/* Sub-divider */}
                      <div className="w-full h-px bg-gradient-to-r from-[#FF4C00]/40 to-transparent mb-6" />
                      
                      <p
                        style={{
                          fontSize: "clamp(15px, 1.6vw, 17px)",
                          color: isActive ? "rgba(255,255,255,0.65)" : "rgba(10,10,10,0.6)",
                          lineHeight: "1.7",
                          fontWeight: 450
                        }}
                      >
                        {faq.answer}
                      </p>
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

export default FAQSection;
