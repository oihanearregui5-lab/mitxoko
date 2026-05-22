import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ServicesList } from "@/components/ServicesList";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/servicios")({
  component: Servicios,
  head: () => ({
    meta: [
      { title: "Servicios — mitxoko." },
      { name: "description", content: "Qué incluye una web de mitxoko por 300 €. Diseño, móvil, SEO básico, formulario, galería y soporte." },
      { property: "og:title", content: "Servicios — mitxoko." },
      { property: "og:description", content: "Qué incluye una web de mitxoko por 300 €." },
    ],
  }),
});

function Servicios() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Nav />

        <section className="hero-glow">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--granate-500)] mb-6">
              Servicios
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tight max-w-4xl">
              Una web profesional, <span className="italic text-[color:var(--granate-500)]">completa</span>, por 300 €.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--ink-900)]/75 max-w-2xl">
              Esto es todo lo que entra. Sin asteriscos, sin extras a la hora de pagar.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-32">
          <ServicesList />
        </section>

        <CTA />
        <Footer />
      </div>
    </PageTransition>
  );
}
