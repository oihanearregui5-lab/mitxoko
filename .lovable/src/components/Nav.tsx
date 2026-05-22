import { Link } from "@tanstack/react-router";
import { Magnetic } from "./Magnetic";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/plantillas", label: "Plantillas" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--cream-100)]/80 border-b border-[color:var(--granate-500)]/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-2xl font-medium tracking-tight"
          onClick={() => setOpen(false)}
        >
          mitxoko<span className="text-[color:var(--granate-500)]">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <Magnetic key={l.to} strength={6}>
              <Link
                to={l.to}
                className="px-3 py-2 text-sm tracking-wide hover:text-[color:var(--granate-500)] transition-colors"
                activeProps={{ className: "px-3 py-2 text-sm tracking-wide text-[color:var(--granate-500)]" }}
              >
                {l.label}
              </Link>
            </Magnetic>
          ))}
          <Magnetic strength={6}>
            <button className="ml-4 text-xs tracking-widest uppercase text-[color:var(--ink-900)]/60 hover:text-[color:var(--granate-500)] transition-colors">
              ES <span className="opacity-40">/ EU</span>
            </button>
          </Magnetic>
        </nav>

        <button
          aria-label="Menú"
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-[color:var(--granate-500)]/10 bg-[color:var(--cream-100)]">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base py-2"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
