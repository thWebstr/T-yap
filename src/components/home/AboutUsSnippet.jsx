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
    <section className="relative py-24 px-6 md:px-20 bg-white overflow-hidden">
      
      <div
        className="absolute rounded-full blur-[400px]"
        style={{
          width: "600px",
          height: "600px",
          top: "100px",
          left: "-400px",
          background: "rgba(255, 76, 0, 0.6)",
          opacity: 0.25,
        }}
      ></div>

      <div
        className="absolute rounded-full blur-[400px]"
        style={{
          width: "600px",
          height: "600px",
          top: "300px",
          right: "-400px",
          background: "rgba(255, 76, 0, 0.6)",
          opacity: 0.25,
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-dm font-semibold text-black">
            About Us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 relative h-[350px] md:h-[420px] overflow-hidden">
            
            <div
              className={`absolute w-full h-full flex items-center justify-center 
              transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${active === 0 ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >
              <img
                src={Aboutimage}
                alt="About 1"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div
              className={`absolute w-full h-full flex items-center justify-center 
              bg-[#fff7f0] rounded-xl p-4
              transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]
              ${active === 1 ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
            >
              <img
                src={Aboutimage3}
                alt="About 2"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-left">
            <p className="text-lg md:text-xl text-black font-lato font-medium leading-relaxed mb-8">
              T-Yap NG is a next generation biometric payment and transport 
              technology company redefining how people move, pay, and earn across
              Africa.
              <br /><br />
              We are building a unified ecosystem that connects passengers, drivers,
              transport operators, and financial institutions through secure,
              cashless, and identity-based transactions.
              <br /><br />
              At T-Yap, we believe mobility and finance are deeply connected and
              everyone, regardless of whether they own a smartphone or have a bank
              account, should have access to a seamless, trusted payment experience.
            </p>

            <Button
              label="Read More"
              onClick={() => navigate("/about")}
              className="bg-[rgba(255,76,0,1)] text-white hover:bg-orange-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnippet;
