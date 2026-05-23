import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Clock, Star, Mail, Instagram } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

type Sector = "peluqueria" | "restaurante" | "cafeteria" | "fisioterapia" | "estetica" | "bar";

const SECTORS: Record<Sector, {
  label: string;
  accent: string;
  bg: string;
  hero: string;
  tagline: string;
  intro: string;
  services: { name: string; price: string; desc: string }[];
  gallery: string[];
}> = {
  peluqueria: {
    label: "Peluquería",
    accent: "#731923",
    bg: "#FAF4EE",
    hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
    tagline: "Tu pelo. Tu estilo.",
    intro: "Cortes, color y cuidado capilar en pleno centro. Reserva tu cita en un minuto.",
    services: [
      { name: "Corte y peinado", price: "18€", desc: "Lavado, corte y secado a tu medida." },
      { name: "Color completo", price: "45€", desc: "Tinte y tratamiento de brillo." },
      { name: "Mechas balayage", price: "65€", desc: "Técnica artesanal, resultado natural." },
      { name: "Tratamiento keratina", price: "80€", desc: "Pelo liso, suave y manejable durante meses." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
    ],
  },
  restaurante: {
    label: "Restaurante",
    accent: "#284123",
    bg: "#F6F2EA",
    hero: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80",
    tagline: "Cocina de aquí, sin pretensiones.",
    intro: "Producto de temporada, recetas de toda la vida y carta del día que cambia cada semana.",
    services: [
      { name: "Menú del día", price: "16€", desc: "Primero, segundo, postre y bebida. De martes a viernes." },
      { name: "Carta", price: "—", desc: "Platos a la carta con producto local." },
      { name: "Menú de grupo", price: "32€", desc: "Para reuniones a partir de 8 personas." },
      { name: "Eventos privados", price: "Consultar", desc: "Cenas de empresa, cumpleaños y celebraciones." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    ],
  },
  cafeteria: {
    label: "Cafetería",
    accent: "#5F3223",
    bg: "#F8F1E8",
    hero: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80",
    tagline: "Café de especialidad y dulces de casa.",
    intro: "Tostamos en pequeño formato. Repostería diaria. Wifi para quedarse a trabajar.",
    services: [
      { name: "Espresso", price: "1.40€", desc: "Mezcla de la casa, tostado semanal." },
      { name: "Flat white", price: "2.80€", desc: "Leche cremosa, ratio 1:2." },
      { name: "Filtrado V60", price: "3.50€", desc: "Café de origen, método pour-over." },
      { name: "Brunch fin de semana", price: "12€", desc: "Tostadas, huevos, fruta y café." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
      "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&q=80",
      "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800&q=80",
    ],
  },
  fisioterapia: {
    label: "Fisioterapia",
    accent: "#234655",
    bg: "#F1F4F6",
    hero: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80",
    tagline: "Recupera tu movimiento.",
    intro: "Fisioterapia manual y deportiva. Tratamiento personalizado en sesiones de 50 minutos.",
    services: [
      { name: "Sesión individual", price: "40€", desc: "Valoración y tratamiento manual." },
      { name: "Bono 5 sesiones", price: "180€", desc: "Ahorra 20€ con el bono mensual." },
      { name: "Punción seca", price: "45€", desc: "Liberación de puntos gatillo." },
      { name: "Fisio deportiva", price: "50€", desc: "Recuperación y prevención de lesiones." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
      "https://images.unsplash.com/photo-1599447421416-3414500d18a5?w=800&q=80",
    ],
  },
  estetica: {
    label: "Clínica estética",
    accent: "#5F325A",
    bg: "#F5F0F4",
    hero: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1600&q=80",
    tagline: "Cuidado profesional, resultados visibles.",
    intro: "Tratamientos faciales y corporales con tecnología avanzada y producto profesional.",
    services: [
      { name: "Limpieza facial profunda", price: "55€", desc: "Higiene, exfoliación e hidratación." },
      { name: "Radiofrecuencia", price: "70€", desc: "Reafirmante facial y corporal." },
      { name: "Depilación láser zona pequeña", price: "30€", desc: "Sesión rápida e indolora." },
      { name: "Masaje relajante 60 min", price: "45€", desc: "Liberación muscular completa." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
      "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80",
      "https://images.unsplash.com/photo-1596178060810-72660ee9d289?w=800&q=80",
    ],
  },
  bar: {
    label: "Bar",
    accent: "#733C28",
    bg: "#F7F1EA",
    hero: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1600&q=80",
    tagline: "Pinchos, cañas y partido.",
    intro: "Barra tradicional con pinchos calientes, vino del Reyno y los mejores partidos en pantalla.",
    services: [
      { name: "Pincho del día", price: "2.50€", desc: "Cambia cada semana. Pregunta al camarero." },
      { name: "Menú del día", price: "13€", desc: "Casero, abundante, sin tonterías." },
      { name: "Caña + pincho", price: "3€", desc: "El clásico de toda la vida." },
      { name: "Ración a compartir", price: "9-14€", desc: "Patatas, calamares, croquetas, pulpo…" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    ],
  },
};

export const Route = createFileRoute("/plantillas/$sector")({
  loader: ({ params }) => {
    const data = SECTORS[params.sector as Sector];
    if (!data) throw notFound();
    return { sector: params.sector as Sector, data };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `Plantilla ${loaderData?.data.label ?? ""} · mitxoko.` },
      { name: "description", content: `Demo navegable de una web para ${loaderData?.data.label?.toLowerCase() ?? "este sector"}. Plantilla ficticia de mitxoko.` },
      { property: "og:title", content: `Plantilla ${loaderData?.data.label ?? ""} · mitxoko.` },
      { property: "og:url", content: `/plantillas/${loaderData?.sector ?? ""}` },
    ],
    links: [{ rel: "canonical", href: `/plantillas/${loaderData?.sector ?? ""}` }],
  }),
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center">
      <p>{error.message}</p>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4">
      <h1 className="font-display text-4xl">Plantilla no encontrada</h1>
      <Link to="/plantillas" className="underline">
        Ver todas las plantillas
      </Link>
    </div>
  ),
  component: SectorPage,
});

function SectorPage() {
  const loaded = Route.useLoaderData() as { sector: Sector; data: (typeof SECTORS)[Sector] };
  const { data } = loaded;

  return (
    <PageTransition>
      <div style={{ background: data.bg }}>
        {/* Demo banner */}
        <div className="bg-[color:var(--granate-900)] text-[color:var(--cream-100)] px-6 lg:px-10 py-3 flex flex-wrap items-center justify-between gap-3 text-sm">
          <span>
            Estás viendo una <strong>plantilla demo</strong> · negocio ficticio
          </span>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[color:var(--cream-100)] text-[color:var(--granate-500)] px-4 py-1.5 rounded-full hover:bg-[color:var(--coral-500)] hover:text-[color:var(--cream-100)] transition-colors font-medium"
          >
            Quiero una así para mi negocio <ArrowRight size={14} />
          </Link>
        </div>

        {/* Fake site nav */}
        <header
          className="px-6 lg:px-10 py-5 flex items-center justify-between border-b"
          style={{ borderColor: `${data.accent}20` }}
        >
          <span className="font-display text-2xl" style={{ color: data.accent }}>
            {data.label.toLowerCase()}
            <span style={{ color: data.accent }}>.</span>
          </span>
          <nav className="hidden md:flex gap-8 text-sm text-[color:var(--ink-900)]/70">
            <a>Inicio</a>
            <a>Servicios</a>
            <a>Galería</a>
            <a>Contacto</a>
          </nav>
          <button
            className="text-sm px-4 py-2 rounded-full text-[color:var(--cream-100)]"
            style={{ background: data.accent }}
          >
            Reservar
          </button>
        </header>

        {/* HERO */}
        <section className="relative">
          <div className="absolute inset-0">
            <img src={data.hero} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${data.accent}cc 0%, ${data.accent}66 100%)`,
              }}
            />
          </div>
          <div className="relative px-6 lg:px-10 py-32 md:py-48 max-w-6xl mx-auto text-[color:var(--cream-100)]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs tracking-widest mb-4 opacity-80"
            >
              {data.label.toUpperCase()} · PAMPLONA
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl"
            >
              {data.tagline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-lg max-w-xl opacity-90"
            >
              {data.intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button className="bg-[color:var(--cream-100)] text-[color:var(--ink-900)] px-6 py-3 rounded-full text-sm font-medium">
                Reservar cita
              </button>
              <button className="border border-[color:var(--cream-100)]/40 text-[color:var(--cream-100)] px-6 py-3 rounded-full text-sm">
                Ver servicios
              </button>
            </motion.div>
          </div>
        </section>

        {/* Servicios */}
        <section className="px-6 lg:px-10 py-20 max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-[color:var(--ink-900)]">
            Servicios y precios
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {data.services.map((s, i) => (
              <div
                key={i}
                className="border-t pt-5"
                style={{ borderColor: `${data.accent}30` }}
              >
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h3 className="font-display text-2xl text-[color:var(--ink-900)]">
                    {s.name}
                  </h3>
                  <span
                    className="font-display text-xl"
                    style={{ color: data.accent }}
                  >
                    {s.price}
                  </span>
                </div>
                <p className="text-[color:var(--ink-900)]/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Galería */}
        <section className="px-6 lg:px-10 py-20 max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-[color:var(--ink-900)]">
            Galería
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data.gallery.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Sobre nosotros */}
        <section
          className="px-6 lg:px-10 py-20"
          style={{ background: `${data.accent}10` }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-6 text-[color:var(--ink-900)]">
              Sobre nosotros
            </h2>
            <p className="text-lg text-[color:var(--ink-900)]/75 leading-relaxed">
              Llevamos más de quince años en el barrio. Empezamos pequeño y
              crecimos porque nuestros clientes nos recomendaron. Nuestro trato
              es cercano y profesional. Si vienes una vez, ya somos un poco
              amigos. Te esperamos.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-10">
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="bg-[color:var(--cream-100)] p-5 rounded-lg"
                >
                  <div
                    className="flex gap-1 mb-3"
                    style={{ color: data.accent }}
                  >
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-sm text-[color:var(--ink-900)]/75 italic">
                    "Trato espectacular y precio justo. Vengo siempre que
                    puedo."
                  </p>
                  <p className="text-xs mt-3 text-[color:var(--ink-900)]/50">
                    — Cliente habitual
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto + horario */}
        <section className="px-6 lg:px-10 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl mb-8 text-[color:var(--ink-900)]">
              Visítanos
            </h2>
            <div className="space-y-4">
              <p className="flex items-start gap-3">
                <MapPin
                  size={18}
                  style={{ color: data.accent }}
                  className="mt-1"
                />
                <span>Calle Estafeta 42, 31001 Pamplona</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone
                  size={18}
                  style={{ color: data.accent }}
                  className="mt-1"
                />
                <span>948 12 34 56</span>
              </p>
              <p className="flex items-start gap-3">
                <Mail
                  size={18}
                  style={{ color: data.accent }}
                  className="mt-1"
                />
                <span>hola@negocio.es</span>
              </p>
              <p className="flex items-start gap-3">
                <Instagram
                  size={18}
                  style={{ color: data.accent }}
                  className="mt-1"
                />
                <span>@negocio</span>
              </p>
            </div>
            <h3 className="font-display text-2xl mt-10 mb-4 text-[color:var(--ink-900)] flex items-center gap-2">
              <Clock size={18} /> Horario
            </h3>
            <ul className="space-y-1 text-[color:var(--ink-900)]/70 text-sm">
              <li
                className="flex justify-between border-b py-1.5"
                style={{ borderColor: `${data.accent}20` }}
              >
                <span>Lunes – Viernes</span>
                <span>9:00 – 20:00</span>
              </li>
              <li
                className="flex justify-between border-b py-1.5"
                style={{ borderColor: `${data.accent}20` }}
              >
                <span>Sábado</span>
                <span>10:00 – 14:00</span>
              </li>
              <li className="flex justify-between py-1.5">
                <span>Domingo</span>
                <span>Cerrado</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-4xl mb-8 text-[color:var(--ink-900)]">
              Escríbenos
            </h2>
            <div className="space-y-4">
              <input
                className="w-full bg-[color:var(--cream-100)] border border-[color:var(--granate-500)]/15 rounded px-4 py-3 text-sm"
                placeholder="Nombre"
              />
              <input
                className="w-full bg-[color:var(--cream-100)] border border-[color:var(--granate-500)]/15 rounded px-4 py-3 text-sm"
                placeholder="Teléfono"
              />
              <textarea
                rows={4}
                className="w-full bg-[color:var(--cream-100)] border border-[color:var(--granate-500)]/15 rounded px-4 py-3 text-sm"
                placeholder="Tu mensaje"
              />
              <button
                type="button"
                className="w-full text-[color:var(--cream-100)] py-3 rounded-full font-medium"
                style={{ background: data.accent }}
              >
                Enviar mensaje
              </button>
            </div>
          </div>
        </section>

        {/* Mapa fake */}
        <div
          className="aspect-[16/5] bg-[color:var(--cream-200)] relative overflow-hidden border-t"
          style={{ borderColor: `${data.accent}20` }}
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${data.accent}, transparent 60%)`,
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[color:var(--ink-900)]/40 gap-2">
            <MapPin size={18} /> Aquí iría tu mapa de Google
          </div>
        </div>

        {/* Footer fake */}
        <footer
          className="px-6 lg:px-10 py-10 text-center"
          style={{ background: data.accent, color: "#FAF4EE" }}
        >
          <p className="font-display text-2xl">{data.label.toLowerCase()}.</p>
          <p className="text-sm opacity-70 mt-2">
            © {new Date().getFullYear()} · Plantilla demo de mitxoko
          </p>
        </footer>

        {/* Volver */}
        <section className="bg-[color:var(--cream-100)] px-6 lg:px-10 py-16 text-center">
          <Link
            to="/plantillas"
            className="text-[color:var(--ink-900)] underline underline-offset-4 decoration-[color:var(--granate-500)]/40 hover:decoration-[color:var(--granate-500)] inline-flex items-center gap-2 transition-colors"
          >
            ← Ver todas las plantillas
          </Link>
        </section>
      </div>
    </PageTransition>
  );
}
