import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — mitxoko · Diseño web en Pamplona" },
      { name: "description", content: "Cuéntame de tu negocio. Te respondo en menos de 24 horas. Hablar es gratis." },
      { property: "og:title", content: "Contacto — mitxoko" },
      { property: "og:url", content: "/contacto" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nombre demasiado corto").max(80),
  business: z.string().trim().min(1, "Indica tu negocio").max(120),
  sector: z.string().min(1, "Elige un sector"),
  phone: z.string().trim().min(6, "Teléfono no válido").max(30),
  email: z.string().trim().email("Email no válido").max(120),
  message: z.string().trim().min(10, "Cuéntame un poco más").max(1500),
});

const sectors = [
  "Peluquería", "Bar", "Cafetería", "Restaurante", "Fisioterapia",
  "Clínica estética", "Clínica dental", "Gimnasio", "Otro",
];

const miniFaq = [
  ["¿Cuánto tardas en responder?", "24h en días laborables."],
  ["¿Cobras la primera reunión?", "No, hablar es gratis."],
  ["¿Solo trabajas en Pamplona?", "Pamplona, comarca y resto de Navarra. Fuera, escríbeme igual."],
];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    // TODO: conectar a Formspree / Web3Forms cuando esté configurado.
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">Contacto</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] max-w-4xl">
            Cuéntame de tu <span className="italic text-primary">negocio</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Te respondo en menos de 24 horas. Hablar es gratis.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-12">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20">
          <Reveal>
            {sent ? (
              <div className="rounded-2xl border border-border p-12 text-center bg-secondary/50">
                <p className="font-display text-4xl">¡Gracias!</p>
                <p className="mt-4 text-muted-foreground">
                  Recibí tu mensaje. Te respondo en menos de 24h en días laborables.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" noValidate>
                <Field label="Nombre" name="name" error={errors.name} />
                <Field label="Negocio" name="business" error={errors.business} />
                <div>
                  <Label>Sector</Label>
                  <select
                    name="sector"
                    defaultValue=""
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="" disabled>Elige un sector</option>
                    {sectors.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.sector && <p className="mt-2 text-sm text-primary">{errors.sector}</p>}
                </div>
                <Field label="Teléfono o WhatsApp" name="phone" error={errors.phone} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <div>
                  <Label>Cuéntame brevemente qué necesitas</Label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                  {errors.message && <p className="mt-2 text-sm text-primary">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-3.5 text-sm transition-transform hover:-translate-y-0.5"
                >
                  Enviar
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Contacto directo</p>
                <ul className="space-y-4">
                  <li>
                    <a href="https://wa.me/34600000000" target="_blank" rel="noreferrer" className="flex items-center gap-3 link-underline">
                      <MessageCircle size={18} className="text-primary" /> WhatsApp
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hola@mitxoko.eus" className="flex items-center gap-3 link-underline">
                      <Mail size={18} className="text-primary" /> hola@mitxoko.eus
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={18} className="text-primary" /> Pamplona y zonas cercanas
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-8 space-y-6">
                {miniFaq.map(([q, a]) => (
                  <div key={q}>
                    <p className="font-display text-lg">{q}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{children}</label>;
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        type={type}
        name={name}
        className="w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors"
      />
      {error && <p className="mt-2 text-sm text-primary">{error}</p>}
    </div>
  );
}