"use client";

import { motion } from "framer-motion";

motion;
const SkillsPage = () => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full container"
    >
      FullStack WebDevelopment
    </motion.div>
  );
};

export default SkillsPage;
