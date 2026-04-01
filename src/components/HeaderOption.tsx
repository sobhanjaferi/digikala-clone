"use client";

import { IheaderOption } from "@/service/Header/Header-Options/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

function HeaderOption({ name, imgUrl, address }: IheaderOption) {
  const pagePathName = usePathname();

  return (
    <Link href={`/${address}`} className="block lg:hidden mt-20">
      <div
        className={`w-22 sm:col-span-1 sm:w-full cursor-pointer h-20 rounded-lg border border-gray-300 flex flex-col justify-evenly items-center p-1 text-[12px] font-bold ${
          address == pagePathName ? "bg-red-500 text-white" : ""
        }`}
      >
        <img src={imgUrl} className="w-8 h-8" alt={name} />

        <p>{name}</p>
      </div>
    </Link>
  );
}

export default HeaderOption;
