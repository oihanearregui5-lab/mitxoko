import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
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

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {QA.map((it, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="border border-[color:var(--granate-500)]/15 rounded-2xl px-6 data-[state=open]:bg-[#F0E0D0] transition-colors duration-500"
        >
          <AccordionTrigger className="font-display text-lg md:text-2xl text-left hover:no-underline">
            {it.q}
          </AccordionTrigger>
          <AccordionContent className="text-base md:text-lg text-[color:var(--ink-900)]/75 leading-relaxed pb-6">
            {it.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
