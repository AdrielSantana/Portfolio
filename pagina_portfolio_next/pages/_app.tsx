import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/styles/main.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
