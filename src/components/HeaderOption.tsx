//  =============== Import Section ===============
import { IheaderOption } from "@/service/Header/Header-Options/types";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

function HeaderOption({ name, imgUrl, address }: IheaderOption): ReactElement {
  return (
    <Link href={`/${address}`} className="block lg:hidden mt-20">
      <div
        className={`w-22 sm:col-span-1 sm:w-full cursor-pointer h-20 rounded-lg border border-gray-300 flex flex-col justify-evenly items-center p-1 text-[12px] font-bold ${
          address ? "" : "bg-red-500 text-white"
        }`}
      >
        <Image
          src={imgUrl}
          className="w-8 h-8"
          width={0}
          height={0}
          alt={name}
        />

        <p>{name}</p>
      </div>
    </Link>
  );
}

export default HeaderOption;
