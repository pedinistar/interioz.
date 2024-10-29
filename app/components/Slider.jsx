import React from "react";

const Slider = () => {
  return (
    <div className="slider w-full h-[70vh] bg-amber-300 rounded-2xl overflow-hidden text-[#F5F5F4]">
      <div className="image-div w-full h-full px-28 pt-28 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative">
        {/* Inner shadow overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent rounded-2xl"></div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-8 uppercase text-sm tracking-widest">
            <p>Lessons from past</p>
            <div className="line w-24 h-[0.06rem] bg-[#F5F5F4]"></div>
          </div>
          <h1 className="text-8xl font-semibold mt-6">
            <span className="text-[#E0E0B6]">Designing </span>
            Spaces, Creating Experiences
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Slider;
