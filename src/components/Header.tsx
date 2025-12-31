import useHeaderOptions from "@/service/headerOptions/endPoint";
import HeaderOption from "./HeaderOption";
import { IheaderOption } from "@/service/headerOptions/types";
import HeaderSearchBar from "./HeaderSearchBar";
import AppContext from "@/context/appContext";

async function Header() {
  const data = await useHeaderOptions();

  return (
    <nav>
      <header
        className="flex justify-start items-center sm:grid sm:grid-cols-6 gap-4 m-4 overflow-auto pb-3"
        dir="rtl"
      >
        {data.map((item: IheaderOption) => (
          <HeaderOption
            key={item.id}
            {...item}
            tailwind="w-22 sm:col-span-1 sm:w-full"
          />
        ))}
      </header>

      <section>
        <AppContext>
          <HeaderSearchBar />
        </AppContext>
      </section>
    </nav>
  );
}

export default Header;
