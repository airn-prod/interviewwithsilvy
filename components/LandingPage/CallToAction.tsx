import React from "react";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="justify-center self-center px-5 py-3 mt-8 text-medium text-white bg-violet-500 rounded-md"
    >
      Get Started Now
    </motion.button>
  );
};

export default CallToAction;
