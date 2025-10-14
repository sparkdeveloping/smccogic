"use client";
import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  as: Tag = "div",
  children,
  delay = 0,
  y = 12,
  once = true,
  className = "",
}) {
  const reduce = useReducedMotion();
  const variants = reduce
    ? { hidden: { opacity: 1, y: 0 }, show: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } };

  return (
    <motion.div
      as={Tag}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2, once }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
