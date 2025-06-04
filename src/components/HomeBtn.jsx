"use client";
import { Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = motion.create(Link);

const HomeBtn = () => {
  return (
    <NavLink
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      href={"/"}
      className="custom-bg text-foreground rounded-full flex items-center justify-center fixed top-4 left-4 w-fit self-start z-50"
      aria-label={"Home"}
      name={"Home"}
    >
      <span className="relative peer w-10 h10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full" />
        <span
          className="absolute hidden peer-hover:block px-2 left-full mx-2 top-1/2 -translate-y-1/2
        bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap"
        >
          Home
        </span>
      </span>
    </NavLink>
  );
};

export default HomeBtn;
