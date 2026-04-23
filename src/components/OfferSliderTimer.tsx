"use client";
// =============== Import Section ===============
import { ReactElement, useEffect, useState } from "react";

function OfferSliderTimer({
  addAnyStyles,
}: {
  addAnyStyles: string;
}): ReactElement {
  const [houer, setHouer] = useState<number>(15);
  const [minet, setMinet] = useState<number>(38);
  const [second, setSecond] = useState<number>(59);

  useEffect(() => {
    const secondInterval = setInterval((): void => {
      setSecond((prev: number): number => (prev == 0 ? 9 : (prev -= 1)));
      setMinet((prev: number): number => (second == 0 ? (prev -= 1) : prev));
      setHouer((prev: number): number =>
        minet == 0 && second == 0 ? (prev -= 1) : prev,
      );

      if (houer === 0 && minet === 0 && second === 0) {
        setSecond(0);
        setMinet(0);
        setHouer(0);
        clearInterval(secondInterval);
      }
    }, 1000);

    return (): void => clearInterval(secondInterval);
  }, [second, minet, houer]);

  return (
    <div className="flex justify-between items-center">
      <span className={`mr-1 ${addAnyStyles}`}>{houer}</span>:
      <span className={`mx-1 ${addAnyStyles}`}>{minet}</span>:
      <span className={`ml-1 ${addAnyStyles}`}>{second}</span>
    </div>
  );
}

export default OfferSliderTimer;
