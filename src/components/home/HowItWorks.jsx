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
    icon: <IoFingerPrintSharp size={32} color="rgba(153, 0, 0, 1)" />,
  },
  {
    id: 2,
    title: "Load Your Wallet",
    description:
      "Fund your wallet easily through bank transfer, USSD, agent kiosks, or partner merchants. Use it for rides, transfers, and bill payments.",
    icon: <HiWallet size={32} color="rgba(153, 0, 0, 1)" />,
  },
  {
    id: 3,
    title: "Tap to Pay",
    description:
      "Simply board a bus, shuttle, or keke and tap your fingerprint. The fare is deducted instantly no cash, no hassle.",
    icon: <TbBus size={32} color="rgba(153, 0, 0, 1)" />,
  },
  {
    id: 4,
    title: "Track Trips & Wallet Activity",
    description:
      "Monitor your trip history, wallet balance, and receipts in real time. Transparency and control at your fingertips.",
    icon: <BiSolidBarChartAlt2 size={32} color="rgba(153, 0, 0, 1)" />,
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section
      id="how-it-works"
      className="relative w-full flex flex-col items-center justify-center py-24 px-6 bg-white overflow-hidden"
    >
      {/* Decorative blurred background eclipses */}
      <div
        className="absolute w-[760px] h-[760px] bg-[rgba(255,76,0,0.6)] rounded-full blur-[400px] opacity-40 right-[-580px] top-[200px] z-0"
      ></div>
      <div
        className="absolute w-[760px] h-[760px] bg-[rgba(255,76,0,0.6)] rounded-full blur-[400px] opacity-40 left-[-580px] top-[600px] z-0"
      ></div>

      {/* Heading */}
      <h2 className="text-[40px] md:text-[48px] font-sora font-semibold text-black text-center mb-16 relative z-10">
        How It Works
      </h2>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {steps.map((step) => (
          <div
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`cursor-pointer transition-all duration-300 ease-in-out ${
              activeStep === step.id
                ? "border border-[rgba(217,217,217,1)] shadow-md"
                : "border border-transparent"
            } rounded-[20px] w-[100%] md:w-[581px] h-auto md:h-[265px] p-6 flex flex-col justify-start`}
          >
            {/* Step Header Row */}
            <div className="flex justify-between items-start mb-4">
              <h3
                className="font-sora text-[18px] md:text-[20px] font-semibold"
                style={{ color: "rgba(249, 194, 15, 1)" }}
              >
                Step {step.id}
              </h3>

              {/* Icon Circle */}
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "72px",
                  height: "72px",
                  background: "rgba(250, 242, 242, 1)",
                }}
              >
                {step.icon}
              </div>
            </div>

            {/* Sub Heading */}
            <h4 className="font-lato text-[24px] font-semibold text-black mb-2">
              {step.title}
            </h4>

            {/* Paragraph */}
            <p className="font-sora text-[20px] text-black leading-snug w-[95%]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
