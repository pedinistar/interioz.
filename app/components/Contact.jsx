import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const Contact = () => {
  return (
    <div className="about w-full h-[80vh] text-center mt-36 mb-36 flex flex-col items-center justify-center gap-5 rounded-xl bg-[#F5EFE6]">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Join us in inspiring <br /> dialogue
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        Contact
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        Excited to meet you in person! Come visit us at our office to discuss
        your new design. We’re looking forward to connecting face-to-face. See
        you soon!
      </p>
      <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
        Let's Talk
        <RxArrowTopRight />
      </button>
    </div>
  );
};

export default Contact;
