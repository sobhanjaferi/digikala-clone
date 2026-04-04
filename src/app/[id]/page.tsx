"use client";

import Header from "@/components/HeaderMobileSlider";
import OfferSliderHeader from "@/components/OfferSliderHeader";
import { useEffect, useState } from "react";
import useOfferSliderProducts from "@/service/Offer-slider-products/hook";
import { IofferSlide } from "@/service/Offer-Slider/types";

export interface Tprops {
  params: Promise<{ readonly id: string }>;
  searchParams: Promise<{}>;
}

function Product({ params }: Tprops) {
  const [id, setId] = useState<string>();

  useEffect(() => {
    const HandleProductId = async (): Promise<void> => setId((await params).id);

    HandleProductId();
  }, [id]);

  const { data } = useOfferSliderProducts(id);

  data as IofferSlide;

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
    </>
  );
}

export default Product;
