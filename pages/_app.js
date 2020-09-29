import { useEffect } from 'react'
import { useRouter } from 'next/router'
import SEO from '../next-seo.config'
import { NextSeo } from 'next-seo'
import '../styles/index.css'
import Head from '../components/siteHead'
import * as Fathom from 'fathom-client'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const router = useRouter()
    const FATHOM_TRACKING_JS_URL = '//stats.interweblabs.app/tracker.js'
    // Initialize Fathom when the app loads
    Fathom.load('XYAEY', {
      includedDomains: ['ps5news.today'],
      excludedDomains: ["vercel.app", "now.sh", "localhost"],
      url: FATHOM_TRACKING_JS_URL,
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <>
      <NextSeo {...SEO}/>
      <Head />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
