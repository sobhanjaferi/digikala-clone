// =============== Import Section ===============
import { IofferSlide } from "@/service/Offer-Slider/types";
import Image from "next/image";
import { ReactElement } from "react";

function OfferSliderProduct({
  imgUrl,
  off,
  offerPrice,
  realPrice,
  title,
}: IofferSlide): ReactElement {
  return (
    <div>
      <Image
        src={imgUrl}
        className="w-11/12 mx-auto h-7/12"
        alt={title}
        width={0}
        height={0}
      />

      <div className="text-center w-full h-5/12">
        <p className="text-gray-600 w-full h-1/2 text-sm">{title}</p>

        <div className="w-full h-1/4 flex justify-start items-center text-gray-500/60 text-sm">
          <div className="rounded-full bg-red-600/90 text-white px-3">
            <span>{off}</span>%
          </div>

          <del className="mr-1">{realPrice}</del>
        </div>

        <div className="w-full h-1/4 text-black mr-2">
          <p>
            <span>{offerPrice}</span>تومان
          </p>
        </div>
      </div>
    </div>
  );
}

export default OfferSliderProduct;
