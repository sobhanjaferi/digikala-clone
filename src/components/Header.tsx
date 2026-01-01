"use client";

import useHeaderOptions from "@/service/headerOptions/hook";
import HeaderOption from "./HeaderOption";
import { IheaderOption } from "@/service/headerOptions/types";
import HeaderSearchBar from "./HeaderSearchBar";

function Header() {
  const { data } = useHeaderOptions();

  return (
    <nav>
      <header
        className="flex justify-start items-center sm:grid sm:grid-cols-6 gap-4 m-4 overflow-auto pb-3"
        dir="rtl"
      >
        {data?.map((item: IheaderOption) => (
          <HeaderOption
            key={item.id}
            {...item}
            tailwind="w-22 sm:col-span-1 sm:w-full"
          />
        ))}
      </header>

      <section>
        <HeaderSearchBar />
      </section>
    </nav>
  );
}

export default Header;
