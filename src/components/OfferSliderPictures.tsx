"use client";

// =============== MUI Icons ===============
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// =============== Import Section ===============
import { IofferSlide } from "@/service/Offer-Slider/types";
import { ReactElement, useState } from "react";
import Image from "next/image";

function OfferSliderPictures({
  pictures,
}: {
  pictures: IofferSlide;
}): ReactElement {
  const [selectPictureBox, setSelectPictureBox] = useState<boolean>(false);
  const [focusImg, setFocusImg] = useState<string>(pictures?.images[0]);
  const [lenPictures] = useState<number>(pictures.images.length - 1);
  const [imgIndex, setimgIndex] = useState<number>(0);

  const PictureBox: () => void = (): void => {
    setSelectPictureBox((prev: boolean): boolean => !prev);
  };

  const GoToNextImg: () => void = () => {
    setimgIndex((prev: number): number =>
      prev < lenPictures ? (prev += 1) : (prev = 0),
    );

    setFocusImg(pictures.images[imgIndex]);
  };

  const GoToPrevImg: () => void = () => {
    setimgIndex((prev: number): number =>
      prev > 0 ? (prev -= 1) : (prev = lenPictures),
    );

    setFocusImg(pictures.images[imgIndex]);
  };

  return (
    <section className="w-full h-80 flex justify-center items-center">
      <Image
        onClick={PictureBox}
        src={focusImg}
        alt="offer slider picture"
        className="h-full w-90"
        width={0}
        height={0}
      />

      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-100 bg-black/90 ${!selectPictureBox && "hidden"} flex justify-center items-center`}
      >
        <div
          className="absolute left-5 top-1/2 text-gray-400 p-3"
          onClick={GoToNextImg}
        >
          <ArrowBackIosIcon />
        </div>

        <Image
          src={focusImg}
          className="h-100 sm:h-150 lg:h-full p-3 w-full max-w-200"
          alt="offer slider selected picture"
          width={0}
          height={0}
        />

        <div
          className="absolute right-5 top-1/2 text-gray-400 p-3"
          onClick={GoToPrevImg}
        >
          <ArrowForwardIosIcon />
        </div>

        <div
          className="bg-black/90 fixed bottom-0 right-0 left-0 p-2 h-25"
          dir="rtl"
        >
          <div className="fixed top-5 right-5 text-white" onClick={PictureBox}>
            <CloseIcon />
          </div>

          <ul className="w-full h-full rounded-xl border border-white scrollbar-hide overflow-x-auto flex justify-start items-center gap-1 p-1">
            {pictures?.images.map((item: string, index: number) => (
              <li key={index} className="min-w-20 h-full">
                <Image
                  src={item}
                  alt="offer slider picture"
                  className="h-full w-full rounded-md"
                  width={0}
                  height={0}
                  onClick={(): void => {
                    setFocusImg(item);
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default OfferSliderPictures;
