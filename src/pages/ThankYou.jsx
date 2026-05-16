import React from "react";
import congratsImg from "../assets/congratimg.svg";

const ThankYou = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white font-lato px-4 py-10">
      <div
        className="flex flex-col items-center justify-center text-center p-8 sm:p-10 md:p-12 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] shadow-md"
        style={{
          background:
            "linear-gradient(216.23deg, #FFFFFF -25.97%, #F0EDED 114.13%)",
          maxWidth: "650px",
          width: "100%",
        }}
      >
        <img
          src={congratsImg}
          alt="Congratulations"
          className="w-[80px] h-[90px] sm:w-[100px] sm:h-[115px] md:w-[115px] md:h-[132px] transform rotate-180 mb-6"
        />

        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-800 leading-relaxed sm:leading-[1.7]">
          <strong className="block mb-3 text-[18px] sm:text-[20px] md:text-[24px]">
            Thank You for Joining the T-Yap NG Waitlist!
          </strong>
          You’re officially part of the movement to revolutionize transport
          payments in Africa.
          <br />
          <br />
          You’ll be the first to know when we launch, and get early access to
          exclusive updates, features, and rewards.
          <br />
          <br />
          Stay tuned.
          <br />
          <strong>Fingerprint is the new ticket.</strong>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
