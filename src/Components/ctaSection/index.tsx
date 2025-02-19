import React from "react";

const CTASection = () => {
  return (
    <div
      className=" py-32 px-14 text-white"
      style={{
        background:
          "linear-gradient(to right, #363531, rgb(29, 20, 47), rgb(50, 32, 91), rgb(71, 45, 140), rgb(6, 3, 16))",
      }}
    >
      <h1 className="font-bold text-4xl">Your First Month is on Us!</h1>
      <p className="text-xl pt-2">
        Get the most out of your business with correct marketing
      </p>
      <button className="bg-white  text-black rounded-md py-2 text-lg px-10 mt-5 font-semibold">
        Claim Your Free Month
      </button>
    </div>
  );
};

export default CTASection;
