"use client";

//  =============== MUI Icons ===============
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//  =============== Import Section ===============
import OfferSliderTimer from "./OfferSliderTimer";
import OfferSliderProduct from "./OfferSliderProduct";
import useOfferSlider from "@/service/Offer-Slider/hook";
import { IofferSlide } from "@/service/Offer-Slider/types";
import LoadingAndError from "./LoadingAndError";
import { ReactElement, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function OfferSlider({ anyStyles }: { anyStyles: string }): ReactElement {
  const { data = [], isError, isPending, isFetching } = useOfferSlider();

  const scrollRef = useRef<HTMLDivElement>(null);

  const HandleScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: -157,
      behavior: "smooth",
    });
  };

  const HandleScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: 157,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center lg:mx-5">
      <div
        className={`lg:m-5 lg:mt-0 w-full xl:w-310 h-80 lg:rounded-2xl text-white ${anyStyles} flex flex-col-reverse justify-between lg:flex-row items-center p-3 relative`}
      >
        <section
          onClick={HandleScrollRight}
          className="absolute top-40 lg:top-35 left-10 text-black rounded-full bg-white pt-1.75 pb-2.5 pl-3.5 pr-1.5 Shadow active:opacity-20 cursor-pointer"
        >
          <ArrowBackIosIcon fontSize="small" />
        </section>

        <div
          ref={scrollRef}
          className="w-full h-70 rounded-xl flex justify-start items-center gap-1 overflow-auto scrollbar-hide"
          dir="rtl"
        >
          {!isError &&
            !isFetching &&
            !isPending &&
            data.map((item: IofferSlide) => (
              <Link
                href={`/${item.id}`}
                key={item.id}
                className="h-full min-w-45 p-1 bg-white cursor-pointer"
              >
                <OfferSliderProduct {...item} />
              </Link>
            ))}

          {/* =============== Handle Error and Fetching =============== */}

          <LoadingAndError
            isError={isError}
            isFetching={isFetching}
            isPending={isPending}
          />
        </div>

        <section
          onClick={HandleScrollLeft}
          className="absolute top-40 lg:top-35 right-10 lg:right-45 text-black rounded-full bg-white pt-1.5 pb-2.5 px-2.5 Shadow active:opacity-20 cursor-pointer"
        >
          <ArrowForwardIosIcon fontSize="small" />
        </section>

        <div className="w-full lg:w-40 flex lg:flex-col-reverse justify-between items-center h-10 lg:h-full py-5 pb-7 lg:p-2">
          <div className="flex justify-between items-center mx-2 cursor-pointer">
            <ArrowBackIosIcon fontSize="inherit" />

            <p className="mb-1">همه</p>
          </div>

          {/* =============== Offer Timer =============== */}

          <section className="flex lg:flex-col-reverse h-full justify-between items-center lg:mb-5">
            <Image
              src="https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg"
              className="w-15 hidden lg:block"
              alt="offer slider img"
              width={0}
              height={0}
            />

            <OfferSliderTimer addAnyStyles="rounded bg-white text-black w-8 h-8 flex justify-center items-center text-sm" />

            <div className="flex justify-between items-center">
              <Image
                src="https://dkstatics-public.digikala.com/digikala-static/e0c05f5d67bf71be7605ec22cb3ee6be57d43e94_1746354561.svg"
                className="w-30 ml-3 lg:hidden"
                alt="offer slider img"
                width={0}
                height={0}
              />

              <Image
                src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
                className="hidden lg:block w-25"
                alt="offer slider img"
                width={0}
                height={0}
              />

              <Image
                src="https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg"
                className="w-7 ml-2 lg:hidden"
                alt="offer slider img"
                width={0}
                height={0}
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default OfferSlider;
