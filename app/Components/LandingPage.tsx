"use client";

import { useTheme } from "next-themes";
import ThemeChanger from "./ThemeSwitch";
import { Themes } from "../Providers/ThemeProviders";
import FireScene from "./FireScene";
import Aura from "./Aura";
import AnimatedWaves from "./AnimatedWaves";
import WaterDroplets from "../Assets/WaterDroplets";
import CentralBlock from "./CentralBlock";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const { theme } = useTheme();
  const currentTheme = theme as Themes;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative">
      {currentTheme === "fire" && <FireScene />}
      {currentTheme === "dark" && <Aura />}
      {currentTheme === "light" && (
        <>
          <AnimatedWaves />
          <WaterDroplets />
          <CentralBlock />
        </>
      )}
      <div className="absolute top-4 left-4 z-50">
        <ThemeChanger />
      </div>
    </div>
  );
};

export default LandingPage;
