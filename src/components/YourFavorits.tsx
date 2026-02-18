import YourFavoritItem from "./YourFavorit";

function YourFavorits() {
  return (
    <div className="flex flex-col justify-between items-center mx-5 lg:mx-2">
      <div className="flex justify-between lg:justify-end items-start w-full">
        <p className="text-gray-700 lg:hidden">{`<`} مشاهده همه</p>

        <div className="flex flex-col justify-between items-end mb-2">
          <h2>جوراب مردانه</h2>

          <p className="text-gray-700 text-sm">بر اساس سلیقه شما</p>
        </div>
      </div>
      <div
        className="w-full h-50 lg:h-70 lg:container lg:mx-auto overflow-auto scrollbar-hide gap-2 flex justify-start items-center lg:grid lg:grid-cols-2"
        dir="rtl"
      >
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <YourFavoritItem />
        <div className="gap-2 flex justify-start items-center h-full lg:hidden">
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
      <p className="text-blue-600 hidden lg:block mx-auto my-2">{`<`} مشاهده</p>
    </div>
  );
}

export default YourFavorits;
