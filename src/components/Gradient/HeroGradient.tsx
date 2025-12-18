import React from "react";

interface GradientProps {
  className?: string;
}

const HeroGradient: React.FC<GradientProps> = ({ className }) => {
  return (
    <div
      className={`absolute w-full left-0 pointer-events-none -z-10 ${className}`}
      style={{
        height: "160%",
        top: "-15%",
        backgroundImage:
          "radial-gradient(circle 41rem at right, #2441FF, transparent)",
      }}
    />
  );
};

export default HeroGradient;
