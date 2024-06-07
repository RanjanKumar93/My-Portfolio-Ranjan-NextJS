"use client";

import React from "react";
import { navData } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center lg:justify-center gap-y-4 fixed h-max bottom-0 mt-auto lg:right-[2%] z-40 top-0 w-full lg:w-16 lg:max-w-md lg:h-screen">
      <div className="flex w-full items-center justify-between lg:justify-center lg:flex-col gap-y-10 px-4 sm:px-40 lg:px-0 h-[5rem] bg-slate-400/70 dark:bg-white/10 lg:h-max py-8 backdrop-blur-sm text-3xl lg:text-xl lg:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-green-700 dark:text-green-600"
              } relative flex items-center group hover:text-green-600 transition-all duration-300`}
            >
              <div className="absolute pr-14 right-0 hidden lg:group-hover:flex">
                <div className="bg-white relative flex items-center p-[0.375rem] rounded-[3px]">
                  <div className="text-[0.75rem] leading-none text-black font-semibold capitalize">
                    {link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>
                <link.icon />
              </div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
