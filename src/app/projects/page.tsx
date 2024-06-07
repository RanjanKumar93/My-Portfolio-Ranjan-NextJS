"use client";

import Projects from "@/components/projects/Projects";
import { motion } from "framer-motion";

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full dark:bg-slate-950 bg-slate-300 container"
    >
      <Projects />
    </motion.div>
  );
};

export default ProjectsPage;
