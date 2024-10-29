import React from "react";

const Connect = () => {
  return (
    <div className="connect w-full h-[40vh] text-center mt-36 mb-36 flex items-center justify-center gap-32 rounded-xl">
      <div className="">
        <div className="line w-72 h-[0.06rem] bg-[#9b9b9b]"></div>
        <h1 className="text-8xl text-left font-semibold mt-6 leading-none tracking-tighter">
          Let &apos; s <br /> Connect
        </h1>
      </div>
      <div className="card text-zinc-500 flex flex-col gap-3">
        <h1 className="font-medium text-2xl">Amsterdam</h1>
        <p>
          010-1234567 <br />
          info@interiozwars.org{" "}
        </p>
        <p>
          56 Tulip Terrace, 1023 EF Amsterdam, <br />
          Netherlands
        </p>
      </div>
      <div className="line w-[0.06rem] h-72 bg-[#9b9b9b]"></div>
      <div className="card text-zinc-500 flex flex-col gap-3">
        <h1 className="font-medium text-2xl">Eindhoven</h1>
        <p>
          010-1234567 <br /> info2@interiozwars.org{" "}
        </p>
        <p>
          101 Canal View, 4567 GH Eindhoven, <br /> Netherlands
        </p>
      </div>
    </div>
  );
};

export default Connect;
