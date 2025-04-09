import React from "react";
import whatsapp from "../../assets/images/whatsapp.png";

const WhatsappBtn = () => {
  return (
    <div className="fixed z-10 right-5 bottom-10">
      <a
        href="https://wa.me/923071112852?text=Hello, I'm interested in your services!"
        target="_blank"
      >
        <img src={whatsapp} alt="whatsappButton" width="50px" height="50px" />
      </a>
    </div>
  );
};

export default WhatsappBtn;
