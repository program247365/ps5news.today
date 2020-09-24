import Airtable from 'airtable';
// import Nav from '../components/nav'

// TODO: address - https://tailwindcss.com/docs/upcoming-changes
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_BASE_NAME = process.env.AIRTABLE_BASE_NAME;

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base(AIRTABLE_BASE_ID)(AIRTABLE_BASE_NAME)
    .select({
      fields: ['Page Title', 'URL', 'Article Date', 'Image', 'Excerpt', 'Tags'],
      sort: [{field: "Article Date", direction: "desc"}],
    })
    .all();

  const articles = records.map((article) => {
    return {
      title: article.get('Page Title'),
      url: article.get('URL'),
      date: new Date(article.get('Article Date')).toLocaleDateString(),
      time: new Date(article.get('Article Date')).toLocaleTimeString(),
      image: article.get('Image'),
      excerpt: article.get('Excerpt'),
      tags: article.get('Tags'),
    };
  });

  return {
    props: {
      articles,
    },
  };
}

export default function IndexPage({ articles }) {
  return (
    <div>
      { /* <Nav /> */ }
      <div className="py-5 grid items-center">
        <h1 className="text-5xl text-center text-accent-1">
          PS5 News Today
        </h1>
        <h2 className="text-2xl text-center text-accent-1">All the news you want on Sony's latest console.</h2>
        <div className="flex flex-wrap overflow-hidden content-center justify-center">
          {articles.map((article) => (
            <Article
              key={article.title}
              title={article.title}
              url={article.url}
              date={article.date}
              time={article.time}
              image={article.image}
              excerpt={article.excerpt}
              tags={article.tags}
            />
          ))}
      </div>
      </div>
    </div>
  )
}

function Article({ title, url, date, time, image, excerpt, tags }) {
  const largeImageUrl = image[0]?.thumbnails?.large?.url; // TODO: fallback image for not one here
  return (
    <div className="bg-white border rounded-lg overflow-hidden sm:w-full sm:m-1 md:px-2 md:w-1/3 lg:px-0 lg:w-1/4 lg:m-1 xl:my-2 xl:m-1 xl:px-5">
    <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${largeImageUrl})` }}>
    </div>
      <div className="p-6">
        <h4 className="font-semibold text-lg leading-tight"><a href={url} target="_blank" rel="noopener">{title}</a></h4>
        <div className="mt-1">
          <span className="text-gray-600 text-sm">{date} @ {time}</span>
        </div>
        <div className="mt-1">
          <span className="text-gray-600 text-sm">{excerpt}</span>
        </div>
      </div>
      <span className="text-white text-sm bg-yellow-400 rounded-lg p-1">{tags}</span>
    </div>
  );
}

