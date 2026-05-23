import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  word: string;
  className?: string;
  variant?: "terracotta" | "butter";
  rotate?: number;
  /** Tailwind classes for sizing. Default ~16rem desktop. */
  sizeClass?: string;
}

/**
 * HollowWord — palabra editorial outline de fondo.
 * Pensado para ir DENTRO de una <section> con position:relative + overflow:hidden.
 * Animación de parallax vertical sutil al hacer scroll.
 */
export function HollowWord({
  word,
  className = "",
  variant = "terracotta",
  rotate = 0,
  sizeClass = "text-[8rem] md:text-[16rem] lg:text-[20rem]",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className={`hollow-text ${variant === "butter" ? "hollow-text-butter" : ""} absolute z-0 whitespace-nowrap ${sizeClass} ${className}`}
      aria-hidden
    >
      {word}
    </motion.div>
  );
}
