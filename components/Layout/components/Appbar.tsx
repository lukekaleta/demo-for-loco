import { LanguageSwitcher } from "components/LanguageSwitcher"
import { Typography } from "components/Typography"
import { useTranslation } from "react-i18next"

const Appbar = () => {
  const { t } = useTranslation()

  return (
    <div className="flex justify-between items-center w-full px-10 py-5 text-center bg-sky-900 text-white">
      <div>
        <Typography variant="h5" uppercase>
          {t`Maybe some application`}
        </Typography>
      </div>
      <div>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

export default Appbar