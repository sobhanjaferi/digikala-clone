"use client";

import OfferSliderTimer from "./OfferSliderTimer";
import OfferSliderProduct from "./OfferSliderProduct";
import useOfferSlider from "@/service/Offer-Slider/hook";
import { IofferSlide } from "@/service/Offer-Slider/types";

function OfferSlider() {
  const { data } = useOfferSlider();

  console.log(data);

  return (
    <div className="flex justify-center">
      <div className="lg:m-5 lg:mt-0 w-full lg:w-330 h-80 lg:rounded-2xl text-white bg-red-500 flex flex-col-reverse justify-between lg:flex-row items-center p-3">
        <div
          className="w-full h-70 rounded-xl flex justify-start items-center gap-1 overflow-auto scrollbar-hide"
          dir="rtl"
        >
          {data?.map((item: IofferSlide) => (
            <OfferSliderProduct key={item.id} {...item} />
          ))}
        </div>

        <OfferSliderTimer />
      </div>
    </div>
  );
}

export default OfferSlider;
