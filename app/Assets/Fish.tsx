"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "../Hooks/FollowPointer";

const Fish = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className="h-20 w-20 bg-red-400"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        restDelta: 0.001,
      }}
    />
  );
};
export default Fish;
