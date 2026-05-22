import { PLANTILLAS } from "@/lib/plantillas";
import { PlantillaCard } from "./PlantillaCard";

export function Marquee() {
  const triples = [...PLANTILLAS, ...PLANTILLAS, ...PLANTILLAS];
  return (
    <div className="marquee-wrap marquee-mask overflow-hidden">
      <div className="marquee-track flex gap-6 w-max">
        {triples.map((p, i) => (
          <div key={`${p.slug}-${i}`} className="w-[280px] md:w-[340px] shrink-0">
            <PlantillaCard p={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
