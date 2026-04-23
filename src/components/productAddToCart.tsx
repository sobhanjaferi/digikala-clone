/* =============== Import Section =============== */
import { IofferSlide } from "@/service/Offer-Slider/types";
import OfferNumber from "./OfferNumber";

function ProductAddToCart({ data }: { data: IofferSlide }) {
  return (
    <>
      <button className="bg-red-500 text-white py-3 px-12 sm:px-30 md:px-40 rounded-lg cursor-pointer hover:opacity-90 active:opacity-30">
        افزود به سبد خرید
      </button>

      <div className="flex flex-col justify-between items-center">
        <div className="flex flex-row-reverse justify-between items-center w-full">
          <OfferNumber offerNumber={data.off} />

          <del className="text-gray-600 text-sm">{data.realPrice}</del>
        </div>

        <p className="font-bold text-sm">تومان {data.offerPrice}</p>
      </div>
    </>
  );
}

export default ProductAddToCart;
