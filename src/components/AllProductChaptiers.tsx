"use client";

import { useEffect, useState } from "react";
import ProductItemsChaptier from "./ProductItemsChaptier";

function AllProductChaptiers() {
  const [screenSize, setScreenSize] = useState<boolean>(false);

  useEffect(() => {
    setScreenSize((prev) => (window.innerWidth >= 1024 ? true : false));

    const scrollBar = () => {
      setScreenSize((prev) => (window.innerWidth >= 1024 ? true : false));
    };

    window.addEventListener("resize", scrollBar);

    return () => window.removeEventListener("resize", scrollBar);
  }, []);

  return (
    <div
      className={`w-full flex flex-col justify-between mt-5 ${screenSize ? "items-center" : "items-end"}`}
    >
      {/* =============== Header =============== */}

      <h1
        className={`mb-10 ${screenSize ? "text-2xl font-medium" : "mr-5 font-bold"}`}
      >
        {screenSize ? (
          <span>خرید بر اساس دسته بندی</span>
        ) : (
          <span>دسته بندی ها</span>
        )}
      </h1>

      {/* =============== Main Section =============== */}

      <main
        className="w-full mx-auto lg:container mb-10 px-5 overflow-auto 2xl:flex justify-center items-center"
        dir="rtl"
      >
        <div
          className="w-300 sm:w-7xl lg:w-350 h-full gap-5 grid grid-cols-9"
          dir="rtl"
        >
          <ProductItemsChaptier />
        </div>
      </main>
    </div>
  );
}

export default AllProductChaptiers;
