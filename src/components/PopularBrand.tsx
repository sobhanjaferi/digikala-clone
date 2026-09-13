// =============== Import Section ===============
import IpopularBrand from "@/service/Popular-Brands/types";
import Image from "next/image";
import { ReactElement } from "react";

function PopularBrand({ imgUrl, title, id }: IpopularBrand): ReactElement {
  return (
    <div className="min-w-25 lg:min-w-30 lg:border-0 border border-gray-400 h-full rounded-lg flex flex-col justify-between items-center p-2">
      <Image
        src={imgUrl}
        alt="popular brand img"
        className={`rounded-sm w-full h-8/10 ${id == 13 || id == 14 ? "lg:h-4/10 mt-7" : "lg:h-full"}`}
        width={0}
        height={0}
      />

      <h2 className="h-2/10 lg:hidden">{title}</h2>
    </div>
  );
}

export default PopularBrand;
