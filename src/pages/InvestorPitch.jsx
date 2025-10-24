import React from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const InvestorPitch = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white text-black overflow-hidden">
      {/* 🔶 Blurred Background Ellipses */}
      <div className="absolute w-[900px] h-[900px] rounded-full blur-[400px] bg-[rgba(255,138,0,0.25)] top-[-200px] right-[-250px] z-0"></div>
      <div className="absolute w-[900px] h-[900px] rounded-full blur-[400px] bg-[rgba(255,76,0,0.25)] bottom-[-300px] left-[-250px] z-0"></div>

      {/* ✅ Navbar */}
      <div className="relative z-100">
        <Navbar transparent={false} />
      </div>

      {/* 🔙 Back Arrow Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-[120px] left-6 md:left-12 z-50 bg-[rgba(255,255,255,0.9)] shadow-md hover:bg-white transition-all duration-300 w-[45px] h-[45px] flex items-center justify-center rounded-full"
      >
        <BsArrowLeft className="text-[22px] text-[rgba(255,76,0,1)]" />
      </button>

      {/* Main Content */}
      <section className="relative z-10 flex flex-col items-center text-center pt-48 pb-20 px-6 md:px-20">
        {/* Header */}
        <h1 className="font-sora text-[40px] md:text-[48px] font-bold mb-4">
          Investor Pitch Section
        </h1>
        <p className="font-sora text-[20px] md:text-[24px] text-gray-700 mb-16">
          Revolutionizing Transport Payments Across Africa
        </p>

        {/* Content */}
        <div className="w-full max-w-[900px] text-left space-y-12 font-sora">
          {/* 1️⃣ Intro */}
          <div>
            <p className="font-semibold text-[20px] mb-3">T-Yap NG</p>
            <p className="text-[18px] mb-3">
              T-Yap NG is building Africa’s first biometric powered payment
              ecosystem for public transportation, starting from Nigeria. Our
              solution enables passengers to pay fares with their fingerprints,
              eliminating the need for cash, cards, or smartphones.
            </p>
            <p className="text-[18px]">
              We’re solving one of Africa’s most overlooked problems — the
              chaos, fraud, and inefficiency in cash-based transport systems.
            </p>
          </div>

          {/* 2️⃣ Opportunity */}
          <div>
            <h2 className="text-[24px] font-semibold mb-3">The Opportunity</h2>
            <p className="text-[18px]">
              Over 80% of Nigeria’s 200+ million people use public transport
              daily, yet the industry runs largely on cash. This presents a
              multi-billion naira opportunity to digitize payments, increase
              transparency, and drive financial inclusion.
            </p>
          </div>

          {/* 3️⃣ T-Yap bridges this gap */}
          <div>
            <h2 className="text-[24px] font-semibold mb-3">
              T-Yap bridges this gap through:
            </h2>
            <ul className="list-disc list-inside text-[18px] space-y-1">
              <li>
                Biometric payment technology for seamless transport fares.
              </li>
              <li>
                Smart kiosks for onboarding and wallet funding (even for the
                unbanked).
              </li>
              <li>
                Real-time settlements to drivers, parks, and operators.
              </li>
              <li>
                Fintech expansion — offering wallets, bill payments, and
                transfers within the same ecosystem.
              </li>
            </ul>
          </div>

          {/* 4️⃣ Our Edge */}
          <div>
            <h2 className="text-[24px] font-semibold mb-3">Our Edge</h2>
            <ul className="list-disc list-inside text-[18px] space-y-1">
              <li>
                No smartphone required — passengers only need their
                fingerprints.
              </li>
              <li>
                Full ecosystem integration: passenger, driver, park, agent, and
                admin dashboards.
              </li>
              <li>
                Transparent revenue sharing between drivers, parks, and T-Yap.
              </li>
              <li>
                Branded fintech infrastructure powered by commercial banking
                partnerships.
              </li>
            </ul>
          </div>

          {/* 5️⃣ Our Mission */}
          <div>
            <h2 className="text-[24px] font-semibold mb-3">Our Mission</h2>
            <p className="text-[18px]">
              To make transport payments in Africa secure, inclusive, and fully
              digital — turning every bus park into a gateway for financial
              inclusion.
            </p>
          </div>

          {/* 6️⃣ Why Invest */}
          <div>
            <h2 className="text-[24px] font-semibold mb-3">
              Why Invest in T-Yap
            </h2>
            <ul className="list-disc list-inside text-[18px] space-y-1">
              <li>
                Massive Market – Nigeria alone has over ₦5 trillion annual
                transport cash flow.
              </li>
              <li>
                Government & Operator Backing – Early partnerships with park
                unions and regulatory bodies.
              </li>
              <li>
                Scalable Technology – Designed to expand across states and
                countries.
              </li>
              <li>
                Sustainable Model – Revenue from transactions, onboarding,
                insurance, and fintech services.
              </li>
            </ul>
          </div>

          {/* 7️⃣ Join the Movement */}
          <div>
            <h2 className="text-[24px] font-semibold mb-3">
              Join the Movement
            </h2>
            <p className="text-[18px] mb-4">
              T-Yap is not just building a payment system — we’re redefining how
              millions move, pay, and connect in Africa’s public transport
              network.
            </p>
            <p className="font-semibold text-[18px]">
              Let’s build the future of African mobility.
            </p>
            <p className="font-semibold text-[18px] mt-2">
              Investors & Partners: support@t-yap.com | +234 90 3370 4603
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorPitch;
