"use client";

import { useEffect, useState } from "react";
import ProductItemsChaptier from "./ProductItemsChaptier";
import useAllProductChaptiers from "@/service/All-product-chaptiers/hook";
import IproductChaptier from "@/service/All-product-chaptiers/types";

function AllProductChaptiers() {
  const [screenSize, setScreenSize] = useState<boolean>(false);

  const { data = [] } = useAllProductChaptiers();

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
        className="w-full h-85 mx-auto lg:w-300 lg:container mb-15 px-5 overflow-auto 2xl:flex justify-center items-center"
        dir="rtl"
      >
        <div
          className="w-300 sm:w-7xl lg:w-350 h-full lg:gap-0 grid grid-cols-9"
          dir="rtl"
        >
          {data.map((item: IproductChaptier) => (
            <ProductItemsChaptier key={item.id} {...item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default AllProductChaptiers;
