"use client";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FilterCenterFocusIcon from "@mui/icons-material/FilterCenterFocus";
import StartIcon from "@mui/icons-material/Start";

import { useAppContext } from "@/context/appContext";
import SearchIpt from "./SearchIpt";
import SingingBtn from "./SinginBtn";
import HeaderNavBar from "./headerNavBar";

function HeaderSearchBar() {
  const { searchBar, setSearchBar } = useAppContext();

  return (
    <>
      <div className={`flex justify-evenly items-center lg:-mt-5 lg:mx-2`}>
        <SingingBtn />
        <div className="p-2 rounded-full border border-gray-300 text-gray-500 lg:border-none flex justify-evenly items-center">
          <NotificationsNoneIcon />
        </div>
        <div
          className="relative w-[80%] lg:w-[55%]"
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
        <img
          src="./images/digikala-header.png"
          alt="digikalaHeader"
          className="w-40 hidden lg:block"
        />
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
