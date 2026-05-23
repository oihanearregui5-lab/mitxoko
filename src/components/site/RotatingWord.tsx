import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  words: string[];
  /** ms entre cambios. Default 2400. */
  interval?: number;
  className?: string;
}

/**
 * Palabra que rota con efecto blur. Adaptada al lenguaje v3:
 * usa font-serif italic en color terracotta por defecto.
 */
export function RotatingWord({
  words,
  interval = 2400,
  className = "",
}: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words, interval]);

  // Calcula min-width basado en la palabra más larga para evitar layout shift
  const minWidth = Math.max(...words.map((w) => w.length)) + "ch";

  return (
    <span
      className="relative inline-block align-baseline"
      style={{ minWidth }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          exit={{ filter: "blur(10px)", opacity: 0, y: -12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className={`inline-block font-serif italic text-terracotta ${className}`}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
