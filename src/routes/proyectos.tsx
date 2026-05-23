import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos · mitxoko." },
      { name: "description", content: "Proyectos reales de mitxoko. Los primeros clientes verán aquí sus webs en cuanto se publiquen." },
      { property: "og:title", content: "Proyectos · mitxoko." },
      { property: "og:url", content: "/proyectos" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
  component: Proyectos,
});

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function Proyectos() {
  return (
    <PageTransition>
      <div>
        <section className="px-6 lg:px-10 py-24 md:py-32 max-w-7xl mx-auto">
          <motion.p
            {...fade}
            className="text-xs tracking-widest text-[color:var(--ink-900)]/50 mb-4"
          >
            PROYECTOS
          </motion.p>
          <motion.h1
            {...fade}
            className="font-display text-5xl md:text-7xl text-[color:var(--ink-900)] leading-[1.05] max-w-4xl"
          >
            Proyectos reales{" "}
            <span className="italic text-[color:var(--granate-500)]">
              (en construcción)
            </span>
            .
          </motion.h1>
          <motion.p
            {...fade}
            className="mt-8 text-lg text-[color:var(--ink-900)]/65 max-w-2xl"
          >
            Estoy empezando. Mis primeros clientes están viendo el resultado y
            sus webs aparecerán aquí en cuanto estén publicadas. Mientras tanto,
            échale un ojo a las plantillas para hacerte una idea del estilo.
          </motion.p>

          <motion.div {...fade} className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/plantillas"
              className="group inline-flex items-center gap-2 bg-[color:var(--ink-900)] text-[color:var(--cream-100)] px-7 py-3.5 rounded-full hover:bg-[color:var(--granate-500)] transition-colors"
            >
              Ver plantillas{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-[color:var(--ink-900)] underline underline-offset-4 decoration-[color:var(--granate-500)]/40 hover:decoration-[color:var(--granate-500)] transition-colors"
            >
              ¿Quieres ser el primero? <ArrowRight size={14} />
            </Link>
          </motion.div>
        </section>

        <section className="px-6 lg:px-10 py-24 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Proyecto 01 — GV Foto (real) */}
            <motion.a
              href="https://gvfoto.com"
              target="_blank"
              rel="noopener noreferrer"
              {...fade}
              className="group aspect-[4/5] rounded-lg overflow-hidden relative bg-[color:var(--ink-900)] block"
            >
              {/* Preview iframe del proyecto real */}
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src="https://gvfoto.com"
                  title="GV Foto — Portfolio fotográfico"
                  className="w-[200%] h-[200%] origin-top-left scale-50 pointer-events-none border-0"
                  loading="lazy"
                />
              </div>
              {/* Overlay con info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink-900)] via-[color:var(--ink-900)]/40 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-[color:var(--cream-100)]">
                <div className="flex items-start justify-between">
                  <span className="font-display italic text-3xl text-[color:var(--cream-100)]/80">
                    01
                  </span>
                  <ExternalLink
                    size={18}
                    className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>
                <div>
                  <p className="text-xs tracking-widest opacity-70 mb-2">
                    PORTFOLIO FOTOGRÁFICO
                  </p>
                  <h3 className="font-display text-3xl leading-tight">
                    GV Foto
                  </h3>
                  <p className="mt-2 text-sm opacity-70">gvfoto.com</p>
                </div>
              </div>
            </motion.a>

            {/* Proyectos 02 y 03 — Próximamente */}
            {[2, 3].map((i) => (
              <motion.div
                key={i}
                {...fade}
                className="aspect-[4/5] rounded-lg border border-dashed border-[color:var(--granate-500)]/20 bg-[color:var(--cream-200)]/50 flex flex-col items-center justify-center text-center p-8"
              >
                <span className="font-display italic text-5xl text-[color:var(--granate-500)]/40">
                  0{i}
                </span>
                <p className="mt-4 text-[color:var(--ink-900)]/40 text-sm">
                  Próximamente
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
