import React from "react";
import Link from "next/link";

const Header = () => {
  const styles = {
    anchorTags: "",
  };
  return (
    <header className="w-full h-20">
      <nav className="w-full h-full flex items-center justify-center gap-10 uppercase">
        <Link href="/" passHref>
          <a className="active text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl">
            Home
          </a>
        </Link>
        <Link href="/about-us" passHref>
          <a className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl">
            About Us
          </a>
        </Link>
        <Link href="/serv" passHref>
          <a className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl">
            Services
          </a>
        </Link>
        <h1 className="font-semibold font-['Syncopate'] text-2xl">Interioz.</h1>
        <Link href="/portfolio" passHref>
          <a className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl">
            Portfolio
          </a>
        </Link>
        <Link href="/news" passHref>
          <a className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl">
            News
          </a>
        </Link>
        <Link href="/contact" passHref>
          <a className="text-[0.8rem] tracking-wide px-3 py-1 rounded-3xl">
            Contact
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
