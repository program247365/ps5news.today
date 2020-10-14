import SEO from "../next-seo.config";
import { NextSeo } from "next-seo";
import "../styles/index.css";
import Head from "../components/siteHead";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextSeo {...SEO} />
      <Head />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
