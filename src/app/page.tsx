import Header from "@/components/Header";
import HeaderSlider from "@/components/HeaderSlider";
import OfferItems from "@/components/OfferItems";
import OfferSlider from "@/components/OfferSlider";

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
    </>
  );
}
