import { useContext } from "react"

import { AppContext } from "providers/app.provider"
import { buttons } from "../constants"
import { IButtons } from "../types/buttons"
import { Trans, useTranslation } from "react-i18next"

const LanguageSwitcher = () => {
  const { setLanguage } = useContext(AppContext)
  const { t } = useTranslation()

  return (
    <div>
      {buttons.map((button: IButtons) => (
        <button
          onClick={() => setLanguage(button.language)}
          key={button.key}>
          <Trans id={button.name}>{button.name}</Trans>
        </button>
      ))}
    </div>
  )
}

export default LanguageSwitcher