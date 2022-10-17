import { useContext } from "react"

import { Button } from "components/Button"
import { AppContext } from "providers/app.provider"
import { Trans } from "react-i18next"
import { buttons } from "../constants"
import { IButtons } from "../types/buttons"

const LanguageSwitcher = () => {
  const { setLanguage } = useContext(AppContext)

  return (
    <div>
      {buttons.map((button: IButtons) => (
        <Button
          onClick={() => setLanguage(button.language)}
          className="ml-2"
          key={button.key}>
          <Trans id={button.name}>{button.name}</Trans>
        </Button>
      ))}
    </div>
  )
}

export default LanguageSwitcher