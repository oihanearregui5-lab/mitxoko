import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export function RotatingWord({ words }: { words: readonly string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="relative inline-block align-baseline">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ y: "60%", opacity: 0, rotateX: -40 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          exit={{ y: "-60%", opacity: 0, rotateX: 40 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block italic text-primary"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}