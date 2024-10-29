import { RxArrowTopRight } from "react-icons/rx";

const Process = () => {
  const steps = [
    {
      title: "Discovering Your Vision",
      description:
        "We meet with you to discuss your vision, needs, budget, and timeline. This helps us understand your unique style and requirements.",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      title: "Sketching Your Dreams",
      description:
        "Based on our consultation, we create initial design concepts and mood boards to visualize the space and overall aesthetic.",
      imageUrl:
        "https://images.pexels.com/photos/29029215/pexels-photo-29029215.jpeg",
    },
    {
      title: "Bringing Ideas to Life",
      description:
        "Once you approve the concept, we develop detailed plans, 3D renderings, and material selections to bring your vision to life.",
      imageUrl:
        "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
    },
    {
      title: "Transforming Your Space",
      description:
        "We oversee the transformation of your space, coordinating with contractors and managing the installation of furnishings and decor.",
      imageUrl:
        "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg",
    },
  ];

  return (
    <div className="about w-full h-screen text-center mt-36 mb-36 flex flex-col items-center justify-center gap-5">
      <h1 className="text-8xl font-semibold mt-6 leading-none tracking-tighter">
        Interior Process
      </h1>
      <p className="uppercase text-sm flex items-center justify-center mt-4 gap-3 text-[#9b9b9b]">
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
        Process
        <div className="line w-36 h-[0.06rem] bg-[#9b9b9b]"></div>
      </p>
      <p className="tracking-wide">
        Transforming a space involves understanding and applying key design
        principles to create a harmonious and functional environment.
      </p>
      <button className="flex items-center gap-2 border-2 border-black px-5 py-3 text-xl font-medium transition-all hover:bg-black hover:text-white">
        Get In Touch
        <RxArrowTopRight />
      </button>
      <div className="cards w-full h-[50vh] px-52 mt-20 py-7 flex items-center justify-between gap-3">
        {steps.map((item, index) => (
          <div
            key={index}
            className="card w-56 h-fit flex flex-col items-center text-center p-4 bg-white shadow-md rounded-lg"
          >
            <div
              className="image w-40 h-40 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url(${item.imageUrl})`,
              }}
            ></div>
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="text-sm mt-2 text-zinc-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
