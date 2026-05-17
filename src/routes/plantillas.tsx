import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { TemplateCard, templates } from "@/components/site/TemplateCard";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/plantillas")({
  head: () => ({
    meta: [
      { title: "Plantillas por sector — mitxoko · Webs para comercios de Pamplona" },
      { name: "description", content: "Plantillas de ejemplo para peluquerías, restaurantes, fisios, cafeterías y más. Mira cómo podría quedar tu negocio." },
      { property: "og:title", content: "Plantillas por sector — mitxoko" },
      { property: "og:description", content: "Plantillas pensadas para cada sector. Mira cómo podría quedar tu negocio." },
      { property: "og:url", content: "/plantillas" },
    ],
    links: [{ rel: "canonical", href: "/plantillas" }],
  }),
  component: TemplatesPage,
});

function TemplatesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-16">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Plantillas</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
            Mira cómo podría quedar <span className="italic text-primary">tu negocio</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Estas son webs de ejemplo. La tuya se diseña a tu medida, pero te ayudan a imaginar el resultado.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {templates.map((tpl, i) => (
            <Reveal key={tpl.slug} delay={i * 0.05}>
              <TemplateCard t={tpl} />
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}