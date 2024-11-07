import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../messages/en.json";
import arTranslations from "../messages/ar.json";

export const AppLanguage = {
  English: "en",
  Arabic: "ar",
};

// Define resources
const resources = {
  en: { translation: enTranslations },
  ar: { translation: arTranslations },
};

// Detect user's language from localStorage or default to "en"
const getUserLanguage = () => {
  if (typeof window !== "undefined") {
    return window.localStorage.getItem("i18nextLng") || "en";
  }
  return "en";
};

// Initialize i18n
i18n.use(initReactI18next).init({
  resources,
  lng: getUserLanguage(), // Set initial language from localStorage or default
  fallbackLng: "en",       // Default fallback
  interpolation: {
    escapeValue: false,
  },
});

// Update language in localStorage when it changes
if (typeof window !== "undefined") {
  i18n.on("languageChanged", (lng) => {
    window.localStorage.setItem("i18nextLng", lng);
  });
}

export default i18n;
