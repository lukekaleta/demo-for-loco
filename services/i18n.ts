import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const translationCS = require('../locales/cs/cs.json')
const translationEN = require('../locales/en/en.json')

const resources = {
  cs: { translation: translationCS },
  en: { translation: translationEN },
}

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'cs',
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