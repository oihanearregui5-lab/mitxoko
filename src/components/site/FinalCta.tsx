import { useTranslation } from "react-i18next";
import { Reveal } from "./Reveal";
import { PrimaryButton } from "./PrimaryButton";
import { MessageCircle } from "lucide-react";

export function FinalCta() {
  const { t } = useTranslation();
  return (
    <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
      <Reveal>
        <div className="rounded-3xl bg-foreground text-background px-8 py-16 lg:px-20 lg:py-24 relative overflow-hidden">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02]">{t("finalCta.title")}</h2>
            <p className="mt-6 text-lg opacity-80 max-w-xl">{t("finalCta.body")}</p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <PrimaryButton to="/contacto">{t("finalCta.primary")}</PrimaryButton>
              <a
                href="https://wa.me/34600000000"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 link-underline"
              >
                <MessageCircle size={16} /> {t("finalCta.whatsapp")}
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}