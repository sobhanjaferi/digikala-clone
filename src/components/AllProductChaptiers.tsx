"use client";

//  =============== Import Section ===============
import { ReactElement, useEffect, useState } from "react";
import ProductItemsChaptier from "./ProductItemsChaptier";
import useAllProductChaptiers from "@/service/All-product-chaptiers/hook";
import IproductChaptier from "@/service/All-product-chaptiers/types";
import LoadingAndError from "./LoadingAndError";

interface Tdata {
  data: IproductChaptier[] | undefined;
  isError: boolean;
  isFetching: boolean;
  isPending: boolean;
}

function AllProductChaptiers(): ReactElement {
  const [screenSize, setScreenSize] = useState<boolean>(false);
  const {
    data = [],
    isError,
    isFetching,
    isPending,
  }: Tdata = useAllProductChaptiers();

  useEffect((): (() => void) => {
    const updateSize = (): void => {
      setScreenSize(window.innerWidth >= 1024 ? true : false);
    };
    updateSize();

    window.addEventListener("resize", updateSize);

    return (): void => window.removeEventListener("resize", updateSize);
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

      <section className="w-full h-full flex justify-center items-center">
        <LoadingAndError
          isError={isError}
          isFetching={isFetching}
          isPending={isPending}
        />
      </section>
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
