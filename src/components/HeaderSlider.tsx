"use client";

// =============== MUI Icons ===============
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//  =============== Import Section ===============
import useHeaderSlider from "@/service/Header/Header-Slider/hook";
import SlideOfHeaderSlider from "./SliderOfHeaderSlider";
import { ReactElement, useEffect, useState } from "react";
import LoadingAndError from "./LoadingAndError";
import { IheaderSlider } from "@/service/Header/Header-Slider/types";

interface Tdata {
  data: IheaderSlider[] | undefined;
  isError: boolean;
  isPending: boolean;
  isFetching: boolean;
}

function HeaderSlider(): ReactElement {
  const { data, isError, isPending, isFetching }: Tdata = useHeaderSlider();
  const [countSlides, setCountSlides] = useState<number>(1);
  const [showArrowKeys, setShowArrowKeys] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval((): void => {
      setCountSlides((prev: number): number => (prev < 11 ? (prev += 1) : 1));
    }, 5000);

    return (): void => clearInterval(interval);
  }, []);

  const HandleForwardSlide: () => void = () => {
    setCountSlides((prev: number): number => (prev < 11 ? (prev += 1) : 1));
  };

  const HandleBackwardSlide: () => void = () => {
    setCountSlides((prev: number): number => (prev > 1 ? (prev -= 1) : 11));
  };

  return (
    <>
      <LoadingAndError
        isError={isError}
        isFetching={isFetching}
        isPending={isPending}
      />
      <div
        className="flex justify-between items-center overflow-auto scrollbar-hide gap-3 mx-3 relative"
        onMouseEnter={() => {
          setShowArrowKeys(true);
        }}
        onMouseLeave={() => {
          setShowArrowKeys(false);
        }}
      >
        <SlideOfHeaderSlider
          imgAddress={data ? data?.[countSlides].imgUrl : "/"}
        />
        

        <section
          className={`flex justify-between items-center absolute bottom-2 right-2 lg:bottom-8 lg:right-5 gap-3 ${
            showArrowKeys ? "block" : "hidden"
          }`}
        >
          <div
            onClick={HandleBackwardSlide}
            className={`bg-white cursor-pointer rounded-full flex justify-center items-center py-1.5 pl-2.5 pr-0.5 sm:py-2 sm:pl-3 sm:pr-1 lg:py-3 lg:pl-4 lg:pr-2 text-gray-700 active:opacity-20`}
          >
            <ArrowBackIosIcon fontSize="inherit" />
          </div>
          <div
            onClick={HandleForwardSlide}
            className={`bg-white cursor-pointer rounded-full flex justify-center items-center py-1.5 pl-2 pr-1 sm:py-2 sm:pl-2.5 sm:pr-1.5 lg:py-3 lg:pl-3.5 lg:pr-2.5 text-gray-700 active:opacity-20`}
          >
            <ArrowForwardIosIcon fontSize="inherit" />
          </div>
        </section>
      </div>
    </>
  );
}

export default HeaderSlider;
