"use client";

import OfferSliderTimer from "./OfferSliderTimer";
import OfferSliderProduct from "./OfferSliderProduct";
import useOfferSlider from "@/service/Offer-Slider/hook";
import { IofferSlide } from "@/service/Offer-Slider/types";
import LoadingAndError from "./LoadingAndError";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRef } from "react";

function OfferSlider() {
  const { data = [], isError, isPending, isFetching } = useOfferSlider();

  const scrollRef = useRef<HTMLDivElement>(null);

  const HandleScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: -157,
      behavior: "smooth",
    });
  };

  const HandleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: 157,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center lg:mx-5">
      <div className="lg:m-5 lg:mt-0 w-full xl:w-310 h-80 lg:rounded-2xl text-white bg-red-500 flex flex-col-reverse justify-between lg:flex-row items-center p-3 relative">
        <section
          onClick={HandleScrollRight}
          className="absolute top-40 lg:top-35 left-10 text-black rounded-full bg-white pt-1.75 pb-2.5 pl-3.5 pr-1.5 Shadow active:opacity-20 cursor-pointer"
        >
          <ArrowBackIosIcon fontSize="small" />
        </section>

        <div
          ref={scrollRef}
          className="w-full h-70 rounded-xl flex justify-start items-center gap-1 overflow-auto scrollbar-hide"
          dir="rtl"
        >
          {!isError &&
            !isFetching &&
            !isPending &&
            data.map((item: IofferSlide) => (
              <OfferSliderProduct key={item.id} {...item} />
            ))}

          <LoadingAndError
            isError={isError}
            isFetching={isFetching}
            isPending={isPending}
          />
        </div>

        <section
          onClick={HandleScrollLeft}
          className="absolute top-40 lg:top-35 right-10 lg:right-45 text-black rounded-full bg-white pt-1.5 pb-2.5 px-2.5 Shadow active:opacity-20 cursor-pointer"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </section>

        <OfferSliderTimer />
      </div>
    </div>
  );
}

export default OfferSlider;
