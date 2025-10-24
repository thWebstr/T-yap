import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <main className="relative bg-white text-black font-sora overflow-hidden">
      {/* --- Navbar (transparent) --- */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar transparent />
      </div>

      {/* 🔙 Back Arrow Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-[120px] left-6 md:left-12 z-50 bg-[rgba(255,255,255,0.9)] shadow-md hover:bg-white transition-all duration-300 w-[45px] h-[45px] flex items-center justify-center rounded-full"
      >
        <BsArrowLeft className="text-[22px] text-[rgba(255,76,0,1)]" />
      </button>

      {/* --- Flowing Orange Blurs --- */}
      <div
        className="absolute rounded-full blur-[400px]"
        style={{
          width: "800px",
          height: "800px",
          top: "0px",
          left: "-400px",
          background: "rgba(255, 76, 0, 0.5)",
          opacity: 0.25,
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute rounded-full blur-[400px]"
        style={{
          width: "800px",
          height: "800px",
          top: "600px",
          right: "-400px",
          background: "rgba(255, 76, 0, 0.5)",
          opacity: 0.25,
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute rounded-full blur-[500px]"
        style={{
          width: "900px",
          height: "900px",
          top: "1400px",
          left: "-500px",
          background: "rgba(255, 76, 0, 0.4)",
          opacity: 0.2,
          zIndex: 0,
        }}
      ></div>

      {/* --- About Content --- */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-36 md:py-44 space-y-32">
        {/* --- About Us --- */}
        <div className="text-center">
          <h1 className="text-5xl font-semibold mb-10">About Us</h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-sora max-w-3xl mx-auto">
            T-Yap NG is a next generation biometric payment and transport
            technology company redefining how people move, pay, and earn across
            Africa. We are building a unified ecosystem that connects passengers,
            drivers, transport operators, and financial institutions through
            secure, cashless, and identity-based transactions.
            <br />
            <br />
            At T-Yap, we believe mobility and finance are deeply connected and
            everyone, regardless of whether they own a smartphone or have a bank
            account, should have access to a seamless, trusted payment experience.
            <br />
            <br />
            By merging biometric identity, digital finance, and mobility
            infrastructure, T-Yap ensures every transaction is verified, every
            trip is transparent, and every user is financially included.
            <br />
            <br />
            We are not just building an app — we are building Africa’s most
            trusted transport-fintech ecosystem, where technology meets
            convenience and inclusion.
          </p>
        </div>

        {/* --- Our Story --- */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-10">Our Story</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-sora max-w-3xl mx-auto">
            T-Yap NG was born from a simple observation — millions of Nigerians
            rely on public transportation every day, yet the system remains
            largely cash based, unsafe, and unstructured.
            <br />
            <br />
            We saw the daily struggles of passengers searching for change,
            drivers losing revenue to cash handling, and transport operators
            unable to track or manage earnings transparently.
            <br />
            <br />
            From this problem came our mission: to revolutionize transportation
            payments in Nigeria through biometric technology and financial
            inclusion.
            <br />
            <br />
            We started with one vision — to make every payment in public
            transport instant, traceable, and identity-driven. With this, we
            designed a system where a simple fingerprint could pay your fare,
            check your balance, or top up your wallet — even without a
            smartphone or bank account.
            <br />
            <br />
            What began as an idea is now evolving into a national infrastructure
            for secure transport payments and digital finance, starting from the
            parks and garages of Lagos. Through partnerships with park
            managements, unions, and financial institutions, we’re building a
            network where technology empowers everyone — from the passenger to
            the driver, from merchants to kiosk agents to the transport operator.
            <br />
            <br />
            At T-Yap, we are not just creating a product. We are re-engineering
            trust, convenience, and financial inclusion across Africa’s transport
            systems.
          </p>
        </div>

        {/* --- Core Values --- */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-10">Our Core Values</h2>
          <ul className="text-left max-w-3xl mx-auto space-y-6 text-lg leading-relaxed text-gray-800 font-sora">
            <li>
              <strong>1. Inclusion:</strong> We believe everyone deserves access
              to financial and transport innovation — with or without a
              smartphone or bank account.
            </li>
            <li>
              <strong>2. Trust & Transparency:</strong> Every transaction and
              identity within the T-Yap ecosystem is verified, traceable, and
              secure.
            </li>
            <li>
              <strong>3. Innovation:</strong> We push boundaries through
              technology, constantly rethinking how people move, pay, and
              connect.
            </li>
            <li>
              <strong>4. Convenience:</strong> We simplify complex systems,
              allowing users to move and pay seamlessly — anytime, anywhere.
            </li>
            <li>
              <strong>5. Partnership:</strong> We grow by collaborating with
              transport unions, operators, and fintech partners to build a
              sustainable mobility ecosystem.
            </li>
            <li>
              <strong>6. Impact:</strong> Our goal is to empower communities,
              create jobs, and strengthen Africa’s digital economy through
              accessible, inclusive solutions.
            </li>
          </ul>
        </div>
      </section>

      {/* --- Footer --- */}
      <Footer />
    </main>
  );
};

export default About;
