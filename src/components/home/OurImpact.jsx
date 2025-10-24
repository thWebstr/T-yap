import React from "react";

const OurImpact = () => {
  const impacts = [
    {
      title: "Security",
      text: "Cashless transactions reduce theft, robbery, and revenue leakage.",
    },
    {
      title: "Speed",
      text: "Faster boarding and seamless rides — no more long queues or cash delays.",
    },
    {
      title: "Transparency",
      text: "Every trip, fare, and payment tracked in real time for passengers and operators.",
    },
    {
      title: "Inclusion",
      text: "Unbanked and underbanked travelers gain access to digital payments and services.",
    },
  ];

  return (
    <section
      id="impact"
      className="relative w-full flex flex-col items-center justify-center py-24 px-6 md:px-20 overflow-hidden bg-white"
    >
      {/* 🔶 Background Ellipses */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[300px] bg-[rgba(255,76,0,0.25)] top-[100px] left-[-200px] z-0"
      ></div>
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[300px] bg-[rgba(255,138,0,0.25)] bottom-[-100px] right-[-250px] z-0"
      ></div>

      {/* Section Heading */}
      <h2 className="font-sora text-[32px] font-semibold text-center text-black mb-6 relative z-10">
        Our Impact
      </h2>

      {/* Description */}
      <p className="text-center font-sora text-[20px] text-black max-w-2xl mb-16 leading-relaxed relative z-10">
        Transforming Public Transport for Everyone
        <br />
        <span className="text-[18px] font-normal">
          T-Yap isn’t just about payments — it’s about creating a smarter,
          safer, and more inclusive transportation system.
        </span>
      </p>

      {/* Impact Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {impacts.map((item, index) => (
          <div
            key={index}
            className="w-[310px] h-[264px] border border-transparent rounded-[20px] p-6 flex flex-col bg-transparent/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <h3 className="font-sora font-semibold text-[24px] leading-none mb-4">
              {item.title}
            </h3>
            <p className="font-sora text-[18px] leading-tight text-black">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurImpact;
