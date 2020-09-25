import Countdown from '../components/countdown'

export default function Hero() {
    return (
    <div className="relative bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-center">
                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    PS5 News
                    <br className="xl:hidden" />
                    <span style={{ color: '#27ccfc'}} className="text-blue-acccent"> Today</span>
                    </h2>
                    <p style={{ color: '#fdaf41'}} className="mt-3 text-base text-bolder sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Curated news on Sony's latest console.
                    </p>
                    <Countdown />
                </div>
                </main>
            </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/images/ps5.png" alt="PS5 Illustration" />
        </div>
  </div>
  );
}