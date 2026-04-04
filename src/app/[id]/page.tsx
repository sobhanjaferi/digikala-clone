import Header from "@/components/HeaderMobileSlider";
import { IofferSlide } from "@/service/Offer-Slider/types";
import axios from "axios";

// =============== MUI Icons ===============
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Tprops {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

async function Product({ params }: Tprops) {
  const { data } = await axios(
    `http://localhost:8000/OfferSlider/${(await params).id}`,
  );

  data as IofferSlide;

  return (
    <main>
      <header>
        <section className={`hidden lg:block`}>
          <Header />
        </section>

        <section className="lg:hidden w-full p-5 flex flex-col justify-between items-end gap-5 text-gray-700">
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-5">
              <MenuIcon />

              <ShoppingCartIcon className="rotate-y-180" />

              <SearchIcon />
            </div>

            <CloseIcon />
          </div>

          <p className="w-full flex flex-row-reverse justify-start items-center gap-2 text-gray-600">
            <span className="border-b border-gray-500 p-1">دیجی کالا</span>
            {"<"}
            <span className="border-b border-gray-500 p-1">کالای دیجیتال</span>
            {"<"}
            <span className="border-b border-gray-500 p-1">لپ تاپ</span>
            {"<"}
            <span className="border-b border-gray-500 p-1">
              لپ تاپ و الترابوک
            </span>
          </p>
        </section>
      </header>
    </main>
  );
}

export default Product;
