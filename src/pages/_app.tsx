import { NextSeo } from 'next-seo'
import type { AppPropsWithLayout } from 'next/app'

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <NextSeo
        titleTemplate={'%2 | Next microCMS Practice'}
        defaultTitle={'Next microCMS Practice'}
      />
      {/* {process.env.DEPLOY_ENV === 'production' && (
        <GoogleTagManager
          googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
        />
      )} */}
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}
