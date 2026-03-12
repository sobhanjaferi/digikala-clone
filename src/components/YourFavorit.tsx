import IyourFavoritItem from "@/service/Your-Favorits/types";

function YourFavoritItem({ id, imgUrl, content, price }: IyourFavoritItem) {
  return (
    <div className="min-w-40 lg:w-1/2 h-full flex flex-col justify-between lg:justify-center items-start text-right rounded-xl lg:rounded-none border border-gray-300 lg:p-3 cursor-pointer">
      <img
        className={`w-full h-6/10 lg:h-full lg:${id >= 6 && "hidden"} rounded-xl`}
        src={imgUrl}
      />

      <p className="w-full text-sm lg:hidden h-2/10 p-2">{content}</p>

      <p className="lg:hidden  h-2/10 flex justify-center items-end p-2 mt-3">
        {price}
        <span>تومان</span>
      </p>
    </div>
  );
}

export default YourFavoritItem;
