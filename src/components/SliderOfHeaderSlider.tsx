import { IheaderSlider } from "@/service/Header/Header-Slider/types";

function SlideOfHeaderSlider({ imgUrl }: IheaderSlider) {
  return (
    <div className={`h-35 sm:h-50 lg:h-100 min-w-full`}>
      <img
        src={imgUrl}
        alt="slideImg"
        className="w-full h-full rounded-lg xl:rounded-none"
      />
    </div>
  );
}

export default SlideOfHeaderSlider;
