import React, { useEffect } from 'react'
import SEO from '../next-seo.config'
import { NextSeo } from 'next-seo'
import '../styles/index.css'
import Head from '../components/siteHead'
import Router from 'next/router'
import * as Fathom from 'fathom-client'

// Record a pageview when route changes
Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (window.fathom !== undefined) {
      const FATHOM_INCLUDE_URL = 'ps5news.today'
      const FATHOM_TRACKING_JS_URL = '//stats.interweblabs.app/tracker.js'
      // Initialize Fathom when the app loads
      Fathom.load('XYAEY', {
        includedDomains: [FATHOM_INCLUDE_URL],
        excludedDomains: ['localhost:3000, localhost:3001, *.vercel.app'],
        url: FATHOM_TRACKING_JS_URL,
        honorDNT: true,
      })
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
