import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
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
