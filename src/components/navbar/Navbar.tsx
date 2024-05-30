"use client";

import React from "react";
import { ModeToggle } from "../ModeToggle";
import { navData } from "@/lib/data";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full items-center justify-between xl:justify-center xl:flex-col gap-y-10 px-4 md:px-40 xl:px-0 h-[5rem] bg-slate-400/70 dark:bg-white/10 xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathname && "text-red-600"
              } relative flex items-center group hover:text-red-600 transition-all duration-300`}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
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
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
