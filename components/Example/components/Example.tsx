import { i18n } from '@lingui/core'
import { LanguageSwitcher } from "components/LanguageSwitcher"
import { useTranslation } from "react-i18next"

function Example() {
  const { t } = useTranslation()

  return (
    <div>
      <div>
        <LanguageSwitcher />
      </div>
      <h1>
        {t`Hello world`}
      </h1>
    </div>
  )
}

export default Example