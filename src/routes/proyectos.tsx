import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos · mitxoko" },
      {
        name: "description",
        content:
          "Proyectos reales de mitxoko. Webs publicadas para comercios de Pamplona y alrededores.",
      },
      { property: "og:title", content: "Proyectos · mitxoko" },
      { property: "og:url", content: "/proyectos" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
  component: Proyectos,
});

function Proyectos() {
  return (
    <div className="bg-paper text-ink min-h-screen">
      <Nav />

      <main>
        {/* HERO */}
        <section className="paper-grain relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full"
            style={{
              background:
                "radial-gradient(closest-side, color-mix(in oklab, var(--butter) 55%, transparent), transparent 70%)",
            }}
          />
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-16 pb-20 md:pt-24 md:pb-28">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
                [ Proyectos ]
              </p>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="mt-6 font-serif text-[12vw] leading-[0.98] tracking-[-0.02em] text-ink md:text-[6.5rem] lg:text-[8rem] max-w-[14ch]">
                Lo que <em className="italic text-terracotta">ya está</em> en
                internet.
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p className="mt-10 max-w-[58ch] text-[17px] leading-[1.55] text-ink/75">
                Aquí van apareciendo los proyectos a medida que se publican.
                Webs reales, con clientes reales. Si quieres ver el estilo de
                lo que hago todavía sin clientes propios, échale un ojo a las
                plantillas.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Link
                  to="/plantillas"
                  className="inline-flex items-center gap-3 rounded-full bg-moss px-6 py-3.5 text-[14px] text-paper transition-all hover:bg-moss/90 hover:-translate-y-[2px]"
                >
                  Ver plantillas <span aria-hidden>→</span>
                </Link>
                <Link to="/contacto" className="group relative text-[14px] text-ink">
                  ¿Quieres ser el siguiente?
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink/40 transition-all group-hover:bg-ink" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* GRID DE PROYECTOS */}
        <section className="paper-grain bg-paper py-16 md:py-24 border-t border-ink/10">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Proyecto 01 — GV Foto (real) */}
              <StaggerItem>
                <a
                  href="https://gvfoto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block aspect-[4/5] rounded-lg overflow-hidden relative bg-ink border border-ink/15 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(26,26,26,0.5)]"
                >
                  {/* Preview iframe del proyecto */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <iframe
                      src="https://gvfoto.com"
                      title="GV Foto — Portfolio fotográfico"
                      className="w-[200%] h-[200%] origin-top-left scale-50 border-0"
                      loading="lazy"
                    />
                  </div>
                  {/* Overlay degradado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                  {/* Contenido */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-paper">
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-5xl text-paper/80">
                        01
                      </span>
                      <ArrowUpRight
                        className="h-5 w-5 opacity-70 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
                        Portfolio fotográfico
                      </p>
                      <h3 className="mt-2 font-serif text-3xl leading-tight">
                        GV Foto
                      </h3>
                      <p className="mt-1 font-mono text-[11px] opacity-60">
                        gvfoto.com
                      </p>
                    </div>
                  </div>
                </a>
              </StaggerItem>

              {/* Proyectos 02 y 03 — Próximamente */}
              {["02", "03"].map((n) => (
                <StaggerItem key={n}>
                  <div className="aspect-[4/5] rounded-lg border border-dashed border-ink/25 p-6 flex flex-col">
                    <span className="font-mono text-5xl text-ink/25">{n}</span>
                    <p className="mt-auto font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                      Próximamente
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CTA suave al final */}
        <section className="paper-grain bg-sand/50 py-20 md:py-28">
          <div className="mx-auto max-w-[1100px] px-6 md:px-10">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl text-ink max-w-[22ch] leading-[1.05]">
                ¿<em className="italic text-terracotta">El tuyo</em> en el
                siguiente hueco?
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 max-w-[58ch] text-[16px] text-ink/70 leading-relaxed">
                Si estás pensándolo, escríbeme. Una llamada de veinte minutos,
                sin compromiso. Si encajamos, en dos semanas tu negocio está
                online.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <Link
                to="/contacto"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3.5 text-[14px] text-paper transition-all hover:bg-ink/85 hover:-translate-y-[2px]"
              >
                Hablamos <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
