// =============== Import Section ===============
import Image from "next/image";
import OfferSliderTimer from "./OfferSliderTimer";
import { ReactElement } from "react";

function OfferSliderProductOfferTimer(): ReactElement {
  return (
    <section className="w-full">
      <div className="w-full h-12 p-5 bg-red-200/60 text-red-600 rounded-t-2xl text-sm flex flex-row-reverse justify-between items-center border-t-4 border-red-500">
        <Image
          src="https://www.digikala.com/statics/img/svg/pdp/incredible-offer.svg"
          alt="پیشنهاد شگفت انگیز"
          width={0}
          height={0}
        />
        <OfferSliderTimer addAnyStyles="mx-2" />
      </div>
    </section>
  );
}

export default OfferSliderProductOfferTimer;
