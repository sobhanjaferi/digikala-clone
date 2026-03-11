function YourFavoritItem({
  imgUrl,
  content,
  price,
}: {
  imgUrl: string;
  content: string;
  price: string;
}) {
  return (
    <div className="min-w-35 lg:w-1/2 h-full  lg:h-full flex flex-col justify-between items-center text-right">
      <img className="w-full h-6/10 lg:h-full" src={imgUrl} />

      <p className="w-full text-sm lg:hidden">{content}</p>

      <p className="lg:hidden">
        {price}
        <span>تومان</span>
      </p>
    </div>
  );
}

export default YourFavoritItem;
