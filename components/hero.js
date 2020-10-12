import Countdown from './countdown'

export default function Hero() {
    return (
        <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/" aria-label="Home">
                      <img className="h-8 w-auto sm:h-10" src="/images/logo/ps5-sm.png" alt="Logo" />
                    </a>
                  </div>
                </div>
                <div className="md:block md:ml-10 md:pr-4">
                  {/* <a href="#" className="ml-8 font-medium text-black-500 hover:text-black-900 transition duration-150 ease-in-out">Games</a>
                  {/* <a href="#" className="ml-8 font-medium text-black-500 hover:text-black-900 transition duration-150 ease-in-out">Videos</a> */ }
                  <a href="/" className="ml-8 font-medium text-black-500 hover:text-black-900 transition duration-150 ease-in-out hover:bg-blue-accent rounded-md bg-orange-accent bg-opacity-25 p-2">Home</a>
                  <a href="/shop" className="ml-8 font-medium text-black-500 hover:text-black-900 transition duration-150 ease-in-out hover:bg-blue-accent rounded-md bg-orange-accent bg-opacity-25 p-2">Shop</a>
                  {/* <a href="#" className="ml-8 font-medium text-black-500 hover:text-black-900 transition duration-150 ease-in-out">News</a> */ }
                  {/* <a href="#" className="ml-8 font-medium text-black-600 hover:text-black-900 transition duration-150 ease-in-out">About</a> */ }
                </div>
              </nav>
            </div>
            <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="text-center">
                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    PS5 News
                    <span style={{ color: '#27ccfc'}} className="text-blue-acccent"> Today</span>
                    </h2>
                    <p style={{ color: '#fdaf41'}} className="mt-3 text-base text-bolder sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Curated news on Sony's latest console.
                    </p>
                    <Countdown />
                </div>
            </main>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 xl:block lg:block hidden">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/logo/ps5-lg.png" alt="PS5 Illustration" />
          </div>
        </div>
      </div>

  );
}