import React from "react";
import Security from "../../assets/security.png";
import Speed from "../../assets/speed.png";
import Transparency from "../../assets/transparency.png";
import Inclusion from "../../assets/inclusion.png";

const OurImpact = () => {
  const impacts = [
    {
      title: "Security",
      text: "Cashless transactions reduce theft, robbery, and revenue leakage.",
      image: Security,
    },
    {
      title: "Speed",
      text: "Faster boarding and seamless rides no more long queues or cash delays.",
      image: Speed,
    },
    {
      title: "Transparency",
      text: "Every trip, fare, and payment tracked in real time for passengers and operators.",
      image: Transparency,
    },
    {
      title: "Inclusion",
      text: "Unbanked and underbanked travelers gain access to digital payments and services.",
      image: Inclusion,
    },
  ];

  return (
    <section
      id="impact"
      className="relative w-full flex flex-col items-center justify-center py-24 px-6 md:px-20 overflow-hidden bg-white"
    >
      {/* 🔶 Background Blurs */}
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[300px] bg-[rgba(255,76,0,0.25)] top-[100px] left-[-200px] z-0"></div>
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[300px] bg-[rgba(255,138,0,0.25)] bottom-[-100px] right-[-250px] z-0"></div>

      {/* Heading */}
      <h2 className="font-dm text-[32px] font-semibold text-center text-black mb-6 relative z-10">
        Our Impact
      </h2>

      {/* Description */}
      <p className="text-center font-lato text-[20px] text-black max-w-2xl mb-16 leading-relaxed relative z-10">
        Transforming Public Transport for Everyone
        <br />
        <span className="text-[18px] font-normal">
          T-Yap isn’t just about payments it’s about creating a smarter,
          safer, and more inclusive transportation system.
        </span>
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
      {impacts.map((item, index) => (
    <div
      key={index}
      className="w-[300px] min-h-[320px] rounded-2xl p-6 flex flex-col items-center text-center bg-[#fff7f0] shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="mb-5">
        <img
          src={item.image}
          alt={item.title}
          className="w-[80px] h-[80px] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="font-dm font-semibold text-[22px] mb-3">
        {item.title}
      </h3>

      {/* Text */}
      <p className="font-lato text-[16px] text-gray-700 leading-relaxed">
        {item.text}
      </p>
    </div>
  ))}
</div>
    </section>
  );
};

export default OurImpact;
