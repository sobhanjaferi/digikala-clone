"use client";

import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import StartIcon from "@mui/icons-material/Start";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";

import { useAppContext } from "@/context/appContext";
import SearchIpt from "./SearchIpt";
import SingingBtn from "./SinginBtn";
import HeaderNavBar from "./headerNavBar";
import Link from "next/link";

function HeaderSearchBar() {
  const { searchBar, setSearchBar } = useAppContext();

  return (
    <>
      <div
        className={`flex justify-evenly lg:justify-between items-center lg:-mt-5 lg:mx-10`}
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
              className="w-40 h-7 hidden lg:block ml-5"
            />
          </Link>
        </div>
      </div>

      <HeaderNavBar />

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
    </>
  );
}

export default HeaderSearchBar;
