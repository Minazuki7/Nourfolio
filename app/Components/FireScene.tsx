"use client";
import React from "react";
import Sparkles from "../Assets/Sparkles";
import Fire from "../Assets/Fire";
import CentralBlock from "./CentralBlock";

const FireScene: React.FC = () => {
  const fires = [
    { width: 70, height: 60, x: 5 },
    { width: 80, height: 150, x: 15 },
    { width: 100, height: 300, x: 30 },
    { width: 90, height: 200, x: 42 },
    { width: 50, height: 100, x: 53 },
    { width: 100, height: 250, x: 67 },
    { width: 60, height: 75, x: 78 },
    { width: 70, height: 120, x: 85 },
    { width: 90, height: 300, x: 93 },
  ];

  return (
    <div className="bg-[#300808] h-screen relative overflow-hidden">
      <Sparkles particleCount={100} baseDelay={1} />

      <div className="absolute bottom-0 left-0 right-0 flex">
        {fires.map((fire, index) => (
          <div
            key={index}
            className="absolute bottom-0 transform -translate-x-1/2"
            style={{
              width: `${fire.width}px`,
              height: `${fire.height}px`,
              left: `${fire.x}%`,
            }}
          >
            <Fire width={fire.width} height={fire.height} />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex justify-center items-center ">
        <CentralBlock />
      </div>
    </div>
  );
};

export default FireScene;
