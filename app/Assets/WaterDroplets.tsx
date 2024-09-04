"use client";
import { motion } from "framer-motion";
import { FC, useEffect, useState } from "react";

interface WaterDropletProps {
  numberOfDrops?: number;
}

const getRandomPosition = () => Math.round(Math.random() * 200 - 100);
const getRandomDelay = () => Math.random() * 1.5;

const WaterDroplet: FC<WaterDropletProps> = ({ numberOfDrops = 7 }) => {
  const [positions, setPositions] = useState<{ top: number; left: number }[]>(
    []
  );

  useEffect(() => {
    const initialPositions = Array.from({ length: numberOfDrops }, () => ({
      top: getRandomPosition(),
      left: getRandomPosition(),
    }));
    setPositions(initialPositions);
  }, [numberOfDrops]);

  const dropletConfigs = [
    { className: "w-52 h-52" },
    { className: "w-24 h-24" },
    { className: "w-8 h-8" },
  ];

  const changePosition = (index: number) => {
    setPositions((prevPositions) =>
      prevPositions.map((position, i) =>
        i === index
          ? { top: getRandomPosition(), left: getRandomPosition() }
          : position
      )
    );
  };

  return (
    <>
      {positions.map((position, index) => (
        <div
          className="absolute inset-0 flex justify-center items-center pointer-events-none bg-transparent"
          key={index}
          style={{ top: `${position.top}vh`, left: `${position.left}vw` }}
        >
          {dropletConfigs.map((config, i) => (
            <motion.div
              key={`${position.left * position.top}_${i}`}
              className={`absolute bg-transparent border border-blue-700 rounded-full opacity-30 ${config.className}`}
              initial={{ opacity: 0 }}
              animate={{
                scale: [0, 0.5, 1, 2],
                opacity: [0, 1, 0.5, 0],
              }}
              transition={{
                duration: 2,
                delay: getRandomDelay() + 0.25 * i,
                ease: "easeInOut",
              }}
              onAnimationComplete={() => {
                if (i === 2) changePosition(index);
              }}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default WaterDroplet;
