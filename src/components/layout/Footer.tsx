import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Instagram } from "lucide-react";
import { LangToggle } from "@/components/site/LangToggle";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-3xl tracking-tight">
              mitxoko<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              {t("footer.tagline")}
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Menú</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="link-underline">{t("nav.home")}</Link></li>
              <li><Link to="/servicios" className="link-underline">{t("nav.services")}</Link></li>
              <li><Link to="/plantillas" className="link-underline">{t("nav.templates")}</Link></li>
              <li><Link to="/proyectos" className="link-underline">{t("nav.projects")}</Link></li>
              <li><Link to="/sobre-mi" className="link-underline">{t("nav.about")}</Link></li>
              <li><Link to="/contacto" className="link-underline">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="link-underline">{t("footer.legal")}</a></li>
              <li><a href="#" className="link-underline">{t("footer.privacy")}</a></li>
              <li><a href="#" className="link-underline">{t("footer.cookies")}</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Idioma</p>
            <LangToggle />
            <p className="mt-8 text-xs text-muted-foreground">© {year}</p>
            <p className="mt-1 text-xs text-muted-foreground">{t("footer.madeIn")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}