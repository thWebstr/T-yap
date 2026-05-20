import React, { useState } from "react";
import { FaInstagram, FaXTwitter, FaGlobe } from "react-icons/fa6";
import { CheckCircle2, AlertCircle } from "lucide-react";
import logo from "../../assets/Tyaplogo.png";
import { supabase } from "../../supabaseClient";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }

    try {
      const { error } = await supabase.from("subscriptions").insert([{ email }]);
      if (error) throw error;
      setStatus({ type: "success", message: "Thanks for subscribing!" });
      setEmail("");
    } catch (err) {
      console.error(err.message);
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <footer
      id="footer"
      className="relative w-full text-white px-6 md:px-20 py-24 overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Background Watermark */}
      <div 
        className="absolute bottom-24 left-1/2 -translate-x-1/2 font-dm font-black text-[15vw] tracking-[-0.05em] text-white/[0.015] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Universe
      </div>

      {/* Dynamic Background Glows */}
      <div 
        className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.1) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] opacity-15 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,138,0,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Subscription Glass Card */}
        <div 
          className="rounded-[32px] p-8 md:p-12 mb-20 flex flex-col lg:flex-row justify-between items-center gap-10 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards]"
          style={{ 
            backgroundColor: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
          }}
        >
          <div className="flex-1 text-center lg:text-left">
            <h3 className="font-dm font-black text-[28px] md:text-[34px] leading-tight mb-4 tracking-tight">
              Stay in the <span className="text-[#FF4C00]">Loop.</span>
            </h3>
            <p className="font-dm text-[16px] md:text-[18px] text-white/60 leading-relaxed max-w-md">
              Get updates on launch dates, product previews, and partnership opportunities.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto"
          >
            <div className="relative w-full sm:w-[350px]">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-[18px] text-white placeholder:text-white/30 px-6 py-4 focus:outline-none focus:border-[#FF4C00] focus:ring-1 focus:ring-[#FF4C00]/50 transition-all"
              />
              {status.message && (
                <div className={`absolute -bottom-8 left-2 flex items-center gap-2 text-[13px] font-medium transition-all ${status.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                  {status.type === 'error' ? <AlertCircle size={14} /> : <CheckCircle2 size={14} />}
                  <span>{status.message}</span>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#FF4C00] text-white font-dm font-bold rounded-[18px] px-8 py-4 hover:shadow-[0_0_20px_rgba(255,76,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.4s_forwards]">
          
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="T-Yap logo" className="w-10 h-10" />
              <span className="text-[32px] font-dm font-black tracking-tighter">T-Yap<span className="text-[#FF4C00]"></span></span>
            </div>
            <p className="font-dm text-[16px] text-white/60 leading-relaxed">
              Nigeria’s first biometric payment system for public transport, safe, fast, and inclusive. Built for the realities of the African market.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4C00]" />
              <h4 className="font-dm font-bold text-[18px] tracking-wide uppercase">Links</h4>
            </div>
            <ul className="flex flex-col gap-3 font-dm text-[16px] text-white/60">
              {["About Us", "How it Works", "Key Features", "Partner with Us"].map((link) => (
                <li key={link} className="hover:text-[#FF4C00] transition-colors cursor-pointer w-fit">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4C00]" />
              <h4 className="font-dm font-bold text-[18px] tracking-wide uppercase">Connect</h4>
            </div>
            <div className="font-dm text-[16px] text-white/60 leading-relaxed flex flex-col gap-3">
              <p>Lagos, Nigeria</p>
              <p className="hover:text-[#FF4C00] transition-colors cursor-pointer w-fit">+234 90 3370 4603</p>
              <p className="hover:text-[#FF4C00] transition-colors cursor-pointer w-fit">support@t-yap.com</p>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF4C00]" />
              <h4 className="font-dm font-bold text-[18px] tracking-wide uppercase">Socials</h4>
            </div>
            <div className="flex gap-4">
              {[
                { icon: <FaInstagram />, url: "https://www.instagram.com/t_yap__ng?igsh=c3hla2xsdTN3aGtw" },
                { icon: <FaXTwitter />, url: "https://x.com/t_yap__ng?s=21" },
                { icon: <FaGlobe />, url: "#" }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-[20px] text-white hover:bg-[#FF4C00] hover:border-[#FF4C00] transition-all duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Premium Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-0 animate-[fadeSlideUp_0.8s_ease-out_0.6s_forwards]">
          <p className="font-dm text-[14px] text-white/40">
            © 2025 <span className="font-semibold text-white/60">T-yap NG Ltd.</span> All rights reserved.
          </p>
          <div className="flex gap-8 font-dm text-[14px] text-white/40">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
