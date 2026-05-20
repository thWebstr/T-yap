import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Aboutimage from "../../assets/Aboutimg.png";
import Aboutimage3 from "../../assets/Aboutimg3.jpeg";
import Button from "../ui/Button";

const AboutUsSnippet = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about-us"
      className="relative py-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Watermark - Adjusted for Light Theme */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-black/[0.02] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Legacy
      </div>

      {/* Dynamic Background Glows - Subtler for Light Theme */}
      <div 
        className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] opacity-30 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.06) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,75,0,0.04) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-24 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          {/* Eyebrow Tag - User removed this in previous edit but I'll leave it out as they specifically deleted it */}
          
          {/* Headline - Upscaled & Dark for Visibility */}
          <h2
            className="font-dm font-black text-center"
            style={{
              fontSize: "clamp(42px, 8vw, 76px)",
              color: "#0A0A0A",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            About{" "}
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Us.
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

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Enhanced Image Switcher with Modern Frame */}
          <div className="w-full lg:w-1/2 relative h-[380px] md:h-[500px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
            
            {/* Frame Container */}
            <div className="absolute inset-0 rounded-[40px] overflow-hidden p-2"
                 style={{ 
                   backgroundColor: "rgba(0,0,0,0.02)",
                   backdropFilter: "blur(10px)",
                   border: "1px solid rgba(0,0,0,0.06)",
                   boxShadow: "0 40px 80px rgba(0,0,0,0.08)"
                 }}
            >
              <div className="relative w-full h-full overflow-hidden rounded-[32px] bg-[#F7F7F7]">
                
                {/* Image Transitions */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === 0
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-110 opacity-0 -rotate-2"
                  }`}
                >
                  <img
                    src={Aboutimage}
                    alt="About T-YAP"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active === 1
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-110 opacity-0 rotate-2"
                  }`}
                >
                  <img
                    src={Aboutimage3}
                    alt="About T-YAP team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Biometric Corner Accents */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#FF4C00]/60 rounded-tl-lg" />
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-[#FF4C00]/60 rounded-tr-lg" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-[#FF4C00]/60 rounded-bl-lg" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#FF4C00]/60 rounded-br-lg" />
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 backdrop-blur-md bg-white/40 p-2 rounded-full border border-black/5">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: active === i ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "9999px",
                    backgroundColor: active === i ? "#FF4C00" : "rgba(0,0,0,0.15)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.4s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.6s_forwards]">
            
            {/* Premium Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF4C00] to-transparent mb-10 rounded-full" />
            
            <p
              className="font-dm leading-relaxed mb-10"
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "rgba(10,10,10,0.7)",
                lineHeight: "1.8",
                fontWeight: 400
              }}
            >
              T-Yap NG is a next generation biometric payment and transport
              technology company redefining how people move, pay, and earn across
              Africa.
              <br />
              <br />
              We are building a unified ecosystem that connects passengers,
              drivers, transport operators, and financial institutions through
              secure, cashless, and identity-based transactions.
              <br />
              <br />
              At T-Yap, we believe mobility and finance are deeply connected,
              and everyone, regardless of whether they own a smartphone or have a
              bank account, should have access to a seamless, trusted payment
              experience.
            </p>

            <Button
              label="Our Mission"
              onClick={() => navigate("/about")}
              className="!px-10 !py-4 text-[16px] font-bold tracking-wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnippet;