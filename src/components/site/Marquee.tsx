export function Marquee({
  text,
  tone = "moss",
}: {
  text: string;
  tone?: "moss" | "dark";
}) {
  const bg =
    tone === "moss" ? "bg-moss text-paper" : "bg-transparent text-paper/85";
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div className={`marquee-group overflow-hidden ${bg}`}>
      <div className="marquee-track flex whitespace-nowrap font-mono text-[12px] uppercase tracking-[0.2em]">
        {items.map((i) => (
          <span key={i} className="px-6 py-3 flex items-center gap-6">
            {text}
            <span aria-hidden className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
