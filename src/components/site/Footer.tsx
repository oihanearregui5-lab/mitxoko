import { Link } from "@tanstack/react-router";
import { Marquee } from "./Marquee";

export function Footer() {
  return (
    <footer className="bg-night text-paper">
      <div className="paper-grain mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="font-serif italic text-4xl">
              mitxoko<span className="text-butter">.</span>
            </div>
            <p className="mt-4 text-sm text-paper/70 max-w-[20ch] leading-relaxed">
              Tu rincón en internet. Diseñado en Pamplona, una página cada vez.
            </p>
          </div>

          <FooterCol title="Navegación">
            <FLink to="/estudio">Estudio</FLink>
            <FLink to="/proceso">Proceso</FLink>
            <FLink to="/plantillas">Plantillas</FLink>
            <FLink to="/proyectos">Proyectos</FLink>
            <FLink to="/diario">Diario</FLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FLink to="/">Aviso legal</FLink>
            <FLink to="/">Privacidad</FLink>
            <FLink to="/">Cookies</FLink>
          </FooterCol>

          <FooterCol title="Contacto directo">
            <a href="mailto:hola@mitxoko.com" className="block text-sm text-paper/80 hover:text-butter transition-colors">
              hola@mitxoko.com
            </a>
            <a href="tel:+34000000000" className="block text-sm text-paper/80 hover:text-butter transition-colors mt-2">
              +34 000 000 000
            </a>
            <p className="mt-4 text-xs font-mono uppercase tracking-wider text-paper/50">
              Iruñea — Pamplona
            </p>
          </FooterCol>
        </div>

        <hr className="my-12 border-paper/15" />
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-paper/50">
          Diseñado en Pamplona · Hecho con cuidado · © 2026
        </p>
      </div>

      <div className="bg-ink text-paper/85 py-3">
        <Marquee text="MITXOKO · ESTUDIO PEQUEÑO · TRATO GRANDE" tone="dark" />
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.15em] text-butter mb-4">
        {title}
      </h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function FLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-sm text-paper/80 hover:text-butter transition-colors">
        {children}
      </Link>
    </li>
  );
}
