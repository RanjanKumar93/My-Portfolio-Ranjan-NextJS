"use client";
import Link from "next/link";
import { ModeToggle } from "../ModeToggle";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 lg:px-1 lg:max-w-5xl mx-auto relative z-50">
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <Link
          href={"/"}
          className="text-xl sm:text-2xl font-semibold hover:text-slate-700 hover:dark:text-slate-300"
        >
          {"<MyPortfolio />"}
        </Link>
      </motion.button>
      <div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
