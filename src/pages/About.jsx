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
      {/* 🏁 Biometric Grid Underlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#FF4C00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* --- Navbar --- */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* --- Section Watermarks --- */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap tracking-[-0.05em]">
        Origins
      </div>
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap tracking-[-0.05em]">
        Infrastructure
      </div>
      <div className="absolute top-[78%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap tracking-[-0.05em]">
        Protocols
      </div>

      {/* --- Premium Illumination --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF4C00]/12 to-transparent blur-[120px] pointer-events-none" />
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-48 pb-32 space-y-56">
        
        {/* --- Section: About Us --- */}
        <section className="flex flex-col items-center text-center opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-px w-12 bg-[#FF4C00]/40" />
             <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-black/40">Our Mission</span>
             <div className="h-px w-12 bg-[#FF4C00]/40" />
          </div>
          <h1 
            className="font-black mb-12"
            style={{ fontSize: "clamp(42px, 8vw, 76px)", lineHeight: 0.95, letterSpacing: "-0.04em" }}
          >
            Redefining <br className="hidden md:block" />
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Mobility.
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[18px] md:h-[26px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" style={{ filter: "drop-shadow(0 2px 4px rgba(255,76,0,0.3))" }} />
              </svg>
            </span>
          </h1>

          <div className="max-w-4xl space-y-8 font-dm text-[18px] md:text-[22px] text-black/70 leading-relaxed text-center">
            <p className="font-semibold text-black/90">
              T-Yap NG is a next generation biometric payment and transport technology company rethinking how people move, pay, and earn across Africa.
            </p>
            <p>
              We are building a unified ecosystem that connects passengers, drivers, transport operators, and financial institutions through secure, cashless, and identity-based transactions.
            </p>
          </div>
        </section>

        {/* --- Section: Our Story (Laser Timeline Style) --- */}
        <section className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="font-black" style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
              Our <span className="text-[#FF4C00]">Story.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
            {/* Step 1 */}
            <div className="text-right lg:pr-8">
              <span className="text-[14px] font-black text-[#FF4C00] uppercase tracking-widest mb-4 block">The Problem</span>
              <p className="text-[17px] md:text-[19px] text-black/60 leading-relaxed">
                T-Yap NG was born from a simple observation: millions of Nigerians rely on public transportation every day, yet the system remains largely cash-based, unsafe, and unstructured.
              </p>
            </div>
            
            {/* Laser Divider (Vertical) */}
            <div className="hidden lg:flex flex-col items-center h-full gap-4">
               <div className="w-3 h-3 rounded-full bg-[#FF4C00] shadow-[0_0_15px_#FF4C00]" />
               <div className="w-[1px] flex-1 bg-gradient-to-b from-[#FF4C00] to-transparent relative overflow-hidden">
                  <div className="absolute inset-0 w-full h-20 bg-white/40 animate-[laserSweep_3s_linear_infinite]" />
               </div>
               <div className="w-3 h-3 rounded-full border-2 border-[#FF4C00]/30" />
            </div>

            {/* Step 2 */}
            <div className="text-left lg:pl-8">
              <span className="text-[14px] font-black text-[#FF4C00] uppercase tracking-widest mb-4 block">The Mission</span>
              <p className="text-[17px] md:text-[19px] text-black/60 leading-relaxed">
                We saw the struggles of passengers searching for change and drivers losing revenue. Our mission: to revolutionize transport payments through biometric technology.
              </p>
            </div>
          </div>

          <div className="mt-20 p-10 md:p-14 rounded-[40px] bg-black/5 border border-black/5 relative overflow-hidden group">
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            <p className="relative z-10 font-dm text-[18px] md:text-[20px] text-black/80 text-center leading-relaxed max-w-4xl mx-auto italic">
              "What began as an idea is now evolving into a national infrastructure for secure transport payments and digital finance, starting from the parks and garages of Lagos."
            </p>
          </div>
        </section>

        {/* --- Section: Core Values --- */}
        <section className="opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.6s_forwards]">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-black" style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1, letterSpacing: "-0.04em" }}>
              Core <span className="text-[#FF4C00]">Protocols.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, i) => (
              <div 
                key={i}
                className="group relative p-10 rounded-[36px] transition-all duration-500 hover:scale-[1.03] bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_80px_rgba(255,76,0,0.08)]"
              >
                <div className="hud-corner-tl opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="flex flex-col items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FF4C00]/10 flex items-center justify-center group-hover:bg-[#FF4C00] transition-all">
                     <span className="font-black text-[#FF4C00] group-hover:text-white">0{i+1}</span>
                  </div>
                  <h3 className="font-black text-[22px] text-black group-hover:text-[#FF4C00] transition-colors">{value.title}</h3>
                  <p className="font-dm text-[16px] leading-relaxed text-black/50 group-hover:text-black/70 transition-colors">{value.desc}</p>
                </div>
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
