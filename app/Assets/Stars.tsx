import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

const generateRandomPosition = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
});

const Stars = () => {
  const opacity = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      animate(opacity, [0, 1, 0], {
        duration: 3,
        ease: "easeInOut",
        onComplete: () => opacity.set(0),
      });
    }, Math.random() * 3000 + 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="w-2 h-2 bg-white border border-blue-500"
      style={{
        opacity,

        borderRadius: "50%",
        position: "absolute",
        ...generateRandomPosition(),
      }}
    />
  );
};
export default Stars;
