import type { AppProps } from 'next/app'

import 'services/i18n'
import 'tailwindcss/tailwind.css'
// Providers
import MasterProvider from 'providers/master.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MasterProvider>
      <Component {...pageProps} />
    </MasterProvider>
  )
}

export default MyApp
