import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { supabase } from "../supabaseClient";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const formDataConfig = {
  passenger: {
    subtitle: "Passenger",
    accent: "#FF4C00",
  },
  driver: {
    subtitle: "Driver",
    accent: "#FF8A00",
  },
  park: {
    subtitle: "Park Management",
    accent: "#00C853",
  },
  merchant: {
    subtitle: "Merchant",
    accent: "#2979FF",
  },
};

const WaitlistForm = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const config = formDataConfig[type] || formDataConfig.passenger;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("waitlist").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          state: formData.state,
          category: config.subtitle,
        },
      ]);

      if (error) throw error;
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting waitlist:", error.message);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-black font-dm overflow-hidden flex flex-col">
      {/* --- Navbar --- */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* --- Section Watermarks --- */}
      <div className="absolute top-[25%] left-[10%] font-black text-[12vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
        Identity
      </div>
      <div className="absolute bottom-[20%] right-[10%] font-black text-[12vw] text-black/[0.012] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
        Verification
      </div>

      {/* --- Premium Illumination --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF4C00]/12 to-transparent blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF4C00]/8 to-transparent blur-[110px] pointer-events-none" />

      {/* 🔙 Back Navigation */}
      <button
        onClick={() => navigate(-1)}
        className="group fixed top-[120px] left-6 md:left-12 z-50 flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-90"
      >
        <div className="relative w-[50px] h-[50px] flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-lg group-hover:bg-[#FF4C00] group-hover:border-[#FF4C00] transition-all">
          <FiChevronLeft className="text-[22px] text-[#FF4C00] group-hover:text-white transition-all" />
        </div>
      </button>

      {/* --- Form Section --- */}
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center pt-48 pb-24 px-6 md:px-0">
        
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="h-[1px] w-8 bg-[#FF4C00]/40" />
             <h2 className="text-[12px] md:text-[14px] font-bold tracking-[0.3em] uppercase text-black/40">
                {type?.toUpperCase() || "PASSENGER"} ONBOARDING
             </h2>
             <div className="h-[1px] w-8 bg-[#FF4C00]/40" />
          </div>
          <h1 
            className="font-black"
            style={{ fontSize: "clamp(36px, 6vw, 64px)", lineHeight: 1.1, letterSpacing: "-0.04em" }}
          >
            Digital <br className="md:hidden" />
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              Identity.
              <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[12px] md:h-[18px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" />
              </svg>
            </span>
          </h1>
        </div>

        {/* The Onboarding Card */}
        <div className="relative group/card w-full max-w-[540px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
          
          {/* Biometric Scanning Overlay (Active during submission) */}
          {isSubmitting && (
            <div className="absolute inset-0 z-50 rounded-[40px] overflow-hidden bg-black/5 backdrop-blur-[2px] transition-all duration-500 flex flex-col items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-b from-[#FF4C00]/5 to-transparent pointer-events-none" />
               <div className="relative w-24 h-24 mb-6 text-[#FF4C00]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full animate-pulse">
                    <path d="M12 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2z" />
                    <path d="M12 2v2" />
                    <path d="M19.1 11.2l-.1-1.2C18.8 6.7 16 4 12.7 4h-1.4c-3.3 0-6.1 2.7-6.3 6l-.1 1.2" />
                  </svg>
                  {/* Laser Line */}
                  <div className="absolute left-[-20px] top-0 w-[calc(100%+40px)] h-[1px] bg-[#FF4C00] shadow-[0_0_15px_#FF4C00] animate-scan-laser" />
               </div>
               <p className="font-dm font-black text-[#FF4C00] text-[11px] uppercase tracking-[0.4em] animate-pulse">Verifying Identity...</p>
            </div>
          )}

          {/* Form Container */}
          <form
            onSubmit={handleSubmit}
            className={`relative p-10 md:p-14 rounded-[40px] transition-all duration-700 bg-white/70 backdrop-blur-3xl border border-black/5 shadow-[0_40px_120px_rgba(0,0,0,0.08)] ${isSubmitting ? "opacity-30 scale-95" : "hover:border-[#FF4C00]/20"}`}
          >
            {/* HUD Corners */}
            <div className="hud-corner-tl" />
            <div className="hud-corner-br" />

            <div className="space-y-6">
              {["name", "email", "phone", "state"].map((field) => (
                <div key={field} className="relative group">
                  <label className="block text-left font-bold text-[13px] uppercase tracking-wider text-black/50 mb-2 ml-1">
                    {field}
                  </label>
                  <input
                    required
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={`Enter your ${field}...`}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full h-[64px] px-7 rounded-[22px] bg-black/5 border border-transparent text-black placeholder:text-black/20 outline-none focus:bg-white focus:border-[#FF4C00] focus:ring-8 focus:ring-[#FF4C00]/5 transition-all duration-500 font-dm font-semibold text-[17px]"
                  />
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="group/btn relative w-full h-[68px] mt-6 rounded-[24px] bg-[#0A0A0A] text-white font-black text-[18px] uppercase tracking-widest overflow-hidden hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
              >
                <div className="absolute inset-0 bg-[#FF4C00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10">{isSubmitting ? "Processing" : "Initialize Access"}</span>
              </button>
              
              <p className="text-center text-black/30 text-[11px] font-medium leading-relaxed max-w-[280px] mx-auto pt-4">
                Encryption active. Your data is protected by the T-Yap Biometric Protocol.
              </p>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WaitlistForm;
