"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Flame from "./Flame";

interface FireProps {
  particleCount?: number;
  baseDelay?: number;
}

const Sparkles: React.FC<FireProps> = ({
  particleCount = 30,
  baseDelay = 0,
}) => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { width, height } = dimensions;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      {Array.from({ length: particleCount }).map((_, index) => {
        const positionRatio = Math.random();
        const particleWidth = width * (0.01 - positionRatio * 0.005);
        const particleHeight = height * (0.02 - positionRatio * 0.01);

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, y: height, x: Math.random() * width }}
            animate={{
              opacity: [0, 1, 0],
              y: [height, 0],
              x: [
                Math.random() * width,
                Math.random() * width,
                Math.random() * width,
              ],
              scaleX: [1, 1.5, 1],
              scaleY: [1, 0.8, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              ease: "easeOut",
              repeat: Infinity,
              delay: baseDelay + Math.random() * 5,
            }}
            style={{
              width: `${particleWidth}px`,
              height: `${particleHeight}px`,
            }}
          >
            <Flame width="100%" height="100%" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Sparkles;
