// =============== import Section ===============
import { ReactElement } from "react";

function OfferNumber({
  offerNumber,
  addStyles,
}: {
  offerNumber: number;
  addStyles?: string;
}): ReactElement {
  return (
    <div
      className={`rounded-full bg-red-600/90 text-white text-sm w-10 flex justify-center items-center ${addStyles}`}
    >
      <p>{offerNumber}%</p>
    </div>
  );
}

export default OfferNumber;
