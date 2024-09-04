"use client";
import React from "react";
import { motion } from "framer-motion";

interface FireProps {
  width?: number;
  height?: number;
  particleCount?: number;
}

const Fire: React.FC<FireProps> = ({
  width = 240,
  height = 288,
  particleCount = 50,
}) => {
  return (
    <div
      className="relative blur-[0.02em]"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {Array.from({ length: particleCount }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute bottom-0 rounded-full mix-blend-screen bg-gradient-radial from-[rgb(255,80,0)] from-20% to-transparent to-70%"
          style={{
            width: `${width}px`,
            height: `${height}px`,
            left: `calc((100% - 5em) * ${index / particleCount})`,
          }}
          initial={{ opacity: 0, y: 0, scale: 1 }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, -240],
            scale: [1, 0],
          }}
          transition={{
            duration: 1,
            ease: "easeIn",
            repeat: Infinity,
            delay: Math.random(),
          }}
        />
      ))}
    </div>
  );
};

export default Fire;
