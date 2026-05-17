import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 text-sm transition-all hover:-translate-y-0.5"
    >
      <span>{children}</span>
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function GhostButton({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-3 rounded-full border border-foreground/25 px-7 py-3.5 text-sm transition-all hover:border-foreground"
    >
      <span>{children}</span>
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </Link>
  );
}