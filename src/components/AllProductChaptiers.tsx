"use client";

import { useEffect, useState } from "react";

function AllProductChaptiers() {
  const [screenSize, setScreenSize] = useState<boolean>(false);

  useEffect(() => {
    const scrollBar = () => {
      setScreenSize((prev) => {
        return window.innerWidth >= 1024 ? true : false;
      });
    };

    window.addEventListener("resize", scrollBar);

    return () => window.removeEventListener("resize", scrollBar);
  }, [screenSize]);

  return (
    <div
      className={`w-full flex flex-col justify-between mt-5 ${screenSize ? "items-center" : "items-end"}`}
    >
      <h1
        className={`mb-10 ${screenSize ? "text-2xl font-medium" : "mr-5 font-bold"}`}
      >
        {screenSize ? (
          <span>خرید بر اساس دسته بندی</span>
        ) : (
          <span>دسته بندی ها</span>
        )}
      </h1>
    </div>
  );
}

export default AllProductChaptiers;
