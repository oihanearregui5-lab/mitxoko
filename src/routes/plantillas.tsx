import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { PlantillaCard } from "@/components/PlantillaCard";
import { PLANTILLAS } from "@/lib/plantillas";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/plantillas")({
  component: Plantillas,
  head: () => ({
    meta: [
      { title: "Plantillas — mitxoko." },
      { name: "description", content: "Demos navegables de webs para peluquería, restaurante, cafetería, fisioterapia, clínica estética y bar." },
      { property: "og:title", content: "Plantillas — mitxoko." },
      { property: "og:description", content: "Mira cómo podría quedar la web de tu negocio." },
    ],
  }),
});

function Plantillas() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Nav />

        <section className="section-glow-light">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--granate-500)] mb-6">
              Plantillas demo
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tight max-w-4xl">
              Seis sectores, seis <span className="italic text-[color:var(--granate-500)]">rincones</span>.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--ink-900)]/75 max-w-2xl">
              Cada plantilla es una demo navegable. Pincha en una para ver cómo podría ser la web de tu negocio.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PLANTILLAS.map((p) => (
              <PlantillaCard key={p.slug} p={p} />
            ))}
          </div>
        </section>

        <CTA />
        <Footer />
      </div>
    </PageTransition>
  );
}
