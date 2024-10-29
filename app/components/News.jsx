import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

const News = () => {
  const articles = [
    {
      title: "Sustainable and Eco-Friendly Materials",
      category: "News",
      imageUrl:
        "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg",
    },
    {
      title: "Influence of Smart Home Technology",
      category: "Insights",
      imageUrl:
        "https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg",
    },
    {
      title: "Bold Colors and Patterns: Current Design Aesthetics",
      category: "Insights",
      imageUrl:
        "https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg",
    },
  ];

  return (
    <div className="about w-full h-[220vh] text-center mt-36 mb-36 flex flex-col items-center justify-center gap-5 rounded-xl bg-[#F5EFE6]">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Stay Updated <br /> Be Inspired
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        Latest News
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        Stay current, stay informed. Your source for the latest news, bringing
        you insights and updates in real-time.
      </p>
      <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
        Latest News
        <RxArrowTopRight />
      </button>
      <div className="cards mt-20 w-full">
        {articles.map((item, index) => (
          <div
            key={index}
            className="card mb-10 w-full px-44 flex items-center justify-center gap-10"
          >
            <div
              className="image w-1/2 h-[40vh] bg-cover bg-center rounded-xl   "
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            ></div>
            <div className="content w-1/2">
              <p className="text-zinc-600">{item.category}</p>
              <h1 className="text-4xl">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
