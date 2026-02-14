"use client";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PopularBrand from "./PopularBrand";
import usePopularBrans from "@/service/Popular-Brands/hook";
import IpopularBrand from "@/service/Popular-Brands/types";

// =============== Material UI Icons ===============

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef, useState } from "react";

function PopularBrands() {
  const { data = [] } = usePopularBrans();

  const scrollBar = useRef<HTMLDivElement>(null);

  const HandleScrollRight = () => {
    scrollBar.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const HandleScrollLeft = () => {
    scrollBar.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  return (
    <div className="lg:container w-full lg:w-310 lg:mx-auto mx-5 mt-5 mb-10 flex flex-col justify-end items-end relative">
      <section className="flex flex-row-reverse mb-5 mr-5">
        <StarOutlineIcon />

        <h1>محبوب ترین برندها</h1>
      </section>

      <div
        className="h-42 w-full overflow-auto scrollbar-hide flex p-5 gap-5"
        dir="rtl"
        ref={scrollBar}
      >
        <div
          onClick={HandleScrollRight}
          className="absolute top-30 right-5 rounded-full bg-white cursor-pointer transition-all duration-200 ease-in-out active:opacity-20 w-10 h-10 flex justify-center items-center Shadow"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </div>

        {data.map((item: IpopularBrand) => (
          <PopularBrand key={item.id} {...item} />
        ))}

        <div
          onClick={HandleScrollLeft}
          className="absolute top-30 left-5 rounded-full bg-white cursor-pointer transition-all duration-200 ease-in-out active:opacity-20 w-10 h-10 flex justify-center items-center Shadow rotate-180"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default PopularBrands;
