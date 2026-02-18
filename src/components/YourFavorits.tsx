import YourFavoritItem from "./YourFavorit";

function YourFavorits() {
  return (
    <div className="flex flex-col justify-between items-center mx-5">
      <div className="flex justify-between items-start w-full">
        <p className="text-gray-700">{`<`} مشاهده همه</p>

        <div className="flex flex-col justify-between items-end mb-2">
          <h2>جوراب مردانه</h2>

          <p className="text-gray-700 text-sm">بر اساس سلیقه شما</p>
        </div>
      </div>
      <div
        className="w-full bg-red-500 h-50 lg:container lg:mx-auto overflow-auto scrollbar-hide gap-2 flex justify-start items-center"
        dir="rtl"
      >
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
      </div>
    </div>
  );
}

export default YourFavorits;
