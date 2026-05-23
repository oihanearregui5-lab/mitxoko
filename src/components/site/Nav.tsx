import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  { to: "/servicios", label: "Servicios" },
  { to: "/plantillas", label: "Plantillas" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-paper/75 border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" className="font-serif italic text-2xl md:text-[28px] text-ink leading-none">
          mitxoko<span className="text-terracotta">.</span>
        </Link>

        <ul className="hidden md:flex items-center gap-7 text-[13px] font-sans text-ink/80">
          {items.map((i) => (
            <li key={i.to}>
              <Link
                to={i.to}
                className="relative py-2 transition-colors hover:text-ink"
                activeProps={{
                  className: "text-ink after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-terracotta",
                }}
              >
                {i.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/contacto"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-[13px] text-paper hover:bg-ink/85 transition-colors"
        >
          Hablamos <span aria-hidden>→</span>
        </Link>
      </nav>
    </header>
  );
}
