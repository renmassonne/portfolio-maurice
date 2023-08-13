import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="w-full flex items-center justify-between px-32">
      <Link href="/" className="font-light text-3xl text-black">
        Maurice
      </Link>

      <div className="flex flex-row gap-8">
        <Link
          href="/"
          className="font-light text-3xl text-black py-8 hover:text-lightGrey"
        >
          Work
        </Link>
        <Link
          href="/"
          className="font-light text-3xl text-black py-8 hover:text-lightGrey"
        >
          About
        </Link>
        <Link
          href="/"
          className="font-light text-3xl text-black py-8 hover:text-lightGrey"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
