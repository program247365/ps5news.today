export default function AffiliateLink({ title, url, date, imageURL, description, tags, price }) {
    return (
      <div className="relative bg-white border rounded-lg overflow-hidden sm:w-full sm:m-1 md:px-2 md:w-1/3 lg:px-0 lg:w-1/4 lg:m-1 xl:my-2 xl:m-1 xl:pb-4">
      <a href={url} target="_blank" rel="noopener" ><div className="h-48 bg-no-repeat bg-center" style={{ backgroundImage: `url(${imageURL})` }}></div></a>
        <div className="p-6">
          <h4 className="font-semibold text-lg leading-tight"><a href={url} target="_blank" rel="noopener">{title} @ {price}</a></h4>
          <div className="mt-1">
            <span className="text-gray-600 text-sm">Release Date: {date}</span>
          </div>
          <div className="mt-1">
            <span className="text-gray-600 text-sm">{description}</span>
          </div>
        </div>
        <span className="text-black-100 font-semibold text-sm bg-yellow-400 sm:p-2 rounded-md p-1 xl:px-4 xl:mx-3 absolute top-0 right-0 m-3">{tags}</span>
      </div>
    );
  }