"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
} & Pick<
  MotionProps,
  "initial" | "animate" | "whileInView" | "viewport" | "transition"
>;

export function AnimatedSection({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
}: Props) {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
