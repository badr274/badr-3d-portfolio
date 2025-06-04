"use client";
import { motion } from "framer-motion";
import ProjectLayout from "./ProjectLayout";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};
const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-full xl:max-w-4xl mx-auto px-4 lg:px-16 space-y-6 md:space-y-6 flex flex-col items-center"
    >
      {projects.map((project) => {
        return <ProjectLayout key={project.id} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;
