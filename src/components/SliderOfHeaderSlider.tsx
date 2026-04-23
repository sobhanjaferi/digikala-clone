// =============== Import Section ===============
import Image from "next/image";
import { ReactElement } from "react";

function SlideOfHeaderSlider({
  imgAddress,
}: {
  imgAddress: string;
}): ReactElement {
  return (
    <div className={`h-35 sm:h-50 lg:h-100 min-w-full`}>
      <Image
        src={imgAddress}
        alt="slideImg"
        className="w-full h-full rounded-lg xl:rounded-none"
        width={0}
        height={0}
      />
    </div>
  );
}

export default SlideOfHeaderSlider;
