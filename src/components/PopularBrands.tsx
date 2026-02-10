import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PopularBrand from "./PopularBrand";

function PopularBrands() {
  return (
    <div className="w-full lg:container lg:mx-auto mx-5 mt-5 mb-10 flex flex-col justify-end items-end">
      <section className="flex flex-row-reverse mb-5">
        <StarOutlineIcon />

        <h1>محبوب ترین برندها</h1>
      </section>

      <div className="h-42 w-full overflow-auto flex p-5 gap-5" dir="rtl">
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
        <PopularBrand />
      </div>
    </div>
  );
}

export default PopularBrands;
