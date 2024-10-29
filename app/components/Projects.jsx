import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const Projects = () => {
  return (
    <div className="about w-full text-center mt-52 mb-36 flex flex-col items-center justify-center gap-5">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Design Excelence <br /> Unveiled
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        Projects
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        Transforming Visions into Stunning Realities. Experience the innovation,
        creativity, and craftsmanship that define our approach to exceptional
        interior design.
      </p>
      <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
        Latest Projects
        <RxArrowTopRight />
      </button>
      <div
        className="image w-[80%] h-[40rem] mt-24 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg')`,
        }}
      ></div>
    </div>
  );
};

export default Projects;
