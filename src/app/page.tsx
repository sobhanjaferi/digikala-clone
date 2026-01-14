import Header from "@/components/Header";
import HeaderSlider from "@/components/HeaderSlider";
import OfferItems from "@/components/OfferItems";

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
    </>
  );
}
