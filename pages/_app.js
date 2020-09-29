import SEO from '../next-seo.config'
import { NextSeo } from 'next-seo'
import '../styles/index.css'
import Head from '../components/siteHead'

function MyApp({ Component, pageProps }) {
  const [isProd, setisProd] = React.useState(false);
  React.useEffect(() => {
    const isProd = window?.location?.host.split(':')[0] === 'ps5news.today';
  }, []);

  return (
    <>
      <NextSeo {...SEO}/>
      <Head />
      <Component {...pageProps} />
      {/*<!-- Fathom - simple website analytics - https://github.com/usefathom/fathom --> */}
      { isProd && <script dangerouslySetInnerHTML={{
        __html: `
      (function(f, a, t, h, o, m){
        a[h]=a[h]||function(){
          (a[h].q=a[h].q||[]).push(arguments)
        };
        o=f.createElement('script'),
        m=f.getElementsByTagName('script')[0];
        o.async=1; o.src=t; o.id='fathom-script';
        m.parentNode.insertBefore(o,m)
      })(document, window, '//stats.interweblabs.app/tracker.js', 'fathom');
      fathom('set', 'siteId', 'XYAEY');
      fathom('trackPageview');
      `}} /> }
      {/* <!-- / Fathom --> */}
    </>
  )
}

export default MyApp
