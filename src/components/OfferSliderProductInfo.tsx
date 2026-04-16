import { IofferSlide } from "@/service/Offer-Slider/types";

function OfferSliderProductInfo({ data }: { data: IofferSlide }) {
  return (
    <>
      <section className="w-full flex flex-row-reverse justify-between items-center p-5">
        <p className="flex flex-row-reverse justify-start items-center gap-1 sm:gap-2 text-gray-600 text-[10px] sm:text-sm">
          <span className="border-b border-gray-500 p-1">لنوو</span>
          {"<"}
          <span className="border-b border-gray-500 p-1">
            لپ تاپ و الترابوک لنوو
          </span>
        </p>

        <div className="flex gap-3">
          <p className="p-2 cursor-pointer bg-red-500 text-white">love</p>
          <p className="p-2 cursor-pointer bg-blue-600">options</p>
        </div>
      </section>

      <p className="w-full text-right p-3" dir="rtl">
        {data.title}
      </p>

      <section className="p-3 w-full">
        <p className="w-full p-4 border-r-5 border-blue-900 bg-blue-100/80 rounded-lg flex justify-end items-center">
          تحویل امروز با ارسال سریع دیجی کالا
        </p>
      </section>
    </>
  );
}

export default OfferSliderProductInfo;
