import { useRef, useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function Magnetic({ children, className, strength = 4 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const range = Math.max(rect.width, rect.height) / 2 + 80;
      if (dist < range) {
        setPos({ x: dx / strength, y: dy / strength });
      } else {
        setPos({ x: 0, y: 0 });
      }
    };
    const onLeave = () => setPos({ x: 0, y: 0 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [enabled, strength]);

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={{ x: pos.x, y: pos.y }}
      transition={{
        type: "tween",
        duration: pos.x === 0 && pos.y === 0 ? 0.6 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ willChange: "transform", display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}
