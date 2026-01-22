import { IheaderOption } from "@/service/Header/Header-Options/types";
import Link from "next/link";

function HeaderOption({ name, imgUrl, address, tailwind }: IheaderOption) {
  return (
    <Link href={`/${address}`} className="block lg:hidden mt-20">
      <div
        className={`cursor-pointer ${tailwind} h-20 rounded-lg border border-gray-300 flex flex-col justify-evenly items-center p-1 text-[12px] font-bold ${
          address ? "" : "bg-red-500 text-white"
        }`}
      >
        <img src={imgUrl} className="w-8 h-8" alt={name} />

        <p>{name}</p>
      </div>
    </Link>
  );
}

export default HeaderOption;
