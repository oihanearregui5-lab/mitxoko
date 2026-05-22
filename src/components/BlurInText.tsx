import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  words: (string | ReactNode)[];
  className?: string;
  delay?: number;
}

export function BlurInText({ words, className = "", delay = 0 }: Props) {
  return (
    <span className={className}>
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ filter: "blur(10px)", opacity: 0, y: 30 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}
