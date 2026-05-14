"use client";
import React from "react";
import { motion } from "framer-motion";
import "./starStyle.css";

const Star = () => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: -10 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="star-container"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="currentColor"
      >
        <path d="M 22.75 48 C 20.903 37.41 10.483 27.457 0 25.25 L 0 22.625 C 10.549 20.105 20.686 10.941 22.75 0 L 25.375 0 C 27.169 10.66 37.542 20.343 48 22.625 L 48 25.25 C 37.735 27.377 27.106 37.364 25.375 48 Z" />
      </svg>
    </motion.div>
  );
};

export default Star;