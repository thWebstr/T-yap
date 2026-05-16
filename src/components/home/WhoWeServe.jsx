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
    },
  ];

  return (
    <section
      id="who-we-serve"
      className="relative w-full flex flex-col items-center justify-center pt-30 pb-28 px-6 md:px-20 overflow-hidden"
      style={{ backgroundColor: "#FAFAFB" }}
    >
      {/* --- Smooth Transition from Dark Hero --- */}
      <div 
        className="absolute top-0 left-0 w-full h-[300px] pointer-events-none z-0"
        style={{ background: "linear-gradient(to bottom, #0A0A0A 0%, #FAFAFB 100%)" }}
      />

      {/* --- Mesh Gradient Background Depth --- */}
      <div 
        className="absolute top-40 right-[-100px] w-[600px] h-[600px] opacity-40 blur-[130px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.12) 0%, transparent 70%)" }}
      />
      <div 
        className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] opacity-30 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,76,0,0.08) 0%, transparent 70%)" }}
      />
      
      {/* Background Watermark Text */}
      <div 
        className="absolute top-64 left-1/2 -translate-x-1/2 font-dm font-black text-[12vw] tracking-[-0.05em] text-black/[0.03] select-none pointer-events-none z-0 whitespace-nowrap uppercase italic"
        style={{ lineHeight: 1 }}
      >
        Ecosystem
      </div>

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-24 max-w-4xl">
        <div className="flex items-center gap-4 mb-4 animate-[fadeSlideUp_0.8s_ease-out_forwards]">
          <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-[#FF4C00]/40" />
          <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-[#FF4C00]/40" />
        </div>
        
        <h2
          className="font-dm font-black text-center animate-[fadeSlideUp_0.8s_ease-out_0.2s_forwards] opacity-0"
          style={{
            fontSize: "clamp(42px, 8vw, 76px)",
            color: "#1A1A1A",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}
        >
          Who{" "}
          <span className="relative inline-block px-1">
            <span 
              style={{
                background: "linear-gradient(135deg, #1A1A1A 0%, #FF4C00 45%, #FF7A00 55%, #1A1A1A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 12px rgba(255,76,0,0.15))",
                paddingRight: "2px"
              }}
            >
              T-Yap
            </span>
            {/* Tiny Biometric Accent Dot */}
            <span className="absolute -top-1 -right-0 w-[6px] h-[6px] rounded-full bg-[#FF4C00] shadow-[0_0_10px_rgba(255,76,0,0.6)] animate-pulse" />
          </span>
          <br />
          <span style={{ position: "relative", display: "inline-block", color: "#FF4C00" }}>
            Serves.
            <svg
              className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-[18px] md:h-[26px]"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              style={{ overflow: "visible" }}
            >
              <path
                d="M 2 8 Q 50 26 98 8 Q 50 14 2 8 Z"
                fill="#FF4C00"
                style={{ filter: "drop-shadow(0 2px 4px rgba(255,76,0,0.3))" }}
              />
            </svg>
          </span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 w-full max-w-[1340px] relative z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group flex flex-col rounded-[24px] p-8 transition-all duration-500 hover:translate-y-[-10px] opacity-0 animate-[fadeSlideUp_0.8s_ease-out_forwards]"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid rgba(0,0,0,0.04)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.03)",
              animationDelay: `${0.2 + index * 0.1}s`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,76,0,0.15)";
              e.currentTarget.style.boxShadow = "0 30px 60px rgba(255,76,0,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.03)";
            }}
          >
            {/* Icon Treatment */}
            <div
              className="relative flex items-center justify-center w-[58px] h-[58px] rounded-[18px] mb-8 transition-transform duration-500 group-hover:scale-110"
              style={{ 
                backgroundColor: "rgba(255,76,0,0.06)",
              }}
            >
              {/* Subtle Icon Glow */}
              <div className="absolute inset-0 rounded-[18px] blur-md bg-[#FF4C00]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              {React.cloneElement(card.icon, {
                style: { color: "#FF4C00", fontSize: "24px", position: "relative" },
              })}
            </div>

            {/* Title & Subtitle */}
            <h3
              className="font-dm font-bold mb-2 group-hover:text-[#FF4C00] transition-colors"
              style={{ fontSize: "22px", color: "#1A1A1A", letterSpacing: "-0.01em" }}
            >
              {card.title}
            </h3>
            <p
              className="font-dm mb-6"
              style={{
                fontSize: "14px",
                color: "#666666",
                lineHeight: "1.6",
                fontWeight: 450
              }}
            >
              {card.subtitle}
            </p>

            {/* Subtle Divider */}
            <div className="w-full h-[1px] bg-black/5 mb-6" />

            {/* Points */}
            <ul className="flex flex-col gap-4 flex-1 mb-8">
              {card.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div
                    className="mt-[7px] w-[6px] h-[6px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#FF4C00" }}
                  />
                  <span
                    className="font-lato"
                    style={{
                      fontSize: "14px",
                      color: "#4A4A4A",
                      lineHeight: "1.5",
                      fontWeight: 400
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              onClick={() => navigate(card.link)}
              className="w-full font-dm font-bold transition-all duration-300 relative overflow-hidden group/btn"
              style={{
                fontSize: "14px",
                padding: "13px 0",
                borderRadius: "14px",
                border: "1px solid rgba(255,76,0,0.2)",
                color: "#FF4C00",
                backgroundColor: "transparent",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FF4C00";
                e.currentTarget.style.color = "#FFFFFF";
                e.currentTarget.style.borderColor = "#FF4C00";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(255,76,0,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#FF4C00";
                e.currentTarget.style.borderColor = "rgba(255,76,0,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <span className="relative z-10">{card.buttonText}</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoWeServe;