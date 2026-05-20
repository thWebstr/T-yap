import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
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

  useEffect(() => {
    if (navRefs.current[activeItem]) {
      const el = navRefs.current[activeItem];
      setActiveRect({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
  }, [activeItem]);

  useEffect(() => {
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

  // Lock body scroll and apply background immersion when mobile menu is open
  useEffect(() => {
    const wrapper = document.getElementById("main-content-wrapper");
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden"; // More robust for mobile
      if (wrapper) wrapper.classList.add("content-blur");
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      if (wrapper) wrapper.classList.remove("content-blur");
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
      if (wrapper) wrapper.classList.remove("content-blur");
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "How It Works", to: "how-it-works" },
    { name: "Features", to: "features" },
    { name: "About Us", to: "about-us" },
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
    setIsOpen(false);
  };

  const handleGetStarted = () => {
    if (location.pathname === "/") {
      const el = document.getElementById("who-we-serve");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#who-we-serve");
      setTimeout(() => {
        const el = document.getElementById("who-we-serve");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] rounded-full flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 z-[100] animate-[navbarEntrance_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] transition-all duration-500 backdrop-blur-md"
        style={{ 
          backgroundColor: currentTheme.bg,
          border: `1px solid ${currentTheme.border}`,
          boxShadow: currentTheme.shadow
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer relative z-[110]"
          onClick={() => {
            navigate("/");
            setIsOpen(false);
          }}
        >
          <img src={TyapLogo} alt="T-YAP Logo" className="w-8 h-8" />
          <span className={`font-dm ${isOpen ? "text-black" : currentTheme.text} text-lg font-bold tracking-tight transition-colors duration-500`}>T-YAP</span>
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

        {/* Right Desktop Button */}
        <div className="hidden md:block">
          <Button 
            label="Get Started" 
            onClick={handleGetStarted}
            className="!py-[9px] !px-[22px] !text-[14px] !font-bold !rounded-full shadow-lg" 
          />
        </div>

        {/* Hamburger / Toggle */}
        <button
          className={`md:hidden relative z-[110] p-2 transition-all duration-500 ${isOpen ? "text-black" : currentTheme.text}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5">
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* --- Refined Biometric Radial Hub Mobile Navigation --- */}
      <div
        className={`fixed inset-4 z-[90] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.3)] touch-none ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Immersive Glass Backdrop */}
        <div 
          className={`absolute inset-0 bg-white/40 backdrop-blur-3xl transition-all duration-1000 border border-white/40 ${isOpen ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}
        />

        {/* --- Background Aesthetic Layer --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-dm font-black text-[30vw] text-black/[0.015] select-none pointer-events-none z-0 uppercase italic whitespace-nowrap px-4">
          Identity
        </div>

        {/* Central Hub & Radial Nodes Container */}
        <div className="relative w-full h-full flex items-center justify-center">
            
            {/* SVG Connection Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {navItems.map((_, i) => {
                    const angle = ((i * (360 / navItems.length)) - 90) * (Math.PI / 180);
                    const radius = isOpen ? 120 : 0;
                    
                    return (
                        <g key={i}>
                            <line 
                                x1="50%" y1="50%" 
                                x2={`${50 + (radius / 10) * Math.cos(angle)}%`} 
                                y2={`${50 + (radius / 10) * Math.sin(angle)}%`} 
                                stroke="#FF4C00" 
                                strokeWidth="1" 
                                strokeDasharray="4 4"
                                className={`transition-all duration-1000 ease-out ${isOpen ? "opacity-20" : "opacity-0"}`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                            />
                        </g>
                    );
                })}
            </svg>

            {/* The Radial Nodes (Links) */}
            {navItems.map((item, i) => {
                const angle = (i * (360 / navItems.length)) - 90; // Start offset to top
                const distance = 130; // px distance from center
                const isActive = activeItem === item.to;

                return (
                    <div
                        key={item.name}
                        className={`absolute z-20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                            isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        }`}
                        style={{
                            transform: isOpen 
                                ? `rotate(${angle}deg) translate(${distance}px) rotate(${-angle}deg)` 
                                : `rotate(${angle}deg) translate(0px) rotate(${-angle}deg)`,
                            transitionDelay: `${100 + i * 50}ms`
                        }}
                    >
                        <div 
                            onClick={() => {
                                if (location.pathname === "/") {
                                    const el = document.getElementById(item.to);
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                    setIsOpen(false);
                                } else {
                                    handleNavClick(item.to);
                                }
                            }}
                            className={`group relative flex items-center justify-center w-20 h-20 rounded-full cursor-pointer transition-all duration-300 ${
                                isActive ? "bg-[#FF4C00] shadow-[0_0_30px_rgba(255,76,0,0.4)]" : "bg-white shadow-[0_10px_25px_rgba(0,0,0,0.08)] hover:scale-110"
                            }`}
                        >
                            {/* Inner Node Text */}
                            <span className={`font-dm font-black text-[11px] uppercase tracking-tighter text-center px-1 transition-colors duration-300 ${
                                isActive ? "text-white" : "text-black/60 group-hover:text-black"
                            }`}>
                                {item.name.split(' ')[0]}
                            </span>

                            {/* Active Label Tooltip */}
                            {isActive && (
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap animate-bounce">
                                    CURRENT
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}

            {/* --- CENTRAL BIOMETRIC HUB --- */}
            <div 
                className={`relative z-30 w-28 h-28 rounded-full flex items-center justify-center transition-all duration-1000 ${
                    isOpen ? "scale-110 rotate-[360deg]" : "scale-100 rotate-0"
                }`}
                style={{
                    backgroundColor: "#0A0A0A",
                    boxShadow: isOpen ? "0 0 60px rgba(255,76,0,0.4), inset 0 0 20px rgba(255,255,255,0.1)" : "0 20px 40px rgba(0,0,0,0.2)"
                }}
            >
                {/* Fingerprint Core */}
                <div className="relative text-[#FF4C00] transition-transform duration-500 hover:scale-110">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 10a2 2 0 0 0-2 2c0 1.1.9 2 2 2s2-.9 2-2c0-1.1-.9-2-2-2z" />
                        <path d="M12 2v2" />
                        <path d="M19.1 11.2l-.1-1.2C18.8 6.7 16 4 12.7 4h-1.4c-3.3 0-6.1 2.7-6.3 6l-.1 1.2" />
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
                        <path d="M12 8v8" strokeOpacity="0.2" />
                        <path d="M8 12h8" strokeOpacity="0.2" />
                    </svg>
                    
                    {/* Concentric Scan Rings */}
                    <div className="absolute inset-[-10px] rounded-full border border-[#FF4C00]/20 animate-ping" />
                    <div className="absolute inset-[-20px] rounded-full border border-[#FF4C00]/10 animate-ping" style={{ animationDelay: '0.5s' }} />
                </div>

                {/* Close Label (Appears when open) */}
                <div 
                    onClick={() => setIsOpen(false)}
                    className={`absolute inset-0 rounded-full cursor-pointer flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-[#FF4C00]/90 z-40`}
                >
                    <FiX size={32} className="text-white" />
                </div>
            </div>

            {/* --- Hub Portal Footer --- */}
            <div className={`absolute bottom-8 left-0 w-full px-10 flex flex-col items-center gap-4 transition-all duration-1000 ${isOpen ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} style={{ transitionDelay: '800ms' }}>
                 <div className="flex gap-4">
                    {[
                        { icon: <FaInstagram />, url: "https://www.instagram.com/t_yap__ng?igsh=c3hla2xsdTN3aGtw" },
                        { icon: <FaXTwitter />, url: "https://x.com/t_yap__ng?s=21" }
                    ].map((soc, i) => (
                        <a key={i} href={soc.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-2xl bg-black text-white/80 hover:bg-[#FF4C00] transition-all">
                            {soc.icon}
                        </a>
                    ))}
                </div>
                <p className="font-dm font-black text-[9px] uppercase tracking-[0.4em] text-black/30">Biometric Hub v1.0</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
