import React, { useState } from "react";
import { FaInstagram, FaXTwitter, FaGlobe } from "react-icons/fa6";
import logo from "../../assets/Tyaplogo.png";
import { supabase } from "../../supabaseClient"; // 👈 import Supabase

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      const { error } = await supabase.from("subscriptions").insert([{ email }]);
      if (error) throw error;
      setMessage("✅ Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      console.error(err.message);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <footer className="w-full bg-[rgba(56,18,2,1)] text-white px-6 md:px-20 py-16 mt-20">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <p className="font-sora font-semibold text-[20px] leading-[30px] max-w-lg mb-4 md:mb-0">
          Stay updated on launch dates, product features, and partnership
          opportunities.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="flex items-center space-x-3 w-full md:w-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border border-[rgba(217,217,217,0.49)] rounded-[20px] text-white placeholder:text-[rgba(255,255,255,0.69)] px-4 py-2 w-[70%] md:w-[426px] focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[rgba(255,76,0,1)] text-black font-sora font-semibold rounded-full px-6 py-2 hover:bg-orange-500 transition-all"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Feedback */}
      {message && <p className="text-center mt-4 text-sm">{message}</p>}

      {/* Divider */}
      <div className="border-t border-[rgba(255,255,255,0.45)] my-8"></div>

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div className="max-w-sm mb-10 md:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <img src={logo} alt="T-Yap logo" className="w-8 h-8" />
            <h3 className="text-[28px] font-sora font-semibold">T-Yap</h3>
          </div>
          <p className="text-[16px] font-sora leading-[23px]">
            Nigeria’s first biometric payment system for public transport safe,
            fast, and inclusive.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-16">
          <div>
            <h4 className="font-sora font-semibold text-[16px] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[16px] font-sora">
              <li>About</li>
              <li>How it Works</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-[16px] mb-4">Social</h4>
            <div className="flex space-x-4 text-[22px]">
              <a
                href="https://www.instagram.com/t_yap__ng?igsh=c3hla2xsdTN3aGtw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/t_yap__ng?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-400 transition-colors"
              >
                <FaXTwitter />
              </a>

              <FaGlobe />
            </div>
          </div>

          <div>
            <h4 className="font-sora font-semibold text-[16px] mb-4">Contact</h4>
            <p className="text-[16px] leading-[23px]">
              Address: Lagos, Nigeria
              <br />
              Phone: +234 90 3370 4603
              <br />
              Email: support@t-yap.com
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(255,255,255,0.45)] mt-10 mb-4"></div>

      <p className="text-center text-[16px] font-sora">
        © 2025 <span className="font-semibold">T-yap NG Ltd.</span> All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
