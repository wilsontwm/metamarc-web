import { ReactSVG } from "react-svg";

export default function Footer() {
  return (
    <div className="bg-black text-white p-16 grid grid-cols-1 sm:grid-cols-2">
      <div className="hidden sm:block px-16">
        <a href="/">
          <span className="sr-only">Metamarc.io</span>
          <img className="h-20 w-20" src="/img/logo.png" alt="Metamarc.io" />
        </a>
        <div className="mt-24">
          <button type="button" className="w-8 h-8 inline-flex items-center p-1 border border-gray-400 text-gray-400 hover:border-gray-200 hover:text-gray-200 bg-transparent rounded-full shadow-sm ">
            <ReactSVG src="/svg/facebook.svg" />
          </button>
          <button type="button" className="w-8 h-8 ml-4 inline-flex items-center p-1 border border-gray-400 text-gray-400 hover:border-gray-200 hover:text-gray-200 bg-transparent rounded-full shadow-sm ">
            <ReactSVG src="/svg/instagram.svg" />
          </button>
        </div>
      </div>
      <div className="">
        {/* Only show up in small screen*/}
        <div className="sm:hidden mb-2 flex items-center  justify-between">
          <a href="/" className="">
            <span className="sr-only">Metamarc.io</span>
            <img className="h-12 w-12" src="/img/logo.png" alt="Metamarc.io" />
          </a>
          <div className="">
            <button type="button" className="w-8 h-8 inline-flex items-center p-1 border border-gray-400 text-gray-400 hover:border-gray-200 hover:text-gray-200 bg-transparent rounded-full shadow-sm ">
              <ReactSVG src="/svg/facebook.svg" />
            </button>
            <button type="button" className="w-8 h-8 ml-4 inline-flex items-center p-1 border border-gray-400 text-gray-400 hover:border-gray-200 hover:text-gray-200 bg-transparent rounded-full shadow-sm ">
              <ReactSVG src="/svg/instagram.svg" />
            </button>
          </div>
        </div>
        <div className="text-lg font-semibold">Subscribe to our newsletter</div>
        <input type="email" name="newsletter-email" id="newsletter-email" className="text-black flex-1 block w-full sm:w-64 md:w-96  p-2 mt-2 focus:outline-none" placeholder="Email Address" />
        <div className="grid grid-cols-2 mt-16">
          <div className="">
            <div className="font-semibold">Metamarc</div>
            <div className="font-light mt-2 ">
              <a href="/" className="block my-1 text-gray-300 hover:text-gray-100">
                Explore
              </a>
              <a href="/" className="block my-1 text-gray-300 hover:text-gray-100">
                Celebrities
              </a>
              <a href="/" className="block my-1 text-gray-300 hover:text-gray-100">
                How it works
              </a>
              <a href="/" className="block my-1 text-gray-300 hover:text-gray-100">
                FAQ
              </a>
            </div>
          </div>
          <div className="">
            <div className="font-semibold">Company</div>
            <div className="font-light mt-2 ">
              <a href="#" className="block my-1 text-gray-300 hover:text-gray-100">
                About Us
              </a>
              <a href="#" className="block my-1 text-gray-300 hover:text-gray-100">
                Terms and Conditions
              </a>
              <a href="#" className="block my-1 text-gray-300 hover:text-gray-100">
                Career
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
