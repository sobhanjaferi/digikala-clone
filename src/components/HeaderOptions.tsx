"use client";

import useHeaderOptions from "@/service/Header/Header-Options/hook";
import HeaderOption from "./HeaderOption";
import { IheaderOption } from "@/service/Header/Header-Options/types";

function HeaderOptions() {
  const { data } = useHeaderOptions();

  return (
    <main
      className="flex justify-start items-center sm:grid sm:grid-cols-6 gap-4 m-4 mt-0 lg:mt-3 overflow-auto pb-3"
      dir="rtl"
    >
      {data?.map((item: IheaderOption) => (
        <HeaderOption key={item.id} {...item} />
      ))}
    </main>
  );
}

export default HeaderOptions;
