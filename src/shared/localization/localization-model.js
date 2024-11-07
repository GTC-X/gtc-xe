import { AppLanguage } from "../../i18n";

export const supportedLanguages = {
  [AppLanguage.English]: {
    code: AppLanguage.English,
    materialLocale: "enUs",
    name: "English",
    shortName: "EN",
    direction: "ltr",
    fontFamily: "Lusail",
    isLeftDirection: true,
  },
  [AppLanguage.Arabic]: {
    code: AppLanguage.Arabic,
    materialLocale: "arEg",
    name: "العربية",
    shortName: "عربي",
    direction: "rtl",
    fontFamily: "Lusail",
    isLeftDirection: false,
  },
};

export const supportedLanguagesCodes = Object.keys(supportedLanguages);

