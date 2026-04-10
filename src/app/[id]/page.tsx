import Header from "@/components/HeaderMobileSlider";
import OfferSliderHeader from "@/components/OfferSliderHeader";

import OfferSliderPictures from "@/components/OfferSliderPictures";
import axios from "axios";

export interface Tprops {
  params: Promise<{ readonly id: string }>;
  searchParams: Promise<{}>;
}

async function Product({ params }: Tprops) {
  const result = await axios.get(
    `http://localhost:8000/OfferSlider/${(await params).id}`,
  );

  return (
    <>
      <header>
        <section className={`hidden lg:block`}>
          <Header />
        </section>

        <section>
          <OfferSliderHeader />
        </section>
      </header>

      <main className="w-full flex flex-col justify-between items-center">
        <OfferSliderPictures pictures={result.data} />
      </main>
    </>
  );
}

export default Product;
