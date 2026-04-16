/* =============== Import Sections =============== */
import Header from "@/components/HeaderMobileSlider";
import OfferSliderHeader from "@/components/OfferSliderHeader";
import OfferSliderPictures from "@/components/OfferSliderPictures";
import OfferSliderProductInfo from "@/components/OfferSliderProductInfo";
import OfferSliderProductOfferTimer from "@/components/OfferSliderProductOfferTimer";
import { IofferSlide } from "@/service/Offer-Slider/types";
import axios from "axios";

export interface Tprops {
  params: Promise<{ readonly id: string }>;
}

async function Product({ params }: Tprops) {
  // =============== Get Product Data ===============

  const { data }: { data: IofferSlide } = await axios.get(
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
        <OfferSliderPictures pictures={data} />

        {/* =============== Offer Slider Timer  =============== */}
        <OfferSliderProductOfferTimer />

        {/* =============== Product Information  =============== */}
        <OfferSliderProductInfo data={data} />
      </main>
    </>
  );
}

export default Product;
