import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const Team = () => {
  return (
    <div className="about w-full text-center mt-52 mb-36 flex flex-col items-center justify-center gap-5">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Meet Our <br /> Designers
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        Team
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        Our team of passionate experts transforms your vision into stunning and
        impactful designs.
      </p>
      <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
        Contact Us
        <RxArrowTopRight />
      </button>
      <div className="pics w-full flex items-center justify-center gap-20">
        <div
          className="image pb-10 text-white w-80 h-96 relative bg-cover bg-center rounded-lg flex flex-col justify-end items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg')`,
          }}
        >
          {/* Inner shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t  z-[1] from-black/50 to-transparent rounded-2xl"></div>
          <p className="z-[99]">Lead Designer</p>
          <h1 className=" z-[99] font-semibold text-xl">Alexander Reynolds</h1>
        </div>
        <div
          className="image pb-10 text-white w-80 h-96 mt-44 relative bg-cover bg-center rounded-lg flex flex-col justify-end items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg')`,
          }}
        >
          {/* Inner shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t z-[1] from-black/50 to-transparent rounded-2xl"></div>
          <p className="z-[99]">Lead Designer</p>
          <h1 className="z-[99] font-semibold text-xl">Alexander Reynolds</h1>
        </div>
        <div
          className="image pb-10 text-white w-80 h-96 relative bg-cover bg-center rounded-lg flex flex-col justify-end items-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg')`,
          }}
        >
          {/* Inner shadow overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 z-[1] to-transparent rounded-2xl"></div>
          <p className="z-[99]">Lead Designer</p>
          <h1 className="font-semibold text-xl z-[99]">Alexander Reynolds</h1>
        </div>
      </div>
    </div>
  );
};

export default Team;
