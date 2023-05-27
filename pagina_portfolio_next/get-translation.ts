import "server-only";
import type { Locale } from "./i18n-config";

const translations = {
  en: () =>
    import("./src/i18n/locale/en.json").then((module) => module.default),
  pt: () =>
    import("./src/i18n/locale/pt.json").then((module) => module.default),
};

export const getTranslation = async (locale: Locale) => translations[locale]();
