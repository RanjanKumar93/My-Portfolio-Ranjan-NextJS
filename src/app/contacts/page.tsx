"use client";

import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -80, opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="h-full container"
    >
      Email: rk0936626@gmail.com
    </motion.div>
  );
};

export default ContactPage;
