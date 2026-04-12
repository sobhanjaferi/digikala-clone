"use client";

import { useEffect, useState } from "react";

function OfferSliderTimer({ addAnyStyles }: { addAnyStyles: string }) {
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
    <div className="flex justify-between items-center">
      <span className={`mr-1 ${addAnyStyles}`}>{houer}</span>:
      <span className={`mx-1 ${addAnyStyles}`}>{minet}</span>:
      <span className={`ml-1 ${addAnyStyles}`}>{second}</span>
    </div>
  );
}

export default OfferSliderTimer;
