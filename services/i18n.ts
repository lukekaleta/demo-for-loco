import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { Language } from "types"

const translationCS = require('../locales/cs/messages')
const translationEN = require('../locales/en/messages')
const translationDE = require('../locales/de/messages')
const translationES = require('../locales/es/messages')

const resources = {
  cs: { translation: translationCS.messages },
  en: { translation: translationEN.messages },
  de: { translation: translationDE.messages },
  es: { translation: translationES.messages },
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: Language.Czech,
    // whitelist: Resources,
    // debug: true,
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n