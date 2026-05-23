import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.5,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const ease = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / (duration * 1000));
      setVal(Math.round(ease(p) * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {val}
      {suffix}
    </motion.span>
  );
}
