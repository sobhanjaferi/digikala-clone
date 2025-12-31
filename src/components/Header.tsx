import useHeaderOptions from "@/service/headerOptions/hook";
import HeaderOption from "./HeaderOption";
import { IheaderOption } from "@/service/headerOptions/types";

async function Header() {
  const data = await useHeaderOptions();

  return (
    <nav>
      <header
        className="flex justify-start items-center gap-4 m-4 overflow-auto"
        dir="rtl"
      >
        {data.map((item: IheaderOption) => (
          <HeaderOption key={item.id} {...item} />
        ))}
      </header>
    </nav>
  );
}

export default Header;
