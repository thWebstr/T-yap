import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Features = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar (non-transparent for this page) */}
      <Navbar />

      {/* Main Features Section */}
      <main className="relative w-full flex flex-col items-center justify-center bg-white text-black px-6 md:px-20 pt-36 pb-20 overflow-hidden">
        {/* 🔶 Background Blurred Ellipses */}
        <div className="absolute top-0 -left-40 w-[400px] h-[400px] bg-[rgba(255,138,0,0.25)] rounded-full blur-[150px] z-0"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[rgba(255,76,0,0.25)] rounded-full blur-[180px] z-0"></div>

        {/* Back Button + Header */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between w-full max-w-[900px] mb-16 gap-4">
          {/* Back Arrow Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center bg-[rgba(255,76,0,1)] hover:bg-orange-600 text-white p-3 rounded-full shadow-md transition-all duration-300 self-start md:self-center"
            aria-label="Go back"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Header */}
          <h1 className="font-dm text-[28px] md:text-[40px] font-semibold text-center flex-1">
            Core Ecosystem Features
          </h1>
        </div>

        {/* Features List */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <div className="max-w-[900px] w-full space-y-12 text-left">
            {/* Feature 1 */}
            <div>
              <h2 className="text-[20px] md:text-[22px] font-dm font-semibold text-black mb-3">
                1. Biometric Transport Payment System
              </h2>
              <ul className="list-disc list-inside space-y-2 font-lato text-[16px] md:text-[18px] leading-relaxed">
                <li>
                  Pay instantly using your fingerprint no cash, no cards, no phones needed.
                </li>
                <li>Works on all registered buses, terminals, and transport kiosks.</li>
                <li>Ensures security, eliminates fare disputes, and promotes transparency.</li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div>
              <h2 className="text-[20px] md:text-[22px] font-dm font-semibold text-black mb-3">
                2. Fintech Infrastructure
              </h2>
              <ul className="list-disc list-inside space-y-2 font-lato text-[16px] md:text-[18px] leading-relaxed">
                <li>
                  Each user (driver, passenger, agent, park) has a T-Yap Wallet with a unique
                  account number.
                </li>
                <li>
                  Users can send, receive, withdraw, and transfer money to any Nigerian bank.
                </li>
                <li>
                  T-Yap accounts display under T-Yap’s name even when transacting through
                  commercial banks.
                </li>
                <li>
                  Supports both digital and biometric deposits or withdrawals at kiosks or
                  terminals.
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div>
              <h2 className="text-[20px] md:text-[22px] font-dm font-semibold text-black mb-3">
                3. Kiosk & Agent Network
              </h2>
              <ul className="list-disc list-inside space-y-2 font-lato text-[16px] md:text-[18px] leading-relaxed">
                <li>Designed for passengers without smartphones or bank accounts.</li>
                <li>By simply scanning their fingerprint, users can:</li>
                <li>• Check balances</li>
                <li>• Deposit funds</li>
                <li>• Withdraw cash</li>
                <li>• View transaction history</li>
                <li>Agents and kiosks earn commissions on each transaction.</li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div>
              <h2 className="text-[20px] md:text-[22px] font-dm font-semibold text-black mb-3">
                4. Driver & Park Management System
              </h2>
              <ul className="list-disc list-inside space-y-2 font-lato text-[16px] md:text-[18px] leading-relaxed">
                <li>Real-time trip and payment tracking.</li>
                <li>Dynamic park and route fees can be updated anytime by park management.</li>
                <li>Instant wallet settlements for drivers and park operators.</li>
                <li>Automated record of daily revenue and remittance reports.</li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div>
              <h2 className="text-[20px] md:text-[22px] font-dm font-semibold text-black mb-3">
                5. T-Yap Insurance (Transport Cover)
              </h2>
              <ul className="list-disc list-inside space-y-2 font-lato text-[16px] md:text-[18px] leading-relaxed">
                <li>Offers instant biometric-based insurance for passengers and drivers.</li>
                <li>Automatically covers each verified ride, reducing risk and ensuring trust.</li>
                <li>Transparent claims processed via the T-Yap app and partner insurers.</li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div>
              <h2 className="text-[20px] md:text-[22px] font-dm font-semibold text-black mb-3">
                6. Security & Compliance
              </h2>
              <ul className="list-disc list-inside space-y-2 font-lato text-[16px] md:text-[18px] leading-relaxed">
                <li>End-to-end biometric encryption and bank-level data protection.</li>
                <li>Compliant with NDPR and CBN data/financial standards.</li>
                <li>Biometric identity verification to eliminate impersonation and fraud.</li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision */}
          <section className="text-center mt-24 mb-16">
            <h2 className="font-dm text-[26px] md:text-[32px] font-semibold mb-4">
              Our Mission
            </h2>
            <p className="font-lato text-[16px] md:text-[18px] max-w-3xl mx-auto leading-[28px]">
              To revolutionize transportation and digital finance across Africa by merging
              mobility, identity, and fintech into one trusted ecosystem.
            </p>
          </section>

          <section className="text-center mb-20">
            <h2 className="font-dm text-[26px] md:text-[32px] font-semibold mb-4">
              Our Vision
            </h2>
            <p className="font-lato text-[16px] md:text-[18px] max-w-3xl mx-auto leading-[28px]">
              A continent where everyone, banked or unbanked, can move, pay, and earn securely
              with just a touch.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Features;
