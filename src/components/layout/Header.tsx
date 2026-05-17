import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { LangToggle } from "@/components/site/LangToggle";

export function Header() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/servicios", label: t("nav.services") },
    { to: "/plantillas", label: t("nav.templates") },
    { to: "/proyectos", label: t("nav.projects") },
    { to: "/sobre-mi", label: t("nav.about") },
    { to: "/contacto", label: t("nav.contact") },
  ] as const;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="font-display text-xl lg:text-2xl tracking-tight">
          mitxoko<span className="text-primary">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="link-underline transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <LangToggle />
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2 text-sm transition-transform hover:-translate-y-0.5"
          >
            {t("nav.cta")}
          </Link>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 -mr-2"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-display text-2xl"
              >
                {l.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border flex items-center justify-between">
              <LangToggle />
              <Link
                to="/contacto"
                className="rounded-full bg-foreground text-background px-5 py-2 text-sm"
              >
                {t("nav.cta")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}