import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const About = () => {
  return (
    <div className="about w-full h-screen text-center mt-36 mb-36 flex flex-col items-center justify-center gap-5">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Our Love for <br />
        Interior Design
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        About Us
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        We are a passionate team dedicated to creating stunning interiors.
      </p>
      <div className="w-full h-full px-52 py-7 flex items-center justify-between gap-3">
        <div
          className="image w-1/2 h-full bg-cover bg-center rounded-3xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        ></div>
        <div className="content w-1/2 h-full px-20 flex flex-col items-start text-left justify-center gap-10">
          <h2 className="text-4xl">
            We have extensive experience in interior design and a broad
            knowledge of the latest trends and techniques.
          </h2>
          <p className="text-lg leading-6">
            At Interioz, we blend creativity and functionality to transform
            spaces into stunning environments. Our team of passionate interior
            designers is dedicated to bringing your vision to life with
            personalized, stylish, and innovative solutions. Let us make your
            dream space a reality.
          </p>
          <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
            About Us
            <RxArrowTopRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
