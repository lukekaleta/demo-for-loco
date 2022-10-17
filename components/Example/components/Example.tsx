import { LanguageSwitcher } from "components/LanguageSwitcher"
import { Trans, useTranslation } from "react-i18next"

function Example() {
  const { t } = useTranslation()

  const text = 0

  return (
    <div>
      <div>
        <LanguageSwitcher />
      </div>
      <h1>
        {t`Hello world`}
      </h1>
      <h2>
        {t`This is normal example text`}
      </h2>
      <h2>
        <Trans id="This is text with variable NUMBER"/>
      </h2>
    </div>
  )
}

export default Example