import React, { useState, useEffect } from "react";
import Testimonial1 from "../../assets/Testimonial1.png";
import Testimonial2 from "../../assets/Testimonial2.png";
import Testimonial3 from "../../assets/Testimonial3.png";

const testimonials = [
  {
    image: Testimonial1,
    text: "“Drivers love the automated settlements and wallet features.”",
    name: "Bukumi Somto",
  },
  {
    image: Testimonial2,
    text: "“Passengers enjoy the convenience of fingerprint payments.”",
    name: "Chiamaka Adeyemi",
  },
  {
    image: Testimonial3,
    text: "“Park managers now track payments effortlessly in real-time.”",
    name: "Ibrahim Musa",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // auto-rotate every 4s
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-20 bg-[rgba(252,246,246,1)] text-center font-lato overflow-hidden relative">
      {/* Header */}
      <h2 className="text-[40px] font-bold mb-12 leading-[40px]">
        Testimonials
      </h2>

      {/* Carousel Container */}
      <div className="relative w-full flex justify-center items-center overflow-hidden h-[260px]">
        <div
          className="flex transition-transform duration-[1000ms] ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
            width: `${testimonials.length * 100}%`,
          }}
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center flex-shrink-0 px-4"
            >
              <img
                src={t.image}
                alt={`Testimonial ${index + 1}`}
                className={`rounded-full object-cover mx-auto shadow-md transition-all duration-700 ${
                  index === activeIndex
                    ? "w-48 h-48 scale-110"
                    : "w-40 h-40 opacity-80"
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-10 max-w-2xl mx-auto transition-all duration-700">
        <p className="text-[20px] font-semibold mb-2">
          {testimonials[activeIndex].text}
        </p>
        <p className="text-[18px] text-gray-700">
          {testimonials[activeIndex].name}
        </p>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-[#FF7A00] scale-110"
                : "bg-gray-400 opacity-60"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
