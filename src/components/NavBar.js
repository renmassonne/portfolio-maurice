import React, { useState } from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const CustomLink = ({ title, href, onClick }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-light text-3xl md:text-3xl text-xl py-4 md:py-8 hover:text-lightGrey ${
        router.asPath === href ? "text-lightGrey" : "text-black"
      }`}
    >
      {title}
    </Link>
  );
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-32">
      <Link
        href="/"
        className="font-light text-xl sm:text-2xl md:text-3xl text-black"
      >
        Maurice
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-row gap-8">
        <CustomLink title={"Work"} href={"/work"} />
        <CustomLink title={"About"} href={"/about"} />
        <CustomLink title={"Contact"} href={"/contact"} />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-light z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <CustomLink title={"Work"} href={"/work"} onClick={closeMenu} />
          <CustomLink title={"About"} href={"/about"} onClick={closeMenu} />
          <CustomLink title={"Contact"} href={"/contact"} onClick={closeMenu} />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
