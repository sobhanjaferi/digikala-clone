function SupperOfferItem({
  imgUrl,
  newStyles,
}: {
  imgUrl: string;
  newStyles?: string;
}) {
  return (
    <div>
      <img
        src={imgUrl}
        className={`rounded-2xl cursor-pointer mx-auto ${newStyles}`}
      />
    </div>
  );
}

export default SupperOfferItem;
