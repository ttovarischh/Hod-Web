import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import ru from "./ru";

const LANGUAGES = {
  en,
  ru,
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
  type: "languageDetector",
  async: true,
  detect: (callback: any) => {
    const language = localStorage.getItem("user-language");
    if (!language) {
      console.log("No language is set, choosing English as fallback");
      callback("ru");
      return;
    }
    callback(language);
  },
  init: () => {},
  cacheUserLanguage: (language: any) => {
    localStorage.setItem("user-language", language);
  },
};

i18n
  // @ts-ignore
  .use(LANGUAGE_DETECTOR)
  .use(initReactI18next)
  .init({
    resources: LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    returnNull: false,
  });
