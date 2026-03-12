import IyourFavoritItem from "@/service/Your-Favorits/types";
import YourFavoritItem from "./YourFavorit";

function YourFavorits({ data }: { data: IyourFavoritItem[] }) {
  return (
    <div
      className="flex flex-col justify-between items-center mx-5 mb-10 lg:my-0 lg:mx-2"
      dir="ltr"
    >
      <div className="flex justify-between lg:justify-end items-start w-full">
        <p className="text-gray-700 lg:hidden">{`<`} مشاهده همه</p>

        <div className="flex flex-col justify-between items-end mb-2">
          {data.map((item: IyourFavoritItem) => (
            <h2 key={item.id}>{item.title}</h2>
          ))}

          <p className="text-gray-700 text-sm">بر اساس سلیقه شما</p>
        </div>
      </div>
      <div
        className="w-full h-55 lg:h-70 lg:container lg:mx-auto overflow-auto lg:overflow-hidden scrollbar-hide flex justify-start items-center lg:justify-center"
        dir="rtl"
      >
        <div className="gap-1 flex justify-start items-center h-full lg:grid lg:grid-cols-2">
          {data.map((item: IyourFavoritItem) => {
            if (!item.title) {
              return <YourFavoritItem {...item} key={item.id} />;
            }
          })}
        </div>
      </div>
      <p className="text-blue-600 hidden lg:block mx-auto my-2">{`<`} مشاهده</p>
    </div>
  );
}

export default YourFavorits;
