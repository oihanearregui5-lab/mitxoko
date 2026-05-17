import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { es } from "./es";
import { eu } from "./eu";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      es: { translation: es },
      eu: { translation: eu },
    },
    lng: typeof window !== "undefined" ? localStorage.getItem("lang") || "es" : "es",
    fallbackLng: "es",
    interpolation: { escapeValue: false },
  });
}

export default i18n;