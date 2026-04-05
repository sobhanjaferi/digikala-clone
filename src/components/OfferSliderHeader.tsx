"use client";

// =============== MUI Icons ===============
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StartIcon from "@mui/icons-material/Start";

import Link from "next/link";
import { useState } from "react";

function OfferSliderHeader() {
  const [searchBar, setSearchBar] = useState<boolean>(false);

  const HandleSearchBar = (): void => {
    setSearchBar((prev): boolean => !prev);
  };

  return (
    <>
      <header
        className={`absolute left-0 right-0 top-0 bottom-0 transition-all duration-400 ease-in-out ${searchBar ? "" : "-translate-y-300"}`}
      >
        <section
          className={`absolute left-0 right-0 top-0  gap-3 w-full bg-white z-10 p-3 flex justify-evenly items-center`}
        >
          <input
            type="text"
            className="border border-gray-300 w-full py-3 px-5 rounded-full"
            dir="rtl"
            placeholder="       جستجو در همه کالاها"
          />

          <div className="absolute right-16 text-gray-500 -z-1">
            <SearchIcon />
          </div>

          <div onClick={HandleSearchBar}>
            <StartIcon />
          </div>
        </section>

        <section
          className={`absolute left-0 right-0 top-17 bottom-0 bg-black/30 shadow-2xl shadow-black`}
        ></section>
      </header>

      <main className="lg:hidden w-full p-5 flex flex-col justify-between items-end gap-5 text-gray-700">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-5">
            <MenuIcon />

            <ShoppingCartIcon className="rotate-y-180" />

            <div onClick={HandleSearchBar}>
              <SearchIcon />
            </div>
          </div>

          <Link href="/">
            <CloseIcon />
          </Link>
        </div>

        <p className="w-full flex flex-row-reverse justify-start items-center gap-2 text-gray-600 text-sm">
          <span className="border-b border-gray-500 p-1">دیجی کالا</span>
          {"<"}
          <span className="border-b border-gray-500 p-1">کالای دیجیتال</span>
          {"<"}
          <span className="border-b border-gray-500 p-1">لپ تاپ</span>
          {"<"}
          <span className="border-b border-gray-500 p-1">
            لپ تاپ و الترابوک
          </span>
        </p>
      </main>
    </>
  );
}

export default OfferSliderHeader;
