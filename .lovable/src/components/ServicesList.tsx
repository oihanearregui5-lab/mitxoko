import { motion } from "framer-motion";

const items = [
  { t: "Diseño a tu medida", d: "Cada web es única, basada en una plantilla refinada que personalizo para tu negocio." },
  { t: "Adaptada al móvil", d: "La mitad de tus clientes te van a buscar desde el móvil. Tu web se ve perfecta en cualquier pantalla." },
  { t: "Conectada a Google", d: "Configuración SEO básica para que Google encuentre tu negocio cuando alguien lo busque." },
  { t: "Formulario y WhatsApp", d: "Tus clientes pueden contactarte de forma directa, sin descargar nada ni registrarse." },
  { t: "Galería de fotos", d: "Hasta 15 fotos optimizadas para que tu local se vea profesional y rápido." },
  { t: "Soporte personal", d: "Un mes de cambios gratis tras la entrega. Y siempre hablas conmigo, no con un comercial." },
];

const bgs = [
  "bg-[color:var(--cream-200)]",
  "bg-[#E8D4C4]",
  "bg-[color:var(--granate-500)]/8",
  "bg-[color:var(--cream-200)]",
  "bg-[#E8D4C4]",
  "bg-[color:var(--granate-500)]/8",
];

export function ServicesList() {
  return (
    <div className="space-y-6">
      {items.map((it, i) => (
        <motion.article
          key={it.t}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`${bgs[i]} rounded-3xl p-10 md:p-14 border border-[color:var(--granate-500)]/15`}
        >
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5 flex items-baseline gap-4">
              <span className="font-display italic text-5xl md:text-6xl text-[color:var(--granate-500)]">
                {String(i + 1).padStart(2, "0")} ·
              </span>
              <h3 className="font-display text-3xl md:text-5xl tracking-tight">
                {it.t}
              </h3>
            </div>
            <p className="md:col-span-7 text-lg md:text-xl text-[color:var(--ink-900)]/75 leading-relaxed">
              {it.d}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
