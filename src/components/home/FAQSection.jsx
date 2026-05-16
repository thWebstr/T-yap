import React, { useState } from "react";
import { Plus, X } from "lucide-react"; // icons

const faqs = [
  {
    question: "What is T-yap?",
    answer:
      "T-yap is Nigeria’s first biometric-powered payment system for public transport. It allows passengers to pay fares with a fingerprint linked to a secure digital wallet.",
  },
  {
    question: "How do I register?",
    answer:
      "Registration is simple you can sign up at participating transport parks or through the T-yap agent network using your fingerprint. No smartphone required.",
  },
  {
    question: "Can drivers and park managers use T-yap too?",
    answer:
      "Yes! Drivers and park managers can use T-yap to manage trips, receive automatic settlements, and access real-time reports, all powered by biometrics.",
  },
  {
    question: "Is insurance included?",
    answer:
      "T-yap partners with local insurance providers to offer affordable coverage options that protect passengers and drivers during transit.",
  },
  {
    question: "Do I need a bank account to use T-yap?",
    answer:
      "No. T-yap enables the unbanked to participate, you only need your fingerprint. Funds can be topped up and withdrawn easily through partner agents.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-20 bg-white text-center font-lato">
      {/* Header */}
      <h2 className="text-[40px] font-bold leading-[40px] mb-12">FAQs</h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4 px-4">
        {faqs.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-sm transition-all duration-500 cursor-pointer ${
                isActive ? "bg-[#FF7A00] text-white" : "bg-white text-black"
              }`}
            >
              {/* Question Row */}
              <div
                className={`flex justify-between items-center px-6 py-4 transition-colors duration-300 ${
                  isActive ? "bg-[#FF7A00]" : "hover:bg-[#FFEFE6]"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-left font-semibold text-[16px]">
                  {faq.question}
                </p>

                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white text-[#FF7A00]"
                      : "bg-[#FF7A00] text-white"
                  }`}
                >
                  {isActive ? <X size={16} /> : <Plus size={16} />}
                </div>
              </div>

              {/* Answer */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isActive ? "max-h-48" : "max-h-0"
                }`}
              >
                <div
                  className="text-[14px] font-semibold leading-[21.55px] text-left px-6 py-4"
                  style={{
                    background: "#ffdbcc",
                    color: "rgba(131, 101, 88, 1)",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
