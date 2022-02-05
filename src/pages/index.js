import { Swiper, SwiperSlide } from "swiper/react";
import dayjs from "dayjs";
import { Mousewheel } from "swiper";
import Carousel from "../components/carousel";

import "swiper/css";
import NFTItem from "../components/nft_item";

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

const featuredItems = [
  {
    imageUrl: "/img/featured_sample_1.jpeg",
    name: "Dan Reynold",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc",
    redirectUrl: "/explore",
  },

  {
    imageUrl: "/img/featured_sample_2.jpeg",
    name: "Taylor Swift",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut en nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc",
    redirectUrl: "/explore",
  },

  {
    imageUrl: "/img/featured_sample_3.jpeg",
    name: "Max Spiener",
    description:
      "Lorem ipsum dolor sit amet, consecteturbore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc",
    redirectUrl: "/explore",
  },
  {
    imageUrl: "/img/featured_sample_4.jpeg",
    name: "Jay Z.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, o laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exc",
    redirectUrl: "/explore",
  },
];

const latestBiddingItems = [
  {
    id: "246865763868562852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350`,
    name: "Happy Ending",
    expiryAt: dayjs().add(Math.random(), "hour"),
    artistName: "Mike Shinoda",
    artistUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10) + 1}`,
    bidPrice: 200000,
  },
  {
    id: "2468674748562852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350`,
    name: "Walking on the moon",
    expiryAt: dayjs().add(Math.random(), "day"),
    artistName: "Tom Holland",
    artistUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10) + 1}`,
    bidPrice: 520000,
  },
  {
    id: "247547463868562852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350`,
    name: "Double-edged sword",
    expiryAt: dayjs().add(Math.random(), "day"),
    artistName: "Katy Perry",
    artistUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10) + 1}`,
    bidPrice: 5000,
  },
  {
    id: "2468657737362852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350`,
    name: "Wonderful & Horrible Together",
    expiryAt: dayjs().add(Math.random(), "hour"),
    artistName: "Robert Downey Jr.",
    artistUrl: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 10) + 1}`,
    bidPrice: 180000,
  },
];

const categoryItems = [
  {
    id: "246865763868562852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350?blur`,
    name: "Music",
  },
  {
    id: "2468674748562852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350?blur`,
    name: "Collection",
  },
  {
    id: "247547463868562852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350?blur`,
    name: "Art",
  },
  {
    id: "2468657737362852",
    imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 100) + 1}/600/350?blur`,
    name: "Video",
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
      {/* Featured section */}
      <div className="p-8 md:p-16">
        <h3 className="bg-black text-white px-6 py-2 text-xl font-bold">Featured</h3>
        <Swiper
          className="mt-8"
          modules={[Mousewheel]}
          mousewheel={true}
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 2,
            },
            960: {
              width: 960,
              slidesPerView: 3,
            },
            1280: {
              width: 1280,
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {featuredItems?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={item.imageUrl} alt={item.name} className="w-full h-96 object-cover" />
                <div className="py-4 text-lg font-semibold">{item.name}</div>
                <div className="text-sm">{item.description}</div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Latest bidding section */}
      <div className="p-8 md:p-16">
        <h3 className="bg-black text-white px-6 py-2 text-xl font-bold">Latest bidding</h3>
        <div className="mt-8">
          {latestBiddingItems?.map((item, index) => {
            return <NFTItem key={index} item={item} />;
          })}
          {latestBiddingItems?.length > 0 ? (
            <div className="mt-8 text-center">
              <a href="#" className="whitespace-nowrap inline-flex items-center justify-center px-8 py-1 border border-transparent shadow-sm text-white font-medium text-white bg-black hover:bg-gray-600">
                View More
              </a>
            </div>
          ) : null}
        </div>
      </div>
      <hr className="mx-8 md:mx-16 my-8 border-4 border-black" />
      {/* Collection categories */}
      <div className="p-8 md:p-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {categoryItems?.map((item, index) => {
          return (
            <div key={index} className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full">
                <img className="object-cover w-full h-full rounded-full" src={item.imageUrl} />
                <span className="absolute w-full text-center font-semibold text-2xl text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{item.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
