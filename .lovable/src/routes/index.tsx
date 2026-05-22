import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BlurInText } from "@/components/BlurInText";
import { RotatingWord } from "@/components/RotatingWord";
import { Stats } from "@/components/Stats";
import { Marquee } from "@/components/Marquee";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { SectionNumber } from "@/components/SectionNumber";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "mitxoko. — Webs para comercios de Pamplona por 300 €" },
      { name: "description", content: "Webs profesionales para peluquerías, fisios, cafeterías y restaurantes de Pamplona. Una persona, no una agencia. 300 €, dos semanas." },
    ],
  }),
});

function Index() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Nav />

        {/* HERO */}
        <section className="relative hero-glow overflow-hidden">
          <div className="absolute top-12 right-12 w-10 h-10 rounded-full border border-[color:var(--granate-500)]/40 hidden md:block" />
          <div className="mx-auto max-w-7xl px-6 pt-24 md:pt-32 pb-20">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--granate-500)] mb-8">
              Estudio de diseño web · Pamplona
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] tracking-tight max-w-5xl">
              <BlurInText words={["Webs", "para"]} /> <RotatingWord />
              <br />
              <BlurInText words={["en", "Pamplona."]} delay={0.4} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 text-lg md:text-2xl text-[color:var(--ink-900)]/75 max-w-2xl leading-relaxed"
            >
              Hechas por una persona, no por una agencia. 300 €, dos semanas, y tu negocio en internet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 md:gap-6"
            >
              <Link
                to="/contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink-900)] px-7 py-3.5 text-sm font-medium text-[color:var(--cream-100)] transition-colors duration-300 hover:bg-[color:var(--granate-700)]"
              >
                Pide tu presupuesto
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                to="/plantillas"
                className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--ink-900)]/20 px-7 py-3.5 text-sm font-medium hover:bg-[color:var(--cream-200)] transition-colors duration-300"
              >
                Ver plantillas
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>

            {/* scroll indicator */}
            <div className="mt-24 hidden md:flex flex-col items-center gap-3">
              <span className="text-vertical text-[10px] uppercase tracking-[0.3em] text-[color:var(--granate-500)]">
                Scroll ↓
              </span>
              <div className="w-px h-10 bg-[color:var(--granate-500)] scroll-pulse" />
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mx-auto max-w-7xl px-6 py-20 border-t border-[color:var(--granate-500)]/10">
          <Stats />
        </section>

        {/* 01 · CÓMO TRABAJO — forest bg */}
        <section className="bg-[color:var(--forest-900)] text-[color:var(--cream-100)] diagonal-lines">
          <div className="mx-auto max-w-7xl px-6 py-32">
            <div className="mb-16">
              <span className="font-display italic text-5xl md:text-6xl text-[color:var(--coral-500)]">
                01 ·
              </span>
              <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
                Cómo trabajo
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                { n: "01", t: "Hablamos", d: "Una llamada de 20 minutos. Me cuentas tu negocio y te digo si encajamos." },
                { n: "02", t: "Diseño", d: "En una semana tienes una primera versión. Iteramos hasta que esté." },
                { n: "03", t: "Online", d: "Publicamos. Dominio, hosting y configuración. Tú no tocas nada técnico." },
              ].map((s) => (
                <div key={s.n}>
                  <p className="font-display italic text-6xl text-[color:var(--coral-500)]">
                    {s.n}
                  </p>
                  <h3 className="mt-4 font-display text-2xl text-[color:var(--cream-100)]">{s.t}</h3>
                  <p className="mt-3 text-[color:var(--cream-100)]/70 leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="bg-[color:var(--cream-200)] py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="font-display italic text-3xl md:text-5xl leading-tight text-[color:var(--ink-900)]">
              "No vendo webs. Te ayudo a poner tu negocio en internet sin que parezca que has gastado poco."
            </p>
            <div className="mt-10 flex flex-col items-center gap-3">
              <div className="w-16 h-px bg-[color:var(--granate-500)]" />
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--ink-900)]/60">
                mitxoko · pamplona
              </p>
            </div>
          </div>
        </section>

        {/* 02 · QUÉ ENTRA POR 300€ */}
        <section className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-16">
            <SectionNumber n="02" />
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
              Qué entra por 300 €
            </h2>
            <p className="mt-6 text-lg text-[color:var(--ink-900)]/75 max-w-2xl">
              Sin sorpresas, sin extras escondidos. Esto es lo que tienes el día que tu web está online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Diseño a tu medida",
              "Adaptada al móvil",
              "Conectada a Google",
              "Formulario y WhatsApp",
              "Galería de fotos",
              "Soporte personal",
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 bg-[#E8D4C4] rounded-2xl border border-[color:var(--granate-500)]/15"
              >
                <p className="font-display italic text-2xl text-[color:var(--granate-500)] mb-3">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="font-display text-xl text-[color:var(--ink-900)]">{t}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/servicios" className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-[color:var(--granate-500)] transition-colors group">
              Ver el detalle completo
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

        {/* 03 · PLANTILLAS — marquee */}
        <section className="section-glow-light py-32">
          <div className="mx-auto max-w-7xl px-6 mb-16">
            <SectionNumber n="03" />
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight max-w-3xl">
              Mira cómo podría quedar <span className="italic text-[color:var(--granate-500)]">tu negocio</span>
            </h2>
          </div>
          <Marquee />
          <div className="mx-auto max-w-7xl px-6 mt-12">
            <Link to="/plantillas" className="inline-flex items-center gap-2 text-sm tracking-wide hover:text-[color:var(--granate-500)] transition-colors group">
              Ver todas las plantillas
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

        {/* 04 · FAQ */}
        <section className="mx-auto max-w-4xl px-6 py-32">
          <div className="mb-16">
            <SectionNumber n="04" />
            <h2 className="mt-4 font-display text-4xl md:text-6xl tracking-tight">
              Lo que la gente suele preguntar
            </h2>
          </div>
          <FAQ />
        </section>

        <CTA />
        <Footer />
      </div>
    </PageTransition>
  );
}
