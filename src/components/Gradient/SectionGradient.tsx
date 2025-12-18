import React from "react";

interface GradientProps {
  className?: string;
}

const SectionGradient: React.FC<GradientProps> = ({ className = "" }) => {
  return (
    <div
      className={`absolute w-full left-0 pointer-events-none -z-10 ${className}`}
      style={{
        top: "-20%",
        height: "136%",
        backgroundImage:
          "radial-gradient(ellipse 300% 49% at center, #2441FF 40%, transparent)",
      }}
    />
  );
};

export default SectionGradient;
