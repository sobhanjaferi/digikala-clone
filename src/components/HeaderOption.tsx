import { IheaderOption } from "@/service/headerOptions/types";
import Link from "next/link";

function HeaderOption({ name, imgUrl, address }: IheaderOption) {
  return (
    <Link href={`/${address}`} className="block md:hidden">
      <div
        className={`cursor-pointer min-w-20 min-h-20 rounded-lg border border-gray-300 flex flex-col justify-evenly items-center p-1 text-[12px] font-bold ${
          address ? "" : "bg-red-500 text-white"
        }`}
      >
        <img src={imgUrl} className="w-10 h-10" alt={name} />

        <p>{name}</p>
      </div>
    </Link>
  );
}

export default HeaderOption;
