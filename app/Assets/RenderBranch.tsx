import React from "react";
import { motion } from "framer-motion";

interface Point {
  x: number;
  y: number;
}

export interface Branch {
  points: Point[];
  children: Branch[];
}

const renderBranch = (branch: Branch, strokeColor: string): JSX.Element[] => {
  const branchElements: JSX.Element[] = [];
  const pathDefinition = `M ${branch.points
    .map((p) => `${p.x},${p.y}`)
    .join(" L ")}`;

  branchElements.push(
    <motion.path
      key={pathDefinition}
      d={pathDefinition}
      stroke={strokeColor}
      strokeWidth="3"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    />
  );

  branch.children.forEach((childBranch, index) => {
    branchElements.push(
      ...renderBranch(childBranch, strokeColor).map((element) =>
        React.cloneElement(element, {
          key: `${pathDefinition}-${index}-${element.key}`,
          strokeWidth: "2",
          stroke: strokeColor,
        })
      )
    );
  });

  return branchElements;
};

export default renderBranch;
