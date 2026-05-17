import { Reveal } from "./Reveal";

export function SectionHeader({ number, kicker, title }: { number: string; kicker: string; title: string }) {
  return (
    <Reveal className="mb-12 lg:mb-20">
      <div className="flex items-baseline gap-6">
        <span className="section-number text-5xl lg:text-6xl leading-none">{number}</span>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{kicker}</p>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="editorial-rule mt-10" />
    </Reveal>
  );
}