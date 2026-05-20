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
        <div className="absolute top-48 left-1/2 -translate-x-1/2 font-black text-[18vw] text-white/[0.02] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
          Equity
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">

          <h1 
            className="font-black text-white mb-8 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]"
            style={{ fontSize: "clamp(42px, 8vw, 84px)", lineHeight: 0.9, letterSpacing: "-0.05em" }}
          >
            The Future of{" "}
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Public
              <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[18px] md:h-[26px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" style={{ filter: "drop-shadow(0 0 10px rgba(255,76,0,0.5))" }} />
              </svg>
            </span>{" "}
            Mobility.
          </h1>
          
          <p className="font-dm text-[20px] md:text-[26px] text-white/70 max-w-2xl opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
            Revolutionizing transport payments across Africa through biometric innovation and financial inclusion.
          </p>
        </div>
      </section>

      {/* --- Main Deck Narrative --- */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 py-32 space-y-48">
        
        {/* --- 1. The Market Opportunity --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards] scroll-mt-24">
          <div className="absolute top-0 right-0 font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap translate-x-1/2">
            Market
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <h2 className="font-black text-[clamp(36px,5vw,56px)] leading-tight tracking-tight">The <span className="text-[#FF4C00]">Opportunity.</span></h2>
              <p className="font-dm text-[19px] text-black/70 leading-relaxed">
                Over 80% of Nigeria’s 200+ million people rely on public transport daily, yet the industry remains trapped in a cash-based cycle. This inefficiency hides a massive digital transformation opportunity.
              </p>
            </div>
            
            {/* Impact Data Card */}
            <div 
              className="p-10 md:p-14 rounded-[40px] bg-[#FF4C00] text-white shadow-[0_40px_80px_rgba(213,67,5,0.2)] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h3 className="font-black text-[64px] md:text-[80px] leading-none mb-4">₦5T+</h3>
                <p className="font-bold text-[20px] md:text-[24px] uppercase tracking-wider mb-6 opacity-90">Annual Cash Flow</p>
                <p className="text-white/80 text-[16px] md:text-[18px]">
                  Unlocking a multi-billion naira market by digitizing every bus park, route, and transaction in Nigeria.
                </p>
              </div>
              <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-white/10 blur-3xl rounded-full transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </section>

        {/* --- 2. The Solution Grid --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <div className="absolute top-0 left-0 font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap -translate-x-1/2">
            Scale
          </div>
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="font-black text-[clamp(36px,6vw,60px)] leading-tight tracking-tighter mb-8">Bridging the <span className="text-[#FF4C00]">Gap.</span></h2>
            <p className="font-dm text-[18px] md:text-[21px] text-black/60 max-w-2xl">
              T-Yap transforms transport hubs into gateways for digital identity and financial empowerment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gapSolutions.map((item, i) => (
              <div 
                key={i}
                className="group p-8 rounded-[32px] transition-all duration-500 hover:bg-[#0A0A0A] hover:scale-[1.03]"
                style={{ 
                  backgroundColor: "rgba(0,0,0,0.015)", 
                  border: "1px solid rgba(0,0,0,0.05)",
                  backdropFilter: "blur(10px)"
                }}
              >
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FF4C00]/10 flex items-center justify-center group-hover:bg-[#FF4C00] group-hover:text-white transition-all text-[#FF4C00]">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[22px] text-black group-hover:text-white transition-colors">{item.title}</h3>
                </div>
                <p className="font-dm text-[16px] leading-relaxed text-black/60 group-hover:text-white/60 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 3. Our Edge (Competitive Advantage) --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 flex flex-col gap-8">
              {[
                { title: "No Smartphone Required", desc: "Our biometric readers eliminate barriers for non-tech-savvy users." },
                { title: "Full Ecosystem Integration", desc: "Dashboards for passengers, drivers, and park administrators." },
                { title: "Commercial Partnerships", desc: "Built with the backing of transport unions and banking partners." }
              ].map((edge, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-8 h-8 rounded-full bg-[#FF4C00]/10 flex items-center justify-center mt-1 group-hover:scale-125 transition-transform">
                    <BsCheckCircleFill className="text-[#FF4C00] text-[18px]" />
                  </div>
                  <div className="border-b border-black/5 pb-6 w-full">
                    <h4 className="font-bold text-[20px] mb-2">{edge.title}</h4>
                    <p className="text-black/60 text-[16px] leading-relaxed">{edge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-8 text-right lg:text-left">
              <h2 className="font-black text-[clamp(28px,5vw,50px)] leading-tight tracking-tight">Our <span className="text-[#FF4C00]">Competitive Edge.</span></h2>
              <p className="font-dm text-[18px] text-black/70 leading-relaxed">
                We aren't just building an app — we are re-engineering the actual flow of movement and money in Africa’s largest economy.
              </p>
            </div>
          </div>
        </section>

        {/* --- 4. Call to Movement --- */}
        <section className="relative opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
            Growth
          </div>
          <div 
            className="p-12 md:p-20 rounded-[48px] bg-[#0A0A0A] text-center relative overflow-hidden"
            style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.15)" }}
          >
            <h2 className="font-black text-white text-[clamp(32px,5vw,54px)] leading-tight mb-8 relative z-10">Join the <span className="text-[#FF4C00]">Movement.</span></h2>
            <p className="font-dm text-[18px] md:text-[21px] text-white/60 max-w-2xl mx-auto mb-14 relative z-10">
              T-Yap is redefining how millions move, pay, and connect. Let’s build the future of African mobility together.
            </p>
            
            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto relative z-10">
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-left">
                <p className="text-[#FF4C00] font-bold text-sm uppercase tracking-widest mb-2">General Inquiry</p>
                <p className="text-white text-xl font-bold">support@t-yap.com</p>
              </div>
              <div className="p-8 rounded-[32px] bg-white/5 border border-white/10 text-left">
                <p className="text-[#FF4C00] font-bold text-sm uppercase tracking-widest mb-2">Global Partnerships</p>
                <p className="text-white text-xl font-bold">+234 90 3370 4603</p>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#FF4C00]/10 to-transparent pointer-events-none" />
          </div>
        </section>

      </div>

      <Footer />
    </main>
  );
};

export default InvestorPitch;
