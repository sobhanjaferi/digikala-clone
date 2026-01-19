"use client";

import OfferSliderTimer from "./OfferSliderTimer";
import OfferSliderProduct from "./OfferSliderProduct";
import useOfferSlider from "@/service/Offer-Slider/hook";
import { IofferSlide } from "@/service/Offer-Slider/types";
import LoadingAndError from "./LoadingAndError";

function OfferSlider() {
  const { data, isError, isPending, isFetching } = useOfferSlider();

  return (
    <div className="flex justify-center lg:mx-5">
      <div className="lg:m-5 lg:mt-0 w-full xl:w-310 h-80 lg:rounded-2xl text-white bg-red-500 flex flex-col-reverse justify-between lg:flex-row items-center p-3">
        <div
          className="w-full h-70 rounded-xl flex justify-start items-center gap-1 overflow-auto scrollbar-hide"
          dir="rtl"
        >
          {!isError &&
            !isFetching &&
            !isPending &&
            data?.map((item: IofferSlide) => (
              <OfferSliderProduct key={item.id} {...item} />
            ))}

          <LoadingAndError
            isError={isError}
            isFetching={isFetching}
            isPending={isPending}
          />
        </div>

        <OfferSliderTimer />
      </div>
    </div>
  );
}

export default OfferSlider;
