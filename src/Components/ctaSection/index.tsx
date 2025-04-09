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
      <h1 className="font-bold text-4xl">
        Unlock Your Business's Full Potential
      </h1>
      <p className="text-xl pt-2">
        Elevate your brand with powerful marketing strategies that drive
        results.
      </p>
      <a
        href="https://wa.me/923071112852?text=Hello, I'm interested in your services!"
        target="_blank"
      >
        <button className="bg-white  text-black rounded-md py-2 text-lg px-10 mt-5 font-semibold">
          Let's Get Started
        </button>
      </a>
    </div>
  );
};

export default CTASection;
