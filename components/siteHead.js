import Head from 'next/head'

export default function SiteHead() {
    return (
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="/images/favicons/site.webmanifest"/>
            <link rel="shortcut icon" href="/images/favicons/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="msapplication-config" content="/images/favicons/browserconfig.xml"/>
            <meta name="theme-color" content="#ffffff"/>
            <script data-name="BMC-Widget" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="program247365" data-description="Support me on Buy me a coffee!" data-message="Like this site? Consider supporting me to keep adding great content." data-color="#79D6B5" data-position="" data-x_margin="18" data-y_margin="18"></script>
        </Head>
  );
}