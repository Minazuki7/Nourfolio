"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LightningBranch from "./LightningBranch";

interface Point {
  x: number;
  y: number;
}

interface Branch {
  points: Point[];
  children: Branch[];
}
interface LightningProps {
  color?: any;
}
const Lightning: React.FC<LightningProps> = ({ color }) => {
  const [mainBranch, setMainBranch] = useState<Branch | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [flash, setFlash] = useState(false);

  const generateBranch = (
    startX: number,
    startY: number,
    angle: number,
    depth: number
  ): Branch => {
    const screenHeight = window.innerHeight;
    const points: Point[] = [{ x: startX, y: startY }];
    let currentX = startX;
    let currentY = startY;
    const children: Branch[] = [];

    while (currentY < screenHeight) {
      const deviation = (Math.random() - 0.5) * 60;

      // Adjust the angle dynamically for a zigzag effect
      const angleChange = (Math.random() - 0.5) * (Math.PI / 4);
      angle += angleChange;

      currentX += Math.sin(angle) * 10 + deviation;
      currentY += Math.cos(angle) * 10 + 20;
      points.push({ x: currentX, y: currentY });

      // Generate child branches with some randomness
      if (depth > 0 && Math.random() < 0.3) {
        const newAngle = angle + ((Math.random() - 0.5) * Math.PI) / 2;
        const childBranch = generateBranch(
          currentX,
          currentY,
          newAngle,
          depth - 1
        );
        children.push(childBranch);
      }
    }

    return { points, children };
  };

  const generateLightning = () => {
    const startX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
    const branch = generateBranch(startX, 0, Math.PI / 2, 1);
    setMainBranch(branch);
    setIsVisible(true);
    setFlash(true);
    setTimeout(() => setFlash(false), 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateLightning();
      setTimeout(() => setIsVisible(false), 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && mainBranch && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
            <LightningBranch branch={mainBranch} stroke={color} />
          </svg>
        )}
      </AnimatePresence>
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: flash ? 0.5 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default Lightning;
