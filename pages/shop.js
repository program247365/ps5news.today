// TODO: Make template shared across pages
import Airtable from "airtable";
import Hero from "../components/hero";
import AffiliateLink from "../components/affiliateLink";

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_BASE_NAME = "AffiliateLinks";

export async function getStaticProps() {
  const airtable = new Airtable({
    apiKey: AIRTABLE_API_KEY,
  });

  const records = await airtable
    .base(AIRTABLE_BASE_ID)(AIRTABLE_BASE_NAME)
    .select({
      fields: [
        "Title",
        "URL",
        "ReleaseDate",
        "Description",
        "ImageURL",
        "Tags",
        "Price",
      ],
      sort: [
        {
          field: "ReleaseDate",
          direction: "desc",
        },
      ],
    })
    .all();

  const links = records.map((link) => {
    return {
      title: link.get("Title"),
      url: link.get("URL"),
      description: link.get("Description"),
      date: link.get("ReleaseDate"),
      imageURL: link.get("ImageURL"),
      tags: link.get("Tags"),
      price: link.get("Price"),
    };
  });

  return {
    props: {
      links,
    },
  };
}

export default function ShopPage({ links }) {
  return (
    <div>
      {/* <Nav /> */}
      <div className="grid items-center">
        <Hero />
        <h1 className="text-1xl m-4 leading-10 font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Shop PS5 Consoles, Accessories, and Games
        </h1>
        <div className="flex flex-wrap overflow-hidden content-center justify-center">
          {links.map((link) => (
            <AffiliateLink
              key={link.title}
              title={link.title}
              url={link.url}
              date={link.date}
              imageURL={link.imageURL}
              description={link.description}
              tags={link.tags}
              price={link.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
