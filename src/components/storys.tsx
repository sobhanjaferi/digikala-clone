import useStorys from "@/service/Header/Header-Storys/hook";
import Story from "./story";
import { Istory } from "@/service/Header/Header-Storys/types";

function Storys() {
  const { data = [], isError, isFetching } = useStorys();

  return (
    <div
      className="hidden lg:flex justify-start items-center h-40 my-5 gap-3 lg:container overflow-auto scrollbar-hide m-auto w-7/10"
      dir="rtl"
    >
      {isFetching && (
        <h2 className="m-auto font-bold text-2xl" dir="ltr">
          loading ...
        </h2>
      )}

      {isError && (
        <h2 className="m-auto font-bold text-2xl">
          data not found please reload again
        </h2>
      )}

      {!isFetching &&
        !isError &&
        data.map((item: Istory) => <Story key={item.id} {...item} />)}
    </div>
  );
}

export default Storys;
