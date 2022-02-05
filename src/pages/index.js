import Carousel from "../components/carousel";

const carouselItems = [
  {
    imageUrl: "/img/featured_sample_1.jpeg",
    name: "Dan Reynold",
    redirectUrl: "/explore",
  },
  {
    imageUrl: "/img/featured_sample_2.jpeg",
    name: "Taylor Swift",
    redirectUrl: "/explore",
  },
  {
    imageUrl: "/img/featured_sample_3.jpeg",
    name: "Max Spiener",
    redirectUrl: "/explore",
  },
];

export default function Home() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <img className="h-16 w-auto mx-auto sm:h-18" src="/img/logo.png" alt="Metamarc.io" />
            <h3 className="mt-8 text-4xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">The first NFT platform for celebrities</h3>
            <div className="mt-16">
              <a href="#" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-1 border border-transparent shadow-sm text-white font-medium text-white bg-black hover:bg-gray-600">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>
      <Carousel slides={carouselItems} />
    </div>
  );
}
