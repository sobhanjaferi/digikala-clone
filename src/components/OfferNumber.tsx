// =============== import Section ===============
import { ReactElement } from "react";

function OfferNumber({ offerNumber }: { offerNumber: number }): ReactElement {
  return (
    <div className="rounded-full bg-red-600/90 text-white text-sm w-10 flex justify-center items-center absolute bottom-1 right-0">
      <p>{offerNumber}%</p>
    </div>
  );
}

export default OfferNumber;
