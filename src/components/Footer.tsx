import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink-900)] text-[color:var(--cream-100)]">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-3">
            <p className="font-display text-3xl">
              mitxoko<span className="text-[color:var(--coral-500)]">.</span>
            </p>
            <p className="text-sm text-[color:var(--cream-100)]/60">
              tu rincón en internet
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[color:var(--cream-100)]/40 mb-4">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[color:var(--coral-500)] transition-colors">Inicio</Link></li>
              <li><Link to="/servicios" className="hover:text-[color:var(--coral-500)] transition-colors">Servicios</Link></li>
              <li><Link to="/plantillas" className="hover:text-[color:var(--coral-500)] transition-colors">Plantillas</Link></li>
              <li><Link to="/sobre-mi" className="hover:text-[color:var(--coral-500)] transition-colors">Sobre mí</Link></li>
              <li><Link to="/contacto" className="hover:text-[color:var(--coral-500)] transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[color:var(--cream-100)]/40 mb-4">
              Legal
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--cream-100)]/70">
              <li>Aviso legal</li>
              <li>Privacidad</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[color:var(--cream-100)]/40 mb-4">
              Contacto
            </p>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hola@mitxoko.com" className="hover:text-[color:var(--coral-500)] transition-colors">hola@mitxoko.com</a></li>
              <li><a href="https://wa.me/34600000000" className="hover:text-[color:var(--coral-500)] transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-[color:var(--coral-500)] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--cream-100)]/15 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wide text-[color:var(--cream-100)]/50">
          <p>Diseñado y construido en Pamplona · Editado con cuidado · © 2026 mitxoko</p>
          <button className="uppercase tracking-widest hover:text-[color:var(--coral-500)] transition-colors">
            ES <span className="opacity-40">/ EU</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
