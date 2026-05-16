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

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <section id="home"><Hero /></section>
      <section id="who-we-serve"><WhoWeServe /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><FeaturesSnippet /></section>
      <section id="impact"><OurImpact /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="about-us"><AboutUsSnippet /></section>
      <section id="founder-note"><FounderNote /></section>
      <section id="invest"><InvestSection /></section>
      <section id="faqs"><FAQSection /></section>
      <section id="contact"><Footer /></section>
    </div>
  );
};

export default Home;
