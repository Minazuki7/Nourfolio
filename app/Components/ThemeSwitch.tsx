"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Image from "next/image";
import CustomToggle from "../Assets/CustomToggle.svg";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  const themes = ["fire", "light", "dark"];

  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    setMounted(true);

    if (theme === "fire") {
      setCurrentRotation(0);
    } else if (theme === "dark") {
      setCurrentRotation(120);
    } else {
      setCurrentRotation(240);
    }
  }, []);

  const handleClick = () => {
    const currentIndex = themes.indexOf(theme as string);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
    setCurrentRotation(currentRotation - 120);
  };

  if (!mounted) return <></>;

  return (
    <>
      <motion.div
        className="  cursor-pointer"
        onClick={handleClick}
        animate={{ rotate: currentRotation }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={CustomToggle}
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </motion.div>
    </>
  );
};

export default ThemeChanger;
