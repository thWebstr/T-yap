import React, { useState } from "react";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { IoFingerPrintSharp } from "react-icons/io5";
import { HiWallet } from "react-icons/hi2";
import { TbBus } from "react-icons/tb";

const steps = [
  {
    id: 1,
    title: "Register with Fingerprint",
    description:
      "Sign up via the mobile app or at a T-yap kiosk. Your fingerprint becomes your secure key for all payments and travel.",
    icon: <IoFingerPrintSharp size={28} />,
  },
  {
    id: 2,
    title: "Load Your Wallet",
    description:
      "Fund your wallet easily through bank transfer, USSD, agent kiosks, or partner merchants.",
    icon: <HiWallet size={28} />,
  },
  {
    id: 3,
    title: "Tap to Pay",
    description:
      "Board a bus or keke and tap your fingerprint. No cash, no stress.",
    icon: <TbBus size={28} />,
  },
  {
    id: 4,
    title: "Track Activity",
    description:
      "Monitor trips, wallet balance, and receipts in real time.",
    icon: <BiSolidBarChartAlt2 size={28} />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="how-it-works"
      className="relative w-full flex flex-col items-center py-24 px-6 bg-white overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute w-[700px] h-[700px] bg-[rgba(255,76,0,0.5)] rounded-full blur-[350px] opacity-30 right-[-500px] top-[200px]" />
      <div className="absolute w-[700px] h-[700px] bg-[rgba(255,76,0,0.5)] rounded-full blur-[350px] opacity-30 left-[-500px] top-[500px]" />

      {/* Heading */}
      <h2 className="text-[38px] md:text-[46px] font-sora font-semibold text-black text-center mb-20 relative z-10">
        How It Works
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full relative z-10">
        {steps.map((step) => {
          const isActive = activeStep === step.id;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`group cursor-pointer rounded-[20px] p-6 transition-all duration-300
              ${
                isActive
                  ? "bg-[#fff7f0] shadow-md border border-[#f5d6c6]"
                  : "bg-white border border-transparent hover:shadow-sm"
              }`}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center mb-5">
                <span className="text-[14px] font-semibold text-[#f9c20f]">
                  Step {step.id}
                </span>

                {/* Icon */}
                <div
                  className={`w-[60px] h-[60px] flex items-center justify-center rounded-full transition-all
                  ${
                    isActive
                      ? "bg-white shadow-sm"
                      : "bg-[#faf2f2] group-hover:bg-[#fff1e8]"
                  }`}
                >
                  <span className="text-[rgba(153,0,0,1)]">
                    {step.icon}
                  </span>
                </div>
              </div>

              <h3 className="text-[20px] md:text-[22px] font-semibold text-black mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] md:text-[17px] text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;