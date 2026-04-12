import OfferSliderTimer from "./OfferSliderTimer";

function OfferSliderProductOfferTimer() {
  return (
    <section className="w-full">
      <div className="w-full p-5 bg-red-200/60 text-red-600 rounded-t-3xl flex flex-row-reverse justify-between items-center border-t-4 border-red-500">
        <p className="font-bold">پیشنهاد شگفت انگیز 60% باقی مانده</p>

        <OfferSliderTimer addAnyStyles="mx-2" />
      </div>
    </section>
  );
}

export default OfferSliderProductOfferTimer;
