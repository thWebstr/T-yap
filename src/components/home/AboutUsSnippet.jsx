import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const AboutUsSnippet = () => {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative py-24 px-6 md:px-20 bg-white text-center flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Orange blur background (right + left) */}
      <div
        className="absolute rounded-full blur-[400px]"
        style={{
          width: "600px",
          height: "600px",
          top: "100px",
          left: "-400px",
          background: "rgba(255, 76, 0, 0.6)",
          opacity: 0.25,
          zIndex: 0,
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
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-sora font-semibold text-black mb-8">
          About Us
        </h2>
        <p className="text-lg md:text-xl text-black font-sora font-medium leading-relaxed mb-8">
          T-Yap NG is a next generation biometric payment and transport <br />
          technology company redefining how people move, pay, and earn<br /> across
          Africa.
          <br />
          <br />
          We are building a unified ecosystem that connects passengers,<br /> drivers,
          transport operators, and financial institutions through <br /> secure,
          cashless, and identity-based transactions.
          <br />
          <br />
          At T-Yap, we believe mobility and finance are deeply connected<br /> and
          everyone, regardless of whether they own a smartphone or<br /> have a bank
          account, should have access to a seamless, trusted<br /> payment experience.
        </p>

        <Button
          label="Read More"
          onClick={() => navigate("/about")}
          className="bg-[rgba(255,76,0,1)] text-white hover:bg-orange-600"
        />
      </div>
    </section>
  );
};

export default AboutUsSnippet;
