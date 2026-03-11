import AllProductChaptiers from "@/components/AllProductChaptiers";
import Chaptears from "@/components/chapters";
import Header from "@/components/HeaderMobileSlider";
import HeaderSlider from "@/components/HeaderSlider";
import OfferItems from "@/components/OfferItems";
import OfferSlider from "@/components/OfferSlider";
import PopularBrands from "@/components/PopularBrands";
import SupperMarketOffer from "@/components/SupperMarketOffer";
import SupperOffers from "@/components/supperOffers";
import YourFavorits from "@/components/YourFavorits";

export default function Home() {
  return (
    <main>
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
        <SupperOffers
          imgUrlItemOne="https://dkstatics-public.digikala.com/digikala-adservice-banners/c98ee0c7437d338f1b70132096b4f128c5081dec_1769512573.jpg?x-oss-process=image/quality,q_95"
          imgUrlItemTwo="https://dkstatics-public.digikala.com/digikala-adservice-banners/5495233c0b9501d5013b300353c6b649c4420c25_1769600815.jpg?x-oss-process=image/quality,q_95"
        />
      </section>

      <section className="flex justify-center items-center">
        <PopularBrands />
      </section>

      <section className="hidden lg:block">
        <SupperOffers
          imgUrlItemOne="https://dkstatics-public.digikala.com/digikala-adservice-banners/73eb539db714dd85501916f8126044a416bd032d_1770702614.jpg?x-oss-process=image/quality,q_95"
          imgUrlItemTwo="https://dkstatics-public.digikala.com/digikala-adservice-banners/7d33b6c06441a4b48142ad788cafb5a09ba0abaf_1770702779.jpg?x-oss-process=image/quality,q_95"
        />
      </section>

      <section className="lg:grid lg:grid-cols-4 lg:w-full xl:w-7/10 lg:container lg:mx-auto rounded-2xl lg:border lg:border-gray-500/40 p-2 gap-4">
        <YourFavorits />
        <YourFavorits />
        <YourFavorits />
        <YourFavorits />
      </section>
    </main>
  );
}
