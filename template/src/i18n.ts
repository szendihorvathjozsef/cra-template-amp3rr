import i18next from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import numeral from "numeral";
import { hu } from "date-fns/locale";
import { format as dateFormat } from "date-fns";

import { SupportedLanguages, SupportedLocale } from "config/locale";

numeral.register("locale", "hu", {
  delimiters: {
    thousands: " ",
    decimal: ",",
  },
  currency: {
    symbol: "Ft",
  },
  abbreviations: { thousand: "E", million: "m", billion: "M", trillion: "b" },
  ordinal: function () {
    return ".";
  },
});

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ["common", "validation", "notification"],
    supportedLngs: ["hu"],
    fallbackLng: "hu",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        const lang = SupportedLocale[lng as SupportedLanguages] ?? hu;

        if (value) {
          if (format === "date") {
            return dateFormat(value, "P", { locale: lang });
          }
          if (format === "time") {
            return dateFormat(value, "p", { locale: lang });
          }
          if (format === "datetime") {
            return dateFormat(value, "Pp", { locale: lang });
          }

          if (format === "number") {
            numeral.locale(lng);
            return numeral(value).format("0,0.[000]");
          }

          if (format === "currency") {
            numeral.locale(lng);
            return numeral(value).format("0,0.[000] $");
          }
        }
        return value;
      },
    },
  });
