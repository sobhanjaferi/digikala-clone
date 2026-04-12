import Header from "@/components/HeaderMobileSlider";
import OfferSliderHeader from "@/components/OfferSliderHeader";
import OfferSliderPictures from "@/components/OfferSliderPictures";
import OfferSliderProductOfferTimer from "@/components/OfferSliderProductOfferTimer";
import axios, { AxiosResponse } from "axios";

export interface Tprops {
  params: Promise<{ readonly id: string }>;
  searchParams: Promise<{}>;
}

async function Product({ params }: Tprops) {
  // =============== Get Product Data ===============

  const result: AxiosResponse = await axios.get(
    `http://localhost:8000/OfferSlider/${(await params).id}`,
  );

  return (
    <>
      <header>
        {/* =============== Product Header in lg Size =============== */}
        <section className={`hidden lg:block`}>
          <Header />
        </section>

        {/* =============== Product Header in mobile Size =============== */}
        <section>
          <OfferSliderHeader />
        </section>
      </header>

      <main className="w-full flex flex-col justify-between items-center">
        {/* =============== Product Pictures =============== */}
        <OfferSliderPictures pictures={result.data} />

        {/* =============== Offer Slider Timer  =============== */}
        <OfferSliderProductOfferTimer />

        {/* =============== Product Information  =============== */}
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
      </main>
    </>
  );
}

export default Product;
