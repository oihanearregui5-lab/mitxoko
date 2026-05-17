import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { FinalCta } from "@/components/site/FinalCta";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mitxoko — Detrás de la marca" },
      {
        name: "description",
        content:
          "Detrás de mitxoko hay una persona, no una agencia. Sin equipos comerciales, sin reuniones de tres personas. Hablas con quien te diseña la web.",
      },
      { property: "og:title", content: "Sobre mitxoko" },
      { property: "og:url", content: "/sobre-mi" },
    ],
    links: [{ rel: "canonical", href: "/sobre-mi" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Sobre mitxoko
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02]">
              Detrás de mitxoko hay <span className="italic text-primary">una persona</span>, no una agencia.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Sin equipos comerciales, sin reuniones de tres personas, sin departamentos. Hablas con quien te diseña la web.
            </p>
          </Reveal>

          {/* Composición tipográfica editorial — sustituye a la foto */}
          <Reveal delay={0.15}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] bg-primary text-primary-foreground relative overflow-hidden rounded-2xl flex items-center justify-center"
            >
              <span className="absolute top-5 left-5 text-xs tracking-widest text-primary-foreground/40">
                N.º 01 / TXOKO
              </span>
              <span className="absolute top-5 right-5 text-xs tracking-widest text-primary-foreground/40">
                2026
              </span>
              <span className="font-display italic text-[clamp(5rem,18vw,12rem)] leading-none text-accent select-none">
                txoko
              </span>
              <span className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs text-primary-foreground/40">
                <span>rincón · euskera</span>
                <span className="w-12 h-px bg-primary-foreground/30" />
                <span>pamplona</span>
              </span>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* CUERPO */}
      <section className="mx-auto max-w-3xl px-6 lg:px-10 py-20 space-y-8 font-display">
        {[
          "Mitxoko nace de una observación sencilla. La mayoría de pequeños comercios de Pamplona no tienen web. O tienen una hecha hace diez años que ya no funciona en el móvil. Y cuando piden presupuesto a una agencia, les dicen 1.500€ o 2.000€. Es lógico que digan que no.",
          "Tu negocio merece algo mejor que eso. Mereces una web que represente lo que haces, que se vea bien en el móvil de tus clientes, y que no te cueste el sueldo de un mes. Mereces que te respondan al WhatsApp cuando preguntes algo. Mereces hablar siempre con la misma persona, no con un comercial distinto cada vez.",
          "Mitxoko es eso. Una persona haciendo webs para comercios de Pamplona. Sin intermediarios, sin contratos largos, sin sorpresas. 300€, dos semanas, y tu negocio en internet.",
          "Si tu txoko es una peluquería de barrio, un fisio, una cafetería de especialidad o un restaurante familiar, da igual. Lo importante no es el nuestro, es el tuyo. Cuéntanos qué hace especial a tu negocio y construimos su rincón digital.",
        ].map((p, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <p className="text-2xl md:text-3xl leading-[1.35] font-normal">{p}</p>
          </Reveal>
        ))}

        <Reveal delay={0.2}>
          <div className="pt-6">
            <Link
              to="/contacto"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-full hover:bg-primary transition-colors font-sans text-sm"
            >
              Cuéntame de tu txoko
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* MANIFIESTO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12">
            Manifiesto
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["01", "Una persona, no una agencia.", "Hablas siempre conmigo. Sin pasar por cuatro departamentos."],
            ["02", "Sin sorpresas.", "Lo que entra, lo que no entra, y el precio. Todo claro desde el primer día."],
            ["03", "De aquí.", "mitxoko es de Pamplona. Conozco la zona, entiendo a los comercios de aquí."],
          ].map(([n, title, body], i) => (
            <Reveal key={n} delay={i * 0.08}>
              <div className="border-t border-border pt-8">
                <span className="font-display italic text-5xl text-primary/60">{n} ·</span>
                <h3 className="mt-6 font-display text-2xl">{title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}
