import React from "react";
import Slider from "./Slider";
import About from "./About";
import Numbers from "./Numbers";
import Services from "./Services";
import Showcase from "./Showcase";
import Process from "./Process";
import News from "./News";
import Projects from "./Projects";
import Team from "./Team";
import Contact from "./Contact";
import Connect from "./Connect";
import Footer from "./Footer";

const Content = () => {
  return (
    <div className="main-content">
      <Slider />
      <About />
      <Numbers />
      <Services />
      <Showcase />
      <Process />
      <News />
      <Projects />
      <Team />
      <Contact />
      <Connect />
      <Footer />
    </div>
  );
};

export default Content;
