import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { supabase } from "../supabaseClient"; // 👈 Import Supabase client

const formDataConfig = {
  passenger: {
    title: "Who T-Yap Serves/",
    subtitle: "Passenger",
    bgColor: "rgba(252, 246, 246, 1)",
  },
  driver: {
    title: "Who T-Yap Serves/",
    subtitle: "Driver",
    bgColor: "rgba(255, 252, 243, 1)",
  },
  park: {
    title: "Who T-Yap Serves/",
    subtitle: "Park Management",
    bgColor: "rgba(249, 255, 246, 1)",
  },
  merchant: {
    title: "Who T-Yap Serves/",
    subtitle: "Merchant",
    bgColor: "rgba(245, 248, 255, 1)",
  },
};

const WaitlistForm = () => {
  const navigate = useNavigate();
  const { type } = useParams();
  const config = formDataConfig[type] || formDataConfig.passenger;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 👇 Save data into Supabase waitlist table
      const { error } = await supabase.from("waitlist").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          state: formData.state,
          category: config.subtitle, // 👈 Save who they are (Driver, Passenger, etc.)
        },
      ]);

      if (error) throw error;
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting waitlist:", error.message);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center py-28 px-6 bg-[radial-gradient(circle_at_top,_#fff6ef_0%,_#ffffff_100%)] min-h-screen font-lato">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-8 left-6 flex items-center text-[rgba(255,76,0,1)] hover:text-orange-500 transition-all font-semibold"
      >
        <FiChevronLeft className="text-2xl mr-1" />
        Back
      </button>

      {/* Header */}
      <div className="text-center mb-14 mt-4">
        <h2
          className="text-[40px] font-bold leading-[40px]"
          style={{ color: "rgba(0,0,0,0.5)" }}
        >
          {config.title}
          <span className="text-black"> {config.subtitle}</span>
        </h2>
        <h3 className="text-[40px] font-bold leading-[40px] mt-5">
          Waitlist Form
        </h3>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center p-8 rounded-2xl shadow-md w-full max-w-[468px]"
        style={{
          background: config.bgColor,
        }}
      >
        {["name", "email", "phone", "state"].map((field) => (
          <div key={field} className="w-full mb-6">
            <label className="block text-left font-medium mb-2 capitalize text-[18px]">
              {field}
            </label>
            <input
              name={field}
              type="text"
              placeholder="Type here"
              value={formData[field]}
              onChange={handleChange}
              className="w-full h-[55px] px-4 rounded-[15px] bg-[rgba(208,200,196,1)] text-white placeholder-[rgba(255,255,255,1)] outline-none"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full h-[55px] mt-4 rounded-[15px] bg-[rgba(255,76,0,1)] text-white font-semibold text-[18px] hover:bg-orange-500 transition-all"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default WaitlistForm;
