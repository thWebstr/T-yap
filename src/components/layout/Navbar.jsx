import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import TyapLogo from "../../assets/Tyaplogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const [activeRect, setActiveRect] = useState({ left: 0, width: 0 });
  const navRefs = React.useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  // Section Color Mapping
  const sectionConfigs = {
    home: { bg: "rgba(10, 10, 10, 0.4)", text: "text-white", border: "rgba(255, 255, 255, 0.15)", shadow: "none" },
    "who-we-serve": { bg: "rgba(250, 250, 251, 0.75)", text: "text-black", border: "rgba(255, 122, 0, 0.1)", shadow: "0 10px 30px rgba(0,0,0,0.05)" },
    "how-it-works": { bg: "rgba(255, 255, 255, 0.75)", text: "text-black", border: "rgba(255, 122, 0, 0.1)", shadow: "0 10px 30px rgba(0,0,0,0.05)" },
    features: { bg: "rgba(255, 255, 255, 0.75)", text: "text-black", border: "rgba(255, 122, 0, 0.1)", shadow: "0 10px 30px rgba(0,0,0,0.05)" },
    impact: { bg: "rgba(255, 255, 255, 0.75)", text: "text-black", border: "rgba(255, 122, 0, 0.1)", shadow: "0 10px 30px rgba(0,0,0,0.05)" },
    testimonials: { bg: "rgba(252, 246, 246, 0.8)", text: "text-black", border: "rgba(0, 0, 0, 0.05)", shadow: "0 10px 30px rgba(0,0,0,0.03)" },
    "about-us": { bg: "rgba(255, 255, 255, 0.75)", text: "text-black", border: "rgba(255, 122, 0, 0.1)", shadow: "0 10px 30px rgba(0,0,0,0.05)" },
    "founder-note": { bg: "rgba(255, 246, 239, 0.8)", text: "text-black", border: "rgba(0, 0, 0, 0.05)", shadow: "0 10px 30px rgba(0,0,0,0.03)" },
    invest: { bg: "rgba(213, 67, 5, 0.92)", text: "text-white", border: "rgba(255, 255, 255, 0.2)", shadow: "0 10px 40px rgba(213, 67, 5, 0.3)" },
    faqs: { bg: "rgba(255, 255, 255, 0.75)", text: "text-black", border: "rgba(255, 122, 0, 0.1)", shadow: "0 10px 30px rgba(0,0,0,0.05)" },
    contact: { bg: "rgba(56, 18, 2, 0.85)", text: "text-white", border: "rgba(255, 255, 255, 0.1)", shadow: "none" },
  };

  const currentTheme = sectionConfigs[activeItem] || sectionConfigs.home;

  React.useEffect(() => {
    if (navRefs.current[activeItem]) {
      const el = navRefs.current[activeItem];
      setActiveRect({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeItem]);

  React.useEffect(() => {
    if (location.pathname !== "/") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0% -60% 0%",
      threshold: 0,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveItem(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.pathname]);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "How It Works", to: "how-it-works" },
    { name: "About Us", to: "about-us" },
    { name: "Features", to: "features" },
    { name: "FAQs", to: "faqs" },
    { name: "Contact", to: "contact" },
  ];

  const handleNavClick = (to) => {
    if (location.pathname !== "/") {
      navigate(`/#${to}`);
      setTimeout(() => {
        const el = document.getElementById(to);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] rounded-full flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 z-50 animate-[navbarEntrance_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] transition-all duration-500 backdrop-blur-md"
      style={{ 
        backgroundColor: currentTheme.bg,
        border: `1px solid ${currentTheme.border}`,
        boxShadow: currentTheme.shadow
      }}
    >
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={TyapLogo} alt="T-YAP Logo" className="w-8 h-8" />
        <span className={`font-dm ${currentTheme.text} text-lg font-bold tracking-tight transition-colors duration-500`}>T-YAP</span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 relative items-center">
        {/* The Sliding Active Indicator */}
        <div 
          className="absolute bottom-[-6px] h-[3px] bg-[#FF4C00] rounded-full transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
          style={{ left: activeRect.left, width: activeRect.width }}
        />

        {navItems.map((item, index) => (
          <li 
            key={item.name} 
            ref={(el) => (navRefs.current[item.to] = el)}
            className="relative flex items-center h-full opacity-0 animate-[fadeSlideDown_0.6s_ease-out_forwards] group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {location.pathname === "/" ? (
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={700}
                offset={-80}
                spy={true}
                onSetActive={(to) => setActiveItem(to)}
                className={`font-lato text-[15px] ${currentTheme.text} font-semibold cursor-pointer transition-colors duration-500 relative inline-block text-center group-hover:text-[#FF4C00]`}
              >
                {item.name}
              </ScrollLink>
            ) : (
              <span
                onClick={() => handleNavClick(item.to)}
                className={`font-lato text-[15px] ${currentTheme.text} font-semibold cursor-pointer transition-colors duration-500 group-hover:text-[#FF4C00] relative`}
              >
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Right: Button */}
      <div className="hidden md:block">
        <Button label="Get Started" className="!py-[9px] !px-[22px] !text-[14px] !font-bold !rounded-full shadow-lg" />
      </div>

      {/* Hamburger */}
      <button
        className={`md:hidden ${currentTheme.text} text-2xl transition-colors duration-500`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-[60px] right-[24px] bg-white shadow-2xl rounded-2xl p-6 w-[240px] animate-slideDown border border-black/5"
        >
          <ul className="flex flex-col items-start space-y-4 text-left">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                {location.pathname === "/" ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    spy={true}
                    activeClass="!text-[#FF4C00] font-bold"
                    className="font-lato text-[16px] text-black font-medium cursor-pointer hover:text-[#FF4C00] transition-colors block w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <span
                    onClick={() => {
                      handleNavClick(item.to);
                      setIsOpen(false);
                    }}
                    className="font-lato text-[16px] text-black font-medium cursor-pointer hover:text-[#FF4C00] transition-colors block w-full"
                  >
                    {item.name}
                  </span>
                )}
              </li>
            ))}
            <div className="pt-2 w-full">
              <Button label="Get Started" className="w-full !py-[12px] !text-[15px] !font-bold" />
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
