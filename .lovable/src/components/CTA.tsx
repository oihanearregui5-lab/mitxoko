import { Link } from "@tanstack/react-router";
import { SectionNumber } from "./SectionNumber";

export function CTA() {
  return (
    <section className="bg-[color:var(--granate-700)] text-[color:var(--cream-100)]">
      <div className="mx-auto max-w-5xl px-6 py-32 text-center">
        <SectionNumber n="05" className="text-[color:var(--coral-500)]/60 block mb-6" />
        <h2 className="font-display text-5xl md:text-7xl tracking-tight">
          ¿Hablamos?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-[color:var(--cream-100)]/80 max-w-2xl mx-auto">
          Cuéntame qué hace tu negocio. Te respondo el mismo día con una propuesta concreta.
        </p>
        <Link
          to="/contacto"
          className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[color:var(--cream-100)] text-[color:var(--granate-700)] text-sm tracking-wide font-medium transition-all hover:bg-[color:var(--cream-200)] group"
        >
          Pide tu presupuesto
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}
