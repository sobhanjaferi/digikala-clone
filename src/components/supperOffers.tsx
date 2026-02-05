import SupperOfferItem from "./supperOfferItem";

function SupperOffers({
  imgUrlItemOne,
  imgUrlItemTwo,
}: {
  imgUrlItemOne: string;
  imgUrlItemTwo: string;
}) {
  return (
    <div className="mx-auto xl:container xl:w-7/10 flex flex-row-reverse justify-center xl:justify-between items-center xl:gap-4 pb-5 px-5 xl:px-0">
      <SupperOfferItem imgUrl={imgUrlItemOne} />
      <SupperOfferItem imgUrl={imgUrlItemTwo} newStyles="hidden xl:block" />
    </div>
  );
}

export default SupperOffers;
