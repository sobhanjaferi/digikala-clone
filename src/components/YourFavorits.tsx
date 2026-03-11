import IyourFavoritItem from "@/service/Your-Favorits/types";
import YourFavoritItem from "./YourFavorit";

function YourFavorits({ data }: { data: IyourFavoritItem[] }) {
  return (
    <div className="flex flex-col justify-between items-center mx-5 mb-10 lg:my-0 lg:mx-2">
      <div className="flex justify-between lg:justify-end items-start w-full">
        <p className="text-gray-700 lg:hidden">{`<`} مشاهده همه</p>

        <div className="flex flex-col justify-between items-end mb-2">
          <h2>جوراب مردانه</h2>

          {data.map((item: IyourFavoritItem) => (
            <p className="text-gray-700 text-sm" key={item.id}>
              {item.title}
            </p>
          ))}
        </div>
      </div>
      <div
        className="w-full h-50 lg:h-70 lg:container lg:mx-auto overflow-auto scrollbar-hide flex justify-start items-center lg:justify-center"
        dir="rtl"
      >
        <div className="gap-2 flex justify-start items-center h-full lg:grid lg:grid-cols-2">
          {data.map((item: IyourFavoritItem) => {
            return <YourFavoritItem {...item} key={item.id} />;
          })}

          {/* <div className="flex justify-start items-center h-full gap-2 lg:hidden"></div> */}
        </div>
      </div>
      <p className="text-blue-600 hidden lg:block mx-auto my-2">{`<`} مشاهده</p>
    </div>
  );
}

export default YourFavorits;
