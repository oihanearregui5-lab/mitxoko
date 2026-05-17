import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — mitxoko · 300 € por una web profesional" },
      { name: "description", content: "Qué entra y qué no entra en una web de 300 €. Servicios adicionales: euskera, reservas, tienda online, mantenimiento." },
      { property: "og:title", content: "Servicios — mitxoko" },
      { property: "og:description", content: "Un solo precio. Todo lo que necesita un comercio para empezar en la web." },
      { property: "og:url", content: "/servicios" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServicesPage,
});

const incluye = [
  ["Hasta 5 secciones", "Inicio, Servicios, Sobre nosotros, Galería, Contacto. Las que tu negocio necesite."],
  ["Adaptada al móvil", "Más de la mitad de tus visitas serán desde el teléfono. Tu web funcionará perfecta."],
  ["Formulario y WhatsApp", "Para que tus clientes te escriban en un clic, sin fricción."],
  ["Google Maps", "Ubicación integrada con cómo llegar y horarios."],
  ["Hasta 15 fotos", "Optimizadas para que la web cargue rápido sin perder calidad."],
  ["SEO básico", "Configurada para que Google la encuentre desde el primer día."],
  ["Aviso legal y cookies", "Cumpliendo normativa, sin tener que preocuparte."],
  ["1 mes de cambios gratis", "Tras la entrega, cualquier cambio pequeño sin coste."],
  ["Soporte por WhatsApp", "Hablas directamente conmigo. Sin tickets ni intermediarios."],
];

const noIncluye = [
  "Dominio (lo pagas tú, ~10–15 €/año)",
  "Logotipo o diseño de marca (te recomiendo dónde)",
  "Fotografía profesional",
  "Redacción de textos (opcional, +80 €)",
  "Tienda online o sistema de pagos",
  "Sistema de reservas",
  "Mantenimiento mensual tras el primer mes",
];

const extras = [
  ["Idioma extra (euskera / inglés)", "+80 €"],
  ["Sistema de reservas", "+120 €"],
  ["Tienda online básica (5–20 productos)", "+300 €"],
  ["Redacción de textos", "+80 €"],
  ["Correo profesional @tudominio.es", "+30 €"],
  ["Pack 5 cambios anuales", "+60 €/año"],
  ["Mantenimiento mensual", "+15 €/mes"],
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Servicios</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
            Un solo precio. Todo lo que necesita un comercio para empezar en la web.
          </h1>
          <div className="mt-10 flex items-baseline gap-6">
            <span className="font-display text-7xl md:text-8xl text-primary">300 €</span>
            <span className="text-muted-foreground">una sola vez · sin cuotas mensuales</span>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <SectionHeader number="01" kicker="Qué incluye" title="Lo que recibes por 300 €." />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-2">
          {incluye.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.03}>
              <div className="flex gap-5 py-6 border-b border-border">
                <Check className="shrink-0 mt-1 text-primary" size={20} />
                <div>
                  <p className="font-display text-xl">{title}</p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <SectionHeader number="02" kicker="Qué no incluye" title="Transparencia desde el primer día." />
          <ul className="grid md:grid-cols-2 gap-x-12">
            {noIncluye.map((item) => (
              <li key={item} className="flex gap-4 items-start py-4 border-b border-border/60">
                <X className="shrink-0 mt-1 text-muted-foreground" size={18} />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <SectionHeader number="03" kicker="Extras opcionales" title="Si necesitas algo más, sumamos sin sorpresas." />
        <div className="rounded-2xl border border-border overflow-hidden">
          {extras.map(([label, price], i) => (
            <Reveal key={label} delay={i * 0.03}>
              <div className={`flex items-center justify-between px-6 lg:px-10 py-6 ${i !== extras.length - 1 ? "border-b border-border" : ""}`}>
                <span className="font-display text-lg md:text-xl">{label}</span>
                <span className="text-primary font-medium">{price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}