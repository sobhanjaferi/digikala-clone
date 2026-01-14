import useStorys from "@/service/Header/Header-Storys/hook";
import Story from "./story";
import { Istory } from "@/service/Header/Header-Storys/types";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Storys() {
  const { data = [], isError, isFetching } = useStorys();

  return (
    <div className="hidden lg:flex justify-between items-center relative">
      <section className="py-2 pr-1 pl-3.5 bg-white rounded-full text-gray-700 cursor-pointer active:opacity-40 Shadow absolute top-15 left-50">
        <ArrowBackIosIcon />
      </section>

      <div
        className="flex justify-start items-center h-40 my-5 gap-1 lg:container overflow-auto scrollbar-hide m-auto w-7/10"
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

      <section className="py-2 pl-2.5 pr-2.25 bg-white rounded-full text-gray-700 cursor-pointer active:opacity-40 Shadow absolute top-15 right-50">
        <ArrowForwardIosIcon />
      </section>
    </div>
  );
}

export default Storys;
