import React from "react";

const Numbers = () => {
  const data = [
    {
      num: 16,
      name: "Offices",
    },
    {
      num: 47,
      name: "Countries",
    },
    {
      num: 216,
      name: "Projects",
    },
    {
      num: 1994,
      name: "Since",
    },
  ];
  return (
    <div className="box w-full h-[27rem] mb-36 bg-[#F5EFE6] flex justify-evenly rounded-3xl">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h1 className="text-[8vw] leading-none font-medium">{item.num}</h1>
          <div className="line w-32 h-[3px] bg-black"></div>
          <p className="mt-4 uppercase">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Numbers;
