import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BsArrowLeft, BsCheckCircleFill, BsRocketTakeoff, BsBriefcase, BsGlobe2, BsShieldCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const InvestorPitch = () => {
  const navigate = useNavigate();

  const gapSolutions = [
    { title: "Biometric Payments", desc: "Identity-driven fares without cash or cards.", icon: <BsShieldCheck className="text-2xl" /> },
    { title: "Universal Onboarding", desc: "Smart kiosks at every park for even the unbanked.", icon: <BsGlobe2 className="text-2xl" /> },
    { title: "Real-time Settlements", desc: "Instant automated payouts for drivers and park managers.", icon: <BsRocketTakeoff className="text-2xl" /> },
    { title: "Fintech Expansion", desc: "In-situ wallets and financial services within one app.", icon: <BsBriefcase className="text-2xl" /> },
  ];

  return (
    <main className="relative w-full bg-white text-black font-dm overflow-hidden">
      {/* --- Navbar --- */}
      <div className="absolute top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>

      {/* --- Premium Illumination --- */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-br from-[#FF4C00]/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-100px] w-[800px] h-[800px] bg-gradient-to-tr from-[#FF4C00]/8 to-transparent blur-[120px] pointer-events-none" />

      {/* 🔙 Premium Back Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-[120px] left-6 md:left-12 z-50 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90"
      >
        <div className="relative w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-lg group-hover:bg-[#FF4C00] group-hover:border-[#FF4C00] transition-all">
          <BsArrowLeft className="text-[22px] text-[#FF4C00] group-hover:text-white transition-all" />
        </div>
      </button>

      {/* --- Section: Hero Pitch (Dark Theme Peak) --- */}
      <section className="relative pt-48 pb-32 px-6 md:px-20 bg-[#0A0A0A] overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-48 left-1/2 -translate-x-1/2 font-black text-[18vw] text-white/[0.02] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap tracking-tighter">
          Equity
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.1s_forwards]">
             <div className="h-px w-8 bg-[#FF4C00]" />
             <span className="text-[#FF4C00] font-bold tracking-[0.4em] text-[12px] uppercase">Pitch Deck v2.0</span>
             <div className="h-px w-8 bg-[#FF4C00]" />
          </div>

          <h1 
            className="font-black text-white mb-8 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]"
            style={{ fontSize: "clamp(42px, 8vw, 84px)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
          >
            The Future of <br className="hidden md:block" />
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Public
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[18px] md:h-[26px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" style={{ filter: "drop-shadow(0 0 10px rgba(255,76,0,0.5))" }} />
              </svg>
            </span>{" "}
            Mobility.
          </h1>
          
          <p className="font-dm text-[20px] md:text-[26px] text-white/70 max-w-2xl opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards] leading-relaxed">
            Revolutionizing transport payments across Africa through biometric innovation and financial inclusion.
          </p>
        </div>
      </section>

      {/* Wavy Transition: Dark → Light */}
      <div className="wave-divider" style={{ marginTop: "-1px", marginBottom: "-1px" }}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px" }}>
          <path d="M0,0 L1440,0 L1440,30 Q1080,80 720,40 Q360,0 0,50 Z" fill="#0A0A0A" />
          <path d="M0,80 L1440,80 L1440,30 Q1080,80 720,40 Q360,0 0,50 Z" fill="white" />
        </svg>
      </div>

      {/* --- Main Deck Narrative --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 space-y-56">
        
        {/* --- 1. The Market Opportunity --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards] scroll-mt-24">
          <div className="absolute top-0 right-0 font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap translate-x-1/2">
            Market
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-[#FF4C00]/10 border border-[#FF4C00]/20 text-[#FF4C00] font-bold text-[12px] uppercase tracking-widest">Sector Analysis</div>
              <h2 className="font-black text-[clamp(36px,5vw,60px)] leading-tight tracking-tight">Large-Scale <span className="text-[#FF4C00]">Inefficiency.</span></h2>
              <p className="font-dm text-[19px] text-black/70 leading-relaxed max-w-lg">
                Over 80% of Nigeria’s population rely on public transport daily, yet the industry remains trapped in a cash-based cycle. This inefficiency hides a massive digital transformation opportunity.
              </p>
            </div>
            
            {/* Impact Data Dossier */}
            <div 
              className="p-10 md:p-14 rounded-[48px] bg-[#0A0A0A] text-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative overflow-hidden group border border-white/5"
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                   <div className="w-2 h-2 rounded-full bg-[#FF4C00] animate-pulse" />
                   <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/40">Market Potential_ID: 5TR</span>
                </div>
                <h3 className="font-black text-[64px] md:text-[88px] leading-none mb-4 text-[#FF4C00]">₦5T+</h3>
                <p className="font-bold text-[20px] md:text-[24px] uppercase tracking-widest mb-6 text-white/90">Annual Cash Flow</p>
                <div className="h-px w-full bg-white/10 mb-8" />
                <p className="text-white/60 text-[16px] md:text-[18px] font-dm">
                  Unlocking a multi-billion naira market by digitizing every bus park, route, and transaction in Nigeria.
                </p>
                <div className="mt-10 flex gap-4">
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1">
                      <p className="text-[10px] text-white/40 uppercase mb-1">Growth Index</p>
                      <p className="text-xl font-black">94.2%</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex-1">
                      <p className="text-[10px] text-white/40 uppercase mb-1">TAM</p>
                      <p className="text-xl font-black">$12.4B</p>
                   </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-[#FF4C00] shadow-[0_0_15px_#FF4C00] animate-scan-laser opacity-20" />
            </div>
          </div>
        </section>

        {/* --- 2. The Solution Grid --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <div className="absolute top-0 left-0 font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap -translate-x-1/2">
            Protocol
          </div>
          <div className="flex flex-col items-center text-center mb-24">
            <h2 className="font-black text-[clamp(36px,6vw,60px)] leading-tight tracking-tighter mb-8">Integrated <span className="text-[#FF4C00]">Ecosystem.</span></h2>
            <p className="font-dm text-[18px] md:text-[22px] text-black/60 max-w-2xl">
              T-Yap transforms transport hubs into secure gateways for digital identity and financial inclusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gapSolutions.map((item, i) => (
              <div 
                key={i}
                className="group relative p-10 rounded-[40px] transition-all duration-700 hover:bg-[#0A0A0A] hover:scale-[1.03] bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.03)]"
              >
                <div className="hud-corner-tl opacity-0 group-hover:opacity-40 transition-opacity" />
                <div className="flex flex-col items-start gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF4C00]/10 flex items-center justify-center group-hover:bg-[#FF4C00] transition-transform duration-500 group-hover:rotate-[360deg] text-[#FF4C00] group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-[24px] text-black group-hover:text-white transition-colors mb-4">{item.title}</h3>
                    <p className="font-dm text-[17px] leading-relaxed text-black/50 group-hover:text-white/60 transition-colors">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. Competitive Advantage --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-10">
              {[
                { title: "Universal Biometrics", desc: "No smartphone required. Our identity-driven reader eliminates tech barriers for millions." },
                { title: "Verified Network", desc: "Built directly into the park management infrastructure, not just a consumer app." },
                { title: "Direct Settlements", desc: "Automated, real-time revenue splits for drivers, owners, and operators." }
              ].map((edge, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-10 h-10 rounded-full border-2 border-[#FF4C00]/20 flex items-center justify-center mt-1 group-hover:border-[#FF4C00] transition-all">
                    <span className="font-black text-[#FF4C00] text-[14px]">0{i+1}</span>
                  </div>
                  <div className="pb-8 w-full border-b border-black/5">
                    <h4 className="font-black text-[22px] mb-3 group-hover:text-[#FF4C00] transition-colors">{edge.title}</h4>
                    <p className="text-black/50 text-[17px] leading-relaxed group-hover:text-black/70 transition-colors">{edge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-10 text-right lg:text-left">
              <div className="inline-block px-4 py-1 rounded-full bg-[#FF4C00]/10 border border-[#FF4C00]/20 text-[#FF4C00] font-bold text-[12px] uppercase tracking-widest">Our Edge</div>
              <h2 className="font-black text-[clamp(28px,5vw,54px)] leading-tight tracking-tight">The T-Yap <span className="text-[#FF4C00]">Network.</span></h2>
              <p className="font-dm text-[19px] text-black/70 leading-relaxed">
                We aren't just building an app — we are re-engineering the actual flow of movement and money in Africa’s largest economy.
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. Call to Equity --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
           <div className="absolute top-12 left-1/2 -translate-x-1/2 font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
            Equity
          </div>
          <div 
            className="p-12 md:p-24 rounded-[60px] bg-[#0A0A0A] text-center relative overflow-hidden border border-white/5"
            style={{ boxShadow: "0 60px 120px rgba(0,0,0,0.2)" }}
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />
            
            <h2 className="font-black text-white text-[clamp(32px,5vw,60px)] leading-tight mb-8 relative z-10">Scale the <span className="text-[#FF4C00]">Vision.</span></h2>
            <p className="font-dm text-[18px] md:text-[23px] text-white/50 max-w-2xl mx-auto mb-16 relative z-10 leading-relaxed font-thin">
              T-Yap is redefining how millions move, pay, and connect. Let’s build the future of African mobility together.
            </p>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10 text-left">
              <div className="p-10 rounded-[36px] bg-white/[0.03] border border-white/10 hover:border-[#FF4C00]/50 transition-all duration-500 group/link">
                <p className="text-[#FF4C00] font-black text-xs uppercase tracking-[0.3em] mb-4">Capital Inquiry</p>
                <p className="text-white text-2xl md:text-3xl font-black group-hover:translate-x-2 transition-transform">ir@t-yap.com</p>
              </div>
              <div className="p-10 rounded-[36px] bg-white/[0.03] border border-white/10 hover:border-[#FF4C00]/50 transition-all duration-500 group/link">
                <p className="text-[#FF4C00] font-black text-xs uppercase tracking-[0.3em] mb-4">Regional Expansion</p>
                <p className="text-white text-2xl md:text-3xl font-black group-hover:translate-x-2 transition-transform">+234 90 3370 4603</p>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF4C00]/10 blur-[120px] pointer-events-none" />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default InvestorPitch;
