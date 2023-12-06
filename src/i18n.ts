import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationPL from "./locales/pl.json";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pl: {
        translation: translationPL,
      },
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;
