import React from "react";
import Navbar from "../layout/Navbar";
import Button from "../ui/Button";
import heroBg from "../../assets/herobg.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="absolute inset-0 bg-white/5"></div>

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 mt-28 px-6 flex flex-col items-center justify-center">
        <h1 className="font-sora font-semibold text-white text-[48px] sm:text-[64px] md:text-[82px] leading-[60px] sm:leading-[80px] md:leading-[100px] max-w-[580px]">
          Tap. Ride. <br /> Pay. Smarter.
        </h1>

        <p className="mt-6 font-sora font-semibold text-white text-[16px] sm:text-[20px] md:text-[24px] leading-[26px] sm:leading-[32px] md:leading-[40px] max-w-[800px]">
          Nigeria’s first biometric payment system for public transport. Safe,
          fast, and convenient — powered by fintech and insurance features.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button label="Get Started" variant="primary" />
          <Button label="Partner With Us" variant="outline" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
