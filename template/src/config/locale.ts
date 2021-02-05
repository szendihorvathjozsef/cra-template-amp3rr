import { hu } from "date-fns/locale";

export type SupportedLanguages = "hu";

export type LocaleOptions = {};

export type SupportedLocales = {
  [key in SupportedLanguages]: {
    name: string;
    locale: Locale;
    options: LocaleOptions;
  };
};

const supportedLocales: { [key: string]: Locale } = { hu: hu };

export const SupportedLocale: SupportedLocales = {
  hu: {
    name: "Magyar",
    locale: hu,
    options: {},
  },
};

export default supportedLocales;
