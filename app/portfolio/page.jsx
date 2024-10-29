import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="showcase bg-[#F5EFE6] w-full rounded-xl h-[180vh] text-center mt-36 mb-36 flex flex-col items-center justify-center gap-5">
        <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
          Profile
        </h1>
        <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
          <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
          Quiet Place
          <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        </p>
        <div className="grid grid-cols-2 gap-4 w-full max-w-6xl mx-auto">
          {/* Row 1: 60% width image, then 40% */}
          <div
            className="bg-cover bg-center h-[25rem] rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg')",
              // width: "60%",
            }}
          ></div>
          <div
            className="bg-cover bg-center h-[25rem] rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/29029215/pexels-photo-29029215/free-photo-of-modern-architecture-in-new-york-city-skyline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
              // width: "40%",
            }}
          ></div>

          {/* Row 2: 40% width image, then 60% */}
          <div
            className="bg-cover bg-center h-[25rem] rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg')",
              // width: "150%",
            }}
          ></div>
          <div
            className="bg-cover bg-center h-[25rem] rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg')",
              // width: "40%",
            }}
          ></div>

          {/* Row 3: 60% width image, then 40% */}
          <div
            className="bg-cover bg-center h-[25rem] rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg')",
              // width: "60%",
            }}
          ></div>
          <div
            className="bg-cover bg-center h-[25rem] rounded-xl"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg')",
              // width: "40%",
            }}
          ></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
