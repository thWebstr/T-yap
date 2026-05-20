import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const coreValues = [
    { title: "Inclusion", desc: "We believe everyone deserves access to financial and transport innovation, with or without a smartphone or bank account." },
    { title: "Trust & Transparency", desc: "Every transaction and identity within the T-Yap ecosystem is verified, traceable, and secure." },
    { title: "Innovation", desc: "We push boundaries through technology, constantly rethinking how people move, pay, and connect." },
    { title: "Convenience", desc: "We simplify complex systems, allowing users to move and pay seamlessly anytime, anywhere." },
    { title: "Partnership", desc: "We grow by collaborating with transport unions, operators, and fintech partners to build a sustainable mobility ecosystem." },
    { title: "Impact", desc: "Our goal is to empower communities, create jobs, and strengthen Africa’s digital economy through accessible, inclusive solutions." },
  ];

  return (
    <main className="relative bg-white text-black font-dm overflow-hidden">
      {/* --- Navbar --- */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* --- Section Watermarks --- */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
        Legacy
      </div>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
        Foundations
      </div>
      <div className="absolute top-[75%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
        Principles
      </div>

      {/* --- Premium Illumination --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF4C00]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] left-[-100px] w-[600px] h-[600px] bg-gradient-to-tr from-[#FF4C00]/5 to-transparent blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-100px] w-[700px] h-[700px] bg-gradient-to-bl from-[#FF4C00]/8 to-transparent blur-[110px] pointer-events-none" />

      {/* 🔙 Back Button Upgrade */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-[120px] left-6 md:left-12 z-50 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90"
      >
        <div className="relative w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-lg group-hover:bg-[#FF4C00] group-hover:border-[#FF4C00] transition-all">
          <BsArrowLeft className="text-[22px] text-[#FF4C00] group-hover:text-white transition-all" />
        </div>
      </button>

      {/* --- Content Assembly --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-48 pb-32 space-y-48">
        
        {/* --- Section: About Us --- */}
        <section className="flex flex-col items-center text-center opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          <h1 
            className="font-black mb-12"
            style={{ fontSize: "clamp(42px, 8vw, 76px)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
          >
            About{" "}
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Us.
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[18px] md:h-[26px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" style={{ filter: "drop-shadow(0 2px 4px rgba(255,76,0,0.3))" }} />
              </svg>
            </span>
          </h1>

          <div className="max-w-4xl space-y-8 font-dm text-[18px] md:text-[21px] text-black/70 leading-relaxed text-center">
            <p className="font-semibold text-black/90">
              T-Yap NG is a next generation biometric payment and transport technology company redefining how people move, pay, and earn across Africa.
            </p>
            <p>
              We are building a unified ecosystem that connects passengers, drivers, transport operators, and financial institutions through secure, cashless, and identity-based transactions.
            </p>
            <p>
              At T-Yap, we believe mobility and finance are deeply connected and everyone, regardless of whether they own a smartphone or have a bank account, should have access to a seamless, trusted payment experience.
            </p>
          </div>
        </section>

        {/* --- Section: Our Story --- */}
        <section className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 
              className="font-black"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em" }}
            >
              Our{" "}
              <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
                Story.
                <svg className="absolute -bottom-2 left-0 w-full h-[14px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" />
                </svg>
              </span>
            </h2>
          </div>

          <div 
            className="rounded-[40px] p-10 md:p-16 relative overflow-hidden"
            style={{ backgroundColor: "rgba(0,0,0,0.015)", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 40px 80px rgba(0,0,0,0.04)" }}
          >
            <span className="absolute top-6 left-10 font-black select-none pointer-events-none opacity-[0.08] text-[#FF4C00]" style={{ fontSize: "160px", lineHeight: 1 }}>"</span>
            <div className="relative z-10 max-w-4xl mx-auto space-y-10 font-dm text-[17px] md:text-[19px] text-black/70 leading-relaxed">
              <p>
                T-Yap NG was born from a simple observation: millions of Nigerians rely on public transportation every day, yet the system remains largely cash-based, unsafe, and unstructured.
              </p>
              <div className="w-24 h-px bg-[#FF4C00]/30" />
              <p>
                We saw the daily struggles of passengers searching for change, drivers losing revenue to cash handling, and transport operators unable to track or manage earnings transparently. From this problem came our mission: to revolutionize transportation payments in Nigeria through biometric technology and financial inclusion.
              </p>
              <p>
                What began as an idea is now evolving into a national infrastructure for secure transport payments and digital finance, starting from the parks and garages of Lagos. Through partnerships with park managements, unions, and financial institutions, we’re building a network where technology empowers everyone.
              </p>
            </div>
            <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-[#FF4C00]/5 blur-3xl rounded-full" />
          </div>
        </section>

        {/* --- Section: Core Values --- */}
        <section className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.6s_forwards]">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 
              className="font-black"
              style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em" }}
            >
              Core{" "}
              <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
                Values.
                <svg className="absolute -bottom-2 left-0 w-full h-[14px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" />
                </svg>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div 
                key={i}
                className="group p-8 rounded-[32px] transition-all duration-500 hover:scale-[1.03]"
                style={{ 
                  backgroundColor: "rgba(0,0,0,0.015)", 
                  border: "1px solid rgba(0,0,0,0.05)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-[#FF4C00]/10 flex items-center justify-center group-hover:bg-[#FF4C00] transition-all">
                    <div className="w-2 h-2 rounded-full bg-[#FF4C00] group-hover:bg-white" />
                  </div>
                  <h3 className="font-bold text-[20px] text-black group-hover:text-[#FF4C00] transition-colors">{value.title}</h3>
                </div>
                <p className="font-dm text-[15px] leading-relaxed text-black/60">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
};

export default About;
