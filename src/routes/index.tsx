import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mitxoko — Webs para comercios de Pamplona · 300€, 14 días" },
      {
        name: "description",
        content:
          "Estudio de una persona en Pamplona. Diseño webs para peluquerías, cafeterías, bares, fisios y restaurantes. Precio cerrado de 300€, entrega en 14 días.",
      },
      { property: "og:title", content: "mitxoko — Tu rincón en internet" },
      {
        property: "og:description",
        content:
          "Una persona, dos semanas, trescientos euros. Sin cuotas, sin agencias.",
      },
    ],
  }),
  component: HomePage,
});
