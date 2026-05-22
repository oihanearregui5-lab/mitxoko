import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const items = [
  { num: <><AnimatedCounter to={300} /> €</>, label: "Precio cerrado" },
  { num: <><AnimatedCounter to={2} duration={0.8} /> sem.</>, label: "De diseño a online" },
  { num: <><AnimatedCounter to={1} duration={0.6} /> mes</>, label: "Soporte incluido" },
  { num: "Iruñea", label: "Hecho en Pamplona" },
];

export function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-4xl md:text-6xl text-[color:var(--ink-900)] tracking-tight">
            {it.num}
          </p>
          <p className="mt-3 text-xs uppercase tracking-widest text-[color:var(--ink-900)]/60">
            {it.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
