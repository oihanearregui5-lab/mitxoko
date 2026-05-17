import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { PrimaryButton, GhostButton } from "@/components/site/PrimaryButton";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — mitxoko · Diseño web en Pamplona" },
      { name: "description", content: "Cartera de proyectos reales de diseño web para comercios de Pamplona y comarca." },
      { property: "og:title", content: "Proyectos — mitxoko" },
      { property: "og:url", content: "/proyectos" },
    ],
    links: [{ rel: "canonical", href: "/proyectos" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Proyectos</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
            Proyectos reales <span className="italic text-primary">(en construcción)</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Estoy empezando. Mis primeros clientes están viendo el resultado y sus webs aparecerán aquí
            en cuanto estén publicadas. Mientras tanto, échale un ojo a las plantillas para hacerte
            una idea del estilo.
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <PrimaryButton to="/plantillas">Ver plantillas</PrimaryButton>
            <GhostButton to="/contacto">Hablamos</GhostButton>
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}