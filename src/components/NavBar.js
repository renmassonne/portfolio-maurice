import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const CustomLink = ({ title, href }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`font-light text-3xl py-8 hover:text-lightGrey ${
        router.asPath === href ? "text-lightGrey" : "text-black"
      }`}
    >
      {title}
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full flex items-center justify-between px-32">
      <Link href="/" className="font-light text-3xl text-black">
        Maurice
      </Link>

      <div className="flex flex-row gap-8">
        <CustomLink title={"Work"} href={"/Work"} />

        <CustomLink title={"About"} href={"/about"} />

        <CustomLink title={"Contact"} href={"/contact"} />
      </div>
    </header>
  );
};

export default NavBar;
