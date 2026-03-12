"use client";

import useYourFavoritsFour from "@/service/Your-Favorits/Four/hook";
import YourFavorits from "./YourFavorits";
import useYourFavoritsOne from "@/service/Your-Favorits/One/hook";
import useYourFavoritsThree from "@/service/Your-Favorits/Three/hook";
import useYourFavoritsTwo from "@/service/Your-Favorits/Two/hook";

function AllYourFavorits() {
  const { data: dataOne = [] } = useYourFavoritsOne();

  const { data: dataTwo = [] } = useYourFavoritsTwo();

  const { data: dataThree = [] } = useYourFavoritsThree();

  const { data: dataFour = [] } = useYourFavoritsFour();

  return (
    <section
      className="lg:grid lg:grid-cols-4 lg:w-full xl:w-7/10 lg:container lg:mx-auto rounded-2xl lg:border lg:border-gray-500/40 p-2 gap-4"
      dir="rtl"
    >
      <YourFavorits data={dataOne} />
      <YourFavorits data={dataTwo} />
      <YourFavorits data={dataThree} />
      <YourFavorits data={dataFour} />
    </section>
  );
}

export default AllYourFavorits;
