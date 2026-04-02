import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturesSnippet = () => {
  const navigate = useNavigate();

  return (
    <section
      id="features"
      className="relative w-full flex flex-col items-center justify-center py-20 px-6 md:px-20 bg-white overflow-hidden"
    >
      {/* Section Header */}
      <h2 className="text-center text-3xl md:text-4xl font-sora font-semibold text-black mb-10">
        Features
      </h2>

      {/* Feature content */}
     <div className="w-full text-center">
        <h3 className="font-sora text-[20px] md:text-[22px] font-semibold text-center text-[rgba(0, 0, 0, 1)] mb-4">
          1. Biometric Transport Payment System
        </h3>

        <ul className="text-black font-sora text-[18px] space-y-2 list-disc list-inside inline-block text-left">
          <li>
            Pay instantly using your fingerprint no cash, no cards, no phones needed.
          </li>
          <li>
            Works on all registered buses, terminals, and transport kiosks.
          </li>
          <li>
            Ensures security, eliminates fare disputes, and promotes transparency.
          </li>
        </ul>
      </div>

      {/* See All Link */}
      <div className="w-full md:w-[880px] flex justify-end mt-6">
        <button
          onClick={() => navigate("/features")}
          className="font-sora text-[16px] underline text-[rgba(255,76,0,1)] leading-[40px] transition-all hover:text-orange-600"
          style={{
            width: "57px",
            height: "26px",
            textDecorationStyle: "solid",
            textDecorationThickness: "0%",
            textDecorationSkipInk: "auto",
          }}
        >
          See all
        </button>
      </div>
    </section>
  );
};

export default FeaturesSnippet;
