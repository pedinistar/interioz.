import React from "react";

const Header = () => {
  const styles = {
    anchorTags: "",
  };
  return (
    <header className="w-full h-20">
      <nav className="w-full h-full flex items-center justify-center gap-10 uppercase">
        <a
          href=""
          className="active text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl"
        >
          Home
        </a>
        <a
          href="/about-us"
          className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl"
        >
          About Us
        </a>
        <a
          href="/serv"
          className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl"
        >
          Services
        </a>
        <h1 className="font-semibold font-['Syncopate'] text-2xl">Interioz.</h1>
        <a
          href="/portfolio"
          className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl"
        >
          Portfolio
        </a>
        <a
          href=""
          className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl"
        >
          News
        </a>
        <a
          href="/contact"
          className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
