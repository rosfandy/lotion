"use client";
import { motion, Variants } from "framer-motion";

interface AnimatedComponentProps {
  children: React.ReactNode;
  className?: string;
  transition?: object;
  initialOpacity?: number;
  initialScale?: number;
  animateOpacity?: number;
  animateScale?: number;
}

const AnimatedDiv = ({
  children,
  className = "",
  transition = undefined,
  initialOpacity = 0,
  initialScale = 0.85,
  animateOpacity = 1,
  animateScale = 1,
}: AnimatedComponentProps) => {
  const mergedTransition = transition || {
    duration: 0.3,
    ease: "linear",
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: initialOpacity, scale: initialScale }}
      animate={{ opacity: animateOpacity, scale: animateScale }}
      transition={mergedTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
