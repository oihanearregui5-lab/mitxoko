import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Plantilla } from "@/lib/plantillas";
import { MiniSitePreview } from "./MiniSitePreview";

export function PlantillaCard({ p }: { p: Plantilla }) {
  return (
    <Link
      to="/plantillas/$sector"
      params={{ sector: p.slug }}
      className="group block"
    >
      <motion.article
        whileHover={{ y: -6, scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[color:var(--cream-200)] border border-[color:var(--granate-500)]/10"
      >
        <MiniSitePreview p={p} />

        {/* overlay color */}
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: p.overlay, opacity: 0.7 }}
        />

        {/* labels */}
        <div className="relative h-full p-6 flex flex-col justify-between text-[color:var(--cream-100)]">
          <div className="flex items-start justify-between">
            <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-[color:var(--cream-100)]/40 rounded-full">
              Plantilla demo
            </span>
            <ArrowUpRight
              size={20}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl transition-transform duration-500 group-hover:translate-y-1">
              {p.label}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              Ver demo →
            </p>
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
