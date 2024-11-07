import { useTranslation } from "react-i18next";
import { supportedLanguages } from "./localization-model";

export const useLanguage = () => {
  const [, { language, changeLanguage }] = useTranslation();
  const currentLanguage = supportedLanguages[language];

  const switchLanguage = (language) => {
    changeLanguage(language);
  };

  return [currentLanguage, switchLanguage];
};
