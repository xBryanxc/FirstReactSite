import { useState } from "react";

function Nav() {
  let Links = [
    { name: "Product", link: "/" },
    { name: "Features", link: "/" },
    { name: "Marketplace", link: "/" },
    { name: "Company", link: "/" },
  ];

  const [open, setOpen] = useState(true);

  return (
    <header className="relative">
      <div className="bg-gray-900 pt-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                <span className="text-4xl text-indigo-500 mr-1 pt-2">
                  <ion-icon name="logo-react"></ion-icon>
                </span>
              </div>
              <div
                onClick={() => setOpen(!open)}
                className="text-3xl absolute right-8 top-1 cursor-pointer md:hidden text-gray-400"
              >
                <ion-icon name="menu-outline"></ion-icon>
              </div>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              {Links.map((menuElement) => {
                return (
                  <a
                    key={menuElement.name}
                    href={menuElement.link}
                    className="text-base font-medium text-white hover:text-gray-300"
                  >
                    {menuElement.name}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a
              href="/register"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
            >
              Start free trial
            </a>
          </div>
        </nav>
      </div>
      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden ${
          open ? "hidden" : ""
        }`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <span className="text-5xl text-indigo-500 mr-1 pt-2">
              <ion-icon name="logo-react"></ion-icon>
            </span>
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-gray-400"
            >
              <ion-icon name="close-outline"></ion-icon>
            </div>
          </div>
          <div className="pt-5 pb-6">
            <div className="px-2 space-y-1">
              {Links.map((menuElement) => {
                return (
                  <a
                  key={menuElement.name}
                    href={menuElement.link}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                  >
                    {menuElement.name}
                  </a>
                );
              })}
            </div>
            <div className="mt-6 px-5">
              <a
                href="/register"
                className="block text-center w-full py-3 px-4 rounded-md shadow bg-indigo-600 text-white font-medium hover:bg-indigo-700"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Nav;
