"use client";

import { IofferSlide } from "@/service/Offer-Slider/types";
import { useState } from "react";

// =============== MUI Icons ===============
import CloseIcon from "@mui/icons-material/Close";

function OfferSliderPictures({ pictures }: { pictures: IofferSlide }) {
  const [selectPictureBox, setSelectPictureBox] = useState<boolean>(false);
  let [focusImg, setFocusImg] = useState<string | undefined>(
    pictures?.images[0],
  );

  const HandlePictureBox: () => void = (): void => {
    setSelectPictureBox((prev: boolean): boolean => !prev);
  };

  return (
    <section className="w-full h-80 flex justify-center items-center">
      <img
        onClick={HandlePictureBox}
        src={focusImg}
        alt="offer slider picture"
        className="h-full w-90"
      />

      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-100 bg-black/90 ${!selectPictureBox && "hidden"} flex justify-center items-center`}
      >
        <img
          src={focusImg}
          className="h-100 sm:h-150 lg:h-full p-3 w-full max-w-200"
          alt="offer slider selected picture"
        />

        <div
          className="bg-black/90 fixed bottom-0 right-0 left-0 p-2 h-25"
          dir="rtl"
        >
          <div
            className="fixed top-5 right-5 text-white"
            onClick={HandlePictureBox}
          >
            <CloseIcon />
          </div>

          <ul className="w-full h-full rounded-xl border border-white scrollbar-hide overflow-x-auto flex justify-start items-center gap-1 p-1">
            {pictures?.images.map((item: string, index: number) => (
              <li key={index} className="min-w-20 h-full">
                <img
                  src={item}
                  alt="offer slider picture"
                  className="h-full w-full rounded-md"
                  onClick={(): void => {
                    setFocusImg((prev: string | undefined): string => item);
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
