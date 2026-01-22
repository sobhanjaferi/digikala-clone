"use client";

import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import StartIcon from "@mui/icons-material/Start";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { useAppContext } from "@/context/appContext";
import SearchIpt from "./SearchIpt";
import SingingBtn from "./SinginBtn";
import HeaderNavBar from "./headerNavBar";
import Link from "next/link";
import { useEffect, useState } from "react";

function HeaderSearchBar() {
  const { searchBar, setSearchBar } = useAppContext();

  const [screenScrollSize, setScreenScrollSize] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScreenScrollSize(window.scrollY >= 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <div
        className={`flex justify-evenly lg:justify-between items-center lg:-mt-5 fixed top-0 lg:top-5 left-0 right-0 bg-white z-100 w-full h-20 lg:px-10 xl:pr-40 xl:px-30 ${
          screenScrollSize ? "shadow-md shadow-gray-700/80" : ""
        }`}
      >
        <SingingBtn />

        <div className="ml-5 sm:ml-10 p-2 rounded-full border border-gray-300 text-gray-500 lg:hidden flex justify-center items-center cursor-pointer">
          <NotificationsNoneIcon />
        </div>

        <div className="flex justify-end sm:justify-center lg:justify-between items-center w-200">
          <div
            className="relative w-[85%] mr-5 lg:w-150 xl:w-full"
            onClick={() => {
              let newSearchBar = !searchBar;

              setSearchBar(newSearchBar);

              localStorage.setItem("searchBar", JSON.stringify(newSearchBar));
            }}
          >
            <div className="absolute left-3 top-2.5 text-gray-600">
              <FilterCenterFocusIcon />
            </div>

            <p className="text-red-600 font-bold absolute right-28 top-3">
              دیجی کالا
            </p>

            <SearchIpt />
          </div>

          <Link href="/">
            <img
              src="./images/digikala-header.png"
              alt="digikalaHeader"
              className="w-40 h-6 hidden lg:block ml-5"
            />
          </Link>
        </div>
      </div>

      <section
        className={`mb-5 lg:mb-0 lg:mt-15 pb-1 ${
          screenScrollSize ? "" : "shadow-md shadow-gray-700/80"
        }`}
      >
        <HeaderNavBar />
      </section>

      <div
        className={`bg-white z-100 w-screen h-screen fixed top-0 left-0 right-0 bottom-0 transition-all duration-700 ease-in-out Shadow ${
          searchBar ? " translate-y-0" : " translate-y-500"
        }`}
      >
        <div className="flex justify-evenly items-center p-1 pl-3 ">
          <SearchIpt />

          <div
            className="px-3"
            onClick={() => {
              let newSearchBar = !searchBar;

              setSearchBar(newSearchBar);

              localStorage.setItem("searchBar", JSON.stringify(newSearchBar));
            }}
          >
            <StartIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSearchBar;
