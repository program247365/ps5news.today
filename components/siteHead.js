import Head from "next/head";

const isProd =
  typeof window !== "undefined" && window.location.host === "ps5news.today";

export default function SiteHead({title}) {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/images/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/images/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/images/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/images/favicons/site.webmanifest" />
      <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content="/images/favicons/browserconfig.xml"
      />
      <meta name="theme-color" content="#ffffff" />
      <title>PS5 News Today - {title}</title>
      {isProd && (
        <script
          dangerouslySetInnerHTML={{
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
              `,
          }}
        />
      )}
      <script
        data-name="BMC-Widget"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="program247365"
        data-description="Support me on Buy me a coffee!"
        data-message="Like this site? Consider supporting me to keep adding great content."
        data-color="#79D6B5"
        data-position=""
        data-x_margin="18"
        data-y_margin="18"
      ></script>
    </Head>
  );
}
