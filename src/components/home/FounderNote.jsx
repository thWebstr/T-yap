import React from "react";

const FounderNote = () => {
  return (
    <section
      id="founder-note"
      className="relative w-full py-32 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Background Watermark */}
      <div 
        className="absolute top-48 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-black/[0.02] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Mission
      </div>

      {/* Subtle Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">

          {/* Upscaled Headline */}
          <h2
            className="font-dm font-black text-center"
            style={{
              fontSize: "clamp(42px, 8vw, 76px)",
              color: "#0A0A0A",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Founder's{" "}
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Note.
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

        {/* Letter-Style Content Card */}
        <div 
          className="relative w-full rounded-[40px] p-10 md:p-16 overflow-hidden opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
          style={{
            backgroundColor: "rgba(0,0,0,0.015)",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 40px 80px rgba(0,0,0,0.04)"
          }}
        >
          {/* Large Quote Backdrop */}
          <span
            className="absolute top-6 left-10 font-dm font-black select-none pointer-events-none"
            style={{ fontSize: "160px", color: "rgba(255,76,0,0.08)", lineHeight: 1 }}
          >
            "
          </span>

          <div className="relative z-10 flex flex-col gap-10">
            {/* Intro Shoutout */}
            <p 
              className="font-dm text-center md:text-left"
              style={{
                fontSize: "clamp(20px, 2.5vw, 26px)",
                fontWeight: 600,
                color: "#1A1A1A",
                lineHeight: "1.4",
                maxWidth: "800px"
              }}
            >
              At T-Yap NG, we believe the future of transportation lies in <span style={{ color: "#FF4C00" }}>simplicity, trust, and inclusion.</span>
            </p>

            {/* Main Message Body */}
            <div 
              className="font-dm font-normal text-center md:text-left"
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                color: "rgba(10,10,10,0.7)",
                lineHeight: "1.85",
                maxWidth: "850px"
              }}
            >
              <p>
                Our mission is to make mobility smarter by enabling biometric payments that are fast, secure, 
                and accessible to everyone, regardless of whether they own a smartphone or have a bank account. With T-Yap, 
                a single fingerprint connects passengers, drivers, and park managers to a seamless, cashless 
                system designed for the realities of Africa.
              </p>
              <br />
              <p>
                This is more than technology; it’s a movement to modernize transport, build trust, 
                and empower communities across Nigeria and beyond.
              </p>
            </div>

            {/* Premium Divider for Signature */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent my-4" />

            {/* Signature Area */}
            <div className="flex flex-col items-center md:items-start">
              <p 
                className="font-dm font-black mb-1"
                style={{ fontSize: "22px", color: "#0A0A0A" }}
              >
                Muhammad Oladele Sekoni
              </p>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full" style={{ backgroundColor: "#FF4C00" }} />
                <p 
                  className="font-dm font-medium uppercase tracking-[0.1em]"
                  style={{ fontSize: "14px", color: "#FF4C00" }}
                >
                  Founder & CEO, T-Yap NG
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Accent Glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#FF4C00]/5 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default FounderNote;
