"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const NavLink = motion.create(Link);
const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
      variants={item}
      href={demoLink}
      target="_blank"
      className="custom-bg text-sm md:text-base  cursor-pointer flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 "
    >
      {/* <Image
        priority
        // sizes="100vw"
        src={"/projects/ai-saas.png"}
        alt="project-image"
        width={700}
        height={500}
        className="w-full h-full"
      /> */}
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted hidden sm:inline-block">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted" />
      <p className="text-muted sm:text-foreground">
        {new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        })}
      </p>
    </NavLink>
  );
};

export default ProjectLayout;
