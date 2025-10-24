import React from "react";

const FounderNote = () => {
  return (
    <section className="w-full bg-[radial-gradient(circle_at_top,_#fff6ef_0%,_#ffffff_100%)] py-20 px-6 text-center font-sora text-black">
      {/* Header */}
      <h2 className="text-[40px] font-bold mb-6 leading-[40px]">
        Founder’s Note
      </h2>

      {/* Intro */}
      <p className="text-[22px] md:text-[24px] font-normal text-gray-700 max-w-3xl mx-auto mb-10">
        At T-Yap NG, we believe the future of transportation lies in simplicity, trust, and inclusion.
      </p>

      {/* Main message */}
      <p className="text-[18px] md:text-[20px] font-normal leading-relaxed text-gray-800 max-w-4xl mx-auto mb-10">
        Our mission is to make mobility smarter by enabling biometric payments that are fast, secure, 
        and accessible to everyone — even those without smartphones or bank accounts. With T-Yap, 
        a single fingerprint connects passengers, drivers, and park managers to a seamless, cashless 
        system designed for the realities of Africa.
        <br /><br />
        This is more than technology — it’s a movement to modernize transport, build trust, 
        and empower communities across Nigeria and beyond.
      </p>

      {/* Signature */}
      <p className="text-[20px] font-semibold mt-8">
        — Muhammad Oladele Sekoni <br />
        <span className="font-medium text-gray-700">Founder & CEO, T-Yap NG</span>
      </p>
    </section>
  );
};

export default FounderNote;
