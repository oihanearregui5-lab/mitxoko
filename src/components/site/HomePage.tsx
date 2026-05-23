import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Scissors,
  Coffee,
  HeartPulse,
  Wine,
  Sparkles,
  UtensilsCrossed,
  ArrowUpRight,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Marquee } from "@/components/site/Marquee";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="paper-grain relative overflow-hidden">
      {/* warm light from top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-40 h-[700px] w-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--butter) 55%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.55fr_1fr] md:gap-16 md:px-10 md:pb-32 md:pt-24">
        {/* LEFT */}
        <div>
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
              Est. 2026 · Iruñea — Pamplona
            </p>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="mt-8 font-serif text-[14vw] leading-[0.95] tracking-[-0.02em] text-ink md:text-[7.2rem] lg:text-[8.6rem]">
              Webs para{" "}
              <em className="text-terracotta font-serif italic">comercios</em>{" "}
              que{" "}
              <em className="text-terracotta font-serif italic">trabajan</em>{" "}
              con sus{" "}
              <em className="text-terracotta font-serif italic">manos</em>.
            </h1>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-10 max-w-[52ch] text-[17px] leading-[1.55] text-ink/75">
              Una persona, dos semanas, trescientos euros. Sin cuotas. Sin
              agencias. Sin chatbots respondiéndote a las once.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-3 rounded-full bg-moss px-6 py-3.5 text-[14px] text-paper transition-all hover:bg-moss/90 hover:-translate-y-[2px]"
              >
                Cuéntame tu negocio <span aria-hidden>→</span>
              </Link>
              <Link
                to="/proceso"
                className="group relative text-[14px] text-ink"
              >
                Ver cómo trabajo
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-ink/40 transition-all group-hover:bg-ink" />
              </Link>
            </div>
          </Reveal>
        </div>

        {/* RIGHT — vertical stat column */}
        <Reveal delay={2} className="md:pl-8 md:border-l md:border-ink/15">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
            « Precio »
          </p>
          <div className="mt-2 flex items-start font-mono leading-none">
            <Counter
              to={300}
              className="text-[120px] md:text-[160px] tracking-tight text-ink font-medium"
            />
            <span className="mt-4 text-4xl md:text-5xl text-terracotta">€</span>
          </div>
          <p className="-mt-1 max-w-[22ch] text-[15px] text-ink/70 leading-snug">
            Precio cerrado. Nunca más.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-ink/15 pt-6">
            <div>
              <div className="font-serif text-3xl md:text-4xl text-ink">
                14 días
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                Entrega media
              </p>
            </div>
            <div>
              <div className="font-serif text-3xl md:text-4xl text-ink">
                1 persona
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                Yo, sin equipos
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SECTORS ---------------- */
const SECTORS = [
  { icon: Scissors, verb: "Corta el pelo", label: "Peluquerías · 12 plantillas", bg: "bg-sand" },
  { icon: Coffee, verb: "Sirve café", label: "Cafeterías · 8 plantillas", bg: "bg-butter/55" },
  { icon: HeartPulse, verb: "Cura tu espalda", label: "Fisios · 9 plantillas", bg: "bg-sand" },
  { icon: Wine, verb: "Pone copas", label: "Bares · 7 plantillas", bg: "bg-butter/55" },
  { icon: Sparkles, verb: "Cuida tu piel", label: "Estética · 11 plantillas", bg: "bg-sand" },
  { icon: UtensilsCrossed, verb: "Cocina para ti", label: "Restaurantes · 14 plantillas", bg: "bg-butter/55" },
];

