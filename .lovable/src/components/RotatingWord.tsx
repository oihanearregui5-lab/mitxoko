import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["peluquerías", "fisios", "cafeterías", "restaurantes", "comercios"];

export function RotatingWord() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2400);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block align-baseline" style={{ minWidth: "5ch" }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          exit={{ filter: "blur(10px)", opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block italic text-[color:var(--granate-500)] font-display"
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
