import { createContext, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { localStorages } from "lib/localStorages";
import { loadFromStorage } from "utils/stores.utils";

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
  // hooks
  const { i18n } = useTranslation()

  // LANGUAGE
  const getLanguage = loadFromStorage(localStorages.i18n)

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

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