import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button";
import TyapLogo from "../../assets/Tyaplogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", to: "home" },
    { name: "How It Works", to: "how-it-works" },
    { name: "About Us", to: "about-us" },
    { name: "Features", to: "features" },
    { name: "FAQs", to: "faqs" },
    { name: "Contact", to: "contact" },
  ];

  // handle navigation from any page
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
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] bg-white rounded-full shadow-md flex items-center justify-between px-6 py-3 z-50">
      {/* Logo */}
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={TyapLogo} alt="T-YAP Logo" className="w-8 h-8" />
        <span className="font-sora text-black text-lg font-semibold">T-YAP</span>
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            {location.pathname === "/" ? (
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={700}
                offset={-80}
                className="font-sora text-[16px] text-black font-normal cursor-pointer hover:font-bold transition-all"
              >
                {item.name}
              </ScrollLink>
            ) : (
              <span
                onClick={() => handleNavClick(item.to)}
                className="font-sora text-[16px] text-black font-normal cursor-pointer hover:font-bold transition-all"
              >
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>

      {/* Right: Button */}
      <div className="hidden md:block">
        <Button label="Get Started" />
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden text-black text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-[60px] right-[24px] bg-white shadow-xl rounded-tl-2xl p-5 w-[220px] animate-slideDown"
          style={{
            border: "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <ul className="flex flex-col items-start space-y-4 text-left">
            {navItems.map((item) => (
              <li key={item.name}>
                {location.pathname === "/" ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    className="font-sora text-[16px] text-black font-medium cursor-pointer hover:text-[rgba(255,76,0,1)] transition-all"
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
                    className="font-sora text-[16px] text-black font-medium cursor-pointer hover:text-[rgba(255,76,0,1)] transition-all"
                  >
                    {item.name}
                  </span>
                )}
              </li>
            ))}
            <Button label="Get Started" />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
