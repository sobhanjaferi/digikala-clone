"use client";

// =============== MUI Icons ===============
import CloseIcon from "@mui/icons-material/Close";

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

  const HandlePictureBox: () => void = (): void => {
    setSelectPictureBox((prev: boolean): boolean => !prev);
  };

  return (
    <section className="w-full h-80 flex justify-center items-center">
      <Image
        onClick={HandlePictureBox}
        src={focusImg}
        alt="offer slider picture"
        className="h-full w-90"
        width={0}
        height={0}
      />

      <div
        className={`absolute top-0 left-0 right-0 bottom-0 z-100 bg-black/90 ${!selectPictureBox && "hidden"} flex justify-center items-center`}
      >
        <Image
          src={focusImg}
          className="h-100 sm:h-150 lg:h-full p-3 w-full max-w-200"
          alt="offer slider selected picture"
          width={0}
          height={0}
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
