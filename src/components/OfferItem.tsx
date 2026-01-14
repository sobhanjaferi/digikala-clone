function OfferItem({ imgUrl, content }: { imgUrl: string; content: string }) {
  return (
    <div className="flex flex-col justify-start items-center min-w-20 w-20 h-full cursor-pointer">
      <img
        src={imgUrl}
        alt="OfferImg"
        className="rounded-full w-10 h-10 lg:w-15 lg:h-15"
      />

      <p className="text-center text-[12px] max-w-16 mt-2">{content}</p>
    </div>
  );
}

export default OfferItem;
