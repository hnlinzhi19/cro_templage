import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next",
    },
  },
};

const lng =  "en";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng,
    fallbackLng: lng,
    interpolation: {
      escapeValue: false,
    },
  });
