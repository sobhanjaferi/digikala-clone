"use client";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect, useState } from "react";

function OfferSliderTimer() {
  let [houer, setHouer] = useState<number>(15);
  let [minet, setMinet] = useState<number>(35);
  let [second, setSecond] = useState<number>(59);

  useEffect(() => {
    const secondInterval = setInterval(() => {
      setSecond(second >= 1 ? (second -= 1) : (second = 59));

      setMinet(second == 0 ? (minet -= 1) : minet);

      setHouer(minet == 0 ? (houer -= 1) : houer);

      minet == 0 && setMinet((minet = 59));

      if (houer == 0) {
        setHouer(0);
        setMinet(0);
        setSecond(0);
        clearInterval(secondInterval);
      }
    }, 1000);

    () => clearInterval(secondInterval);
  }, []);

  return (
    <div className="w-full lg:w-40 flex lg:flex-col-reverse justify-between items-center h-10 lg:h-full py-5 pb-7 lg:p-2">
      <div className="flex justify-between items-center mx-2 cursor-pointer">
        <ArrowBackIosIcon fontSize="inherit" />

        <p className="mb-1">همه</p>
      </div>

      <div className="flex lg:flex-col-reverse h-full justify-between items-center lg:mb-5">
        <img
          src="https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg"
          className="w-15 hidden lg:block"
          alt=""
        />

        <div className="flex justify-between items-center">
          <span className="rounded bg-white text-black w-8 h-8 flex justify-center items-center text-sm mr-1">
            {houer}
          </span>
          :
          <span className="rounded bg-white text-black w-8 h-8 flex justify-center items-center text-sm mx-1">
            {minet}
          </span>
          :
          <span className="rounded bg-white text-black w-8 h-8 flex justify-center items-center text-sm ml-1">
            {second}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <img
            src="https://dkstatics-public.digikala.com/digikala-static/e0c05f5d67bf71be7605ec22cb3ee6be57d43e94_1746354561.svg"
            className="w-30 ml-3 lg:hidden"
            alt=""
          />

          <img
            src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazings.svg"
            className="hidden lg:block w-25"
            alt=""
          />

          <img
            src="https://dkstatics-public.digikala.com/digikala-static/0d072059918d0c22b88320554ce4b3e07d0472f2_1746354551.svg"
            className="w-7 ml-2 lg:hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default OfferSliderTimer;
