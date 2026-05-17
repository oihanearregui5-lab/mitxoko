import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export interface Template {
  slug: string;
  sector: string;
  accent: string;
  overlay: string;
}

function MiniWebPreview({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 bg-background overflow-hidden">
      {/* Fake browser bar */}
      <div className="h-5 flex items-center gap-1 px-3 bg-secondary border-b border-border">
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-foreground/15" />
      </div>
      <div className="p-3.5">
        {/* Fake nav */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="h-2 w-14 rounded" style={{ background: accent }} />
          <div className="flex gap-1.5">
            <div className="h-1 w-5 bg-foreground/25 rounded" />
            <div className="h-1 w-5 bg-foreground/25 rounded" />
            <div className="h-1 w-5 bg-foreground/25 rounded" />
          </div>
        </div>
        {/* Fake hero */}
        <div className="aspect-[16/8] rounded mb-2.5 relative overflow-hidden" style={{ background: accent }}>
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.4) 100%)" }}
          />
          <div className="absolute bottom-2 left-2 h-1.5 w-16 bg-background/80 rounded" />
          <div className="absolute bottom-4 left-2 h-2.5 w-24 bg-background/90 rounded" />
        </div>
        {/* Fake titles */}
        <div className="h-1.5 w-32 bg-foreground/25 rounded mb-1.5" />
        <div className="h-1.5 w-24 bg-foreground/15 rounded mb-3" />
        {/* Fake gallery */}
        <div className="grid grid-cols-3 gap-1 mb-3">
          <div className="aspect-square bg-foreground/10 rounded" />
          <div className="aspect-square bg-foreground/8 rounded" />
          <div className="aspect-square bg-foreground/10 rounded" />
        </div>
        {/* Fake paragraph */}
        <div className="space-y-1">
          <div className="h-1 w-full bg-foreground/10 rounded" />
          <div className="h-1 w-5/6 bg-foreground/10 rounded" />
          <div className="h-1 w-4/6 bg-foreground/10 rounded" />
        </div>
        {/* Fake CTA */}
        <div className="h-4 w-14 mt-3 rounded" style={{ background: accent }} />
      </div>
    </div>
  );
}

export function TemplateCard({ t }: { t: Template }) {
  return (
    <Link to="/plantillas/$slug" params={{ slug: t.slug }} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl aspect-[4/5] border border-border"
      >
        {/* Mini website preview */}
        <MiniWebPreview accent={t.accent} />

        {/* Color overlay that lightens on hover to reveal the preview */}
        <div
          className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: t.overlay }}
        />

        {/* Top labels */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between text-white pointer-events-none">
          <div className="flex items-start justify-between">
            <span className="text-xs uppercase tracking-widest opacity-90">{t.sector}</span>
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
          <div>
            <p className="font-display text-3xl md:text-4xl leading-tight">{t.sector}</p>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 text-[10px] uppercase tracking-widest bg-background/85 text-foreground px-2 py-1 rounded">
          Plantilla demo
        </div>
      </motion.div>
      <div className="mt-4 flex items-center justify-between">
        <p className="font-display text-lg">{t.sector}</p>
        <span className="text-sm text-muted-foreground link-underline">Ver plantilla</span>
      </div>
    </Link>
  );
}

export const templates: Template[] = [
  { slug: "peluqueria",  sector: "Peluquería",       accent: "#731923", overlay: "rgba(115, 25, 35, 0.78)" },
  { slug: "restaurante", sector: "Restaurante",      accent: "#284123", overlay: "rgba(40, 65, 35, 0.78)" },
  { slug: "cafeteria",   sector: "Cafetería",        accent: "#5F3223", overlay: "rgba(95, 50, 35, 0.78)" },
  { slug: "fisio",       sector: "Fisioterapia",     accent: "#234655", overlay: "rgba(35, 70, 85, 0.78)" },
  { slug: "estetica",    sector: "Clínica estética", accent: "#5F325A", overlay: "rgba(95, 50, 90, 0.78)" },
  { slug: "bar",         sector: "Bar",              accent: "#733C28", overlay: "rgba(115, 60, 40, 0.78)" },
];
