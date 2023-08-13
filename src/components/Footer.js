import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="block min-h-[32px] pb-[80px]">
      <div className="w-full relative mx-auto px-32">
        <motion.div
          className="w-full sticky grid grid-cols-12 gap-y-8 content-stretch justify-stretch justify-items-stretch items-start"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <p className="text-black text-lg text-normal col-start-1 col-end-2">
            Don't be shy
          </p>
          <h2
            className="text-black uppercase col-start-4 col-end-12 text-[16vw]"
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
              className="text-black text-lg text-normal hover:text-medGrey"
            >
              NextJS
            </Link>
            <Link
              href="/"
              className="text-black text-lg text-normal hover:text-medGrey"
            >
              Styleguide
            </Link>
            <Link
              href="/"
              className="text-black text-lg text-normal hover:text-medGrey"
            >
              Changelog
            </Link>
            <Link
              href="/"
              className="text-black text-lg text-normal hover:text-medGrey"
            >
              Licences
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
