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

      {/* --- Section Watermark --- */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 font-black text-[15vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap">
        Onboarding
      </div>

      {/* --- Premium Illumination --- */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FF4C00]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF4C00]/5 to-transparent blur-[100px] pointer-events-none" />

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
      <section className="relative z-10 flex-1 flex flex-col items-center justify-center pt-48 pb-24 px-6">
        
        {/* Header */}
        <div className="text-center mb-12 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]">
          <h2 className="text-[14px] font-bold tracking-[0.2em] uppercase text-black/40 mb-4">
            {config.title}
          </h2>
          <h1 
            className="font-black"
            style={{ fontSize: "clamp(36px, 6vw, 54px)", lineHeight: 1.1, letterSpacing: "-0.04em" }}
          >
            Joining as{" "}
            <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
              {config.subtitle}.
              <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-[12px] md:h-[18px]" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z" fill="#FF4C00" />
              </svg>
            </span>
          </h1>
        </div>

        {/* The Onboarding Card */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[520px] p-8 md:p-12 rounded-[40px] relative transition-all duration-500 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.06)"
          }}
        >
          <div className="space-y-6">
            {["name", "email", "phone", "state"].map((field) => (
              <div key={field} className="relative group">
                <label className="block text-left font-bold text-[14px] uppercase tracking-wider text-black/50 mb-2 ml-1">
                  {field}
                </label>
                <input
                  required
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  placeholder={`Your ${field}...`}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full h-[60px] px-6 rounded-[20px] bg-black/5 border border-transparent text-black placeholder:text-black/30 outline-none focus:bg-white focus:border-[#FF4C00] focus:ring-4 focus:ring-[#FF4C00]/5 transition-all duration-300 font-dm font-semibold"
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-[65px] mt-6 rounded-[22px] bg-[#FF4C00] text-white font-black text-[18px] hover:shadow-[0_20px_40px_rgba(255,76,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
              {isSubmitting ? "Processing..." : "Secure Your Spot"}
            </button>
            
            <p className="text-center text-black/40 text-[12px] font-medium px-4">
              By joining, you agree to receive updates on T-Yap's biometric payment network.
            </p>
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default WaitlistForm;
