import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="block min-h-[32px] mt-[20rem] pb-[80px]">
      <div className="w-full relative mx-auto px-32">
        <div className="w-full sticky grid grid-cols-12 gap-y-8 content-stretch justify-stretch justify-items-stretch items-start">
          <p className="text-black text-lg font-light col-start-1 col-end-2">
            Don't be shy
          </p>
          <h2
            className="text-black uppercase font-normal col-start-4 col-end-12 text-[16vw]"
            style={{ lineHeight: "85%" }}
          >
            Say hi
          </h2>
          <Link
            href="/"
            className="font-light col-start-4 col-end-12 text-5xl text-medGrey py-8 mb-28 hover:text-black"
          >
            info@maurice.com
          </Link>

          <p className="text-black row-span-3 text-lg text-normal col-start-1 col-end-3">
            &copy; 2021 All Rights Reserved
          </p>

          <div className="flex gap-6 col-start-6 col-end-13 row-span-3 justify-end content-stretch justify-items-stretch">
            <Link
              href="/"
              className="text-black text-lg font-light hover:text-medGrey"
            >
              NextJS
            </Link>
            <Link
              href="/"
              className="text-black text-lg font-light hover:text-medGrey"
            >
              Styleguide
            </Link>
            <Link
              href="/"
              className="text-black text-lg font-light hover:text-medGrey"
            >
              Changelog
            </Link>
            <Link
              href="/"
              className="text-black text-lg font-light hover:text-medGrey"
            >
              Licences
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
