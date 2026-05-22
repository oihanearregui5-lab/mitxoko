interface Props {
  n: string;
  className?: string;
}
export function SectionNumber({ n, className = "" }: Props) {
  return (
    <span
      className={`font-display italic text-5xl md:text-6xl text-[color:var(--granate-500)]/40 ${className}`}
    >
      {n} ·
    </span>
  );
}
