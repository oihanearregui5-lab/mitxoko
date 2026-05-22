import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPlantilla, type Sector } from "@/lib/plantillas";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/plantillas/$sector")({
  component: Demo,
  loader: ({ params }) => {
    const p = getPlantilla(params.sector);
    if (!p) throw notFound();
    return { plantilla: p };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `Demo: ${loaderData.plantilla.label} — mitxoko.` },
          { name: "description", content: `Plantilla demo de web para ${loaderData.plantilla.label.toLowerCase()}.` },
        ]
      : [],
  }),
});

function Demo() {
  const { plantilla: p } = Route.useLoaderData();
  const accent = p.accent;

  return (
    <PageTransition>
      <div className="min-h-screen bg-white text-[color:var(--ink-900)]">
        {/* Barra superior demo */}
        <div className="sticky top-0 z-50 bg-[color:var(--ink-900)] text-[color:var(--cream-100)] py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p>
            Estás viendo una <strong className="text-[color:var(--coral-500)]">plantilla demo</strong> · negocio ficticio
          </p>
          <Link
            to="/contacto"
            search={{ sector: p.slug as Sector }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[color:var(--cream-100)] text-[color:var(--ink-900)] font-medium hover:bg-[color:var(--coral-500)] hover:text-[color:var(--cream-100)] transition-colors"
          >
            Quiero una así →
          </Link>
        </div>

        {/* Demo site */}
        <div className="bg-white">
          {/* Nav demo */}
          <nav className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between border-b border-black/10">
            <p className="font-display text-2xl">
              tu negocio<span style={{ color: accent }}>.</span>
            </p>
            <div className="hidden md:flex gap-8 text-sm text-black/70">
              <a href="#servicios">Servicios</a>
              <a href="#galeria">Galería</a>
              <a href="#nosotros">Sobre nosotros</a>
              <a href="#contacto">Contacto</a>
            </div>
            <a
              href="#contacto"
              className="text-sm px-4 py-2 rounded-full text-white"
              style={{ background: accent }}
            >
              Reservar
            </a>
          </nav>

          {/* Hero */}
          <header className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: accent }}>
                {p.label} · Pamplona
              </p>
              <h1 className="font-display text-5xl md:text-6xl leading-tight tracking-tight">
                {p.tagline}
              </h1>
              <p className="mt-6 text-lg text-black/70 max-w-md">
                Cuidamos cada detalle. Pásate o reserva online en menos de un minuto.
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium"
                  style={{ background: accent }}
                >
                  Reservar →
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/20 text-sm font-medium hover:bg-black/5 transition-colors"
                >
                  Ver servicios
                </a>
              </div>
            </div>
            <img src={p.heroImage} alt={p.label} className="rounded-2xl aspect-[4/5] object-cover" />
          </header>

          {/* Servicios */}
          <section id="servicios" className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-4xl md:text-5xl mb-12">Servicios y precios</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {p.services.map((s: typeof p.services[number]) => (
                <div
                  key={s.name}
                  className="p-6 rounded-2xl border border-black/10 flex items-start justify-between gap-6"
                >
                  <div>
                    <p className="font-display text-2xl">{s.name}</p>
                    <p className="mt-2 text-black/60">{s.desc}</p>
                  </div>
                  <p className="font-medium whitespace-nowrap" style={{ color: accent }}>
                    {s.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Galería */}
          <section id="galeria" className="mx-auto max-w-6xl px-6 py-20">
            <h2 className="font-display text-4xl md:text-5xl mb-12">Galería</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {p.galleryImages.map((g: string) => (
                <img key={g} src={g} alt="" className="aspect-square object-cover rounded-xl" loading="lazy" />
              ))}
            </div>
          </section>

          {/* Sobre nosotros */}
          <section id="nosotros" className="bg-black/5 py-20">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h2 className="font-display text-4xl md:text-5xl mb-6">Sobre nosotros</h2>
              <p className="text-lg text-black/70 leading-relaxed">
                Llevamos años haciendo lo que mejor sabemos. Cada cliente es importante,
                cada detalle cuenta. Si quieres descubrir por qué los vecinos del barrio
                vuelven, pásate y pruébalo.
              </p>
            </div>
          </section>

          {/* Horario + contacto */}
          <section id="contacto" className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-4xl mb-6">Horario</h2>
              <ul className="space-y-2 text-black/70">
                <li className="flex justify-between border-b border-black/10 py-2"><span>Lunes a viernes</span><span>9:00 – 20:00</span></li>
                <li className="flex justify-between border-b border-black/10 py-2"><span>Sábado</span><span>10:00 – 14:00</span></li>
                <li className="flex justify-between border-b border-black/10 py-2"><span>Domingo</span><span>Cerrado</span></li>
              </ul>
              <h3 className="mt-10 font-display text-2xl mb-3">Encuéntranos</h3>
              <p className="text-black/70">Calle Mayor, 00 · 31001 Pamplona</p>
              <p className="text-black/70">948 00 00 00 · hola@tunegocio.com</p>
            </div>
            <div>
              <h2 className="font-display text-4xl mb-6">Escríbenos</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full px-4 py-3 border border-black/15 rounded-lg" placeholder="Nombre" />
                <input className="w-full px-4 py-3 border border-black/15 rounded-lg" placeholder="Email" />
                <textarea className="w-full px-4 py-3 border border-black/15 rounded-lg h-32" placeholder="¿En qué te ayudamos?" />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-white text-sm font-medium"
                  style={{ background: accent }}
                >
                  Enviar →
                </button>
              </form>
            </div>
          </section>

          {/* Footer demo */}
          <footer className="border-t border-black/10 py-10 text-center text-sm text-black/50">
            © 2026 tu negocio · Demo creada por mitxoko.
          </footer>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}
