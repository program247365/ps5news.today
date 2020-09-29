const URL = 'https://ps5news.today'
const ogImageURL = `${URL}/images/seo/PS5NewsToday-og-image.png`

export default {
    openGraph: {
      title: 'PS5 News Today',
      description: 'Curated news on Sony\'s latest console.',
      type: 'website',
      locale: 'en_US',
      url: URL,
      images: [
        {
          url: ogImageURL,
          width: 1200,
          height: 1200,
          alt: 'PS5 News Today Logo',
        },
      ],
      site_name: 'PS5 News Today',
    }
  };