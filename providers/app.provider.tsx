import { createContext, ReactNode, useCallback } from "react";

import { localStorages } from "lib/localStorages";
import { loadFromStorage } from "utils/stores.utils";
import { useTranslation } from "react-i18next";

type Context = {
  setLanguage: (lang: string) => void
  getLanguage: string | null
}

type AppProviderProps = {
  children: ReactNode
}

export const AppContext = createContext<Context>(null as any)

const AppProvider = (props: AppProviderProps) => {
  // props
  const { children } = props

  const { i18n } = useTranslation()

  // LANGUAGE
  const getLanguage = loadFromStorage(localStorages.i18n) || i18n.language

  const setLanguage = useCallback((lang: string) => {
    i18n.changeLanguage(lang)
  }, [])

  return (
    <AppContext.Provider
      value={{
        getLanguage,
        setLanguage
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider