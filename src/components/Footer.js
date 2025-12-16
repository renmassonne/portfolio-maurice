import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="block min-h-[32px] mt-16 sm:mt-32 md:mt-[20rem] pb-8 sm:pb-16 md:pb-[80px]">
      <div className="w-full relative mx-auto px-4 sm:px-8 md:px-16 lg:px-32 max-w-[1920px]">
        <div className="w-full sticky grid grid-cols-12 gap-y-4 sm:gap-y-6 md:gap-y-8 content-stretch justify-stretch justify-items-stretch items-start">
          <p className="text-black text-sm sm:text-base md:text-lg font-light col-start-1 col-end-12 md:col-end-2">
            Don't be shy
          </p>
          <h2
            className="text-black uppercase font-normal col-start-1 col-end-12 md:col-start-4 md:col-end-12 text-[20vw] sm:text-[18vw] md:text-[16vw]"
            style={{ lineHeight: "85%" }}
          >
            Say hi
          </h2>
          <Link
            href="/"
            className="font-light col-start-1 col-end-12 md:col-start-4 md:col-end-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-medGrey py-4 sm:py-6 md:py-8 mb-8 sm:mb-16 md:mb-28 hover:text-black"
          >
            info@maurice.com
          </Link>

          <p className="text-black row-span-3 text-sm sm:text-base md:text-lg text-normal col-start-1 col-end-12 md:col-end-3 mb-4 sm:mb-0">
            &copy; 2021 All Rights Reserved
          </p>

          <div className="flex flex-wrap gap-4 sm:gap-6 col-start-1 col-end-12 md:col-start-6 md:col-end-13 row-span-3 justify-start md:justify-end content-stretch justify-items-stretch">
            <Link
              href="/"
              className="text-black text-sm sm:text-base md:text-lg font-light hover:text-medGrey"
            >
              NextJS
            </Link>
            <Link
              href="/"
              className="text-black text-sm sm:text-base md:text-lg font-light hover:text-medGrey"
            >
              Styleguide
            </Link>
            <Link
              href="/"
              className="text-black text-sm sm:text-base md:text-lg font-light hover:text-medGrey"
            >
              Changelog
            </Link>
            <Link
              href="/"
              className="text-black text-sm sm:text-base md:text-lg font-light hover:text-medGrey"
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
