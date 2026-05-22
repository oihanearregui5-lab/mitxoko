import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import { z } from "zod";

const searchSchema = z.object({
  sector: z.string().optional(),
});

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contacto — mitxoko." },
      { name: "description", content: "Cuéntame de tu negocio. Te respondo el mismo día." },
      { property: "og:title", content: "Contacto — mitxoko." },
      { property: "og:description", content: "Cuéntame de tu negocio. Te respondo el mismo día." },
    ],
  }),
});

function Contacto() {
  const { sector } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: sector ? `Tengo un negocio del sector ${sector}` : "",
    message: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nNegocio: ${form.business}\n\n${form.message}`
    );
    window.location.href = `mailto:hola@mitxoko.com?subject=Presupuesto mitxoko&body=${body}`;
    setSent(true);
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Nav />

        <section className="grid md:grid-cols-2 min-h-[calc(100vh-72px)]">
          {/* Form */}
          <div className="bg-[color:var(--cream-100)] hero-glow px-6 md:px-16 py-20">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--granate-500)] mb-6">
                Contacto
              </p>
              <h1 className="font-display text-4xl md:text-6xl leading-tight tracking-tight">
                Cuéntame de tu <span className="italic text-[color:var(--granate-500)]">negocio</span>.
              </h1>
              <p className="mt-6 text-lg text-[color:var(--ink-900)]/75">
                Te respondo el mismo día con una propuesta concreta.
              </p>

              <form onSubmit={submit} className="mt-10 space-y-5">
                <Field label="Tu nombre" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Tu negocio" value={form.business} onChange={(v) => setForm({ ...form, business: v })} placeholder="Peluquería, restaurante, cafetería..." />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[color:var(--ink-900)]/60 mb-2">
                    Cuéntame algo más
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-[color:var(--cream-200)] border border-[color:var(--granate-500)]/15 rounded-lg focus:outline-none focus:border-[color:var(--granate-500)] transition-colors"
                    placeholder="Qué haces, qué tienes ahora, qué te gustaría..."
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[color:var(--ink-900)] px-7 py-3.5 text-sm font-medium text-[color:var(--cream-100)] hover:bg-[color:var(--granate-700)] transition-colors"
                >
                  {sent ? "Abriendo correo..." : "Enviar mensaje"}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </form>
            </div>
          </div>

          {/* Info */}
          <div className="bg-[color:var(--forest-900)] text-[color:var(--cream-100)] px-6 md:px-16 py-20 flex flex-col justify-center">
            <div className="max-w-md">
              <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--coral-500)] mb-6">
                Otros caminos
              </p>
              <h2 className="font-display text-3xl md:text-4xl mb-12">
                O si prefieres, escríbeme por aquí.
              </h2>

              <ul className="space-y-8">
                <li>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--cream-100)]/50 mb-2">Email</p>
                  <a href="mailto:hola@mitxoko.com" className="font-display text-2xl hover:text-[color:var(--coral-500)] transition-colors">
                    hola@mitxoko.com
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--cream-100)]/50 mb-2">WhatsApp</p>
                  <a href="https://wa.me/34600000000" className="font-display text-2xl hover:text-[color:var(--coral-500)] transition-colors">
                    +34 600 000 000
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-widest text-[color:var(--cream-100)]/50 mb-2">Estudio</p>
                  <p className="font-display text-2xl">Pamplona · Iruñea</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-[color:var(--ink-900)]/60 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-[color:var(--cream-200)] border border-[color:var(--granate-500)]/15 rounded-lg focus:outline-none focus:border-[color:var(--granate-500)] transition-colors"
        required
      />
    </div>
  );
}
