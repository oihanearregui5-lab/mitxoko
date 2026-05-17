import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import {
  Check,
  MessageCircle,
  MapPin,
  Camera,
  Search,
  ShieldCheck,
  Sparkles,
  Smartphone,
  Layers,
  Send,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/SectionHeader";
import { RotatingWord } from "@/components/site/RotatingWord";
import { PrimaryButton, GhostButton } from "@/components/site/PrimaryButton";
import { TemplateCard, templates } from "@/components/site/TemplateCard";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "mitxoko — Diseño web para comercios en Pamplona · 300 €, 2 semanas" },
      {
        name: "description",
        content:
          "Diseño webs profesionales para peluquerías, bares, fisios y cafeterías de Pamplona y comarca. 300 €, sin cuotas, entregadas en 2 semanas.",
      },
      { property: "og:title", content: "mitxoko — Diseño web en Pamplona" },
      { property: "og:description", content: "Webs profesionales para comercios de Pamplona. 300 €, sin cuotas." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const includeIcons = [Layers, Smartphone, MessageCircle, MapPin, Camera, Search, ShieldCheck, Sparkles, MessageCircle];

function HomePage() {
  const { t } = useTranslation();
  const rotating = t("hero.rotating", { returnObjects: true }) as string[];
  const steps = t("how.steps", { returnObjects: true }) as { title: string; body: string }[];
  const includeItems = t("includes.items", { returnObjects: true }) as string[];
  const faqItems = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-12 lg:pt-20 pb-24 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-8 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-muted-foreground/60" />
              {t("hero.eyebrow")}
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-end">
            <Reveal>
              <h1 className="font-display text-[2.75rem] leading-[1.02] md:text-7xl lg:text-[5.5rem] tracking-tight">
                {t("hero.titlePre")}{" "}
                <RotatingWord words={rotating} />
                <br />
                <span className="text-muted-foreground/80">{t("hero.titlePost")}</span>
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="lg:pb-4">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  {t("hero.subtitle")}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <PrimaryButton to="/contacto">{t("hero.primary")}</PrimaryButton>
                  <GhostButton to="/plantillas">{t("hero.secondary")}</GhostButton>
                </div>
              </div>
            </Reveal>
          </div>

          {/* hero strip */}
          <Reveal delay={0.25} className="mt-20 lg:mt-28">
            <div className="editorial-rule" />
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {[
                ["300 €", "Precio único"],
                ["2 sem.", "Tiempo de entrega"],
                ["1 mes", "Cambios gratis"],
                ["Iruñea", "Local y cercana"],
              ].map(([big, small]) => (
                <div key={small} className="px-6 py-8 first:pl-0">
                  <p className="font-display text-3xl md:text-4xl">{big}</p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{small}</p>
                </div>
              ))}
            </div>
            <div className="editorial-rule" />
          </Reveal>
        </div>

        {/* decorative blob */}
        <div className="pointer-events-none absolute -top-40 -right-40 size-[36rem] rounded-full bg-primary/10 blur-3xl" />
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeader number="01" kicker={t("how.kicker")} title={t("how.title")} />
        <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="border-t border-border pt-8">
                <span className="font-display text-7xl text-primary/60 italic">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INCLUDES */}
      <section className="bg-secondary/50 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
          <SectionHeader number="02" kicker={t("includes.kicker")} title={t("includes.title")} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-6">
            {includeItems.map((item, i) => {
              const Icon = includeIcons[i % includeIcons.length] ?? Check;
              return (
                <Reveal key={item} delay={i * 0.04}>
                  <div className="flex gap-4 items-start py-4 border-b border-border/60">
                    <span className="mt-1 grid place-items-center size-9 rounded-full bg-background border border-border text-primary shrink-0">
                      <Icon size={16} />
                    </span>
                    <p className="text-base leading-relaxed">{item}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEMPLATES TEASER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeader number="03" kicker={t("templatesTeaser.kicker")} title={t("templatesTeaser.title")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {templates.slice(0, 4).map((tpl) => (
            <TemplateCard key={tpl.slug} t={tpl} />
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <GhostButton to="/plantillas">{t("templatesTeaser.cta")}</GhostButton>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <SectionHeader number="04" kicker={t("faq.kicker")} title={t("faq.title")} />
        <div className="max-w-3xl mx-auto">
          {faqItems.map((it, i) => (
            <Faq key={it.q} q={it.q} a={it.a} i={i} />
          ))}
        </div>
      </section>

      <FinalCta />
    </SiteLayout>
  );
}

function Faq({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={i * 0.03}>
      <div className="border-b border-border">
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-xl md:text-2xl">{q}</span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} className="text-muted-foreground">
            <ChevronDown size={20} />
          </motion.span>
        </button>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <p className="pb-6 pr-12 text-muted-foreground leading-relaxed">{a}</p>
        </motion.div>
      </div>
    </Reveal>
  );
}

// quieting unused symbol warnings if any
void Link; void Send;