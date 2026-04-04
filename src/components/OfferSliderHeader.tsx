// =============== MUI Icons ===============
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

function OfferSliderHeader() {
  return (
    <section className="lg:hidden w-full p-5 flex flex-col justify-between items-end gap-5 text-gray-700">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-5">
          <MenuIcon />

          <ShoppingCartIcon className="rotate-y-180" />

          <SearchIcon />
        </div>

        <Link href="/">
          <CloseIcon />
        </Link>
      </div>

      <p className="w-full flex flex-row-reverse justify-start items-center gap-2 text-gray-600">
        <span className="border-b border-gray-500 p-1">دیجی کالا</span>
        {"<"}
        <span className="border-b border-gray-500 p-1">کالای دیجیتال</span>
        {"<"}
        <span className="border-b border-gray-500 p-1">لپ تاپ</span>
        {"<"}
        <span className="border-b border-gray-500 p-1">لپ تاپ و الترابوک</span>
      </p>
    </section>
  );
}

export default OfferSliderHeader;
