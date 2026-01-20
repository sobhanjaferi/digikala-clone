import Chaptears from "@/components/chapters";
import Header from "@/components/Header";
import HeaderSlider from "@/components/HeaderSlider";
import OfferItems from "@/components/OfferItems";
import OfferSlider from "@/components/OfferSlider";
import SupperMarketOffer from "@/components/SupperMarketOffer";

export default function Home() {
  return (
    <>
      <section>
        <Header />
      </section>

      <section>
        <HeaderSlider />
      </section>

      <section dir="rtl">
        <OfferItems />
      </section>

      <section>
        <OfferSlider />
      </section>

      <section className="flex justify-center items-center">
        <Chaptears />
      </section>

      <section className="flex justify-center items-center">
        <SupperMarketOffer />
      </section>
    </>
  );
}
