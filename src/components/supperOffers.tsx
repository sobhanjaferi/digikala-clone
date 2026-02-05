"use client";

import useSupperOfferItems from "@/service/Supper-Offer-Items/hook";
import SupperOfferItem from "./supperOfferItem";

function SupperOffers() {
  const { data = [] } = useSupperOfferItems();

  return (
    <div className="mx-auto xl:container xl:w-7/10 flex flex-row-reverse justify-center xl:justify-between items-center xl:gap-4 pb-5 px-5 xl:px-0">
      <SupperOfferItem imgUrl={data[0].imgUrl} />
      <SupperOfferItem imgUrl={data[1].imgUrl} newStyles="hidden xl:block" />
    </div>
  );
}

export default SupperOffers;
