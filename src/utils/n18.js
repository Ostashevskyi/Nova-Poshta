import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "ua",
    detection: {
      order: ["cookie", "queryString"],
      cache: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{ns}}/{{lng}}.json",
    },
    ns: ["common", "home", "header", "pricePage", "trackingPage"],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
