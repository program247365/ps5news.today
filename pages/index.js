import unified from 'unified'
import parse from 'remark-parse'
import remark2react from 'remark-react'
import Airtable from "airtable"
// import Nav from '../components/nav'
import Hero from "../components/hero"
import Head from "../components/siteHead"
import Image from 'next/image'

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
      fields: ["Page Title", "URL", "Article Date", "Image", "Excerpt", "Tags"],
      sort: [{ field: "Article Date", direction: "desc" }],
    })
    .all();

  const articles = records.map((article) => {
    return {
      title: article.get("Page Title"),
      url: article.get("URL"),
      date: new Date(article.get("Article Date")).toLocaleDateString(),
      time: new Date(article.get("Article Date")).toLocaleTimeString(),
      image: article.get("Image"),
      excerpt: article.get("Excerpt"),
      tags: article.get("Tags"),
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
      <Head title="Homepage" />
      {/* <Nav /> */}
      <div className="grid items-center">
        <Hero />
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
  );
}

function Article({ title, url, date, time, image, excerpt, tags }) {
  const largeImageUrl = image[0]?.thumbnails?.large?.url; // TODO: fallback image for not one here
  return (
    <div className="relative bg-white border rounded-lg overflow-hidden sm:w-full sm:m-1 md:px-2 md:w-1/3 lg:px-0 lg:w-1/4 lg:m-1 xl:my-2 xl:m-1 xl:pb-4">
      <a href={url} target="_blank" rel="noopener">
        <Image
          className="h-48 bg-cover bg-center"
          src={largeImageUrl}
          width="385"
          height="235"
        ></Image>
      </a>
      <div className="p-6">
        <h3 className="font-semibold text-lg leading-tight">
          <a href={url} target="_blank" rel="noopener">
            {title}
          </a>
        </h3>
        <div className="mt-1">
          <span className="text-gray-600 text-sm">
            {date} @ {time}
          </span>
        </div>
        <div className="mt-1">
          <span className="text-gray-600 text-sm">
            {unified().use(parse).use(remark2react).processSync(excerpt).result}
          </span>
        </div>
      </div>
      <span className="text-black-100 font-semibold text-sm bg-yellow-400 sm:p-2 rounded-md p-1 xl:px-4 xl:mx-3 absolute top-0 right-0 m-3">
        {tags}
      </span>
    </div>
  );
}
