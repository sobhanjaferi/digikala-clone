"use client";

//  =============== Import Section ===============
import useOfferItems from "@/service/Offer-Items/hook";
import OfferItem from "./OfferItem";
import LoadingAndError from "./LoadingAndError";
import { ReactElement } from "react";

interface IofferItem {
  id: number;
  content: string;
  imgUrl: string;
}

function OfferItems(): ReactElement {
  const { data = [], isError, isPending, isFetching } = useOfferItems();

  return (
    <div
      dir="rtl"
      className="flex justify-evenly items-center w-full lg:w-7/10 lg:container h-30 overflow-auto gap-3 scrollbar-hide my-10 mb-0 lg:mb-5 lg:mx-auto"
    >
      {data.map((item: IofferItem) => (
        <OfferItem {...item} key={item.id} />
      ))}
      <LoadingAndError
        isError={isError}
        isFetching={isFetching}
        isPending={isPending}
      />
    </div>
  );
}

export default OfferItems;
