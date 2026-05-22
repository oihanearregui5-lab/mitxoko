import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/sobre-mi")({
  component: SobreMi,
  head: () => ({
    meta: [
      { title: "Sobre mitxoko — Una persona, no una agencia" },
      { name: "description", content: "Mitxoko es una persona haciendo webs para comercios de Pamplona. Sin intermediarios, sin contratos largos, sin sorpresas." },
      { property: "og:title", content: "Sobre mitxoko" },
      { property: "og:description", content: "Una persona, no una agencia." },
    ],
  }),
});

function SobreMi() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Nav />

        <section className="hero-glow">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--granate-500)] mb-6">
              Sobre mitxoko
            </p>
            <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight tracking-tight max-w-4xl">
              Detrás de mitxoko hay una <span className="italic text-[color:var(--granate-500)]">persona</span>, no una agencia.
            </h1>
            <p className="mt-8 text-lg md:text-2xl text-[color:var(--ink-900)]/75 max-w-3xl">
              Sin equipos comerciales, sin reuniones de tres personas, sin departamentos. Hablas con quien te diseña la web.
            </p>
          </div>
        </section>

        {/* Bloque txoko tipográfico */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="relative aspect-[4/5] md:aspect-[16/9] rounded-3xl overflow-hidden bg-[color:var(--granate-500)] flex items-center justify-center">
            <div className="absolute top-6 left-6 text-xs uppercase tracking-[0.3em] text-[color:var(--cream-100)]/40">
              N.º 01 / TXOKO
            </div>
            <div className="absolute top-6 right-6 text-xs uppercase tracking-[0.3em] text-[color:var(--cream-100)]/40">
              2026
            </div>
            <p
              className="font-display italic text-[color:var(--coral-500)] leading-none"
              style={{ fontSize: "clamp(5rem, 18vw, 16rem)" }}
            >
              txoko
            </p>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.3em] text-[color:var(--cream-100)]/60">
              <span>rincón · euskera</span>
              <div className="flex-1 mx-6 h-px bg-[color:var(--cream-100)]/30" />
              <span>pamplona</span>
            </div>
          </div>
        </section>

        {/* Cuerpo */}
        <section className="mx-auto max-w-3xl px-6 py-20 space-y-12">
          {[
            "Mitxoko nace de una observación sencilla. La mayoría de pequeños comercios de Pamplona no tienen web. O tienen una hecha hace diez años que ya no funciona en el móvil. Y cuando piden presupuesto a una agencia, les dicen 1.500 € o 2.000 €. Es lógico que digan que no.",
            "Tu negocio merece algo mejor que eso. Mereces una web que represente lo que haces, que se vea bien en el móvil de tus clientes, y que no te cueste el sueldo de un mes. Mereces que te respondan al WhatsApp cuando preguntes algo. Mereces hablar siempre con la misma persona, no con un comercial distinto cada vez.",
            "Mitxoko es eso. Una persona haciendo webs para comercios de Pamplona. Sin intermediarios, sin contratos largos, sin sorpresas. 300 €, dos semanas, y tu negocio en internet.",
            "Si tu txoko es una peluquería de barrio, un fisio, una cafetería de especialidad o un restaurante familiar, da igual. Lo importante no es el nuestro, es el tuyo. Cuéntanos qué hace especial a tu negocio y construimos su rincón digital.",
          ].map((p, i) => (
            <p key={i} className="font-display text-2xl md:text-3xl leading-snug text-[color:var(--ink-900)]">
              {p}
            </p>
          ))}

          <div className="pt-8">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink-900)] px-7 py-3.5 text-sm font-medium text-[color:var(--cream-100)] hover:bg-[color:var(--granate-700)] transition-colors"
            >
              Cuéntame de tu txoko
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>

        {/* Manifiesto */}
        <section className="bg-[color:var(--granate-700)] text-[color:var(--cream-100)] diagonal-lines">
          <div className="mx-auto max-w-7xl px-6 py-32">
            <h2 className="font-display text-4xl md:text-6xl mb-16 max-w-3xl">
              Cómo entiendo este trabajo
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { n: "01", t: "Una persona, no una agencia.", d: "Hablas siempre conmigo. Sin pasar por cuatro departamentos." },
                { n: "02", t: "Sin sorpresas.", d: "Lo que entra, lo que no entra, y el precio. Todo claro desde el primer día." },
                { n: "03", t: "De aquí.", d: "Mitxoko es de Pamplona. Conozco la zona, entiendo a los comercios de aquí." },
              ].map((it) => (
                <div key={it.n}>
                  <p className="font-display italic text-6xl text-[color:var(--coral-500)]">
                    {it.n} ·
                  </p>
                  <h3 className="mt-4 font-display text-2xl">{it.t}</h3>
                  <p className="mt-3 text-[color:var(--cream-100)]/75 leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </div>
    </PageTransition>
  );
}