function Sectors() {
  return (
    <section className="paper-grain bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-7xl text-ink max-w-[18ch] leading-[1.02]">
            <em className="italic text-terracotta">Hago webs para</em> gente que
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {SECTORS.map((s) => {
            const Icon = s.icon;
            return (
              <StaggerItem key={s.verb}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className={`group relative h-full rounded-lg ${s.bg} p-7 border border-ink/8 cursor-pointer transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(26,26,26,0.35)]`}
                >
                  <Icon
                    className="h-7 w-7 text-ink stroke-[1.4]"
                    aria-hidden
                  />
                  <h3 className="mt-12 font-serif text-3xl text-ink leading-tight">
                    {s.verb}
                  </h3>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/55">
                    {s.label}
                  </p>
                  <ArrowUpRight
                    aria-hidden
                    className="absolute right-5 top-5 h-4 w-4 text-ink/40 transition-all group-hover:text-terracotta group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </motion.div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- MANIFESTO ---------------- */
const MANIFESTO = [
  {
    n: "01",
    text: (
      <>
        Una web no es una <strong className="font-semibold">tarjeta</strong> de
        visita. Es la <strong className="font-semibold">puerta</strong> de tu
        negocio.
      </>
    ),
  },
  {
    n: "02",
    text: (
      <>
        No vendo plantillas. Vendo{" "}
        <strong className="font-semibold">tiempo</strong>. El mío, dedicado al
        tuyo.
      </>
    ),
  },
  {
    n: "03",
    text: (
      <>
        Si tu cliente no entiende tu web en{" "}
        <strong className="font-semibold">diez segundos</strong>, no es tu
        cliente.
      </>
    ),
  },
];

function Manifesto() {
  return (
    <section className="paper-grain bg-night text-paper py-28 md:py-36 relative">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-butter">
            [ Manifiesto · 2026 ]
          </p>
        </Reveal>

        <div className="mt-16 space-y-16">
          {MANIFESTO.map((m, i) => (
            <Reveal key={m.n} delay={i}>
              <div className="grid gap-6 md:grid-cols-[120px_1fr] md:gap-12">
                <div className="font-mono text-[13px] tracking-wider text-butter pt-3">
                  {m.n} —
                </div>
                <p className="font-serif italic text-3xl leading-[1.25] md:text-[2.85rem] md:leading-[1.2] text-paper">
                  {m.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", title: "Hablamos", desc: "Te cuento, me cuentas. Sin formularios, sin venderte nada.", time: "Día 1" },
    { n: "02", title: "Diseño", desc: "Maqueto, escribo, ajusto con tu feedback. Vas viendo según avanza.", time: "Días 2 — 10" },
    { n: "03", title: "Publicamos", desc: "Web en línea, dominio activo, te enseño a usarla. Y listo.", time: "Días 11 — 14" },
  ];
  return (
    <section className="paper-grain bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-7xl text-ink">
            <em className="italic text-terracotta">Cómo trabajo</em>, paso a paso.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          {/* dotted progress line */}
          <svg
            aria-hidden
            className="absolute left-0 right-0 top-[60px] hidden md:block"
            height="2"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              className="draw-line"
              x1="0"
              y1="1"
              x2="1000"
              y2="1"
              stroke="var(--terracotta)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
            />
          </svg>

          <Stagger className="grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="font-mono text-[80px] md:text-[110px] leading-none text-terracotta font-medium">
                  {s.n}
                </div>
                <h3 className="mt-6 font-serif text-3xl text-ink">{s.title}</h3>
                <p className="mt-3 max-w-[28ch] text-[15px] text-ink/70 leading-relaxed">
                  {s.desc}
                </p>
                <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.18em] text-stone">
                  {s.time}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INCLUYE (Qué entra por 300€) ---------------- */
const INCLUYE = [
  { n: "01", title: "Diseño a tu medida", desc: "Cada web se diseña a partir de una plantilla refinada que personalizo para tu negocio." },
  { n: "02", title: "Adaptada al móvil", desc: "La mitad de tus clientes te van a buscar desde el móvil. Tu web se ve perfecta en cualquier pantalla." },
  { n: "03", title: "Conectada a Google", desc: "Configuración SEO básica para que Google encuentre tu negocio cuando alguien lo busque." },
  { n: "04", title: "Formulario y WhatsApp", desc: "Tus clientes pueden contactarte de forma directa, sin descargar nada ni registrarse." },
  { n: "05", title: "Galería de fotos", desc: "Hasta 15 fotos optimizadas para que tu local se vea profesional y rápido." },
  { n: "06", title: "Soporte personal", desc: "Un mes de cambios gratis tras la entrega. Y siempre hablas conmigo, no con un comercial." },
];

function Incluye() {
  return (
    <section className="paper-grain bg-paper py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
            [ Qué entra por 300€ ]
          </p>
          <h2 className="mt-3 font-serif text-5xl md:text-7xl text-ink max-w-[24ch] leading-[1.02]">
            <em className="italic text-terracotta">Todo</em> lo que entra. Sin
            extras escondidos.
          </h2>
          <p className="mt-6 max-w-[58ch] text-[16px] text-ink/70 leading-relaxed">
            Esto es lo que tienes el día que tu web está publicada. Sin
            asteriscos, sin extras a la hora de pagar.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {INCLUYE.map((item) => (
            <StaggerItem key={item.n}>
              <div className="group h-full rounded-lg bg-sand/60 p-7 border border-ink/8 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(26,26,26,0.35)]">
                <div className="font-mono text-[40px] leading-none text-terracotta font-medium">
                  {item.n}
                </div>
                <h3 className="mt-6 font-serif text-2xl text-ink leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] text-ink/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- TEMPLATES ---------------- */
const TEMPLATES = [
  { n: "01", sector: "Peluquería", color: "oklch(0.88 0.04 20)" },
  { n: "02", sector: "Cafetería", color: "oklch(0.82 0.06 60)" },
  { n: "03", sector: "Fisio", color: "oklch(0.86 0.05 180)" },
  { n: "04", sector: "Bar", color: "oklch(0.78 0.07 30)" },
  { n: "05", sector: "Estética", color: "oklch(0.9 0.04 350)" },
  { n: "06", sector: "Restaurante", color: "oklch(0.78 0.07 120)" },
];

function Templates() {
  return (
    <section className="paper-grain bg-paper py-24 md:py-32 border-t border-ink/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-7xl text-ink max-w-[22ch] leading-[1.02]">
            <em className="italic text-terracotta">Seis tipos</em> de negocio,
            seis <em className="italic text-terracotta">rincones</em>.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t) => (
            <StaggerItem key={t.n}>
              <Link
                to="/plantillas"
                className="group relative block aspect-[4/5] overflow-hidden rounded-xl p-6"
                style={{ backgroundColor: t.color }}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70">
                  Plantilla · {t.n}
                </span>

                {/* faux laptop mock */}
                <motion.div
                  className="absolute left-1/2 top-[42%] w-[78%] -translate-x-1/2 -translate-y-1/2"
                  whileHover={{ rotateX: 6, rotateY: -4 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d", perspective: 800 }}
                >
                  <div className="rounded-md bg-ink/85 p-1.5 shadow-2xl">
                    <div className="rounded-sm bg-paper aspect-[16/10] p-2 flex flex-col gap-1.5">
                      <div className="flex gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-ink/20" />
                      </div>
                      <div className="mt-1 h-1.5 w-2/3 rounded-sm bg-ink/70" />
                      <div className="h-1 w-1/2 rounded-sm bg-ink/25" />
                      <div className="mt-auto grid grid-cols-3 gap-1">
                        <div className="aspect-square rounded-sm" style={{ backgroundColor: t.color }} />
                        <div className="aspect-square rounded-sm bg-ink/15" />
                        <div className="aspect-square rounded-sm" style={{ backgroundColor: t.color }} />
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto h-1 w-[110%] -translate-x-[5%] rounded-b-lg bg-ink/85" />
                </motion.div>

                <div className="absolute inset-x-6 bottom-6 flex items-end justify-between">
                  <h3 className="font-serif text-3xl text-ink leading-none">
                    {t.sector}
                  </h3>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper transition-transform group-hover:rotate-45">
                    →
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------------- TRABAJO (proyectos reales) ---------------- */
function Trabajo() {
  return (
    <section className="paper-grain bg-sand/50 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-stone">
            [ El trabajo ]
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-6xl text-ink max-w-[28ch] leading-[1.05]">
            Lo que <em className="italic text-terracotta">ya está</em> en
            internet.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-3">
          {/* Proyecto 01 — GV Foto (real) */}
          <StaggerItem>
            <a
              href="https://gvfoto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group block aspect-[4/3] rounded-lg overflow-hidden relative bg-ink border border-ink/15 transition-shadow hover:shadow-[0_24px_60px_-30px_rgba(26,26,26,0.5)]"
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
                  <span className="font-mono text-5xl text-paper/80">01</span>
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
              <div className="aspect-[4/3] rounded-lg border border-dashed border-ink/25 p-6 flex flex-col">
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
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  {
    q: "¿Por qué solo 300 €? ¿No hay letra pequeña?",
    a: "Trabajo solo. Sin oficina, sin comerciales, sin intermediarios. Reutilizo plantillas refinadas que adapto a cada negocio. El precio incluye diseño, hosting el primer año, dominio y un mes de cambios.",
  },
  {
    q: "¿Cuánto tarda?",
    a: "Dos semanas desde que me envías tus fotos y textos. Si tienes prisa, una semana extra de pago.",
  },
  {
    q: "¿Qué pasa si quiero cambiar algo después?",
    a: "El primer mes está incluido. Después, 30 € por cambio puntual o 15 €/mes por mantenimiento ilimitado.",
  },
  {
    q: "¿Y si no me gusta el resultado?",
    a: "Hago una primera propuesta a los 7 días. Si no te encaja, ajustamos. Si después de dos rondas no estamos en el mismo sitio, te devuelvo el 50 %.",
  },
  {
    q: "¿Tengo que escribir los textos yo?",
    a: "Te paso un guion sencillo con lo que necesito. Si prefieres que los escriba yo, son 80 € extra.",
  },
  {
    q: "¿Hablas castellano y euskera?",
    a: "Sí. La web puede ser bilingüe sin coste extra si me pasas las dos versiones.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="paper-grain bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <Reveal>
          <h2 className="font-serif text-5xl md:text-7xl text-ink">
            <em className="italic text-terracotta">Preguntas</em> que me hacen.
          </h2>
        </Reveal>

        <div className="mt-16">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q}>
                <div className="border-t border-ink/15 last:border-b">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-terracotta"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                      {f.q}
                    </span>
                    <span className="font-mono text-terracotta shrink-0">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-8 pr-12 max-w-[68ch] text-[16px] leading-[1.65] text-ink/75">
                      {f.a}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BIG CTA ---------------- */
function BigCTA() {
  return (
    <section className="paper-grain bg-butter py-28 md:py-40 relative">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="font-serif text-[12vw] leading-[0.95] md:text-[7rem] text-ink">
            ¿<em className="italic text-terracotta">Cuándo</em> abrimos la{" "}
            <em className="italic text-terracotta">puerta</em> de tu negocio?
          </h2>
        </Reveal>

        <Reveal delay={1}>
          <Link
            to="/contacto"
            className="mt-12 inline-flex items-center gap-3 rounded-full bg-ink px-10 py-5 text-lg text-paper transition-all hover:bg-ink/85 hover:-translate-y-[2px]"
          >
            Escríbeme <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/65">
            Respondo en menos de 24h · Siempre yo · No hay formularios automáticos
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
export function HomePage() {
  return (
    <div className="bg-paper text-ink min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Marquee text="MITXOKO · TU RINCÓN EN INTERNET · DESDE PAMPLONA" />
        <Sectors />
        <Manifesto />
        <Process />
        <Incluye />
        <Templates />
        <Trabajo />
        <FAQ />
        <BigCTA />
      </main>
      <Footer />
    </div>
  );
}
