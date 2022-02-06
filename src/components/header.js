/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ShoppingCartIcon, UsersIcon, ChevronRightIcon, QuestionMarkCircleIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const menus = [
  {
    name: "Marketplace",
    description: "",
    href: "/",
    icon: ShoppingCartIcon,
  },
  {
    name: "Celebrities",
    description: "",
    href: "/",
    icon: UsersIcon,
  },
  {
    name: "How it works",
    description: "",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];

export default function Header() {
  return (
    <Popover className="relative bg-white sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 border-b-2 border-gray-100 ">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Metamarc</span>
              <img className="h-8 w-8" src="/img/logo.png" alt="Metamarc.io" />
            </a>
            <div className="ml-16">
              <div className="flex">
                <div className="flex rounded-md shadow-sm mr-16">
                  <div className="relative flex items-stretch focus-within:z-10">
                    <input type="text" name="search" id="search" className="focus:outline-none block w-full pl-1 sm:text-sm border-b-2 border-black" placeholder="Search" />
                  </div>
                  <button type="button" className="-ml-px relative inline-flex items-center space-x-2 p-2 text-sm font-medium text-black border-b-2 border-black outline-none ">
                    <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-16 my-2">
                  <a href="#" className="text-base font-medium text-black hover:text-gray-500">
                    Marketplace
                  </a>
                  <a href="#" className="text-base font-medium text-black hover:text-gray-500">
                    Celebrities
                  </a>
                  <a href="#" className="text-base font-medium text-black hover:text-gray-500">
                    How it works
                  </a>
                </Popover.Group>
              </div>
            </div>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-none lg:w-0">
            <a href="/login" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-12 py-1 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
              Login
            </a>
          </div>
        </div>
      </div>

      <Transition as={Fragment} enter="duration-200 ease-out" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="duration-100 ease-in" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className="h-8 w-auto" src="/img/logo.png" alt="Metamarc.io" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {menus.map((item) => (
                    <a key={item.name} href={item.href} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                      <item.icon className="flex-shrink-0 h-6 w-6 text-primary-600" aria-hidden="true" />
                      <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a href="/login" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700">
                  Login
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-primary-600 hover:text-primary-500">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
