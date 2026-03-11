import IyourFavoritItem from "@/service/Your-Favorits/types";

function YourFavoritItem({ id, imgUrl, content, price }: IyourFavoritItem) {
  return (
    <div className="min-w-35 lg:w-1/2 h-full flex flex-col justify-between lg:justify-center items-center text-right">
      <img
        className={`w-full h-6/10 lg:h-full lg:${id >= 5 && "hidden"}`}
        src={imgUrl}
      />

      <p className="w-full text-sm lg:hidden">{content}</p>

      <p className="lg:hidden">
        {price}
        <span>تومان</span>
      </p>
    </div>
  );
}

export default YourFavoritItem;
