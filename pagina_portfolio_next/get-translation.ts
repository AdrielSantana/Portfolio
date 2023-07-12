import "server-only";
import type { Locale } from "./i18n-config";

const translations = {
  en: () =>
    import("./src/i18n/locale/en.json").then((module) => module.default),
  "pt-BR": () =>
    import("./src/i18n/locale/pt-BR.json").then((module) => module.default),
};

export const getTranslation = async (locale: Locale) => translations[locale]();
