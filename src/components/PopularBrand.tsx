import IpopularBrand from "@/service/Popular-Brands/types";

function PopularBrand({ imgUrl, title }: IpopularBrand) {
  return (
    <div className="min-w-25 lg:min-w-30 lg:border-0 border border-gray-400 h-full rounded-lg flex flex-col justify-between items-center p-2">
      <img src={imgUrl} className="rounded-sm w-full h-8/10 lg:h-full" />

      <h2 className="h-2/10 lg:hidden">{title}</h2>
    </div>
  );
}

export default PopularBrand;
