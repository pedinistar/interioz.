import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const Services = () => {
  return (
    <div className="w-full h-fit text-center mt-36 mb-36 flex flex-col items-center justify-center gap-5">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Expertly crafting <br /> your dream
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        Services
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        We turn your interior design dreams into reality with our specialized
        touch in elegant and functional spaces.
      </p>
      <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
        Our Services
        <RxArrowTopRight />
      </button>
      <div className="w-fit h-[70vh] mt-20 flex items-center justify-between gap-3 bg-[#F5EFE6] rounded-3xl">
        <div
          className="image w-[40vw] h-full bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>
        <div className="content w-[40%] h-full px-20 flex flex-col items-start text-left justify-center gap-10">
          {["Residential", "Planning", "Renovation", "Redesign"].map(
            (item, index) => (
              <div key={index} className="flex flex-col">
                <h1 className="text-4xl text-[#525252] font-semibold">
                  {item}
                </h1>
                <div className="line bg-black w-40 h-1"></div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
