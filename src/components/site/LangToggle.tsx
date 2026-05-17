import { useTranslation } from "react-i18next";

export function LangToggle({ className = "" }: { className?: string }) {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("eu") ? "eu" : "es";

  const set = (l: "es" | "eu") => {
    i18n.changeLanguage(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  return (
    <div className={`inline-flex items-center gap-2 text-xs tracking-widest uppercase ${className}`}>
      <button
        onClick={() => set("es")}
        className={`transition-colors ${lang === "es" ? "text-foreground border-b border-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <span className="text-muted-foreground/50">/</span>
      <button
        onClick={() => set("eu")}
        className={`transition-colors ${lang === "eu" ? "text-foreground border-b border-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "eu"}
      >
        EU
      </button>
    </div>
  );
}