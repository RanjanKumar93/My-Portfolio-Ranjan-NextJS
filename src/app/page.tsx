"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.section
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full w-full flex items-center justify-center lg:px-10"
    >
      <div className="text-center w-full lg:text-left">
        <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={["Ranjan", 1500, "Web Developer", 1500]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-slate-600 text-base sm:text-lg mb-6 lg:text-xl">
          I Like creating Websites.
        </p>
        <div>
          <motion.button
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              href="/projects"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-pink-500 text-white"
            >
              <span className="flex items-center justify-center">
                See my Projects <ArrowUpRight />
              </span>
            </Link>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
