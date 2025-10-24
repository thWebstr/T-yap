import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBus, FaUserTie, FaStore, FaBuilding } from "react-icons/fa";

const WhoWeServe = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: <FaBus />,
      title: "Passengers",
      subtitle: "Travel faster, safer, and smarter.",
      points: [
        "Tap your fingerprint for instant fare payment.",
        "Track trips, wallet, and receipts in real time.",
        "Access T-Ride shuttle, wallet services, and bill payments.",
      ],
      buttonText: "Join as Passenger",
      link: "/join/passenger",
      bgColor: "rgba(252, 246, 246, 1)",
    },
    {
      icon: <FaUserTie />,
      title: "Drivers",
      subtitle: "Simplify fare collection and grow your earnings.",
      points: [
        "Automatic fare settlement to your wallet.",
        "Dashboard to track payments and trips.",
        "Device leasing available.",
        "No disputes over cash or balance.",
      ],
      buttonText: "Join as Driver",
      link: "/join/driver",
      bgColor: "rgba(255, 252, 243, 1)",
    },
    {
      icon: <FaBuilding />,
      title: "Park Management",
      subtitle: "Bring transparency and accountability to your park.",
      points: [
        "Easy onboarding for drivers.",
        "Data insights for improved park efficiency.",
        "Receive park fees automatically, no cash handling.",
        "Manage parks, drivers, and revenue effortlessly.",
      ],
      buttonText: "Join as Park Manager",
      link: "/join/park",
      bgColor: "rgba(249, 255, 246, 1)",
    },
    {
      icon: <FaStore />,
      title: "Merchants",
      subtitle: "Expand your reach with transport-linked payments.",
      points: [
        "Accept biometric and wallet payments instantly.",
        "Integrate T-Yap services for customers on the move.",
        "Grow visibility within the mobility-fintech ecosystem.",
      ],
      buttonText: "Join as Merchant",
      link: "/join/merchant",
      bgColor: "rgba(245, 248, 255, 1)",
    },
  ];

  return (
    <section
      id="who-we-serve"
      className="relative w-full flex flex-col items-center justify-center py-20 px-6 md:px-20 bg-white overflow-hidden"
    >
      {/* Header */}
      <h2 className="font-sora font-bold text-[36px] md:text-[44px] text-center mb-16">
        Who T-Yap Serves
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center w-full max-w-[1400px]">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between rounded-[24px] p-8 w-full sm:w-[320px] md:w-[340px] xl:w-[320px] h-[430px] md:h-[460px] shadow-sm hover:shadow-md transition-all duration-300"
            style={{ backgroundColor: card.bgColor }}
          >
            {/* Icon inside perfect white circle */}
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full bg-white mb-5 shadow-sm">
              {React.cloneElement(card.icon, {
                className: "text-[#381202] text-[34px]",
              })}
            </div>

            {/* Title & Subtitle */}
            <div className="text-center">
              <h3 className="font-sora font-semibold text-[20px] mb-1">
                {card.title}
              </h3>
              <p className="text-[16px] text-gray-700 mb-3 px-2">
                {card.subtitle}
              </p>
            </div>

            {/* Points */}
            <ul className="text-left font-sora text-[14px] text-gray-800 space-y-1 mb-6 list-disc list-inside flex-1">
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            {/* Button */}
            <div className="mt-auto">
              <button
                onClick={() => navigate(card.link)}
                className="bg-[rgba(255,76,0,1)] text-white font-sora font-semibold rounded-full px-6 py-2 text-[15px] hover:bg-orange-500 transition-all"
              >
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeServe;
