import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const InvestSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="invest"
      className="relative w-full flex justify-center items-center py-24 px-6 overflow-hidden"
    >
      {/* 🔶 Blurred Background Ellipses */}
      <div className="absolute w-[900px] h-[900px] rounded-full blur-[400px] bg-[rgba(255,255,255,0.2)] top-[-200px] left-[-250px] z-0"></div>
      <div className="absolute w-[900px] h-[900px] rounded-full blur-[400px] bg-[rgba(255,138,0,0.25)] bottom-[-300px] right-[-250px] z-0"></div>

      {/* 🔸 Main Container */}
      <div
        className="relative z-10 w-[90%] md:w-[95%] max-w-[1425px] rounded-[30px] py-24 flex flex-col items-center justify-center text-center"
        style={{ background: "rgba(213, 67, 5, 1)" }}
      >
        {/* Heading */}
        <h2 className="font-sora font-extrabold text-[36px] md:text-[52px] leading-[58px] text-white max-w-[752px]">
          Invest in the Future of Public Transport Payments in Nigeria
        </h2>

        {/* Subtitle */}
        <p className="font-sora text-[18px] md:text-[22px] leading-[28px] text-white mt-6 max-w-[732px]">
          First-mover advantage, massive market, recurring revenue, pilot tested.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/invest")}
          className="relative flex items-center justify-between bg-white text-[rgba(213,67,5,1)] font-sora font-bold text-[18px] md:text-[20px] rounded-[12px] px-6 md:px-8 mt-10 w-[220px] md:w-[240px] h-[60px] md:h-[68px] hover:bg-[rgba(255,255,255,0.9)] transition-all duration-300 shadow-md"
        >
          <span className="flex-1 text-left">Invest Now</span>
          <div className="flex items-center justify-center w-[50px] h-[50px] md:w-[58px] md:h-[58px] rounded-full bg-[rgba(255,76,0,1)] ml-3">
            <BsArrowUpRight className="text-white text-[22px] md:text-[26px]" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default InvestSection;
