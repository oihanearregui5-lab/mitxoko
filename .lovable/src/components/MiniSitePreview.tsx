import type { Plantilla } from "@/lib/plantillas";

/** Pequeña maqueta de web renderizada dentro de la card */
export function MiniSitePreview({ p }: { p: Plantilla }) {
  return (
    <div className="absolute inset-0 origin-top-left scale-[0.42] w-[238%] h-[238%] bg-[color:var(--cream-100)] pointer-events-none">
      {/* nav */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-black/10">
        <div className="font-display text-2xl">tu negocio<span style={{ color: p.accent }}>.</span></div>
        <div className="flex gap-6 text-sm text-black/60">
          <span>Inicio</span><span>Servicios</span><span>Galería</span><span>Contacto</span>
        </div>
      </div>
      {/* hero */}
      <div className="grid grid-cols-2 gap-8 px-8 py-12">
        <div>
          <p className="text-xs uppercase tracking-widest text-black/40 mb-3">{p.label}</p>
          <h1 className="font-display text-5xl leading-tight text-black">
            {p.tagline}
          </h1>
          <p className="mt-4 text-base text-black/60">
            Cuidamos cada detalle. Pásate o reserva online en menos de un minuto.
          </p>
          <div className="mt-6 inline-block px-5 py-3 text-sm text-white rounded-full" style={{ background: p.accent }}>
            Reservar →
          </div>
        </div>
        <img src={p.heroImage} className="rounded-2xl aspect-[4/3] object-cover" alt="" loading="lazy" />
      </div>
      {/* services grid */}
      <div className="px-8 py-8 grid grid-cols-3 gap-4">
        {p.services.slice(0, 3).map((s) => (
          <div key={s.name} className="p-5 rounded-xl border border-black/10 bg-white/60">
            <p className="font-display text-2xl text-black">{s.name}</p>
            <p className="mt-2 text-sm text-black/60">{s.desc}</p>
            <p className="mt-3 text-sm font-medium" style={{ color: p.accent }}>{s.price}</p>
          </div>
        ))}
      </div>
      {/* gallery */}
      <div className="px-8 grid grid-cols-4 gap-3 pb-12">
        {p.galleryImages.map((g) => (
          <img key={g} src={g} className="aspect-square object-cover rounded-lg" alt="" loading="lazy" />
        ))}
      </div>
    </div>
  );
}
