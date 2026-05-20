import React from "react";
import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import AboutUsSnippet from "../components/home/AboutUsSnippet";
import FeaturesSnippet from "../components/home/FeaturesSnippet";
import OurImpact from "../components/home/OurImpact";
import InvestSection from "../components/home/InvestSection";
import WhoWeServe from "../components/home/WhoWeServe";
import FounderNote from "../components/home/FounderNote";
import Testimonials from "../components/home/Testimonials";
import FAQSection from "../components/home/FAQSection";
import Footer from "../components/layout/Footer";

const LaserSeparator = () => (
  <div className="relative h-px w-full overflow-hidden bg-transparent z-10">
    <div className="laser-line-glow" />
  </div>
);

/* Organic wave divider inspired by the signature orange underline curve */
const WaveDivider = ({ topColor = "#0A0A0A", bottomColor = "#FAFAFB", flip = false }) => (
  <div className="wave-divider" style={{ marginTop: "-1px", marginBottom: "-1px" }}>
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "60px", transform: flip ? "scaleY(-1)" : "none" }}>
      <path d="M0,0 L1440,0 L1440,30 Q1080,80 720,40 Q360,0 0,50 Z" fill={topColor} />
      <path d="M0,80 L1440,80 L1440,30 Q1080,80 720,40 Q360,0 0,50 Z" fill={bottomColor} />
    </svg>
  </div>
);

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* 1. Hero (Dark) */}
      <section id="home" className="bg-[#0A0A0A]">
        <Hero />
      </section>
      <WaveDivider topColor="#0A0A0A" bottomColor="#FAFAFB" />

      {/* 2. Who We Serve */}
      <section id="who-we-serve" className="relative bg-[#FAFAFB]">
        <WhoWeServe />
      </section>
      <LaserSeparator />

      {/* 3. How It Works */}
      <section id="how-it-works" className="relative bg-white">
        <HowItWorks />
      </section>
      <LaserSeparator />

      {/* 4. Features */}
      <section id="features" className="relative bg-white">
        <FeaturesSnippet />
      </section>
      <LaserSeparator />

      {/* 5. Our Impact */}
      <section id="impact" className="relative bg-white">
        <OurImpact />
      </section>
      <LaserSeparator />

      {/* 6. Testimonials */}
      <section id="testimonials" className="relative bg-[#FCF6F6]">
        <Testimonials />
      </section>
      <LaserSeparator />

      {/* 7. About Us */}
      <section id="about-us" className="relative bg-white">
        <AboutUsSnippet />
      </section>
      <LaserSeparator />

      {/* 8. Founder Note → Invest transition */}
      <section id="founder-note" className="relative bg-[#FFF6EF]">
        <FounderNote />
      </section>
      <WaveDivider topColor="#FFF6EF" bottomColor="#D54305" />

      {/* 9. Invest (Orange) */}
      <section id="invest" className="bg-[#D54305] relative z-20">
        <InvestSection />
      </section>
      <WaveDivider topColor="#D54305" bottomColor="white" />

      {/* 10. FAQs */}
      <section id="faqs" className="relative bg-white">
        <FAQSection />
      </section>
      <WaveDivider topColor="white" bottomColor="#0A0A0A" />

      {/* 11. Contact/Footer (Dark) */}
      <section id="contact" className="bg-[#0A0A0A] relative z-30">
        <Footer />
      </section>
    </div>

  );
};

export default Home;
