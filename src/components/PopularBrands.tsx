"use client";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PopularBrand from "./PopularBrand";
import usePopularBrans from "@/service/Popular-Brands/hook";
import IpopularBrand from "@/service/Popular-Brands/types";

function PopularBrands() {
  const { data = [] } = usePopularBrans();

  return (
    <div className="lg:container w-full lg:w-310 lg:mx-auto mx-5 mt-5 mb-10 flex flex-col justify-end items-end">
      <section className="flex flex-row-reverse mb-5 mr-5">
        <StarOutlineIcon />

        <h1>محبوب ترین برندها</h1>
      </section>

      <div
        className="h-42 w-full overflow-auto scrollbar-hide flex p-5 gap-5"
        dir="rtl"
      >
        {data.map((item: IpopularBrand) => (
          <PopularBrand key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default PopularBrands;
