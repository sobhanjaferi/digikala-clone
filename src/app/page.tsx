import AllProductChaptiers from "@/components/AllProductChaptiers";
import Chaptears from "@/components/chapters";
import Header from "@/components/HeaderMobileSlider";
import HeaderSlider from "@/components/HeaderSlider";
import OfferItems from "@/components/OfferItems";
import OfferSlider from "@/components/OfferSlider";
import SupperMarketOffer from "@/components/SupperMarketOffer";
import SupperOffers from "@/components/supperOffers";

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
        <OfferSlider anyStyles="bg-red-500" />
      </section>

      <section className="flex justify-center items-center">
        <Chaptears
          imgOne="https://dkstatics-public.digikala.com/digikala-adservice-banners/ad775f65805c15a4267818ed51e5aff5f1943446_1766330967.jpg?x-oss-process=image/quality,q_95"
          imgTwo="https://dkstatics-public.digikala.com/digikala-adservice-banners/28aace2f95904816966dafce7c9eda9edb9c2026_1761132457.jpg?x-oss-process=image/quality,q_95"
          imgThree="https://dkstatics-public.digikala.com/digikala-adservice-banners/847e655fab88fe48f4026900508b6a0af8cf9685_1768298491.jpg?x-oss-process=image/quality,q_95"
          imgFour="https://dkstatics-public.digikala.com/digikala-adservice-banners/04757f3ef6dc062163e3e5bc1879b7025e098b43_1766330030.jpg?x-oss-process=image/quality,q_95"
        />
      </section>

      <section className="flex justify-center items-center">
        <SupperMarketOffer />
      </section>

      <section className="block lg:hidden">
        <OfferSlider anyStyles="bg-green-500" />
      </section>

      <section className="flex justify-center items-center">
        <Chaptears
          imgOne="https://dkstatics-public.digikala.com/digikala-adservice-banners/7c1a0f6823ed2715da19fab343af64249f864d28_1768209175.jpg?x-oss-process=image/quality,q_95"
          imgTwo="https://dkstatics-public.digikala.com/digikala-adservice-banners/d4f51d8b3c9509229a63d0f26a9e446be35a63ac_1768905395.jpg?x-oss-process=image/quality,q_95"
          imgThree="https://dkstatics-public.digikala.com/digikala-adservice-banners/3b9253377a4786f44d06f69f7b05f2c19cae8637_1754212018.jpg?x-oss-process=image/quality,q_95"
          imgFour="https://dkstatics-public.digikala.com/digikala-adservice-banners/caf1317aeb16dcc620c9b89438a351b2ccb4df1e_1752061907.gif?x-oss-process=image"
        />
      </section>

      <section>
        <AllProductChaptiers />
      </section>

      <section>
        <SupperOffers />
      </section>
    </>
  );
}
