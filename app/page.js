import React from "react";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Content from "./components/Content";

const page = () => {
  return (
    <main className="px-20">
      {/* // Header */}
      <Header />
      {/* // Content */}
      <Content />
      {/* // Footer */}
      {/* <Footer /> */}
    </main>
  );
};

export default page;
