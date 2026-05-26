import React from "react";
import Navbar from "../layout/Navbar";
import Button from "../ui/Button";
import heroBg6 from "../../assets/Tyaphero7.png";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative flex flex-col overflow-hidden">
      <Navbar />

      <div className="relative w-full">
        <img
          src={heroBg6}
          alt="Hero background"
          className="w-full block"
          style={{
            height: "auto",
            minHeight: "520px",   
            maxHeight: "100vh",
            objectFit: "cover",   
            objectPosition: "center",
          }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="font-sora font-semibold text-[#fff7f0] text-[7vw] sm:text-[48px] md:text-[82px] leading-tight max-w-[85%]">
            Tap. Ride. <br /> Pay. Smarter.
          </h1>

          <p className="mt-2 sm:mt-6 font-sora font-semibold text-[#fff] text-[vw] sm:text-[16px] md:text-[24px] leading-snug max-w-[720px]">
            Nigeria's first biometric payment system for public transport. Safe,
            fast, and convenient powered by fintech and insurance features.
          </p>

          <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button
              label="Get Started"
              variant="primary"
              onClick={() => scrollToSection("#who-we-serve")}
            />
            <Button
              label="Partner With Us"
              variant="outline"
              onClick={() => scrollToSection("#invest")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;