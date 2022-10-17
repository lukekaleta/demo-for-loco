import { Typography } from "components/Typography"
import { useTranslation } from "react-i18next"

function Example() {
  const { t } = useTranslation()

  return (
    <div>
      <Typography variant="h1" className="text-white">
        {t`Hello world`}
      </Typography>
      <Typography variant="h2" className="text-white mt-4">
        {t`This is normal example text`}
      </Typography>
      <Typography variant="body1" className="text-white mt-10">
        {t`This text is really long and I dont know if it is translated really correctly in all languages`}
      </Typography>
      <Typography variant="body1" className="text-white mt-10">
        {t`This text is translated only in english and germany`}
      </Typography>
      <Typography variant="body1" className="text-white mt-10">
        {t`This text is missing in all languages`}
      </Typography>
    </div>
  )
}

export default Example